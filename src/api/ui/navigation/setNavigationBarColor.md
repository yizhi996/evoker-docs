# ek.setNavigationBarColor

> <Icon type="success" /> 支持 Promise

设置当前页面导航栏的颜色。

### 参数

<Props :data="props" options />

### Animation

<Props :data="animation" />

### Example

```ts
ek.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#000000',
  animation: {
    duration: 250,
    timingFunc: 'easeInOut'
  }
})
```

<script setup>
const props = [
    {
        name: "frontColor", 
        type: "string",
        default: "",
        required: true, 
        desc: "前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000"
    },
    {
        name: "backgroundColor", 
        type: "string",
        default: "",
        required: true, 
        desc: "背景颜色，必须是 16 进制格式"
    },
    {
        name: "animation", 
        type: "Animation",
        default: "",
        required: false, 
        desc: "动画效果"
    },
]

const animation = [
    {
        name: "duration", 
        type: "number",
        default: "0",
        required: false, 
        desc: "动画变化时间，单位 ms"
    },
    {
        name: "timingFunc", 
        type: "string",
        default: "linear",
        required: false, 
        desc: "动画类型",
        values: [
            { value: "linear", desc: "线性" },
            { value: "easeIn", desc: "缓入" },
            { value: "easeOut", desc: "缓出" },
            { value: "easeInOut", desc: "缓入缓出" },
        ]
    },
]
</script>
