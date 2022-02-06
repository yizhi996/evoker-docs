# swiper-item

仅可放置在[swiper](./swiper)组件中，宽高自动设置为 100%。

### Example

```vue
<template>
  <div class="mt-2.5 mx-2.5">
    <swiper
      class="w-full h-40 text-white"
      :autoplay="3000"
      indicator-color="white"
    >
      <swiper-item class="bg-blue-400">1</swiper-item>
      <swiper-item class="bg-red-400">2</swiper-item>
      <swiper-item class="bg-yellow-400">3</swiper-item>
      <swiper-item class="bg-green-400">4</swiper-item>
    </swiper>
  </div>
</template>
```
