# ek.scanCode

> <Icon type="success" /> 支持 Promise

调起客户端扫码界面进行扫码

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { localip } = await ek.getLocalIPAddress()
```

<script setup>
const props = [
    {
        name: "onlyFromCamera", 
        type: "boolean",
        default: "false",
        required: false, 
        desc: "是否只能从相机扫码，不允许从相册选择图片"
    },
    {
        name: "scanType", 
        type: "string[]",
        default: "['barCode', 'qrCode']",
        required: false, 
        desc: "扫码类型",
        values: [
            { value: "barCode", desc: "一维码" },
            { value: "qrCode", desc: "二维码" },
        ]
    }
]

const results = [
  {
    name: 'result',
    type: 'string',
    desc: "所扫码的内容"
  },
  {
    name: 'scanType',
    type: 'string',
    desc: "所扫码的类型",
    values: [
            { value: "QR_CODE", desc: "二维码" },
            { value: "AZTEC", desc: "一维码" },
            { value: "CODABAR", desc: "一维码" },
            { value: "CODE_39", desc: "一维码" },
            { value: "CODE_93", desc: "一维码" },
            { value: "CODE_128", desc: "一维码" },
            { value: "DATA_MATRIX", desc: "一维码" },
            { value: "EAN_8", desc: "一维码" },
            { value: "EAN_13", desc: "一维码" },
            { value: "ITF", desc: "一维码" },
            { value: "PDF_417", desc: "二维码" },
            { value: "RSS_14", desc: "一维码" },
            { value: "RSS_EXPANDED", desc: "一维码" },
            { value: "UPC_E", desc: "一维码" },
            { value: "CODE_25", desc: "一维码" },
        ]
  }
]
</script>
