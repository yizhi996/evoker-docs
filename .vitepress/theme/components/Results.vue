<template>
  <LLTable :headers="headers">
    <template v-for="item of data" :key="item.name">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.version }}</td>
      </tr>
      <LLValues v-if="item.values" :values="item.values"></LLValues>
    </template>
  </LLTable>
</template>

<script setup lang="ts">
import LLTable from './Table.vue'
import LLValues from './Values.vue'
import type { ResultsDataItem } from "../models"

const headers = ['属性', '类型', '说明', '最低版本']

const props = withDefaults(defineProps<{ data: ResulesDataItem[] }>(), {
  data: () => []
})
</script>
