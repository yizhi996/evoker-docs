<template>
  <LLTable :headers="headers">
    <template v-for="item of data" :key="item.name">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td>
          <div v-if="isColor(item.default)" class="ll-table__default">
            <div class="ll-table__color-box" :style="{ 'background-color': item.default }"></div>
            {{ item.default }}
          </div>
          <span v-else>{{ item.default }}</span>
        </td>
        <td>{{ item.required ? '是' : '否' }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.version }}</td>
      </tr>
      <tr v-if="item.types">
        <td colspan="6">
          <table class="ll-table__types">
            <thead>
              <tr>
                <th>合法值</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="t of item.types" :key="t.type">
                <td>{{ t.type }}</td>
                <td v-html="t.desc"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </template>
  </LLTable>
</template>

<script setup lang="ts">
import LLTable from './Table.vue'

const headers = ['参数', '类型', '默认值', '必填', '说明', '最低版本']

interface DataItem {
  name: string
  type: string
  default: string
  required: boolean
  desc: string
  version: string
}

const props = withDefaults(defineProps<{ data: DataItem[] }>(), {
  data: () => []
})

const isColor = (value: string) => {
  return value.startsWith('#')
}
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

.ll-table__types td {
  border-top: solid 1px #e6e6e6;
  background-color: #f0f0f0;
}

.ll-table__default {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.ll-table__color-box {
  width: 12px;
  height: 12px;
  margin-right: 3px;
}
</style>
