<script setup>
const props = [
    {
        name: "src", 
        type: "string",
        default: "",
        required: true, 
        desc:"图片地址"
    },
    {
        name: "lazy-load", 
        type: "boolean",
        default: "false",
        required: false, 
        desc:"懒加载"
    },
    {
        name: "mode", 
        type: "string",
        default: "scaleToFill",
        required: false, 
        desc:"图片裁剪、缩放的模式",
        values: [
            { value: 'scaleToFill', desc: '不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素' },
            { value: 'aspectFit', desc: '保持纵横比缩放图片，使图片的长边能完全显示出来。可以完整地将图片显示出来' },
            { value: 'aspectFill', desc: '保持纵横比缩放图片，只保证图片的短边能完全显示出来。图片通常只在水平或垂直方向是完整的， 另一个方向将会发生截取' },
            { value: 'widthFix', desc: '缩放模式，宽度不变，高度自适应，保持原图宽高比不变' },
            { value: 'heightFix', desc: '缩放模式，高度不变，宽度自适应，保持原图宽高比不变' },
            { value: 'top', desc: '裁剪模式，不缩放，只显示图片的顶部区域' },
            { value: 'bottom', desc: '裁剪模式，不缩放，只显示图片的底部区域' },
            { value: 'center', desc: '裁剪模式，不缩放，只显示图片的中间区域' },
            { value: 'left', desc: '裁剪模式，不缩放，只显示图片的左边区域' },
            { value: 'right', desc: '裁剪模式，不缩放，只显示图片的右边区域' },
            { value: 'topleft', desc: '裁剪模式，不缩放，只显示图片的左上边区域' },
            { value: 'topright', desc: '裁剪模式，不缩放，只显示图片的右上边区域' },
            { value: 'bottoleft', desc: '裁剪模式，不缩放，只显示图片的左下边区域' },
            { value: 'bottomright', desc: '裁剪模式，不缩放，只显示图片的右下边区域' },
        ],
    },
    {
        name: "webp", 
        type: "boolean",
        default: "false",
        required: false, 
        desc:"如果使用网络 webp 资源，则需要设置 true。本地 webp 资源不需要设置。"
    },
]
</script>

# image

图片。支持 JPG、PNG、SVG、WEBP、GIF 等格式。

也可以使用`<img>`

### Props

<Props :data="props" />

### Example

```vue
<template>
  <image src="../assets/test.png"></image>
  <image lazy-load src="https://example.com/test.png"></image>
  <!-- or -->
  <img src="https://example.com/test.png" />
</template>
```
