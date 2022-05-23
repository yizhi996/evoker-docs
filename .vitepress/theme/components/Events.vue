<template>
  <LLTable :headers="headers">
    <tr v-for="item of data" :key="item.name">
      <td>{{ item.name }}</td>
      <td v-html="item.desc"></td>
      <td style="white-space: pre-wrap;">{{ item.event }}</td>
      <td>{{ item.version }}</td>
    </tr>
  </LLTable>
</template>

<script setup lang="ts">
import LLTable from './Table.vue'
import type { EventsDataItem } from "../models"

const headers = ['事件名', '说明', '回调参数', '最低版本']

const props = withDefaults(defineProps<{ data: EventsDataItem[] }>(), {
  data: () => []
})
</script>
