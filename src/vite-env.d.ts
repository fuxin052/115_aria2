/// <reference types="vite/client" />

declare interface Window {
    SHAREPAGETYPE: string;
    require: any;
    GM_cookie: any;
    locals: any;
    JSEncrypt: any;
    secret: any;
}

declare interface Element {
    __vue__: any;
}

declare module 'jsencrypt' {
    export default _default;
}

declare module '$' {
    export * from 'vite-plugin-monkey/dist/client';
    declare const GM_removeValueChangeListener:any
}
