<template>
  <tr>
    <td colspan="6">
      <table class="ll-table__values">
        <thead>
          <tr>
            <th>合法值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of values" :key="item.value">
            <td>{{ item.value }}</td>
            <td v-html="item.desc"></td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { DataItemValue } from "../models"

defineProps<{ values: DataItemValue[] }>()
</script>

<style scoped>
.ll-table__values {
  margin-left: 20px;
  padding: 0 10px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-text-inverse-2);
}

.ll-table__values thead tr {
  border: none;
}

.ll-table__values tr {
  border-top: 1px solid var(--vp-c-text-inverse-2);
}

.ll-table__values th {
  background-color: var(--vp-c-bg-mute);
}

.ll-table__values td {
  border-top: solid 1px var(---vp-c-text-inverse-2);
  background-color: var(--vp-c-bg-mute);
}
</style>
