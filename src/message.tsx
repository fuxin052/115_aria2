import { FunctionComponent } from 'preact';
import { useState, useCallback, useEffect, useRef } from 'preact/hooks';
import { DownloadTool } from './download';
import { Pan115 } from './main';
import Modal from './modal';
import { Resolve } from './resolve';
import { FileObjResolveType, FileObjType, FolderObjType } from './types';
import { getSetting, updateInterval } from './utils';
import { GM_addValueChangeListener, GM_removeValueChangeListener } from '$';


type Props = {
    visible: boolean;
    onClose: any;
    pan115: Pan115
};

export type messageType = {
    file: number;
    folder: number;
    resolved: number;
    a_ok: number;
    a_fail: number;
    fail: number;
    running: boolean;
};

export const Message: FunctionComponent<Props> = ({ pan115, visible, onClose }) => {
    const { selectedFile, selectedFolder } = pan115.selectFileList();

    const [interval_, setInterval_] = useState(() => parseInt(getSetting().interval) || 300);
    const [aFail, setAFail] = useState(0);
    const [aOk, setAOk] = useState(0);
    const [file, setFile] = useState(() => selectedFile.length);
    const [folder, setFolder] = useState(() => selectedFolder.length);
    const [fail, setFail] = useState(0);
    const [resolved, setResolved] = useState(0);
    const [running, setRunning] = useState(true);
    const [log, setLog] = useState(<></>);
    const [waiting, setWaiting] = useState(false);
    const resolveRef = useRef<Resolve>()

    useEffect(() => {
        const listenerId = GM_addValueChangeListener('115aria2_config', () => {
            setInterval_(() => parseInt(getSetting().interval) || 300)
        })
        return ()=>{
            (GM_removeValueChangeListener as any)(listenerId)
        }
    }, [])
    useEffect(() => {
        const downloadTool = new DownloadTool();
        const resolve = new Resolve(selectedFile, selectedFolder);
        resolveRef.current = resolve;
        resolve.on('update', function (e) {
            var item: FileObjResolveType | null = e.item;
            if (item !== null && e.type === 'file-success') {
                downloadTool
                    .sendToAria2(item)
                    .then(r => {
                        setAOk(a => a + 1)
                    })
                    .catch(e => {
                        console.log('导入到aria2失败');
                        console.log(item);
                        setAFail(a => a + 1)
                    });
            } else if (e.type === 'folder-success') {

            } else if (e.type === 'file-failed') {

            }
            setFile(e.file)
            setFolder(e.folder)
            setRunning(true)
            setFail(e.fail)
            setResolved(e.resolved)
        });
        resolve.on('end', function () {
            setRunning(false)
        });

        resolve.on('waitStart', function () {
            setWaiting(true)
        })
        resolve.on('folderStart', function (item: FolderObjType) {
            setWaiting(false)
            setLog(<span style={{ color: 'green' }}>{item.folderName}</span>)
        })
        resolve.on('fileStart', function (item: FileObjType) {
            setWaiting(false)
            setLog(<span style={{ color: 'blue' }}>{item.fileName}</span>)
        })
        resolve.start();
    }, [])


    const redo = () => {
        setAFail(0)
        setAOk(0)
        setFile(() => resolveRef.current?.failList.length || 0)
        setFolder(0)
        setFail(0)
        setResolved(0)
        setRunning(true)
        setLog(<></>)
        setWaiting(false)
        resolveRef.current?.redo()
    }

    const resolveObj = resolveRef.current;
    if (resolveObj == null) return null;

    return (
        <Modal
            width={600}
            hideClose
            isOpen={visible}
            onCloseClick={onClose}
        >
            <div style={{ fontSize: 14 }}>
                <div className="bdp-row">
                    {
                        !running ? <div>全部获取完成</div> :
                            folder === 0 ?
                                <div>2. 正在解析文件 剩余{file}</div> :
                                <div>1. 正在解析文件夹 剩余{folder}</div>
                    }
                    {
                        running ? <div style={{ whiteSpace: "nowrap" }}><button onClick={() => resolveObj.immediately()} disabled={!waiting}>立即</button></div> : null
                    }
                </div>
                <div className="bdp-row">
                    {
                        running ?
                            <>
                                <div style={{ color: waiting ? '' : 'red' }}>{log}{waiting ? <WaitTime /> : '获取中'}</div>
                            </> :
                            null
                    }
                </div>
                {running ? <div>修改等待时间<input type="number" id="115-aria2-change-interval" /><button onClick={(e) => {
                    updateInterval(((e.target as any).parentElement.children[0] as HTMLInputElement)?.value || '')
                }}>ok</button>当前等待时间<span>{interval_}</span> </div> : null}
                <div className="bdp-row">
                    <div>已导入到aria2</div>
                    <div style={{ display: 'flex' }}>
                        {resolved}/
                        <span style={{ color: 'green' }}>{aOk}</span>/
                        <span style={{ color: 'red' }}>{aFail}</span>
                    </div>
                </div>
                <div hidden={fail === 0} className="failList">
                    {resolveObj.failList.map(s => (
                        <div key={s.pick_code + '~' + s.fileName}>
                            {s.fileName}
                        </div>
                    ))}
                </div>

                <div
                    style={{ color: 'red', marginTop: 5 }}
                    hidden={aFail == 0}
                >
                    有文件导入到aria2失败, 请检查设置
                </div>

                {running ? null : (
                    <div className="bdp-buttons">
                        <button
                            className="bdp-buttons-close"
                            onClick={onClose}
                            style={{
                                marginTop: 5,
                                border: 0,
                            }}
                        >
                            关闭
                        </button>
                        <button
                            className="bdp-buttons-redo"
                            hidden={fail === 0}
                            style={{
                                color: '#fff',
                                marginTop: 5,
                                width: '100%',
                                border: 0,
                                background: '#09aaff',
                            }}
                            onClick={redo}
                        >
                            重新下载失败文件
                        </button>
                    </div>
                )}
            </div>
        </Modal>
    );
};

function WaitTime() {
    const [timeO] = useState(() => parseInt(getSetting().interval) || 300);
    const [time, setTime] = useState(() => parseInt(getSetting().interval) || 300);
    const [now] = useState(Date.now);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(() => timeO + now - Date.now())
        }, 50)
        return () => clearInterval(timer)
    }, [])
    return <>完成,等待{(time / 1000 || 0).toFixed(1)}秒</>
}