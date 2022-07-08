# 快速开始

:::tip
需要安装 [Node.js](https://nodejs.org)，[Xcode](https://developer.apple.com/xcode/)，[CocoaPods](https://guides.cocoapods.org/using/getting-started.html#installation)
:::

## 快速构建：

构建一个 Hello world 应用

<n-tabs type="line" trigger="hover">
    <n-tab-pane name="npm" tab="npm">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm create evoker my-app --template blank --platform iOS</span></span></code></pre></div>
    </n-tab-pane>
    <n-tab-pane name="yarn" tab="yarn">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn create evoker my-app --template blank --platform iOS</span></span></code></pre></div>
    </n-tab-pane>
    <n-tab-pane name="pnpm" tab="pnpm">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm create evoker my-app --template blank --platform iOS</span></span></code></pre></div>
    </n-tab-pane>
</n-tabs>

所有模板：

- [blank](https://github.com/yizhi996/evoker/tree/main/packages/create-evoker/template-blank): Hello world

- [example](https://github.com/yizhi996/evoker/tree/main/packages/create-evoker/template-example): 包含所有组件和 API 的示例

查看 [create-evoker](https://github.com/yizhi996/evoker/tree/main/packages/create-evoker) 更多使用方法。

## 安装依赖

应用创建完成后需要安装所需要的依赖才能启动。

```sh
cd my-app
```

安装 Node 依赖

<n-tabs type="line" trigger="hover">
    <n-tab-pane name="npm" tab="npm">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install</span></span></code></pre></div>
    </n-tab-pane>
    <n-tab-pane name="yarn" tab="yarn">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn</span></span></code></pre></div>
    </n-tab-pane>
    <n-tab-pane name="pnpm" tab="pnpm">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm install</span></span></code></pre></div>
    </n-tab-pane>
</n-tabs>

安装 iOS 依赖

```sh
cd my-app/iOS

pod install --repo-update
```

## 启动应用

启动 Dev Server

<n-tabs type="line" trigger="hover">
    <n-tab-pane name="npm" tab="npm">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span></code></pre></div>
    </n-tab-pane>
    <n-tab-pane name="yarn" tab="yarn">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn run dev</span></span></code></pre></div>
    </n-tab-pane>
    <n-tab-pane name="pnpm" tab="pnpm">
         <div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm run dev</span></span></code></pre></div>
    </n-tab-pane>
</n-tabs>

启动 iOS App

打开 iOS 目录下的扩展名是的 `.xcworkspace` 文件，点击运行（⌘ + R），等待应用启动完成。

## 真机运行

查看[运行在设备上](./quick-start.md)

## 修改代码

:::warning
使用 WebSocket 连接，需要在同一个局域网内。
:::

修改项目代码后保存（⌘ + S）将会自动更新到客户端。
