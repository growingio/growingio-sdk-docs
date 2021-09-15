---
title: 数据采集API
sidebar_position: 3
---

通过`window.gdp`这个全局的方法可以调用到SDK中所有开放的接口，默认包括以下启动接口，动态配合接口和功能接口。您也可以通过插件来扩展更多的接口。

## 核心接口

### 接口列表

```javascript
// 启动接口
gdp('init', projectId, datasourceId[, options]);
gdp('send');

// 动态配置接口
gdp('setTrackerScheme', 'http');
gdp('setTrackHost', 'api.growingio.com');
gdp('enableDebug', true);
gdp('setDataCollect', true);
gdp('setAutoTrack', true);

// 功能接口
gdp('setUserId', userId);
gdp('clearUserId');
gdp('getVisitorId');
gdp('track', eventId, variables[, item[, callback]]);
gdp('setUserAttributes', properties, callback);
```

### 启动接口

#### 1、初始化接口

用户初始化SDK，初始化配置等，执行以下工作：

- 从配置中注册插件
- 初始化SDK配置
- 初始化用户数据（u，s，cs1等）
- 加载插件，触发所有插件的onLoad方法

接口原型如下

```
gdp('init', projectId, datasourceId[, options]);
```

#### 2、启动接口

正式运行SDK，可以开始发送数据。

- 判断是否已初始化和是否运行中
- 触发pageShow，发送pv事件
- 触发所有插件的onStart方法

接口原型如下

```
gdp('send');
```

:::info

动态配置接口和功能接口均由内部插件提供

:::

### 动态配置接口

#### 1、修改请求协议(scheme)
```js
gdp('setTrackerScheme', 'http');
```

#### 2、修改数据上报地址(host)
```js
gdp('setTrackHost', 'api.growingio.com');
```

#### 3、开启/关闭调试模式(debug)
```js
gdp('enableDebug', true);
```

#### 4、开启/关闭数据采集(dataCollect)
```js
gdp('setDataCollect', true);
```

#### 5、开启/关闭无埋点数据采集(autotrack)
```js
gdp('setAutoTrack', true);
```

### 功能接口

#### 1、设置登录用户id

在用户登录后，可以调用setUserId，上报登录用户id。

```js
gdp('setUserId', userId);
```

##### 高级功能

若在初始化是配置了enableIdMapping: true，则可以启用userKey的设置，方式如下

```js
gdp('setUserId', userId, userKey);
```

#### 2、清除登录用户id

清除设置的userId

```js
gdp('clearUserId');
```

#### 3、获取访问用户Id

```js
gdp('getVisitorId');
```

#### 4、埋点事件接口

发送埋点事件

```js
gdp('track', eventId, variables[, item[, callback]]);
```

- eventId： 事件名
- variables：事件变量
- item：物品模型
- callback：上报请求响应后的回调，参数为response

注：item如果没有，可以直接传入callback函数

#### 5、设置用户属性

设置用户属性，会直接上报LOGIN_USER_ATTRIBUTES事件。

```js
gdp('setUserAttributes', properties, callback);
```

- properties：用户属性变量
- callback：上报请求响应后的回调，参数为response



