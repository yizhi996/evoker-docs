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
  <picker :range="fruit.range" :value="fruit.value" @change="onChange">
    <span>Selected: {{ fruit.range[fruit.value] }}</span>
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
  <picker mode="multiSelector" :range="weeks.range" :value="weeks.value" @change="onChange">
    <span>Selected: {{ weeks.range[0][weeks.value[0]] }} {{ weeks.range[1][weeks.value[1]] }}</span>
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
    mode="multiSelector"
    :range="cities.range"
    :value="cities.value"
    @change="onChange"
    @columnchange="onColumnChange"
  >
    <span>
      Selected: {{ cities.range[0][cities.value[0]] }} {{ cities.range[1][cities.value[1]] }}
      {{ cities.range[2][cities.value[2]] }}
    </span>
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
  <picker :value="timeValue" mode="time" @change="onChange">
    <span>Selected: {{ timeValue }}</span>
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
  <picker :value="dateValue" mode="date" @change="onChange">
    <span>Selected: {{ dateValue }}</span>
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

<script setup>
const props = [
    {
        name: "header-text", 
        type: "string",
        default: "",
        required: false, 
        desc:"选择器的标题"
    },
    {
        name: "mode", 
        type:"string",
        default: "selector",
        required: false, 
        desc:"选择器类型",
         values: [
            { value: "selector", desc: '普通选择器' },
            { value: "multiSelector", desc: '多列选择器' },
            { value: "time", desc: '时间选择器' },
            { value: "date", desc: '日期选择器' },
        ],
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用"
    }
]

const events = [
    {
        name: "cancel", 
        desc:"取消选择时触发", 
        event:""
    },
]

const selectorProps = [
    {
        name: "range", 
        type:"array/object[]",
        default: "[]",
        required: true, 
        desc:"mode 为 selector 或 multiSelector 时，range 有效"
    },
    {
        name: "range-key", 
        type:"string",
        default: "",
        required: false, 
        desc:"当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容"
    },
    {
        name: "value", 
        type:"number",
        default: "0",
        required: false, 
        desc:"表示选择了 range 中的第几个（下标从 0 开始）"
    },
]

const selectorEvents = [
     {
        name: "change", 
        desc:"value 改变时触发 change 事件", 
        event:"{ value: number }"
    },
]

const multiSelectorProps = [
    {
        name: "range", 
        type:"array/object[]",
        default: "[]",
        required: true, 
        desc:"mode 为 selector 或 multiSelector 时，range 有效"
    },
    {
        name: "range-key", 
        type:"string",
        default: "",
        required: false, 
        desc:"当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容"
    },
    {
        name: "value", 
        type:"number[]",
        default: "[]",
        required: false, 
        desc:"表示选择了 range 中的第几个（下标从 0 开始）"
    },
]

const multiSelectorEvents = [
    {
        name: "change", 
        desc:"value 改变时触发 change 事件", 
        event:"{ value: number[] }"
    },
    {
        name: "columnchange", 
        desc:"列改变时触发", 
        event:""
    },
]

const timeProps = [
    {
        name: "value", 
        type:"string",
        default: "",
        required: false, 
        desc: `表示选中的时间，格式为"hh:mm"`
    },
    {
        name: "start", 
        type:"string",
        default: "",
        required: false, 
        desc:`表示有效时间范围的开始，格式为"hh:mm"`
    },
    {
        name: "end", 
        type:"string",
        default: "",
        required: false, 
        desc:`表示有效时间范围的结束，格式为"hh:mm"`
    },
]

const timeEvents = [
    {
        name: "change", 
        desc:"value 改变时触发 change 事件", 
        event:"{ value: string }"
    }
]

const dateProps = [
    {
        name: "value", 
        type:"string",
        default: "",
        required: false, 
        desc: `表示选中的日期，格式为"yyyy-MM-dd"`
    },
    {
        name: "start", 
        type:"string",
        default: "",
        required: false, 
        desc:`表示有效日期范围的开始，格式为"yyyy-MM-dd"`
    },
    {
        name: "end", 
        type:"string",
        default: "",
        required: false, 
        desc:`表示有效日期范围的结束，字符串格式为"yyyy-MM-dd"`
    },
]

const dateEvents = [
    {
        name: "change", 
        desc:"value 改变时触发 change 事件", 
        event:"{ value: string }"
    }
]
</script>
