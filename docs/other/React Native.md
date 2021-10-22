---
sidebar_position: 4
title: React Native SDK
---
针对于SDK 3.0 上的 RN 插件，当前仅支持埋点sdk。

源码托管在 [growingio/react-native-growingio-sdk-tracker-plugin](https://github.com/growingio/react-native-growingio-sdk-tracker-plugin)

----

## 环境配置

请确保已经添加埋点SDK, 如果没有, 请移步至原生端SDK集成文档

## 添加依赖

`$ npm install react-native-growing-tracker@1.0.1-cdp --save`

### 自动安装 (React Native 0.6.0版本及其以上可以跳过该步骤)

`$ react-native link react-native-growing-tracker`



### 使用本地模块安装 (进行自定义修改)

1. git clone 插件仓库

```shell
git clone git@github.com:growingio/react-native-growingio-sdk-tracker-plugin.git
git checkout cdp
```

2. 在项目的package.json中添加对应模块

```json
"dependencies": {
    ...
    "react-native-growing-tracker": "file:path/react-native-growingio-sdk-tracker-plugin"
},
```

3.  获取依赖

```shell
yarn
```

4. 执行项目

```shell
react-native run-ios
react-native run-android
```



### 手动安装

#### iOS

1. 打开Xcode，在您的工程目录中点击 `Libraries` ➜ `Add Files to [your project's name]`
2. 选择添加 `node_modules` ➜ react-native-growingio-tracker ➜ `RNGrowingTracker.xcodeproj`
3. 选择您的目标项目， `Build Phases` ➜ `Link Binary With Libraries`添加 `libRNGrowingTracker.a` 
4. 运行项目 (`Cmd+R`)<

#### Android

1. 打开您的首页Activity `android/app/src/main/java/[...]/MainActivity.java`
  - 导入包文件 `com.reactnativegrowingtracker.GrowingTrackerPackage;`
  - 在`getPackages()` 方法中添加 `new GrowingTrackerPackage()` 
2. 引入Android Native工程 `android/settings.gradle`:
    ```
    include ':reactnativegrowingtracker'
    project(':reactnativegrowingtracker').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-growing-tracker//android')
    ```
3. 在app中添加Android Native依赖 `android/app/build.gradle`:
    ```
    implementation project(':reactnativegrowingtracker')
    ```
## 引入到文件
```javascript
import GrowingTracker from 'react-native-growing-tracker';

// TODO: What to do with the module?
GrowingTracker;
```

## API说明

### 1 设置登录用户标识
#### 1.1 `GrowingTracker.setLoginUserId(userId)`
设置登录用户标识。
#### 1.2 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| userId | string |  是  |  undefine  | 设置登录用户标识 |
#### 1.3 代码示例
```javascript
GrowingTracker.setLoginUserId('loginUserId');
```
### 2 清除登录用户标识
#### 2.1 `GrowingTracker.cleanLoginUserId()`
清除登录用户标识。
#### 2.2 代码示例
```javascript
GrowingTracker.cleanLoginUserId();
```
### 3 设置坐标
#### 3.1 `GrowingTracker.setLocation(latitude, longitude)`
设置坐标。
#### 3.2 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| latitude | number |  是  |  undefine  | 设置纬度 |
| longitude | number |  是  |  undefine  | 设置经度 |
#### 3.3 代码示例
```javascript
GrowingTracker.setLocation(100.0, 100.0);
```
### 4 清除坐标
#### 4.1 `GrowingTracker.cleanLocation()`
清除坐标。
#### 4.2 代码示例
```javascript
GrowingTracker.cleanLocation();
```
### 5 获取设备标识
#### 5.1 `GrowingTracker.getDeviceId()`
设置坐标。
#### 5.2 代码示例
```javascript
GrowingTracker.getDeviceId().then(setDeviceId);
```
### 6 设置坐标
#### 6.1 `GrowingTracker.setDataCollectionEnabled(enabled)`
是否采集数据。
#### 6.2 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| enabled | boolean |  是  |  undefine  | 是否采集数据 |
#### 6.3 代码示例
```javascript
GrowingTracker.setDataCollectionEnabled(true);
```
### 7 设置访问用户属性
#### 7.1 `GrowingTracker.setVisitorAttributes(attributes)`
设置访问用户属性。
#### 7.2 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| attributes | object |  是  |  undefine  | 访问用户属性 |
#### 7.3 代码示例
```javascript
GrowingTracker.setVisitorAttributes({
    key1: 'value1',
    key2: 'value2',
});
```
### 8 设置登录用户属性
#### 8.1 `GrowingTracker.setLoginUserAttributes(attributes)`
设置登录用户属性。
#### 8.2 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| attributes | object |  是  |  undefine  | 登录用户属性 |
#### 8.3 代码示例
```javascript
GrowingTracker.setLoginUserAttributes({
    key1: 'value1',
    key2: 'value2',
});
```
### 9 设置转换变量
#### 9.1 `GrowingTracker.setConversionVariables(variables)`
设置转换变量。
#### 9.2 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| variables | object |  是  |  undefine  | 转换变量 |
#### 9.3 代码示例
```javascript
GrowingTracker.setConversionVariables({
    key1: 'value1',
    key2: 'value2',
});
```
### 10 自定义事件
#### 10.1 `GrowingTracker.trackCustomEvent(eventName, attributes, itemKey, itemId))`

自定义事件。
#### 10.2 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| eventName | string |  是  |  undefine  | 事件名称 |
| attributes | object | 否 |  null  | 事件属性 |
| itemKey | string | 否 | null | 物品模型唯一标识属性 |
| itemId | string | 否 | null | 物品模型唯一标识属性的值 |
#### 10.3 代码示例
```javascript
GrowingTracker.trackCustomEvent('trackCustomEvent(string)', null);

GrowingTracker.trackCustomEvent('trackCustomEvent(string)', {
    key1: 'value1',
    key2: 'value2',
});
```
