<template>
  <div class="wrapper">
    <div class="tabs">
      <div
        class="tab"
        :class="{ 'tab-active': tab.props.name === active }"
        v-for="tab of tabs"
        :key="tab.props.name"
        @click="onActive(tab.props.name)"
      >
        {{ tab.props.tab }}
      </div>
    </div>
    <div class="pane">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, onMounted, provide, watch } from 'vue'

const active = ref('')

const tabs = ref([])

const slots = useSlots()

provide('tabs', {
  add: item => {
    tabs.value.push(item)
    if (tabs.value.length === slots.default().length) {
      if (active.value === '') {
        active.value = tabs.value[0].props.name
        onActive(active.value)
      }
    }
  }
})

watch(
  () => active.value,
  name => {
    tabs.value.forEach(tab => (tab.exposed.active = tab.props.name === name))
  }
)

const onActive = (name: string) => {
  active.value = name
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.tabs {
  display: flex;
  flex-items: center;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.tab {
  height: 44px;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
}

.tab-active {
  color: var(--vp-c-brand);
  border-bottom: 2px solid var(--vp-c-brand);
}
</style>
