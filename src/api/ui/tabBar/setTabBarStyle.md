# ek.setTabBarStyle

> <Icon type="success" /> 支持 Promise

设置 Tab Bar 的整体样式。

### 参数

<Props :data="props" options />

### Example

```ts
ek.setTabBarStyle({
  color: '#fff',
  selectedColor: '#1989fa',
  backgroundColor: '#000'
})
```

<script setup>
const props = [
    {
        name: "color", 
        type: "string",
        default: "",
        required: false, 
        desc: "Tab Bar 的文字颜色，必须是 16 进制格式"
    },
    {
        name: "selectedColor", 
        type: "string",
        default: "",
        required: false, 
        desc: "Tab Bar 的文字选中时的颜色，必须是 16 进制格式"
    },
    {
        name: "backgroundColor", 
        type: "string",
        default: "",
        required: false, 
        desc: "Tab Bar 的背景颜色，必须是 16 进制格式"
    },
    {
        name: "borderStyle", 
        type: "string",
        default: "",
        required: false, 
        desc: "Tab Bar 的上边框线条颜色，只支持 white / black"
    },
]
</script>
