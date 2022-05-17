<script setup>
import Props from '/@theme/components/Props.vue'
import Events from '/@theme/components/Events.vue'

const props = [
    {
        name: "header-text", 
        type: "string",
        default: "",
        required: false, 
        desc:"选择器的标题", 
        version: "0.1.0"
    },
    {
        name: "mode", 
        type:"string",
        default: "selector",
        required: false, 
        desc:"选择器类型", 
        version: "0.1.0",
         types: [
            { type: "selector", desc: '普通选择器' },
            { type: "multiSelector", desc: '多列选择器' },
            { type: "time", desc: '时间选择器' },
            { type: "date", desc: '日期选择器' },
        ],
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用", 
        version: "0.1.0"
    }
]

const events = [
    {
        name: "cancel", 
        desc:"取消选择时触发", 
        event:"",
        version: "0.1.0"
    },
]

const selectorProps = [
    {
        name: "range", 
        type:"array/object[]",
        default: "[]",
        required: true, 
        desc:"mode 为 selector 或 multiSelector 时，range 有效", 
        version: "0.1.0"
    },
    {
        name: "range-key", 
        type:"string",
        default: "",
        required: false, 
        desc:"当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容", 
        version: "0.1.0"
    },
    {
        name: "value", 
        type:"number",
        default: "0",
        required: false, 
        desc:"表示选择了 range 中的第几个（下标从 0 开始）", 
        version: "0.1.0"
    },
]

const selectorEvents = [
     {
        name: "change", 
        desc:"value 改变时触发 change 事件", 
        event:"{ value: number }",
        version: "0.1.0"
    },
]

const multiSelectorProps = [
    {
        name: "range", 
        type:"array/object[]",
        default: "[]",
        required: true, 
        desc:"mode 为 selector 或 multiSelector 时，range 有效", 
        version: "0.1.0"
    },
    {
        name: "range-key", 
        type:"string",
        default: "",
        required: false, 
        desc:"当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容", 
        version: "0.1.0"
    },
    {
        name: "value", 
        type:"number[]",
        default: "[]",
        required: false, 
        desc:"表示选择了 range 中的第几个（下标从 0 开始）", 
        version: "0.1.0"
    },
]

const multiSelectorEvents = [
    {
        name: "change", 
        desc:"value 改变时触发 change 事件", 
        event:"{ value: number[] }",
        version: "0.1.0"
    },
    {
        name: "columnchange", 
        desc:"列改变时触发", 
        event:"",
        version: "0.1.0"
    },
]


const timeProps = [
    {
        name: "value", 
        type:"string",
        default: "",
        required: false, 
        desc: `表示选中的时间，格式为"hh:mm"`, 
        version: "0.1.0"
    },
    {
        name: "start", 
        type:"string",
        default: "",
        required: false, 
        desc:`表示有效时间范围的开始，格式为"hh:mm"`, 
        version: "0.1.0"
    },
    {
        name: "end", 
        type:"string",
        default: "",
        required: false, 
        desc:`表示有效时间范围的结束，格式为"hh:mm"`, 
        version: "0.1.0"
    },
]

const timeEvents = [
    {
        name: "change", 
        desc:"value 改变时触发 change 事件", 
        event:"{ value: string }",
        version: "0.1.0"
    }
]

const dateProps = [
    {
        name: "value", 
        type:"string",
        default: "",
        required: false, 
        desc: `表示选中的日期，格式为"yyyy-MM-dd"`, 
        version: "0.1.0"
    },
    {
        name: "start", 
        type:"string",
        default: "",
        required: false, 
        desc:`表示有效日期范围的开始，格式为"yyyy-MM-dd"`, 
        version: "0.1.0"
    },
    {
        name: "end", 
        type:"string",
        default: "",
        required: false, 
        desc:`表示有效日期范围的结束，字符串格式为"yyyy-MM-dd"`, 
        version: "0.1.0"
    },
]

const dateEvents = [
    {
        name: "change", 
        desc:"value 改变时触发 change 事件", 
        event:"{ value: string }",
        version: "0.1.0"
    }
]
</script>

# picker

从底部弹起的原生选择器。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### mode = selector

普通选择器

#### Props

<Props :data="selectorProps" />

#### Events

<Events :data="selectorEvents" />

#### Example

```vue
<template>
  <picker class="w-full h-10" :range="fruit.range" :value="fruit.value" @change="onChange">
    <div class="px-2.5">Selected: {{ fruit.range[fruit.value] }}</div>
  </picker>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const fruit = reactive({
  range: ['苹果', '香蕉', '草莓', '菠萝', '西瓜', '桃子', '橙子'],
  value: 0
})

const onChange = ev => {
  fruit.value = ev.detail.value
}
</script>
```

### mode = multiSelector

多列选择器

#### Props

<Props :data="multiSelectorProps" />

#### Events

<Events :data="multiSelectorEvents" />

#### Example

多列

```vue
<template>
  <picker
    class="w-full h-10"
    mode="multiSelector"
    :range="weeks.range"
    :value="weeks.value"
    @change="onChange"
  >
    <div class="px-2.5">
      Selected: {{ weeks.range[0][weeks.value[0]] }} {{ weeks.range[1][weeks.value[1]] }}
    </div>
  </picker>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const weeks = reactive({
  range: [['周一', '周二', '周三', '周四', '周五'], ['上午', '下午', '晚上']],
  value: [0, 0]
})

const onChange = ev => {
  weeks.value = ev.detail.value
}
</script>
```

联动

```vue
<template>
  <picker
    class="w-full h-10"
    mode="multiSelector"
    :range="cities.range"
    :value="cities.value"
    @change="onChange"
    @columnchange="onColumnChange"
  >
    <div class="px-2.5">
      Selected: {{ cities.range[0][cities.value[0]] }} {{ cities.range[1][cities.value[1]] }}
      {{ cities.range[2][cities.value[2]] }}
    </div>
  </picker>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const cities = reactive({
  range: [['浙江', '福建'], ['杭州', '温州'], ['西湖区', '余杭区']],
  value: [0, 0, 0]
})

const onChange = ev => {
  cities.value = ev.detail.value
}

const onColumnChange = ev => {
  const { column, value } = e.detail
  cities.value[column] = value
  if (column === 0) {
    if (cities.value[0] === 0) {
      cities.range[1] = ['杭州', '温州']
      cities.range[2] = ['西湖区', '余杭区']
    } else if (cities.value[column] === 1) {
      cities.range[1] = ['福州', '厦门']
      cities.range[2] = ['鼓楼区', '台江区']
    }
    cities.value[1] = 0
    cities.value[2] = 0
  } else if (column === 1) {
    if (cities.value[0] === 0) {
      if (cities.value[1] === 0) {
        cities.range[2] = ['西湖区', '余杭区']
      } else if (cities.value[1] === 1) {
        cities.range[2] = ['鹿城区', '瓯海区']
      }
    } else if (cities.value[0] === 1) {
      if (cities.value[1] === 0) {
        cities.range[2] = ['鼓楼区', '台江区']
      } else if (cities.value[1] === 1) {
        cities.range[2] = ['思明区', '海沧区']
      }
    }
    cities.value[2] = 0
  }
}
</script>
```

### mode = time

时间选择器

#### Props

<Props :data="timeProps" />

#### Events

<Events :data="timeEvents" />

#### Example

```vue
<template>
  <picker class="w-full h-10" :value="timeValue" mode="time" @change="onChange">
    <div class="px-2.5">Selected: {{ timeValue }}</div>
  </picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const timeValue = ref('20:00')

const onChange = ev => {
  timeValue.value = ev.detail.value
}
</script>
```

### mode = date

日期选择器

#### Props

<Props :data="dateProps" />

#### Events

<Events :data="dateEvents" />

#### Example

```vue
<template>
  <picker class="w-full h-10" :value="dateValue" mode="date" @change="onChange">
    <div class="px-2.5">Selected: {{ dateValue }}</div>
  </picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dateValue = ref('2018:08:08')

const onChange = ev => {
  dateValue.value = ev.detail.value
}
</script>
```
