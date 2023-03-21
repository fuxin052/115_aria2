// import { BaiduPan } from './main';
import { FileObjResolveType } from './types';
import { getSetting, xhrPost, getUA } from './utils';

export class DownloadTool {
    domain: string;
    token: string;
    dir: string;
    check: boolean;
    checkMin: number;

    constructor() {
        const setting = getSetting();
        this.domain = setting.url;
        this.token = setting.token;
        this.dir = setting.dir;
        this.check = setting.check;
        this.checkMin = parseInt(setting.checkMin) || 0;
    }

    async sendToAria2(item: FileObjResolveType) {
        var _filename = item.fileName;
        var filename = item.parent ? `${item.parent}/${_filename}` : _filename;
        const other: any = {
            dir: this.dir || undefined,
            out: filename,
            header: [
                `User-Agent: ${getUA()}`,
                `Referer: https://115.com/`,
            ],
        };
        let rpcData: any = {
            id: item.sha1 || String(Date.now()),
            jsonrpc: '2.0',
            method: 'aria2.addUri',
            params: [[item.file_url], other],
        };
        if (this.check && item.file_size >= this.checkMin * 1024 * 1024) {
            other.checksum = `sha-1=${item.sha1}`;
        }
        if (this.token) {
            rpcData.params.unshift(`token:${this.token}`);
        }
        if (item.cookie){
            other.header.push(`Cookie: ${item.cookie}`)
        }
        return xhrPost(this.domain, rpcData, {});
    }
}
