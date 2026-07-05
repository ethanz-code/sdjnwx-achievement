<template>
  <section class="ach-video">
    <div class="ach-video-head">
      <h3 class="ach-video-title">成果视频</h3>
    </div>
    <div class="ach-video-body">
      <div v-if="playing && src" class="ach-video-player">
        <video ref="videoEl" :src="src" controls autoplay playsinline></video>
        <button class="ach-video-close" @click="playing = false">关闭</button>
      </div>
      <div v-else class="ach-video-frame" :class="{ 'no-video': !src }" @click="onPlay">
        <img :src="poster" alt="成果视频">
        <div class="ach-video-play">
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.35)" stroke="#fff" stroke-width="2"/>
            <polygon points="26,20 26,44 46,32" fill="#fff"/>
          </svg>
        </div>
        <div class="ach-video-cover">
          <h4 class="ach-video-cover-title">成果视频</h4>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="toast" class="ach-video-toast">{{ toast }}</div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  poster: { type: String, default: '/logo.webp' },
})

const playing = ref(false)
const videoEl = ref(null)
const toast = ref('')
let toastTimer = null

function onPlay() {
  if (props.src) {
    playing.value = true
  } else {
    clearTimeout(toastTimer)
    toast.value = '还未上传视频'
    toastTimer = setTimeout(() => { toast.value = '' }, 2000)
  }
}
</script>

<style scoped>
.ach-video {
  background: #fff;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.ach-video-head {
  padding: 14px 18px;
  background: var(--primary);
  color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
}
.ach-video-title {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 3px;
  position: relative;
  padding-bottom: 8px;
}
.ach-video-title::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 36px;
  height: 3px;
  background: var(--accent);
}
.ach-video-body {
  flex: 1;
  display: flex;
}
.ach-video-frame {
  position: relative;
  width: 100%;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 50%, #d0d8e3 100%);
  cursor: pointer;
  overflow: hidden;
  flex: 1;
}
.ach-video-frame img {
  width: 100%; height: 100%; object-fit: contain; display: block;
  opacity: 0.5;
}
.ach-video-frame.no-video img {
  opacity: 0.4;
}
.ach-video-play {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  pointer-events: none;
}
.ach-video-cover {
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 22px 16px 12px;
  color: #fff;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
}
.ach-video-cover-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}
.ach-video-player {
  width: 100%;
  position: relative;
  background: #000;
}
.ach-video-player video {
  width: 100%;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: contain;
}
.ach-video-close {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 12px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  z-index: 1;
}
.ach-video-close:hover {
  background: rgba(0,0,0,0.8);
}
.ach-video-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 14px 32px;
  background: rgba(0,0,0,0.78);
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  z-index: 99999;
  pointer-events: none;
  letter-spacing: 1px;
}
</style>
