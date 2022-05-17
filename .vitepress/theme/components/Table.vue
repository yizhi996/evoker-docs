<template>
  <table class="ll-table">
    <tr class="ll-table-headers">
      <th v-for="header of headers" :key="header">{{ header }}</th>
    </tr>
    <slot></slot>
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
  border: 1px solid #f1f4f8;
  background-color: #fafafa;
}

.ll-table th,
tr,
td {
  border: none;
  background-color: #fafafa;
}

.ll-table td {
  width: 80px;
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: solid 1px #f1f4f8;
  text-align: left;
}

.ll-table-headers {
  font-weight: 600;
  text-align: left;
}
</style>