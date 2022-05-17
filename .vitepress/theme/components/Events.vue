<template>
  <LLTable :headers="headers">
    <tr v-for="item of data" :key="item.name">
      <td>{{ item.name }}</td>
      <td style="width: auto;">{{ item.desc }}</td>
      <td style="white-space: pre-wrap;">{{ item.event }}</td>
      <td>{{ item.version }}</td>
    </tr>
  </LLTable>
</template>

<script setup lang="ts">
import LLTable from './Table.vue'

const headers = ['事件名', '说明', '回调参数', '最低版本']

interface DataItem {
  name: string
  desc: string
  event: string
  version: string
}

const props = withDefaults(defineProps<{ data: DataItem[] }>(), {
  data: () => []
})
</script>
