import { render } from 'preact';
import { App } from './app';
import './index.css';
import { FileObjType, FolderObjType } from './types';

/** 入口方法, 并从页面获取数据供后面使用 */
export class Pan115 {
    constructor() {
        this._initUi();
    }

    /** 获取已选择的文件 */
    selectFileList() {
        const list = document.querySelectorAll('li[rel="item"].selected');
        return this._selectFileList(list);
    }

    private _selectFileList(list: NodeListOf<Element>) {
        const selectedFile: FileObjType[] = [];
        const selectedFolder: FolderObjType[] = [];
        Array.from(list).forEach(item => {
            const type = item.getAttribute('file_type');
            // file
            if (type === '1') {
                selectedFile.push({
                    isdir: false,
                    sha1: item.getAttribute('sha1')!,
                    pick_code: item.getAttribute('pick_code')!,
                    parent: '',
                    fileName: item.getAttribute('title')!,
                    fileSize: Number(item.getAttribute('file_size')) || 0,
                    tryTimes: 0,
                });
            }
            // fold
            if (type === '0') {
                selectedFolder.push({
                    isdir: true,
                    cate_id: item.getAttribute('cate_id')!,
                    parent: '',
                    folderName: item.getAttribute('title')!,
                });
            }
        });
        return {
            selectedFile,
            selectedFolder,
        };
    }

    async fetchFolder(folderItem: FolderObjType) {
        var result:any = [];

        return result;
    }

    private async _initUi() {
        var select = '#js_top_panel_box';
        let $toolWrap = document.querySelector(select);
        while (!$toolWrap) {
            await new Promise(r => setTimeout(r, 20));
            $toolWrap = document.querySelector(select);
        }
        render(<App pan115={this} />, $toolWrap);
    }
}

new Pan115();
