---
title: 自定义SDK
sidebar_position: 2
---

在Web JS SDK中可以根据所需，自定义SDK拥有的功能。

## Web JS SDK内部逻辑

新版本的Web JS SDK对整个内部结构进行了重新划分，整体结构变得更加清晰明朗。同时引入了插件的设计，也使其扩展性更强。内部架构图如下。
![Web JS SDK架构图](/img/web-sdk-design.png)

图中所示的基础组件和工具组件是核心的组件，一般不建议替换。如需扩展新功能可以通过自定义功能插件的新式实现。插件是穿插在SDK的初始化与事件流中的。事件流可以理解为一个事件在sdk核心组件中的传递过程，按照消息的发出，事件的合成，数据的压缩，请求的发送几个过程传递。

![Web SDK Plugin](/img/web-sdk-plugin-flow.png)

## 按需载入功能

通过[内置插件说明](/docs/webjs/plugins)可了解所有内置插件功能。在上图中列举的功能插件都是可选组合的，比如您的SDK不会在Hybrid中使用，那么你可以选择把Hybrid相关的打通插件和Hybrid圈选插件都给删掉，为您重新打包一个sdk。

要如何做才能实现去除Hybrid相关功能呢。首先你要从Github上将Web JS SDK克隆下来，在进行二次开发即可。

#### 克隆sdk仓库到本地

```shell
git clone https://github.com/growingio/growingio-sdk-web-autotracker.git
```

#### 安装依赖

```shell
yarn 
```

#### 修改入口文件

打包入口为`cdp.ts`文件，默认情况下sdk会导入所有功能模块。如下

```typescript
// 引入启用的插件
import '@/plugins/common-plugin';
import '@/plugins/sequence-plugin';
import '@/plugins/custom-track-plugin';
import '@/plugins/embed-plugin';
import '@/plugins/spa-page-plugin';
import '@/plugins/action-track-plugin';
import '@/plugins/hybrid-plugin';       
import '@/plugins/web-circle-plugin';
import '@/plugins/hybrid-circle-plugin';
import '@/plugins/marketing-plugin';

// 受函数执行顺序的影响 入口必须放在最后导入
export { default } from './entry';
```

要实现去除Hybrid相关功能只需要删除Hybrid相关的导入，运行`yarn build`重新打包即可。这时入口文件应该如下

```typescript
// 引入启用的插件
import '@/plugins/common-plugin';
import '@/plugins/sequence-plugin';
import '@/plugins/custom-track-plugin';
import '@/plugins/embed-plugin';
import '@/plugins/spa-page-plugin';
import '@/plugins/action-track-plugin';
import '@/plugins/web-circle-plugin';
import '@/plugins/marketing-plugin';

// 受函数执行顺序的影响 入口必须放在最后导入
export { default } from './entry';
```

#### 发布使用

运行`yarn build`的打包命令后，会在dist目录下生成`cdp.js`文件，您只需要将该文件部署到cdn上，替换到[集成时的JS 资源地址](/docs/webjs/base#web使用集成)即可。

## 拓展功能

插件的方式不仅仅是给我们提供了随机组合的能力，更多的是提供了功能扩展的能力。如果您觉得默认插件并不能满足您的功能需求，那就可以根据[插件开发指南](/docs/webjs/develop/plugin_dev)来自定插件以扩展新功能。

