<template>
  <LLTable :headers="headers">
    <tr v-for="item of data" :key="item.name">
      <td>{{ item.name }}</td>
      <td>{{ item.type }}</td>
      <td v-html="item.desc"></td>
      <td>{{ item.version }}</td>
    </tr>
  </LLTable>
</template>

<script setup lang="ts">
import LLTable from './Table.vue'

const headers = ['属性', '类型', '说明', '最低版本']

interface DataItem {
  name: string
  type: string
  desc: string
  version: string
}

const props = withDefaults(defineProps<{ data: DataItem[] }>(), {
  data: () => []
})
</script>
