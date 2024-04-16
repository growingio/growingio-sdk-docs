---
sidebar_position: 2
title: Flutter Aspect 集成
---

由于 Dart 语言未提供在编译期修改代码的整套 API，所以 Flutter SDK 的无埋点需要通过修改 Dart 源码方式织入外部的 `Transformer` 能使其在 dart 代码优化前参与到 Flutter 代码的编译中；在 Flutter 的源码中添加整套 Transformer 流程的 API，使其实现 Aspect 功能。

基于上述说明，我们的 Flutter SDK 无埋点方案基于修改 Flutter 源代码的方式进行，需要拉取 GitHub 上的 [Flutter SDK](https://github.com/flutter/flutter)。
具体安装可以参考官方引导：[Install Flutter From Github](https://docs.flutter.dev/get-started/install/macos#downloading-straight-from-github-instead-of-using-an-archive)

然后再根据你开发使用的 Flutter 版本，切换到相应的 tag 分支上。

:::info
目前支持 Flutter SDK 版本为 [v3.3.0](https://github.com/growingio/growingio-dart-frontend/tree/3.3.0)，[v3.3.9](https://github.com/growingio/growingio-dart-frontend/tree/3.3.9)，[v3.7.0](https://github.com/growingio/growingio-dart-frontend/tree/3.7.0)，[v3.7.2](https://github.com/growingio/growingio-dart-frontend/tree/3.7.2)，[v3.7.8](https://github.com/growingio/growingio-dart-frontend/tree/3.7.8)，[v3.7.9](https://github.com/growingio/growingio-dart-frontend/tree/3.7.9)，[v3.10.4](https://github.com/growingio/growingio-dart-frontend/tree/3.10.4)，[v3.10.5](https://github.com/growingio/growingio-dart-frontend/tree/3.10.5)，[v3.13.2](https://github.com/growingio/growingio-dart-frontend/tree/3.13.2)，[v3.13.9](https://github.com/growingio/growingio-dart-frontend/tree/3.13.9)，[v3.16.0](https://github.com/growingio/growingio-dart-frontend/tree/3.16.0)，[v3.16.8](https://github.com/growingio/growingio-dart-frontend/tree/3.16.8)，[v3.16.9](https://github.com/growingio/growingio-dart-frontend/tree/3.16.9)，[v3.19.0](https://github.com/growingio/growingio-dart-frontend/tree/3.19.0)，[v3.19.5](https://github.com/growingio/growingio-dart-frontend/tree/3.19.5).

后续将随着 Flutter SDK 的更新会持续推出新的版本，若需要支持特定的 Flutter 版本，请在 [Github Issues](https://github.com/growingio/growingio-dart-frontend/issues) 中提交请求或者向客户成功经理咨询方案。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 安装方式
共有两种方式选择，一是手动替换文件，二是下载一键替换脚本。

<Tabs
  className="unique-tabs"
  groupId="install-type"
  defaultValue="manual"
  values={[
    {label: '手动', value: 'manual'},
    {label: '脚本', value: 'automatic'},
  ]
}>

<TabItem value="manual">

### 访问源码
请访问我们的 [Growingio-Dart-Frontend](https://github.com/growingio/growingio-dart-frontend)，该项目的不同分支代表不同的 Flutter 版本，请根据自己项目的 Flutter 版本下载对应 tag 的 `frontend_server.dart.snapshot`.
比如说 Flutter 3.16.9 版本，需要下载 tag 3.16.9 下的 `frontend_server.dart.snapshot` 文件。

> 具体位置为 `/lib/flutter_frontend_server/frontend_server.dart.snapshot`

另外，flutter 3.19.0 版本及以上还需要下载对应您当前平台架构的 `frontend_server_aot.dart.snapshot` 文件。

> 具体位置为 `/lib/flutter_frontend_server/<您当前的平台架构，如darwin_arm64>/frontend_server_aot.dart.snapshot`

### 覆盖源文件
需要在 Flutter SDK 下进行替换，位置分别为：
1.  `<flutter sdk dir>/bin/cache/artifacts/engine/darwin-x64/frontend_server.dart.snapshot （macos）`  
    或 `<flutter sdk dir>/bin/cache/artifacts/engine/windows-x64/frontend_server.dart.snapshot (windows)`  
    或 `<flutter sdk dir>/bin/cache/artifacts/engine/linux-x64/frontend_server.dart.snapshot (linux)`
2. `<flutter sdk dir>/bin/cache/dart-sdk/bin/snapshots/frontend_server.dart.snapshot`
3. `<flutter sdk dir>/bin/cache/dart-sdk/bin/snapshots/frontend_server_aot.dart.snapshot`

### 清除缓存
覆盖 `frontend_server.dart.snapshot` 和 `frontend_server_aot.dart.snapshot` 后需要清理缓存
```cmd
flutter clean
```
若是已经集成 [Flutter 无埋点插件](/docs/framework/flutter/Flutter%20SDK)，重新编译后，无埋点就能正常运行了。

</TabItem>


<TabItem value="automatic">

### 下载脚本
请下载我们的帮助脚本 [growingio_flutter_script.sh](https://raw.githubusercontent.com/growingio/growingio-dart-frontend/master/growingio_flutter_script.sh)，运行后脚本会自动帮助你覆盖 Flutter SDK 中需要替换的文件。

```shell
$ chmod 777 growingio_flutter_script.sh
$ ./growingio_flutter_script.sh
```

:::info
如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载

需要将环境变量中 Flutter 路径指向 github 下拉取下来的源代码位置
:::

### 清除缓存
运行 `growingio_flutter_script.sh` 脚本后需要清理缓存
```cmd
flutter clean
```
若是已经集成 [Flutter 无埋点插件](/docs/framework/flutter/Flutter%20SDK)，重新编译后，无埋点就能正常运行了。

</TabItem>
</Tabs>

### 卸载无埋点
若是需要恢复至集成无埋点之前的状态，可以到 `<flutter sdk dir>` 下运行以下命令，恢复原来的文件。
```cmd
git reset --hard 
或者
git reset --hard <tag>

rm -rf bin/cache  ## 用来删除缓存 
```

