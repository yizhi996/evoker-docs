<script setup>
import Props from '/@theme/components/Props.vue'
import Events from '/@theme/components/Events.vue'

const props = [
    {
        name: "v-model", 
        type: "Array<string | number>",
        default: "",
        required: true, 
        desc:"是否选中，值为 checkbox 的 name", 
        version: "0.1.0"
    },
    {
        name: "disabled", 
        type: "boolean",
        default: "false",
        required: false, 
        desc:"是否禁用所有多选框", 
        version: "0.1.0"
    },
]

const events = [
    {
        name: "change", 
        desc: "选中值改变时触发", 
        event:"names: Array<string | number>",
        version: "0.1.0"
    },
]
</script>

# checkbox-group

多选选择器，内部由 [checkbox](./checkbox) 组成。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <checkbox-group v-model="value1">
    <checkbox name="a">复选框 a</checkbox>
    <checkbox name="b">复选框 b</checkbox>
  </checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(['a'])
</script>
```
