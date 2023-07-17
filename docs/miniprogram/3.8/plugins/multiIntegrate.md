---
sidebar_position: 4
title: 多项目分包打通
---

## 简介（gioMultiIntegrate）

当且仅当开发小程序时使用独立开发的分包 **（即主包与分包不在同一项目中且不同框架时）** 时，插件用于打通用户数据和页面数据，合并为一个 SDK 运行逻辑。

## 集成

### 1、引入

#### 下载集成引入

- 下载插件包并复制至项目中：
  **<font size="3"><https://assets.giocdn.com/sdk/minip/cdp/3.8.16/plugins/gioMultiIntegrate.js></font>**<br/>
  **<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

- 引入插件

```js
import gioMultiIntegrate from './utils/plugins/gioMultiIntegrate';
```

#### npm 集成引入

```js
import gioMultiIntegrate from 'gio-webjs-sdk-cdp/plugins/gioMultiIntegrate';
```

<font color="#FC5F3A">提示：主包分包均需引入 SDK 和插件。</font>

### 2、注册

```js
gdp('registerPlugins', [gioMultiIntegrate]);
gdp('init', xxxx);
```

<font color="#FC5F3A">提示：主包分包均需注册插件并初始化。</font>

### 3、分包修改初始化配置项

```js
gdp('init', xxxx, { subpackage: true });
```

## 注意

1、**<font color="red">本插件与无埋点插件互斥。</font>**仅支持用户和页面数据打通与埋点事件，无埋点事件无法支持，使用该插件会**自动强制关闭无埋点功能**（不论是否加载无埋点插件和开启 autotrack）。

2、在分包中除框架实例（例如：uniVue）外，其他通用维度的配置项会被主包的初始化配置覆盖。

3、需要在主包项目中与分包项目中都集成 SDK 和注册插件，并在分包初始化配置项中设置`subpackage: true`。

4、集成该插件时，分包`identify`方法调用自动失效，仅在主包中调用生效。

5、建议分包项目尽量不要过多（3 个以内为宜），过多可能会影响 SDK 合并运行时的性能从而影响小程序整体运行性能。

6、目前仅支持微信小程序。
