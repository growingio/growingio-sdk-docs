---
sidebar_position: 6
title: 依赖清单BoM
---

使用 GrowingIO Android BoM (依赖清单)，可确保您的应用始终使用 GrowingIO Android 库的兼容版本。

## 说明
通过 GrowingIO Android BoM (依赖清单)，可以只需指定一个版本（BoM 的版本），即可管理所有 GrowingIO 库版本。

在应用中使用 GrowingIO BoM 时，BoM 会自动拉取映射到 BoM 版本的各个库版本。其中每个版本都将兼容。在应用中更新 BoM 版本时，在应用中使用的所有 GrowingIO 库都将更新为映射到该 BoM 版本的版本。

详细了解 [BoM 平台的 Gradle 支持](https://docs.gradle.org/4.6-rc-1/userguide/managing_transitive_dependencies.html#sec:bom_import)。

下面说明了如何使用 GrowingIO Android BoM 在您的模块（应用级）Gradle 文件（通常为 app/build.gradle）中声明依赖项。使用 BoM 时，您无需在依赖项行中指定单独的库版本。

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.5.2')

  implementation 'com.growingio.android:tracker'
  implementation 'com.growingio.android:autotracker'
}
```

以下是关于使用 GrowingIO Android BoM 的一些常见问题解答：

<details>
  <summary>如何使用 BoM 中未指定的库版本？</summary>

可以在库的依赖中指定所需要的库版本号,如下。但不建议指定BoM中的版本号。

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.5.2')

  implementation 'com.growingio.android:autotracker:4.5.2'
}
```
</details>

<details>
  <summary>BoM 是否会自动将所有 GrowingIO 库添加到我的应用？</summary>

不会。要在真正添加和使用对应库时，必须在模块（应用级）Gradle 文件（通常为 `app/build.gradle`）中将每个库声明为单独的依赖项行。
使用 BoM 可确保您应用中的任何 GrowingIO 库版本都兼容，但 BoM 并不会真正将这些 GrowingIO 库添加到您的应用。
</details>

<details>
  <summary>可以使用 BoM 添加不是来自 GrowingIO 的 Android 库吗？</summary>

不可以。GrowingIO Android BoM 仅管理 GrowingIO 库的库版本。
</details>

<details>
  <summary>为什么推荐使用 BoM 来管理 SDK 版本？</summary>

虽然每个 GrowingIO 库都单独进行版本控制，但这些库是一起构建的，以确保每个库的最新版本与其他库兼容。

使用 BoM 管理应用的 GrowingIO 库版本后，无需跟踪哪个版本的 GrowingIO 库与其他 GrowingIO 库兼容。
</details>

<details>
  <summary>应用使用的 Gradle 版本低于 5.0 还可以使用 BoM 吗？</summary>

  可以！对于 Gradle 5.0 及更高版本，BoM 支持将自动启用。不过，对于更早版本的 Gradle，只需启用 BoM 功能并采用略微不同的方式导入 BoM。

在 `settings.gradle`  文件中，添加 `enableFeaturePreview('IMPROVED_POM_SUPPORT')`。
在模块（应用级）Gradle 文件（通常为 `app/build.gradle`）中，像导入普通库（不带 platform 修饰符）一样导入 BoM，如下所示：

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation 'com.growingio.android:autotracker-bom:4.5.2'

  implementation 'com.growingio.android:autotracker'
}
```
</details>

<details>
  <summary>如何报告问题或提供与 BoM 有关的反馈？</summary>
  
  请访问 GitHub 上的 <a href="https://github.com/growingio/growingio-sdk-android-autotracker">GrowingIO Android SDK 代码库</a>
</details>
