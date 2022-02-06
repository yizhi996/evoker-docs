<script setup>
import Props from '/@theme/components/Props.vue'
import Events from '/@theme/components/Events.vue'

const props = [
    {
        name: "v-model", 
        type: "boolean",
        default: "false",
        required: true, 
        desc:"是否选中", 
        version: "0.1.0"
    },
    {
        name: "name", 
        type: "string | number",
        default: "",
        required: false, 
        desc:"在使用 checkbox-group 时必须要填写", 
        version: "0.1.0"
    },
    {
        name: "checkedColor", 
        type:"string",
        default: "#1989fa",
        required: false, 
        desc:"颜色", 
        version: "0.1.0"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用按钮", 
        version: "0.1.0"
    },
]

const events = [
    {
        name: "change", 
        desc: "选中值改变时触发（在不使用 checkbox-group 时才会触发）。", 
        event:"checked: boolean",
        version: "0.1.0"
    },
]
</script>

# checkbox

多选。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Tips

- 在使用 [checkbox-group](./checkbox-group) 时 events 和 v-model 将无效。

### Example

```vue
<template>
  <checkbox v-model="value1">记住密码</checkbox>
  <checkbox v-model="value2">同意隐私协议</checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
</script>
```
