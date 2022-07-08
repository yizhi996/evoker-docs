# [RecorderManager](./../RecorderManager).start

开始录音。

### 参数

<Props :data="props" />

<script setup>
const props = [
   {
    name: 'duration',
    type: 'number',
    default: '60000',
    required: false,
    desc: '录音的时长，单位 ms',
    version: '0.1.0',
  },
  {
    name: 'sampleRate',
    type: 'number',
    default: '8000',
    required: false,
    desc: '采样率',
    version: '0.1.0',
    values: [
      { value: "8000", desc: "8000 采样率" },
      { value: "11025", desc: "11025 采样率" },
      { value: "12000", desc: "12000 采样率" },
      { value: "16000", desc: "16000 采样率" },
      { value: "22050", desc: "22050 采样率" },
      { value: "24000", desc: "24000 采样率" },
      { value: "32000", desc: "32000 采样率" },
      { value: "44100", desc: "44100 采样率" },
      { value: "48000", desc: "48000 采样率" },
    ]
  },
  {
    name: 'numberOfChannels',
    type: 'number',
    default: '2',
    required: false,
    desc: '录音通道数',
    version: '0.1.0',
    values: [
      { value: "1", desc: "1 个通道" },
      { value: "2", desc: "2 个通道" },
    ]
  },
  {
    name: 'encodeBitRate',
    type: 'number',
    default: '48000',
    required: false,
    desc: '编码码率',
    version: '0.1.0',
  },
  {
    name: 'format',
    type: 'string',
    default: 'aac',
    required: false,
    desc: '音频格式',
    version: '0.1.0',
    values: [
      { value: "aac", desc: "aac 格式" },
      { value: "wav", desc: "wav 格式" },
    ]
  },
]
</script>
