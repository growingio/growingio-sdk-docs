---
title: 版本记录
sidebar_position: 0
---
-----
## V3.3.3 - 2021/12/21

* 修复切换 userId 没有更新session的问题
* 支持采集数据内嵌页userKey与小程序userKey一致
* 新增初始化配置项[extraParams](/docs/miniprogram/initSettings#extraparams)


## V3.3.2 - 2021/12/06

* 新增 enableEventStore 初始化配置：在未使用运营SDK时关闭事件本地存储，在使用运营SDK时开启事件本地存储。[使用详情](/docs/miniprogram/initSettings#enableeventstore)

## V3.3.1 - 2021/11/24

* 修复小程序切入后台超5分钟visit不发送导致session不会重置的问题

## V3.3.0 - 2021/09/30

* 新增id mapping 支持。[使用详情](/docs/miniprogram/initSettings#enableidmapping)



## V3.2.2 - 2021/06/30

* 添加autotrack和ignoreFields配置。[autotrack](/docs/miniprogram/initSettings#autotrack)，[ignoreFields](/docs/miniprogram/initSettings#ignorefields)



## V3.2.1 - 2021/06/22

* 弹窗和资源位支持三方小程序和H5页面跳转
