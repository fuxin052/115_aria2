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
                connect: ['115.com', '192.168.50.44', '*'],
                author: 'f',
                description: '115文件导出到 Aria2',
                require: [],
                'run-at': 'document-end',
            },
        }),
    ],
});
