<template>
  <LLTable :headers="headers">
    <template v-for="item of data" :key="item.name">
      <tr>
        <td style="width: 100px;">{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.default }}</td>
        <td>{{ item.required ? '是' : '否' }}</td>
        <td style="width: auto;">{{ item.desc }}</td>
        <td>{{ item.version }}</td>
      </tr>
      <table v-if="item.types" class="ll-table__types">
        <tr>
          <th class="ll-table__types__header">合法值</th>
          <th class="ll-table__types__header">说明</th>
        </tr>
        <tr v-for="t of item.types" :key="t.type" class="ll-table__type">
          <td style="width:100px;">{{ t.type }}</td>
          <td>{{ t.desc }}</td>
        </tr>
      </table>
    </template>
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

<style scoped>
.ll-table__types {
  margin-left: 20px;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #f0f0f0;
  border: 1px solid #e6e6e6;
}

.ll-table__types th {
  background-color: #f0f0f0;
}

.ll-table__type td {
  width: auto;
  border-top: solid 1px #e6e6e6;
  background-color: #f0f0f0;
}

.ll-table__types__header {
  font-size: 14px;
  text-align: left;
}
</style>