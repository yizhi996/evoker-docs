# label

用来改进表单组件的可用性。

使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。 目前可以绑定的控件有：[button](./button), [checkbox](./checkbox), [radio](./radio), [switch](./switch), [input](./input)。

### Props

<Props :data="props" />

### Example

```vue
<template>
  <!-- switch -->
  <label>
    <switch />
    <span>SWITCH</span>
  </label>
  <!-- radio -->
  <radio-group>
    <radio id="radio"></radio>
    <label for="radio">RADIO</label>
  </radio-group>
</template>
```

<script setup>
const props = [
    {
        name: "for", 
        type: "string",
        default: "",
        required: false, 
        desc:"绑定组件的 id"
    },
]
</script>
