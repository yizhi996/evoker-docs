<template>
  <Table :headers="headers">
    <template v-for="item of _data" :key="item.name">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td>
          <div v-if="isColor(item.default)" class="table__default">
            <div class="table__color-box" :style="{ 'background-color': item.default }"></div>
            {{ item.default }}
          </div>
          <span v-else>{{ item.default }}</span>
        </td>
        <td>{{ item.required ? '是' : '否' }}</td>
        <td v-html="item.desc"></td>
        <!-- <td>{{ item.version }}</td> -->
      </tr>
      <Values v-if="item.values" :values="item.values" />
    </template>
  </Table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Table from './Table.vue'
import Values from './Values.vue'
import type { PropsDataItem } from '../models'

const headers = ['参数', '类型', '默认值', '必填', '说明']

const props = withDefaults(
  defineProps<{
    data: PropsDataItem[]
    options?: boolean
  }>(),
  {
    data: () => [],
    options: false
  }
)

const isColor = (value: string) => {
  return value.startsWith('#') || value.startsWith('rgb')
}

const _data = computed(() => {
  if (props.options) {
    const res = props.data
    res.push(
      ...[
        {
          name: 'success',
          type: 'function',
          default: '',
          required: false,
          desc: '接口调用成功的回调函数',
          version: '0.1.0'
        },
        {
          name: 'fail',
          type: 'function',
          default: '',
          required: false,
          desc: '接口调用失败的回调函数',
          version: '0.1.0'
        },
        {
          name: 'complete',
          type: 'function',
          default: '',
          required: false,
          desc: '接口调用结束的回调函数（调用成功、失败都会执行）',
          version: '0.1.0'
        }
      ]
    )
    return res
  }
  return props.data
})
</script>

<style scoped>
.table__default {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.table__color-box {
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  margin-right: 3px;
}
</style>
