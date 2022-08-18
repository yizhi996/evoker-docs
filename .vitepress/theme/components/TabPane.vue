<template>
  <slot v-if="active"></slot>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()!

const props = defineProps<{
  name: string
  tab: string
}>()

const active = ref(false)

const parent = inject('tabs')

onMounted(() => {
  parent.add(instance)
})

defineExpose({
  active
})
</script>
