# checkbox-group

多选选择器，内部由 [checkbox](./checkbox) 组成。

### Events

<Events :data="events" />

<script setup>
const events = [
    {
        name: "change", 
        desc: "选中值改变时触发", 
        event:"{ value: string[] }"
    },
]
</script>
