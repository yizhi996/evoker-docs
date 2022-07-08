# [Animation](./../Animation).scale3d

缩放。

### 参数

**number sx**

x 轴的缩放倍数

**number sy**

y 轴的缩放倍数

**number sz**

z 轴的缩放倍数

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = ek.createAnimation()
const animData = anim
  .scale3d(2.0, 2.0, 1.0)
  .step()
  .export()
```
