<script setup lang='ts'>
definePage({
  meta: {
    layout: 'default',
    title: 'Example',
    keepAlive: true,
  },
  name: '/example/index',

})
const router = useRouter()
const menus = [
  {
    name: 'NaiveUI',
    children: [
      {
        name: 'useNaiveForm',
        path: '/example/naive-ui',
      },
    ],
  },
  {
    name: 'ECharts',
    children: [
      {
        name: 'useECharts',
        path: '/example/echarts',
      },
    ],
  },
  {
    name: 'ThreeJS',
    children: [
      {
        name: 'useThreeJs',
        path: '/example/threejs',
      },
    ],
  },
  {
    name: 'Others',
    children: [
      {
        name: 'useNumberAnimation',
        path: '/example/use-number-animation',
      },
      {
        name: 'useAudioContext',
        path: '/example/audio-context',
      },
      {
        name: 'usePixiJs',
        path: '/example/pixi-js',
      },
      {
        name: 'usePdfJs',
        path: '/example/use-pdf-js',
      },
      {
        name: 'useUserMedia',
        path: '/example/use-user-media',
      },
      {
        name: 'useWebRTC',
        path: '/example/use-web-rtc',
      },
      {
        name: 'useISpeechSynthesis',
        path: '/example/use-i-speech-synthesis',
      },
      {
        name: 'useIWebSockets',
        path: '/example/use-i-web-sockets',
      },
      {
        name: 'AiEditor',
        path: '/example/ai-editor',
      },
    ],
  },
]
</script>

<template>
  <div class="w-full flex-col gap-[10px] p-[10px]">
    <div class="p-[10px] text-center text-4xl">
      Example
    </div>
    <div v-for="(group, index) in menus" :key="index" class="w-full flex-col gap-[10px] rounded-xl bg-white/80 p-[10px]">
      <div class="w-full p-x-[10px] text-xl">
        {{ group.name }}
      </div>
      <div class="w-full flex flex-wrap gap-[10px]">
        <button
          v-for="item in group.children"
          :key="item.path"
          type="button"
          class="rounded-md bg-black/5 p-x-[10px] p-y-[5px] active:bg-black/5 hover:bg-black/10"
          @click="router.push(item.path)"
        >
          <div>{{ item.name }}</div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>

</style>
