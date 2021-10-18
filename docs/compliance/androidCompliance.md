---
sidebar_position: 1
title: Android SDK 合规说明
---

请使用最新 [GrowingIO Android SDK](/docs)

根据[工业和信息化部关于开展纵深推进APP侵害用户权益专项整治行动](http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm)
* App 需要通过隐私政策说明应用采集数据

* 需要告知用户您集成了 GrowingIO SDK，并且 GrowingIO SDK 会尝试获取 ANDROID_ID，IMEI 信息用于渠道信息，并且采集用户信息进行行为分析

## 集成步骤
​请参考 [Android SDK](/docs/android/base/Getting%20Started) 

## 隐私政策
如您的 App 需要通过第三方安全检测，建议在隐私政策授权成功之后，再初始化 GrowingIO SDK

## Google Play
如您的 App 需要在 Google Play 分发，依据 Google Play 相关政策，请使用最新 [GrowingIO Android SDK](/docs)

## 合规步骤
### GDPR
​[General Data Protection Regulation 欧盟通用数据保护条例​](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)

GrowingIO SDK 提供 `setDataCollectionEnabled`接口，可在用户不同意数据采集时，调用该接口，设置 `false` 禁止数据采集；在用户同意数据采集时，调用该接口，设置 `true` 开启数据采集
:::info
当 `setDataCollectionEnabled` 为 `false`， 禁止数据采集， SDK 不采集数据，数据量将会较之前有所下降
:::