# picker-view

嵌入页面的滚动选择器。其中只可放置 [picker-view-column](./picker-view-column) 组件。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <picker-view class="w-full h-80" indicator-class="h-10" :value="pickerValue" @change="onChange">
    <picker-view-column>
      <div v-for="year of years" :key="year" class="text-center leading-10">{{ year }}年</div>
    </picker-view-column>
    <picker-view-column>
      <div v-for="month of months" :key="month" class="text-center leading-10">{{ month }}月</div>
    </picker-view-column>
    <picker-view-column>
      <div v-for="day of days" :key="day" class="text-center leading-10">{{ day }}日</div>
    </picker-view-column>
  </picker-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const range = (start: number, end: number) => {
  let res = []
  for (let i = start; i <= end; i++) {
    res.push(i)
  }
  return res
}

const years = range(1990, new Date().getFullYear())

const months = range(1, 12)

const days = range(1, 31)

const pickerValue = ref<number[]>([9999, 1, 1])

const onChange = ev => {
  const value = ev.detail.value
  pickerValue.value = value
  console.log(`${years[value[0]]}年${months[value[1]]}月${days[value[2]]}日`)
}
</script>
```

<script setup>
const props = [
    {
        name: "value", 
        type: "number[]",
        default: "",
        required: false, 
        desc:"数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始）"
    },
    {
        name: "indicator-style", 
        type:"string",
        default: "",
        required: false, 
        desc:"设置选择器中间选中框的样式"
    },
    {
        name: "indicator-class", 
        type:"string",
        default: "",
        required: false, 
        desc:"设置选择器中间选中框的类名"
    },
    {
        name: "mask-class", 
        type:"string",
        default: "",
        required: false, 
        desc:"设置蒙层的样式"
    },
    {
        name: "mask-style", 
        type:"string",
        default: "",
        required: false, 
        desc:"设置蒙层的类名"
    }
]

const events = [
    {
        name: "change", 
        desc:"滚动选择时触发", 
        event:"{ value: number[] }"
    },
    {
        name: "pickstart", 
        desc:"当滚动选择开始时候触发", 
        event:""
    },
    {
        name: "pickend", 
        desc:"当滚动选择结束时候触发事件", 
        event:""
    },
]
</script>
