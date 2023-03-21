import { FileObjResolveType, FileObjType, FolderObjType } from './types';
import EventEmitter from 'eventemitter3';
import { defer, getUA, waitTime, xhrGet, xhrPost } from './utils';
import { secret } from './secret';

export class Resolve extends EventEmitter {
    fileList: FileObjType[] = [];
    folderList: FolderObjType[] = [];

    resolvedList: FileObjResolveType[] = [];
    failList: FileObjType[] = [];

    execPromise: defer | null = null;

    constructor(fileList: FileObjType[], folderList: FolderObjType[]) {
        super();
        this.fileList = fileList;
        this.folderList = folderList;
    }
    immediately() {
        this.execPromise?.resolve?.();
    }
    async start(wait = false) {
        if (this.fileList.length === 0 && this.folderList.length === 0) {
            this.emit('end');
            return;
        }
        if (wait) {
            this.emit('waitStart');
            this.execPromise = new defer();
            await Promise.race([this.execPromise.promise, waitTime()]);
            this.execPromise = null;
        }
        if (this.folderList.length > 0) {
            await this._resolveFolderList();
        } else if (this.fileList.length > 0) {
            await this._resolveFileList();
        }
        this.start(true);
    }

    async _resolveFileList() {
        this.fileList.sort((a, v) => a.fileSize - v.fileSize);
        const item = this.fileList.shift();

        if (!item) return;
        this.emit('fileStart', item);
        const pickcode = item.pick_code;
        const now = Date.now();
        const timestamp = Math.floor(now / 1000);

        const { data, key } = secret.encode(
            JSON.stringify({ pickcode }),
            timestamp
        );

        return xhrPost<{
            data: string;
            errno: number;
            msg: string;
            state: boolean;
            cookie?: string;
        }>(
            `https://proapi.115.com/app/chrome/downurl?t=${timestamp}`,
            `data=${encodeURIComponent(data)}`,
            {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': getUA(),
            }
        )
            .then(json => {
                if (json.state) {
                    var str = secret.decode(json.data, key);
                    const result = JSON.parse(str);
                    const data: any = Object.values(result).pop();
                    if (data && data.url.url) {
                        const resolveItem: FileObjResolveType = {
                            ...item,
                            fileName: item.fileName
                                .replace(/\\|\/|:|\*|\?|"|<|>|\|/g, '_')
                                .trim(),
                            file_url: data.url.url,
                            file_size: parseInt(data.file_size),
                            cookie: json.cookie,
                        };
                        this.resolvedList.push(resolveItem);
                        this.emit('update', {
                            type: 'file-success',
                            item: resolveItem,
                            file: this.fileList.length,
                            fail: this.failList.length,
                            folder: this.folderList.length,
                            resolved: this.resolvedList.length,
                        });
                    } else {
                        console.log('获取下载地址失败');
                        console.log(result);
                        throw new Error('返回错误');
                    }
                } else {
                    console.log('获取下载地址失败');
                    console.log(json);
                    throw new Error('请求错误');
                }
            })
            .catch(() => {
                console.log(item.fileName, item.tryTimes);
                if (item.tryTimes >= 3) {
                    this.failList.push({ ...item });
                } else {
                    this.fileList.push({
                        ...item,
                        tryTimes: item.tryTimes + 1,
                    });
                }
                this.emit('update', {
                    type: 'file-failed',
                    item,
                    file: this.fileList.length,
                    fail: this.failList.length,
                    folder: this.folderList.length,
                    resolved: this.resolvedList.length,
                });
            });
    }

    async _resolveFolderList() {
        const waitItem = this.folderList.shift();
        if (!waitItem) return;
        this.emit('folderStart', waitItem);
        var limit = 1000;
        const fetchList = (page: number = 0) => {
            return xhrGet(
                `https://webapi.115.com/files?aid=1&limit=${limit}&offset=${
                    page * limit
                }&show_dir=1&cid=${waitItem.cate_id}`,
                {}
            );
        };
        let page = 0;
        while (true) {
            const data: any = await fetchList(page);
            data.data.forEach((item: any) => {
                let _folderName = waitItem.folderName;
                _folderName = _folderName
                    .replace(/\\|\/|:|\*|\?|"|<|>|\|/g, '_')
                    .trim();
                const parent = waitItem.parent
                    ? `${waitItem.parent}/${_folderName}`
                    : _folderName;
                if (!item.sha) {
                    this.folderList.push({
                        cate_id: item.cid,
                        isdir: true,
                        parent,
                        folderName: item.n,
                    });
                } else {
                    this.fileList.push({
                        parent,
                        isdir: false,
                        sha1: item.sha,
                        pick_code: item.pc,
                        fileName: item.n,
                        fileSize: item.s,
                        tryTimes: 0,
                    });
                }
            });
            if (data.count > (page + 1) * limit) {
                page = page + 1;
                await waitTime();
            } else {
                break;
            }
        }

        this.emit('update', {
            type: 'folder-success',
            item: waitItem,
            file: this.fileList.length,
            fail: this.failList.length,
            folder: this.folderList.length,
            resolved: this.resolvedList.length,
        });
    }

    redo() {
        this.fileList = this.failList.map(s => ({ ...s, tryTimes: 0 }));
        this.failList = [];
        this.start();
    }
}
