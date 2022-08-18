# ek.setTabBarItem

> <Icon type="success" /> 支持 Promise

设置 Tab Bar 某一项的内容。

### 参数

<Props :data="props" options />

### Example

```ts
ek.setTabBarItem({
  index: 0,
  text: 'swift',
  iconPath: '/assets/tab/swift.png',
  backgroundColor: '/assets/tab/swift-selected.png'
})
```

<script setup>
const props = [
    {
        name: "index", 
        type: "number",
        default: "",
        required: true, 
        desc: "Tab Bar 的哪一项，从左边算起第一个为 0"
    },
    {
        name: "text", 
        type: "string",
        default: "",
        required: false, 
        desc: "Tab Bar 的文字"
    },
    {
        name: "iconPath", 
        type: "string",
        default: "",
        required: false, 
        desc: "Tab Bar 的图片路径，支持本地、临时和网络路径"
    },
    {
        name: "selectedIconPath", 
        type: "string",
        default: "",
        required: false, 
        desc: "Tab Bar 的选中时的图片路径，支持本地、临时和网络路径"
    },
]
</script>
