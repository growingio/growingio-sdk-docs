---
title: 插件开发指南
sidebar_position: 3
---

## 简介

SDK的插件可以拦截数据流的各个阶段，可以实现对数据的监测，修改，截断的功能。除了对数据流中的操作外，插件也可以为SDK添加新的方法，以提供诸如埋点的功能。

## 基本结构

对于SDK而言插件就是一个约定好的对象，提供一些生命周期方法，方便SDK在适当的时机进行调用。表示插件的对象接口格式如下

```typescript
interface GioPlugin {
  name: string;
  onLoad?(option: GioOptions): void;
  onStart?(option: GioOptions): void;
  onSetUserId?(userId: Maybe<string>): Maybe<false | void>;
  onComposeBefore?(message: Message): Maybe<Message>;
  onComposeAfter?(event: EventContext): Maybe<EventContext>;
  onSendBefore?(events: EventContext[], request: Request): Maybe<Request | false>;
  onSendAfter?(response: Response): void;
  exportMethods?(): ExposeMethods;
}
```

#### 1、name

必填：是

说明：表示当前插件的名字，应该全局唯一，否则只会加载第一个同名插件

#### 2、onLoad

时机：在调用`gdp('init', ...)`之后触发

说明：代表插件加载的生命周期，该方法接收SDK的配置作为参数。在加载阶段会执行插件的`onLoad`方法，同时将通过`exportMethods`方法返回的接口挂载到全局。

#### 3、onStart

时机：在调动`gdp('send')`之后触发

说明：插件开始运行的生命周期，这里可以处理SDK运行后的一些事，同样接收SDK的配置作为参数。

举例：如`spa-page-track-plugin`插件就是在该生命周期初始化，主要是为了避免`embed-h5-plugin`插件在重写url的时候，可能导致的循环调用与多发page问题。

#### 4、onSetUserId

时机：在调用`gdp('sendUserId', xxx)`之前触发

说明：该方法接收用户传入的userId作为参数，如果其返回值为false，则会阻止SDK进行`setUserId`的操作，否则仅是触发。

举例：在`embed-h5-plugin`和`hybrid-support-plugin`均通过该接口来阻止`userId`设置和监听设置。

:::info

以下四个生命周期触发时机详细可见[自定义SDK](/growingio-sdk-docs/docs/webjs/develop/custom_sdk#web-js-sdk内部逻辑)中的作用与数据流的插件调度图。

:::

#### 5、onComposeBefore

时机：数据流中消息提交后，事件合成前

说明：该方法接收刚提交的事件消息，若有返回一个消息对象，则会用返回的消息替换之前的消息放回事件流中。

#### 6、onComposeAfter

时机：数据流中的事件合成之后

说明：该方法接收合成后的事件作为参数，若有返回一个事件对象，则会用返回的事件替代之前的事件放回事件流中。

举例：如`sequence-id-plugin`就是在该生命周期中，在事件对象内添加了全局id和事件id两个字段。

#### 7、onSendBefore

时机：数据流中的请求发送之前

说明：该方法接收多条事件对象和经过加密的请求对象作为参数，若返回false，则会丢弃本次请求，若有返回新的请求体，则会将新的请求体合并到之前的请求体中（合并为深合并）。

举例：可以通过该生命周期在请求的header中添加新的字段，也可以实现自定义数据加密处理。

#### 8、onSendAfter

时机：在请求发送后调用

说明：该方法接收请求的响应作为参数，可以做一些请求发送后的操作

#### 9、exportMethods

时机：在插件onLoad时

说明：该方法用于返回可挂载到全局的方法

举例：如`custom-track-plugin`就是通过该方法来向外提供了`track`和`setUserAttributes`两个接口

## 如何开发

了解了插件对象的基本结构后，就能很方便的开发一个插件了。插件可以通过两种方式提供，一种是函数式，一种是类声明式。

#### 函数式

函数式就是提供一个可返回插件对象的方法，该方法可接收两个参数，第一个为SDK为插件提供的接口，第二个是注册插件时给插件提供的配置项。基本格式如下

```javascript
function MyPlugin(api, config) {
  return {
    name: 'my-plugin',
    onLoad(options) {}
  }
}
```

#### 类声明式

类声明式就是定义一个插件类，该类的实例化对象应具备插件的格式。在类的构造方法中会接收同函数式的两个参数，分别是SDK提供的接口与插件配置项。可如下声明

```javascript
class MyPlugin {
  constructor(api, config) {
    this.name = 'my-plugin-cls';
  }
  
  onLoad(options) {}
}
```

通过以上的方式，便能开发一个自定义的插件了。插件接收的SDK接口可见文末[附录](/docs/webjs/develop/plugin_dev#附录)。

## 如何使用自定义插件

插件的使用也可以分为两种形式，如果您是在进行SDK的二开，则可以直接使用插件管理器提供的`registerPlugin`方法来注册即可，若只是想在现有的SDK中使用，也可以在初始化配置中注册。

#### 二开注册

二次开发的注册很简单，直接通过`registerPlugin`方法即可，该方法的定义如下

```typescript
type PluginOption = any;
type PluginProvider = (api: PluginApi, options: PluginOption) => GioPlugin | GioPlugin;

function registerPlugin(provider: PluginProvider, options?: PluginOption): void;
```

这样便能像如下方式注册一个插件

```typescript
registerPlugin((api) => {
  return {
    name: 'common-plugin',
    exportMethods: () => ({
      getVisitorId() {
        return api.getDeviceId();
      }
      ...
    })
  };
});
```

然后再将写好的插件在`cdp.ts`的入口处导入即可使用。

#### 配置中注册

您可能并不想对SDK进行二次开发，只是想自定义一个插件来使用，那您就能通过这种方式来注册你的插件。

1. 编写一个插件脚本，可如下

```js
function MyPlugin(api, config) {
  return {
    name: 'my-plugin',
    onLoad(options) {}
  }
}
```

2. 以同步的形式在SDK前引入

```html
<script src="my-plugin.js"></script>
<script type='text/javascript'>
  (function(window, document, script, src, namespace) {
    window[namespace] = window[namespace] || function() {
      (window[namespace].q = window[namespace].q || []).push(arguments)
    };
    script = document.createElement('script');
    let tag = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = src;
    tag.parentNode.insertBefore(script, tag);
  })(window, document, 'script', 'JS 资源地址', 'gdp');
  ...
</script>
```

3. 在初始化时注册插件

```js
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost',
  version: '1.0.0',
  plugins: [MyPlugin]
});
gdp('send');
```

插件的配置`plugins`声明如下

```typescript
type PluginProviderConfig = PluginProvider | [PluginProvider, PluginOption];

interface GioOptions {
  ...
  plugins: PluginProviderConfig[]
}
```

## 附录

#### 插件可用接口

在插件加载时，SDK为插件提供了一些接口，具体声明如下

```typescript
interface PluginApi {
  /**
   * 提交消息，支持数组形式
   *
   * @param message  消息
   * @param callback 请求发送后的回调
   */
  emit(message: Message[] | Message, callback?: ValueFunction<Response>): void;

  /**
   * 获取当前页面信息
   */
  getCurrentPage(): GioPage;

  /**
   * 获取当前设备id（u）
   */
  getDeviceId(): string;

  /**
   * 获取当前sessionId（s）
   *
   * @param direct 是否直接获取，直接获取不会触发session过期判断逻辑，默认false
   */
  getSessionId(direct?: boolean): string;

  /**
   * 获取当前userId（cs1）
   */
  getUserId(): Maybe<string>;

  /**
   * 获取当前userKey（需要配置idMapping开关）
   */
  getUserKey(): Maybe<string>;

  /**
   * 设置deviceId，用于自定义访问用户id，可用来实现forceLogin功能
   *
   * @param deviceId 设备id
   */
  setDeviceId(deviceId: string): void;

  /**
   * 输出debug日志
   */
  printDebug(...args: any[]): void;
}
```



