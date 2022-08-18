# ek.hideHomeButton

> <Icon type="success" /> 支持 Promise

隐藏返回首页按钮，当用户打开的小程序页面不是首页时，默认在导航栏左上角展示“返回首页”按钮。

### 参数

<Props options />

### Example

```ts
import { usePage } from 'evoker'

const { onShow } = usePage()

onShow(() => {
  ek.hideHomeButton()
})
```

<script setup>
const props = [
    {
        name: "title", 
        type: "string",
        default: "",
        required: true, 
        desc:"页面标题"
    },
]
</script>
