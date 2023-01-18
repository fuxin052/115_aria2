import { FunctionComponent } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import Modal from './modal';
import { defaultSetting, getSetting, saveSetting } from './utils';

type Props = {
    visible: boolean;
    onClose: any;
};

export const Setting: FunctionComponent<Props> = (props: Props) => {
    const [data, setData] = useState(getSetting);

    const change = (e: any) => {
        const { name, value, checked } = e.target;
        const newValue = name === 'check' ? checked : value;
        setData(o => ({ ...o, [name]: newValue }));
    };

    const save = () => {
        const newData = { ...data };
        newData.interval = newData.interval || '300';
        newData.checkMin = newData.checkMin || '0';
        saveSetting(newData);
        props.onClose()
    };

    return (
        <Modal isOpen={props.visible} onCloseClick={props.onClose}>
            <table className="bdp-setting">
                <tr>
                    <td>aria2地址</td>
                    <td>
                        <input
                            type="text"
                            name="url"
                            value={data.url}
                            onChange={change}
                            placeholder={defaultSetting.url}
                        />
                    </td>
                </tr>
                <tr>
                    <td>aria2token</td>
                    <td>
                        <input
                            type="text"
                            name="token"
                            value={data.token}
                            onChange={change}
                        />
                    </td>
                </tr>
                <tr>
                    <td>aria2下载目录</td>
                    <td>
                        <input
                            type="text"
                            name="dir"
                            value={data.dir}
                            onChange={change}
                            placeholder="默认值为空, 代表aria2配置文件里的下载目录"
                        />
                    </td>
                </tr>
                <tr>
                    <td>文件校验</td>
                    <td>
                        <input
                            type="checkbox"
                            name="check"
                            checked={data.check}
                            onChange={change}
                        />
                        当文件大小≥
                        <input
                            type="number"
                            name="checkMin"
                            value={data.checkMin}
                            onChange={change}
                            placeholder={defaultSetting.checkMin}
                        />
                        Mb
                    </td>
                </tr>
                <tr>
                    <td>请求间隔</td>
                    <td>
                        <input
                            type="number"
                            name="interval"
                            value={data.interval}
                            onChange={change}
                            placeholder={defaultSetting.interval}
                        />
                        ms
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={props.onClose}>取消</button>
                    </td>
                    <td>
                        <button onClick={save}>保存</button>
                    </td>
                </tr>
            </table>
        </Modal>
    );
};
