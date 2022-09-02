# button

按钮。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <button type="primary" @click="onClick">Click</button>
</template>

<script setup lang="ts">
const onClick = () => {
  console.log('click')
}
</script>
```

<script setup>
const props = [
    {
        name: "type", 
        type:`'primary' | 'default' | 'success' | 'warning' | 'danger'`,
        default: "default",
        required: false, 
        desc:"类型"
    },
    {
        name: "size", 
        type:`'large' | 'normal' | 'small' | 'mini'`,
        default: "normal",
        required: false, 
        desc:"尺寸"
    },
    {
        name: "color", 
        type:"string",
        default: "",
        required: false, 
        desc:"按钮颜色"
    },
    {
        name: "plain", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否为朴素按钮"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用按钮"
    },
    {
        name: "loading", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否显示为加载状态"
    },
     {
        name: "hover-class", 
        type:"string",
        default: "ll-button--hover",
        required: false, 
        desc:`指定按下去的样式类。当 hover-class="none" 时，没有点击态效果`
    },
    {
        name: "hover-stop-propagation", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"指定是否阻止本节点的祖先节点出现点击态"
    },
    {
        name: "hover-start-time", 
        type:"number",
        default: "20",
        required: false, 
        desc:"按住后多久出现点击态，单位毫秒"
    },
    {
        name: "hover-stay-time", 
        type:"number",
        default: "70",
        required: false, 
        desc:"手指松开后点击态保留时间，单位毫秒"
    },
    {
        name: "from-type", 
        type:"string",
        default: "",
        required: false, 
        desc: "用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件",
        values: [
            { value: "submit", desc: "提交表单" },
            { value: "reset", desc: "重置表单" },
        ]
    },
    {
        name: "open-type", 
        type:"string",
        default: "",
        required: false, 
        desc: "开放能力",
        values: [
            { value: "share", desc: "触发用户转发" },
            { value: "getUserInfo", desc: "获取用户信息，可以从 @getuserinfo 回调中获取到用户信息 " },
            { value: "openSetting", desc: "打开授权设置页" }
        ]
    },
]

const events = [
    {
        name: "click", 
        desc:"点击按钮，且按钮状态不为加载或禁用时触发", 
        event:""
    },
    {
        name: "getuserinfo", 
        desc: `用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 <a target='_blank' href='/api/open/user/getUserInfo.html' >ek.getUserInfo</a> 返回的一致，open-type="getUserInfo"时有效`, 
        event:""
    },
]
</script>
