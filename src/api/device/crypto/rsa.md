# nz.rsa

> <Icon type="success" /> 支持 Promise

非对称加解密。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const publicKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCe1HcHiKzaJdziPwrtmlW72gaDx+0DlhaGphVUwWkmlvWHd6mteVrr7Gs5CHaf8Y9XJbfkoHH8aEWpnhk9hYHy+JuQPYjYAgkK6IVpY69tnRrdrV42+DRPJSwDqfKrqBbYNYo9ddNSyO/uixYJPLIVwdrRTMUu19oeSSIVAvATWQIDAQAB'
const privateKey =
  'MIICcwIBADANBgkqhkiG9w0BAQEFAASCAl0wggJZAgEAAoGBAJ7UdweIrNol3OI/Cu2aVbvaBoPH7QOWFoamFVTBaSaW9Yd3qa15WuvsazkIdp/xj1clt+SgcfxoRameGT2FgfL4m5A9iNgCCQrohWljr22dGt2tXjb4NE8lLAOp8quoFtg1ij1101LI7+6LFgk8shXB2tFMxS7X2h5JIhUC8BNZAgMBAAECf2W/toEdDZ6yos5NlLKiLEorYgEKEsw5WjToMMIbJUGTc7dU8V4wYA7DZe0jftr35NvvTd8o6dzI79e5cHH5FUWKXqEldMqeTzFfPLPgyAaevxDvyBO3Z6mCkIA1ptNLfj47JTdpabc2al6qFZfJfOro+ufT/aIE1pWoLF/GARECQQD2rLyhBiRZfFf9bnUAWaG3RNE5i7Ef7t64DBZO9frZe660a8Xk8Yxzi7KMviq9aIY6LgsV1Ake2W97CcbGNtBrAkEApNWV7YwqLRM8yBO3VIflzsbtuk3RjicwjxzJzkLhR91xvWQDLx50L7kt0e1SNcuVJw3Xr0yGfPNAw4vE9FQMSwJAewyn+9tIfqscaXuUOdx8YyOdCwu4C6nox/6fkjv6KkscVzv7t70WxvzE0Jh8UYe2jYcyWG0xL4Zfqgyyb2YgiQJAKxltyl8L6B1Pl0EQfpnKDPcW0c/nKzQ0DjeIzNXP8eqFAvBTpM5hstjIkktrY4WHyl5kNwHbaHByTq8NIJWZYQJASWfwM30dJ5YAVq3ZMYkY0AeyQuJptdW4m3UJZWb2HyNU/KfPnGJ+OEO2A7XaFeRfO177RUvCqiwPAL4Y4pFvdw=='

const text = 'password'

const { encrypted } = await nz.rsa({
  action: 'encrypt',
  text,
  key: publicKey
})

const { decrypted } = await nz.rsa({
  action: 'decrypt',
  text: encrypted,
  key: privateKey
})

console.log(decrypted === text)
```

<script setup>
const props = [
    {
        name: "action", 
        type: "string",
        default: "",
        required: true, 
        desc: "使用 RSA 加密还是 RSA 解密", 
        version: "0.1.0",
        values: [
            { value: "encrypt", desc: "加密" },
            { value: "decrypt", desc: "解密" },
        ]
    },
    {
        name: "text", 
        type: "string",
        default: "",
        required: true, 
        desc: "要处理的文本，加密为原始文本，解密为 Base64 编码格式文本", 
        version: "0.1.0",
    },
    {
        name: "key", 
        type: "string",
        default: "",
        required: true, 
        desc: "RSA 密钥，加密使用公钥，解密使用私钥", 
        version: "0.1.0",
    },
]

const results = [
  {
    name: 'text',
    type: 'string',
    desc: "经过处理过后得到的文本，加密为 Base64编码文本，解密为原始文本。",
    version: '0.1.0',
  },
]
</script>
