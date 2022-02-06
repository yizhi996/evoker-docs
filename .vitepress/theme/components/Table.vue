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
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: rgb(248 250 252);
}

.ll-table th,
tr {
  border: none;
}

.ll-table td {
  background-color: #fff;
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: solid 1px #f1f4f8;
  background-color: rgb(248 250 252);
}

.ll-table-headers {
  font-weight: 600;
  text-align: left;
}
</style>