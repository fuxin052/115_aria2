# 115网盘导出下载链接到aria2油猴脚本

[![HitCount](https://hits.dwyl.com/fuxin052/115_aria2.svg?style=flat-square)](http://hits.dwyl.com/fuxin052/115_aria2)

**安装地址 https://github.com/fuxin052/115_aria2/raw/main/dist/115pan_aria2.user.js**

## 设置：鼠标右键点击按钮可以打开设置界面

|字段|说明|
|:----|:----|
|aria2地址|自己的aria2服务器地址|
|aria2token|自己的aria2服务器token，若没有设置token则留空|
|aria2下载目录|指定115文件下载到的目录，留空时继承aria2里全局设置的目录|
|文件校验| 下载完成后使用115提供的sha1来校验文件完整性，可根据文件大小选择性开启|
|请求间隔|调用两次115接口之间的时间间隔，可以在导出过程中修改|
|自定义UA|调用115接口时附带的浏览器标识(UserAgent)，不知道是什么意思的请使用默认值|
## 常见问题

### 下载的文件名和115上不一样

脚本会将windows文件名不支持的字符(`\/:*?"<>|`)替换为下划线(`_`), 再导出下载, 不然对于windows电脑会下载失败(aria2创建文件会失败), 暂无配置取消此项改动, 如果有需要可自行修改代码

### 导入到aria2失败

如果出现以下提示, 请选择 `总是允许` 即可
![image](https://user-images.githubusercontent.com/46592199/213325190-0b1df296-a53d-4dc2-9411-cdaeba670576.png)

#### 如果没有出现上面弹框，仍然导入到aria2失败
可以将第十行的
```
// @connect      192.168.50.44
```
里面的`192.168.50.44`改为自己的aria2服务器域名或ip

> 举个例子:<br/>
> 如果你的aria2地址为`http://127.0.0.1:6800/jsonrpc`, 那么这一行改为 `// @connect      127.0.0.1`<br/>
> 如果你的aria2地址为`http://baidu.com:6800/jsonrpc`, 那么这一行改为 `// @connect      baidu.com`

![image](https://user-images.githubusercontent.com/46592199/213326074-0fc06090-888d-4d27-9158-bb6cba4cfb39.png)




