import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
    // build: {
    //     minify: true,
    // },
    plugins: [
        preact(),
        monkey({
            entry: 'src/main.tsx',
            userscript: {
                icon: 'https://115.com/web_icon.jpg',
                namespace: '115pan_aria2',
                grant: [
                    'GM.xmlHttpRequest',
                    'GM.setValue',
                    'GM.getValue',
                    'unsafeWindow',
                ],
                match: ['*://115.com/?ct=file*'],
                connect: ['115.com', '192.168.50.44'],
                author: 'f',
                description: '115文件导出到 Aria2',
                require: [
                    // 'http://127.0.0.1:8080/secret.js',
                    // 'https://raw.githubusercontent.com/tces1/Aria2-Helper-for-115/main/jsencrypt.js',
                ],
                'run-at': 'document-end',
            },

            // build: {
            //     externalGlobals: {
            //         JSEncrypt: [
            //             'JSEncrypt',
            //             // 'https://raw.githubusercontent.com/tces1/Aria2-Helper-for-115/main/jsencrypt.js',
            //             'https://cdn.jsdelivr.net/npm/jsencrypt@2.3.0/bin/jsencrypt.min.js',
            //         ],
            //     },
            // },
        }),
    ],
});
