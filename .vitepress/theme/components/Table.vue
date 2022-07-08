<template>
  <table class="ll-table">
    <thead>
      <tr class="ll-table-headers">
        <th v-for="header of headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ headers: string[] }>(), {
  headers: () => []
})
</script>

<style>
.ll-table {
  font-size: 14px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-text-inverse-2);
  background-color: var(--vp-c-bg-alt);
}

.ll-table thead tr {
  border: none;
}

.ll-table th,
tr,
td {
  border: none;
  background-color: var(--vp-c-bg-alt);
  padding: 10px 20px;
}

.ll-table th {
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
}

.ll-table th:first-child {
  padding-left: 5px;
}

.ll-table th:last-child {
  padding-right: 5px;
}

.ll-table td {
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--vp-c-text-inverse-2);
  text-align: left;
}

.ll-table td:first-child {
  padding-left: 5px;
}

.ll-table td:last-child {
  padding-right: 5px;
}
</style>
