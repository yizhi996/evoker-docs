# checkbox

多选。

### Props

<Props :data="props" />

### Example

```vue
<template>
  <checkbox-group @change="onChange">
    <checkbox
      v-for="fruit of fruits"
      :key="fruit.value"
      :value="fruit.value"
      :checked="fruit.checked"
      >{{ fruit.name }}
    </checkbox>
  </checkbox-group>
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
  const res = ev.detail.value.map(x => {
    return fruits.find(y => x === y.value)!.name
  })
  console.log(res.join(' '))
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
        desc: `选中时触发 <a href="./checkbox-group.html">checkbox-group</a> 的 change 事件，并携带此 value`
    },
     {
        name: "checked", 
        type: "boolean",
        default: "false",
        required: false, 
        desc:"当前是否选中，可用来设置默认选中"
    },
    {
        name: "color", 
        type:"color",
        default: "#1989fa",
        required: false, 
        desc:"颜色"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用"
    },
]
</script>
