# ek.getScreenBrightness

> <Icon type="success" /> 支持 Promise

获取屏幕亮度。

### 参数

<Props  options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { value } = ek.getScreenBrightness()
```

<script setup>
const results = [
  {
    name: 'value',
    type: 'number',
    desc: "屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮",
    version: '0.1.0',
  },
]
</script>
