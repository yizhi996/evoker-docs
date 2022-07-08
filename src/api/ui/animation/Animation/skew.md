# [Animation](./../Animation).skew

对 X、Y 轴坐标进行倾斜。

### 参数

**number ax**

对 X 轴坐标倾斜的角度，范围 [-180, 180]

**number ay**

对 Y 轴坐标倾斜的角度，范围 [-180, 180]

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = ek.createAnimation()
const animData = anim
  .skew(10, 10)
  .step()
  .export()
```
