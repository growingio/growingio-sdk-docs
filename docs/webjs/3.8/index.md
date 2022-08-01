---
slug: /webjs/3.8
title: Web JS SDK（3.8）
---

***Tips：3.8文档中出现的“旧版本”特指 `3.8.0` 以下的旧架构版本。***

## 使用前须知

目前WebJS SDK3.8还在公测阶段，发布的均为RC版本，建议在测试环境充分测试并观察一段时间使用，谨慎上生产。

由于目前3.8版本还在公测阶段，更新可能会较为频繁，如果您使用了3.8版本，请注意关注更新信息及时升级。

## 简介

WebJS SDK3.8目前具备以下特性：

- 埋点能力，开发同学可调用API主动采集自定义事件。
- 插件无埋点能力，自动采集用户行为事件，可通过开关和插件控制。
- 插件半自动埋点浏览能力。
- 可依据使用场景自由搭配SDK插件。
- 支持CDN和npm集成。
- 支持自定义插件开发。（实验性功能，暂未开放）

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11 / Edge > 15 major / Edge IE兼容模式| > 54 major | > 51 major | > 10 major | > 38 major | > 10 major |
<br/><br/>

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
