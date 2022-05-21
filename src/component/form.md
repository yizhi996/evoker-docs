# form

表单。
将组件内的用户输入的 [switch](./switch), [input](./input), [checkbox](./checkbox), [slider](./slider) [radio](./radio), [picker](./picker) 提交。

当点击 form 表单中 form-type 为 submit 的 [button](./button) 组件时，会将表单组件中的 value 值进行提交，需要在表单内的组件中加上 name 来作为 key。

### Events

<Events :data="events" />

### Example

```vue
<template>
  <form @submit="onSubmit" @reset="onReset">
    <div class="cell-group">
      <div class="cell">
        <div class="cell-title">用户名</div>
        <input name="account" placeholder="请输入用户名" />
      </div>
      <div class="cell">
        <div class="cell-title">密码</div>
        <input password name="password" placeholder="请输入密码" />
      </div>
      <div class="cell">
        <div class="cell-title">静音</div>
        <switch name="muted" />
      </div>
      <div class="cell">
        <div class="cell-title">音量</div>
        <slider class="w-full" :value="50" name="volume" />
      </div>
      <div class="cell">
        <div class="cell-title">多选</div>
        <checkbox-group name="fruits">
          <checkbox value="pineapple">菠萝</checkbox>
          <checkbox value="banana">香蕉</checkbox>
        </checkbox-group>
      </div>
      <div class="cell">
        <div class="cell-title">单选</div>
        <radio-group name="radio">
          <radio value="1">单选1</radio>
          <radio value="2">单选2</radio>
        </radio-group>
      </div>
      <div class="cell">
        <div class="cell-title">picker</div>
        <picker
          header-title="品牌"
          name="picker"
          :range="columns"
          :value="pickerIndex"
          @change="onChangePicker"
        >
          <div>当前选择： {{ columns[pickerIndex] }}</div>
        </picker>
      </div>
    </div>
    <button type="primary" form-type="submit">Submit</button>
    <button form-type="reset">Reset</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pickerIndex = ref(0)

const columns = ['Apple', 'OPPO', 'vivo', 'Xiaomi', 'Others']

const onSubmit = ev => {
  console.log('submit', ev.detail.value)
}

const onReset = () => {
  console.log('reset')
}

const onChangePicker = ev => {
  pickerIndex = ev.detail.value
}
</script>

<style scoped>
.cell-group {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
}

.cell {
  display: flex;
}

.cell-title {
  flex-shrink: 0;
}
</style>
```

<script setup>
const events = [
    {
        name: "submit", 
        desc: "表单提交时触发", 
        event:"{ value: { name: string, value: any } }",
        version: "0.1.0"
    },
    {
        name: "reset", 
        desc: "表单重置时会触发", 
        event:"",
        version: "0.1.0"
    },
]
</script>
