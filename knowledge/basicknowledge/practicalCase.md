---
sidebar_position: 4
title: 指标命名规范
---

## 推荐规范

### 页面指标

推荐格式为「平台_页面_修饰词」，比如:

* Web_首页
* Web_单品页
* iOS_单品页_火龙果（一个具体的单品页火龙果）
* Web_详情页_所有（适用于通配所有详情页，比如将每个具体详情页 url 中的 id 通配了）
* iOS_单品页_所有（通配了所有的单品页）
* Android_登录页
* iOS_好友页
* Android_类别页（所有适用于通配了所有类别的情况）
* Android_类别页_水果（一个具体的类别页面水果）

### 元素指标

推荐格式为「平台_[页面_修饰词_]元素_修饰词」，比如:

* Web_首页_注册按钮
* iOS_推荐页_商品展示_第三个（适用于圈选了页面上的第三个展品）
* iOS_推荐页_商品展示_所有（适用于圈选了页面上的所有展品）
* iOS_提交评论按钮_所有
* Android_单品页_所有_点赞按钮_所有（所有单品页的所有点赞按钮）
* Android_点赞按钮_所有（所有的点赞按钮）
* Android_详情页_所有_帖子列表_所有行（适用于所有详情页帖子列表中所有单个帖子，也就是忽略了位置和内容）
* Web_帖子页_所有_点赞按钮_所有
* Web_首页_注册按钮_右下角

### 合并指标

推荐格式为「平台_[对象_]统计业务名称」，比如:

* Web_落地页_所有
* Web_首页_注册按钮_所有
* Web_注册页面_所有输入框
* Android_首页_推荐广告位
* Android_帖子列表页_前三帖
* iOS_首页_推荐广告位
* iOS_帖子列表页_前三帖

### 复合指标

推荐格式为「平台_[对象_]统计业务名称_关键统计公式」，比如:

* Web_落地页_所有_浏览量
* Web_首页_注册按钮_所有_点击量
* 移动平台_支付转化率_支付按钮点击量除以订单页面
* Web_注册页面_所有输入框_修改次数
* 移动平台_支付页面_提交按钮_人均点击量
* Android_首页_推荐广告位_点击率（Android 首页推荐广告位点击量/Android 首页推荐广告位曝光量）
* iOS_帖子列表页_前三帖_点击率（iOS 帖子列表页前三帖点击量/iOS 帖子列表页前三帖曝光量）

## 推荐