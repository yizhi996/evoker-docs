# [Animation](./../Animation).opacity

设置透明度。

### 参数

**number value**

透明度，范围 0-1

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = ek.createAnimation()
const animData = anim
  .opacity(0.4)
  .step()
  .export()
```
