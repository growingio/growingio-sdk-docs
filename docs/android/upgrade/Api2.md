---
sidebar_position: 1
title: 老SaaS(2.0)API对照表
---

Saas 2.0 API 调用主体实例为 `GrowingIO`, 比如 `GrowingIO.getInstance().clearGeoLocation()`.

4.0 API 调用主体实例为 `GrowingAutotracker`，比如 `GrowingAutotracker.get().cleanLocation()`.


|   Saas 2.0 API  | 说明 | 4.0 API |
| :------------: | :--: | :------: |
| setUserAttributes(Map{'<'}String, ?{'>'} attributes), <br/> setUserAttributes(JSONObject jsonObject)|  设置用户信息  |   setLoginUserAttributes(Map{'<'}String, String{'>'} attributes)   |
| disableDataCollect(), <br/>enableDataCollect() | 关闭数据采集 | setDataCollectionEnabled(boolean enable) |
| disable(), resume(), stop()| 关闭恢复数据采集 | - | 
| setThrottle(boolean throttle) | 是否节流发送 | - |
| getDeviceId() | 获取设备ID | getDeviceId() |
| setImeiEnable, <br/>setAndroidIdEnable, <br/>setGoogleAdIdEnable, <br/>setOAIDEnable | 设置设备信息采集开关 | - <br/> 需要在SDK初始化时设置 |
| setChannel(String channel) | 设置渠道信息 | - <br/> 在初始化配置中设置 |
| getSessionId() | 获取SDK的Session值 | - |
| getVisitUserId() | 获取匿名用户ID | - |
| setGeoLocation(double latitude, double longitude) | 设置位置信息 | setLocation(latitude, longitude) |
| clearGeoLocation() | 清除位置信息 | cleanLocation() |
| setUserId(String userId) | 设置登录用户ID | setLoginUserId(String userId) |
| clearUserId() | 清除登录用户ID | cleanLoginUserId() |
| getUserId() | 获取登录用户ID | getLoginUserId() |
| track(String eventName) | 发送自定义埋点事件 | trackCustomEvent(String eventName) | 
| track(String eventName, Number number) | 发送携带数字属性的自定义埋点事件 | - |
| track(String eventName, JSONObject variable) | 发送携带自定义属性的自定义埋点事件 | trackCustomEvent(String eventName,Map{'<'}String, String{'>'} attributes) |
| setPeopleVariable(JSONObject variables), <br/> setPeopleVariable(String key, Number value), <br/> setPeopleVariable(String key, boolean value)| 设置用户属性相关 | setLoginUserAttributes(Map{'<'}String, String{'>'} attributes) |
| bridgeForWebView(WebView webView), <br/> bridgeForX5WebView(WebView x5WebView), <br/> bridgeForUcWebView(WebView ucWebView) | Hybrid web页面打通 | bridgeWebView(View webView) |
| ignoreFragment(activity, fragment) | 忽略当前Fragment的页面事件 | - |
| setPageName(activity, String name) , <br/> setPageName(fragment, String name) | 设置当前页面的别名 | - <br/> 页面事件相关请参考使用 `autotrackPage` 接口 |
| setPageVariable(...) | 设置当前页面的属性 | setPageAttributes(...)|
| isDeeplinkUrl(String url) | 校验链接URI是否满足GIO的格式 | - |
| doDeeplinkByUrl(String url, DeeplinkCallback callback) | 处理deeplink链接 | doDeepLinkByUrl(String url, DeepLinkCallback callback) |
| setImp(boolean enable) | imp事件开关 | - <br/> 半自动埋点事件请参考使用 `trackViewImpression` 接口| 
| disableImpression(boolean enable) | 停止imp事件 | - <br/> 半自动埋点事件请参考使用 `stopTrackViewImpression` 接口| 
| setViewInfo(View view,String tag), <br/> setViewContent(View view,String tag)| 配置 view 的 Tag，标记 View ，并在 SDK 相关事件中发送 | setUniqueTag(View view, String tag) |
| setViewId(View view,String id) | 设置 View id ，配置之后对应 xPath 中的 view id | - |
| ignoredView(View view) | 设忽略配置的 View ，不采集用户数据 | ignoreView() |
| trackEditText(EditText editText) | 是否采集输入框的内容 | trackEditText(EditText editText, boolean track) |
| setTabName(View tab, String name) |  tab ID 计算 | - |




