# radio-group

单项选择器，内部由多个 [radio](./radio) 组成。

### Events

<Events :data="events" />

<script setup>
const events = [
    {
        name: "change", 
        desc:`radio-group 中选中项发生改变时触发`, 
        event:"{ value: radio 的 value }",
        version: "0.1.0"
    }
]
</script>
