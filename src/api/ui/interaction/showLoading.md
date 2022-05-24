# nz.showLoading

> <Icon type="success" /> 支持 Promise

显示 loading 提示框，需主动调用 [nz.hideLoading](./hideLoading) 才能关闭提示框。

### 参数

<Props :data="props" options />

### Example

```ts
const loading = () => {
  nz.showLoading({
    title: 'Loading...',
    mask: 'true'
  })
  setTimeout(() => {
    nz.hideLoading()
  }, 2000)
}
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
        name: "mask", 
        type: "boolean",
        default: "false",
        required: false, 
        desc:"是否显示半透明蒙层，防止触摸穿透", 
        version: "0.1.0",
    },
]
</script>