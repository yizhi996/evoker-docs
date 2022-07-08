# 应用生命周期

应用的生命周期钩子。

### onLaunch

在应用被首次加载时触发。

```ts
interface AppLaunchOptions {
  path: string
  query: Record<string, any>
}

function onLaunch(callback: (options: AppLaunchOptions) => void): void
```

- Detail

  path: 启动应用的路径

  query: 启动应用的 query 参数

### onShow

在应用启动或者从后台进入前台时触发。

```ts
interface AppShowOptions {
  path: string
  query: Record<string, any>
}

function onShow(callback: (options: AppShowOptions) => void): void
```

- Detail

  path: 启动应用的路径

  query: 启动应用的 query 参数

### onHide

在应用从前台进入后台时触发。

```ts
function onHide(callback: () => void): void
```

### onError

Vue 错误，JS 错误，API 调用报错时触发。

```ts
function onError(callback: (error: string) => void): void
```

### onThemeChange

主题发生改变时触发。

```ts
interface AppThemeChangeResult {
  theme: 'light' | 'dark'
}
function onThemeChange(callback: (res: AppThemeChangeResult) => void): void
```

### Example

```ts
import { useApp } from 'evoker'

const { onLaunch, onShow, onHide, onError, onThemeChange } = useApp()

onLaunch(options => {
  console.log('APP onLaunch: ', options)
})

onShow(options => {
  console.log('APP onShow: ', options)
})

onHide(() => {
  console.log('APP onHide')
})

onError(error => {
  console.log('APP Error: ', error)
})

onThemeChange(options => {
  console.log('theme change: ', options.theme)
})
```
