import { defaultSetting } from "./constant";

export interface FileObjType {
    isdir: false;
    sha1: string;
    pick_code: string;
    fileName: string;
    fileSize: number;
    parent: string;
    tryTimes: number;
}
export interface FolderObjType {
    isdir: true;
    cate_id: string;
    folderName: string
    parent: string;
}

export interface FileObjResolveType extends FileObjType {
    file_url: string;
    file_size: number
    cookie?: string
}


export type SettingType = Partial<typeof defaultSetting>
export type SettingKeyType = keyof SettingType;