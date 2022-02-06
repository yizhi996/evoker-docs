<template>
  <LLTable :headers="headers">
    <tr v-for="item of data" :key="item.name">
      <td>{{ item.name }}</td>
      <td>{{ item.type }}</td>
      <td>{{ item.default }}</td>
      <td>{{ item.required ? '是' : '否' }}</td>
      <td>{{ item.desc }}</td>
      <td>{{ item.version }}</td>
    </tr>
  </LLTable>
</template>

<script setup lang="ts">
import LLTable from "./Table.vue"

const headers = ["参数", "类型", "默认值", "必填", "说明", "最低版本"]

interface DataItem {
  name: string
  type: string
  default: string
  required: boolean
  desc: string,
  version: string
}

const props = withDefaults(defineProps<{ data: DataItem[] }>(), {
  data: () => []
})

</script>
