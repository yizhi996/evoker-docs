# ek.makePhoneCall

> <Icon type="success" /> 支持 Promise

拨打电话。

### 参数

<Props :data="props" options />

### Example

```ts
ek.makePhoneCall({ phoneNumber: '10086' })
```

<script setup>
const props = [
    {
        name: "phoneNumber", 
        type: "string",
        default: "",
        required: true, 
        desc: "需要拨打的电话号码", 
        version: "0.1.0",
    },
]
</script>
