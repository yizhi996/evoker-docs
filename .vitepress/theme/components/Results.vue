<template>
  <Table :headers="headers">
    <template v-for="item of data" :key="item.name">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.version }}</td>
      </tr>
      <Values v-if="item.values" :values="item.values" />
    </template>
  </Table>
</template>

<script setup lang="ts">
import Table from './Table.vue'
import Values from './Values.vue'
import type { ResultsDataItem } from "../models"

const headers = ['属性', '类型', '说明', '最低版本']

const props = withDefaults(defineProps<{ data: ResulesDataItem[] }>(), {
  data: () => []
})
</script>
