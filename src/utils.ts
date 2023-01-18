import { GM_xmlhttpRequest, GM_setValue, GM_getValue } from '$';
import { SettingType } from './types';

export const waitTime = (t?: number) => {
    t = t || parseInt(getSetting().interval) || 300;
    return new Promise(r => setTimeout(r, t));
};

export const updateInterval = (t: string) => {
    t = t.trim()
    let t2 = parseInt(t);
    if(t2 !== t2) return
    if (t2 < 300){ t2 = 100 }
    const t3 = t2.toString();
    saveSetting({
        ...getSetting(),
        interval: t3
    })
};


export const xhrGet = (url: string, headers?: any) => {
    return new Promise((resolve, reject) => {
        let requestObj = GM_xmlhttpRequest({
            method: 'GET',
            url,
            headers,
            responseType: 'json',
            onload: (res: any) => {
                if (res.status === 204) {
                    requestObj.abort();
                }
                resolve(res.response || res.responseText);
            },
            onerror: (err: any) => {
                reject(err);
            },
        });
    });
};

function getCookieFromHeader(params: string) {
    var setCookieStrings =
        params
            .match(/^.*$/gm)
            ?.filter(c => c.toLowerCase().startsWith('set-cookie')) || [];
    for (let index = 0; index < setCookieStrings.length; index++) {
        const setCookieStr = setCookieStrings[index].replace(
            /^set-cookie:\s+/gi,
            ''
        );
        const cookies = setCookieStr
            .replace(/expires=(.*?)GMT/g, '')
            .split(', ');
        for (let j = 0; j < cookies.length; j++) {
            const cookieStr = cookies[j];
            if (cookieStr.toLowerCase().startsWith('acw_tc=')) {
                return cookieStr.replace(/\s?;.*$/, '');
            }
        }
    }
}

export const xhrPost = <T2 = unknown>(
    url: string,
    data: any,
    headers: any
): Promise<T2> => {
    if (Object.prototype.toString.call(data) === '[object Object]') {
        data = JSON.stringify(data);
    }
    return new Promise<T2>((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'POST',
            url,
            headers,
            data,
            responseType: 'json',
            onload: res => {
                var cookie = getCookieFromHeader(res?.responseHeaders || '');
                var response: any = res.response || res.responseText;
                if (cookie) {
                    GM_setValue('115cookie', cookie);
                    try {
                        response.cookie = cookie;
                    } catch (error) {}
                } else {
                    response.cookie = GM_getValue('115cookie', '');
                }
                if (res.status === 200) {
                    resolve(response as T2);
                } else {
                    reject(res);
                }
            },
            onerror: err => {
                reject(err);
            },
        });
    });
};

export const xhr115 = () => {};

export const saveSetting = (data: SettingType) => {
    GM_setValue('115aria2_config', JSON.stringify(data));
};

export const defaultSetting = {
    url: 'http://127.0.0.1:6800/jsonrpc',
    token: '123456',
    dir: '',
    check: false,
    checkMin: '0',
    interval: '300',
};

type settingType = typeof defaultSetting;
type settingKeyType = keyof settingType;

export const getSetting = (): settingType => {
    try {
        var data = JSON.parse(GM_getValue('115aria2_config', ''));
        (Object.keys(defaultSetting) as settingKeyType[]).forEach(
            (o: settingKeyType) => {
                if (data[o] == null) {
                    data[o] = defaultSetting[o];
                }
            }
        );
        return data;
    } catch (error) {
        return defaultSetting;
    }
};

export function uuid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
        }
    );
    return uuid;
}

export class defer<T = void> {

    resolve: ((value: T) => void) | null = null;
    reject: ((value: T) => void) | null = null;
    id: string;
    promise: Promise<T>;

    constructor() {
        this.id = uuid();
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        Object.freeze(this);
    }
}
