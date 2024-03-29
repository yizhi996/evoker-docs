# radio

单选。

### Props

<Props :data="props" />

### Example

```vue
<template>
  <radio-group @change="onChange">
    <radio
      v-for="fruit of fruits"
      :key="fruit.value"
      :value="fruit.value"
      :checked="fruit.checked"
      >{{ fruit.name }}</radio
    >
  </radio-group>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const fruits = reactive([
  { name: '苹果', value: 'apple' },
  { name: '香蕉', value: 'banana' },
  { name: '菠萝', value: 'pineapple', checked: true },
  { name: '葡萄', value: 'grape' },
  { name: '柠檬', value: 'lemon' }
])

const onChange = ev => {
  const value = ev.detail.value
  console.log(fruits.find(item => item.value === value)!.name)
}
</script>
```

<script setup>
const props = [
    {
        name: "value", 
        type: "string",
        default: "",
        required: false, 
        desc:"radio 标识。当该 radio 选中时，radio-group 的 change 事件会携带 radio 的 value"
    },
    {
        name: "checked", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"当前是否选中"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用"
    },
    {
        name: "color", 
        type:"color",
        default: "#1989fa",
        required: false, 
        desc:"radio 的颜色"
    }
]
</script>
