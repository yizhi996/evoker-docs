# ek.navigateToMiniProgram

> <Icon type="success" /> 支持 Promise

打开另一个小程序，每一次跳转前都会弹窗确认。

### 参数

<Props :data="props" options />

### Example

```ts
ek.navigateToMiniProgram({
  appId: 'abcd...',
  path: 'profile?uid=10086'
})
```

<script setup>
const props = [
    {
        name: "appId", 
        type: "string",
        default: "",
        required: true, 
        desc:"要打开的小程序 appId", 
        version: "0.1.0"
    },
    {
        name: "path", 
        type: "string",
        default: "",
        required: false, 
        desc:"打开的页面路径，如果为空则打开首页，目标小程序可在 App.onLaunch，App.onShow， Page.onLoad 中获取", 
        version: "0.1.0"
    },
    {
        name: "extraData", 
        type: "object",
        default: "",
        required: false, 
        desc:"需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取", 
        version: "0.1.0"
    },
    {
        name: "envVersion", 
        type: "string",
        default: "release",
        required: false, 
        desc:"要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版", 
        version: "0.1.0",
        values: [
            { value: "develop", desc: "开发版" },
            { value: "trial", desc: "体验版" },
            { value: "release", desc: "正式版" },
        ]
    },
]
</script>
