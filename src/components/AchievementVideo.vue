<template>
  <section class="ach-video">
    <div class="ach-video-head">
      <h3 class="ach-video-title">成果视频</h3>
    </div>
    <div class="ach-video-frame" @click="onPlay">
      <img :src="current.poster" :alt="current.title">
      <div class="ach-video-play">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.5)" stroke="#fff" stroke-width="2"/>
          <polygon points="26,20 26,44 46,32" fill="#fff"/>
        </svg>
      </div>
      <div class="ach-video-cover">
        <h4 class="ach-video-cover-title">{{ current.title }}</h4>
      </div>
    </div>
    <div class="ach-video-thumbs">
      <div
        v-for="(item, i) in videos"
        :key="i"
        :class="{ active: i === currentIdx }"
        @click="currentIdx = i"
      >
        <img :src="item.poster" :alt="item.title">
        <span class="ach-video-thumb-title">{{ item.title }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const currentIdx = ref(0)
const videos = [
  { poster: 'https://picsum.photos/seed/av1/640/360', title: '护理教学成果转化纪实' },
  { poster: 'https://picsum.photos/seed/av2/640/360', title: '康复医学教学创新与应用' },
  { poster: 'https://picsum.photos/seed/av3/640/360', title: '老年护理学科建设成果展示' },
]
const current = computed(() => videos[currentIdx.value])
const onPlay = () => {}
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
.ach-video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  cursor: pointer;
  overflow: hidden;
}
.ach-video-frame img {
  width: 100%; height: 100%; object-fit: cover; display: block;
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
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
}
.ach-video-cover-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}
.ach-video-thumbs {
  display: flex;
  gap: 12px;
  padding: 16px 18px 18px;
  background: #fff;
  position: relative;
}
.ach-video-thumbs::before {
  content: '';
  position: absolute;
  top: 10px;
  right: 12px;
  width: 56px;
  height: 56px;
  border: 1.5px solid var(--accent);
  opacity: 0.12;
  pointer-events: none;
}
.ach-video-thumbs::after {
  content: '';
  position: absolute;
  top: 16px;
  right: 18px;
  width: 44px;
  height: 44px;
  border: 1px solid var(--accent);
  opacity: 0.08;
  pointer-events: none;
}
.ach-video-thumbs > div {
  flex: 1;
  position: relative;
  cursor: pointer;
  border: 2px solid transparent;
  transition: var(--transition);
}
.ach-video-thumbs > div:hover { border-color: var(--accent-light); }
.ach-video-thumbs > div.active { border-color: var(--accent); }
.ach-video-thumbs img {
  width: 100%;
  height: 72px;
  object-fit: cover;
  display: block;
}
.ach-video-thumb-title {
  display: block;
  padding: 5px 6px;
  font-size: 12px;
  color: #fff;
  background: rgba(0,0,0,0.65);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
</style>
