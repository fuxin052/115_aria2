import { useCallback, useState } from 'preact/hooks';
import './app.css';
import { Pan115 } from './main';
import { Message } from './message';
import { Setting } from './setting';
import { getSetting } from './utils';

type Props = {
    pan115: Pan115;
};

export function App(props: Props) {
    const { pan115 } = props;
    const [setting, setSetting] = useState(false);
    const [messageVisible, setMessageVisible] = useState(false);
    const click = useCallback(async (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        const aria2url = getSetting().url;
        if (!aria2url) return setSetting(true);
        const { selectedFile, selectedFolder } = pan115.selectFileList();
        if (selectedFile.length == 0 && selectedFolder.length == 0) return;
        setMessageVisible(true)
    }, []);

    return (
        <>
            <button
                onClick={click}
                onContextMenu={useCallback((e: any) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setSetting(true);
                }, [])}
                className="bdp-button button"
                title="鼠标左键下载文件, 右键打开设置"
            >
                <span className="bdp-button-text">ARIA2</span>
            </button>
            <Setting
                visible={setting}
                onClose={() => {
                    setSetting(false);
                }}
            />
            {messageVisible && <Message
                visible={messageVisible}
                pan115={pan115}
                onClose={() => {
                    setMessageVisible(false)
                }}
            />}
        </>
    );
}
