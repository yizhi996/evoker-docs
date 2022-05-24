# nz.showToast

> <Icon type="success" /> 支持 Promise

显示消息提示框。

### 参数

<Props :data="props" options />

### Example

```ts
nz.showToast({
  title: '加载成功',
  duration: '2000'
})
```

### Tips

- [nz.showLoading](./showLoading) 和 [nz.showToast](./showToast) 同时只能显示一个。

<script setup>
const props = [
    {
        name: "title", 
        type: "string",
        default: "",
        required: true, 
        desc:"提示的内容", 
        version: "0.1.0"
    },
    {
        name: "icon", 
        type: "string",
        default: "success",
        required: false, 
        desc:"图标", 
        version: "0.1.0",
        values: [
            { value:"success", desc: "显示成功图标" },
            { value:"error", desc: "显示失败图标" },
            { value:"loading", desc: "显示加载图标" },
            { value:"none", desc: "不显示图标" },
        ]
    },
    {
        name: "image", 
        type: "string",
        default: "",
        required: false, 
        desc:"自定义图标的本地路径，image 的优先级高于 icon", 
        version: "0.1.0"
    },
    {
        name: "duration", 
        type: "number",
        default: "1500",
        required: false, 
        desc:"提示的持续时间", 
        version: "0.1.0",
    },
    {
        name: "mask", 
        type: "boolean",
        default: "false",
        required: false, 
        desc:"是否显示半透明蒙层，防止触摸穿透", 
        version: "0.1.0",
    },
]
</script>
