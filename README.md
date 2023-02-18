# 115_aria2

115网盘导出下载链接到aria2

https://github.com/fuxin052/115_aria2/raw/main/dist/115pan_aria2.user.js


## 鼠标右键点击按钮可以打开设置界面

如果出现以下提示, 请选择 `总是允许` 即可
![image](https://user-images.githubusercontent.com/46592199/213325190-0b1df296-a53d-4dc2-9411-cdaeba670576.png)

## 如果没有出现上面弹框，仍然导入到aria2失败
可以将第十行的
```
// @connect      192.168.50.44
```
里面的`192.168.50.44`改为自己的aria2服务器域名或ip

> 举个例子:<br/>
> 如果你的aria2地址为`http://127.0.0.1:6800/jsonrpc`, 那么这一行改为 `// @connect      127.0.0.1`<br/>
> 如果你的aria2地址为`http://baidu.com:6800/jsonrpc`, 那么这一行改为 `// @connect      baidu.com`

![image](https://user-images.githubusercontent.com/46592199/213326074-0fc06090-888d-4d27-9158-bb6cba4cfb39.png)
