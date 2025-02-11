---
sidebar_position: 1
title: 如何集成
---

## 准备工作

确认使用场景，在无法使用chrome浏览器进行预览和调试时，请使用代码集成版本。在可以使用chrome浏览器并安装插件时，请尽量使用chrome插件版本，以确保调试和数据校验的准确性。

## 开始集成


### 浏览器插件版集成

GioKit Chrome浏览器插件版本下载：[https://assets.giocdn.com/sdk/extensions/v2/gio-circle-collection.zip](https://assets.giocdn.com/sdk/extensions/v2/gio-circle-collection.zip)

1. 解压压缩包至本地一个能长时间保存的文件夹。（不建议放在桌面、下载等目录）

2. 打开谷歌浏览器，在地址栏输入 **`chrome://extensions/`**，回车。

3. 打开 **`开发者模式`** 开关。

4. 点击 **`加载已解压的扩展程序`** 按钮，选择您本地已解压的插件文件夹。

5. 插件安装完成后，在浏览器右上角的 **`扩展程序`** 中找到插件，点亮 📌 图标后即可在浏览器菜单栏上打开使用。

**<font color="#FC5F3A">注意：</font>**

**1）插件版本依赖的浏览器版本较高，如果遇到无法打开划框等异常情况，请尝试升级谷歌浏览器。**

**2）允许校验的地址为 第一次打开划框时所在的一级域下的子域名。** 例如您首次打开划框时的地址是 a.growingio.com，那么您允许校验的地址必须是 a.growingio.com 或 b.growingio.com 等。


### 代码版集成

复制以下脚本，并将其粘贴到 `<head></head>` 标签的<b> 顶部 </b>，实例化即可。

```html
<script src="https://assets.giocdn.com/sdk/webjs/giokit.min.js"></script>
<script type="text/javascript">
  var gioKit = new GioKit();
</script>
```
集成后在站点页面右下角出现圆形橙色`G`图标即说明集成成功。

GioKit 代码集成版本下载：[https://assets.giocdn.com/sdk/webjs/giokit.min.js](https://assets.giocdn.com/sdk/webjs/giokit.min.js)

**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**


**<font color="#FC5F3A">注意：</font>**

**1）GioKit 应尽早完成集成并实例化，请将采集 SDK 的集成代码置于 GioKit 实例化语句之后。否则可能无法在 GioKit 日志中查看到 SDK 的初始化信息。**

**2）如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改上述集成代码中的 CDN 地址为您本地的相对地址。**

**3）GioKit 默认使用 umd 格式进行打包，es 格式暂不支持。**

**4）WebJS GioKit只是辅助您开发和高效开发校验埋点等Gio事件的工具，请在正式上线时移除它！**
