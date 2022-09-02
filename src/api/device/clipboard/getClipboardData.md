# ek.getClipboardData

> <Icon type="success" /> 支持 Promise

获取系统剪贴板的内容。

::: tip
调用成功后，会弹出 toast 提示“应用读取了你的剪切板内容”，持续 1.5 秒。
:::

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { data } = await ek.getClipboardData()
```

<script setup>
const results = [
  {
    name: 'data',
    type: 'string',
    desc: "剪贴板的内容"
  },
]
</script>
