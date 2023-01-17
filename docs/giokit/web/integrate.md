---
sidebar_position: 1
title: 如何集成
---

## 准备工作

:::caution 注意
WebJS GioKit 仅支持 3.8.0 以上版本的 SDK，其他版本 SDK 接入可能会遇到无法使用或 SDK 报错的问题。
:::

请首先确认您的采集 SDK 版本，需>=3.8.0（正式版，非 RC 版）才能支持。如您集成低版本的 SDK，强烈建议您对 SDK 升级，后续 WebJS SDK 只会在 3.8 版本进行功能迭代，3.3 版本仅限重大问题修复。

## 开始集成

复制以下脚本，并将其粘贴到 `<head></head>` 标签的<b> 顶部 </b>，实例化即可。

```html
<script src="https://assets.giocdn.com/sdk/webjs/giokit.min.js"></script>
<script type="text/javascript">
  var gioKit = new GioKit();
</script>
```

集成后在站点页面右下角出现圆形橙色`G`图标即说明集成成功。

**<font color="#FC5F3A">注意：</font>**

**1）GioKit 应尽早完成集成并实例化，请将采集 SDK 的集成代码置于 GioKit 实例化语句之后。否则可能无法在 GioKit 日志中查看到 SDK 的初始化信息。**

**3）GioKit 默认使用 umd 格式进行打包，es 格式暂不支持。**

**2）如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改上述集成代码中的 CDN 地址为您本地的相对地址。**

WebJS GioKit 下载：<https://assets.giocdn.com/sdk/webjs/giokit.min.js>

**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**
