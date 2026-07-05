<template>
  <section class="ach-awards">
    <div class="ach-awards-head">
      <h3 class="ach-awards-title">成果获奖</h3>
      <div class="ach-awards-nav">
        <button class="ach-awards-btn" @click="prev">&lt;</button>
        <button class="ach-awards-btn" @click="next">&gt;</button>
      </div>
    </div>
    <div class="ach-awards-viewport" ref="viewport" @mouseenter="stopAuto" @mouseleave="startAuto">
      <div class="ach-awards-track" :style="{ transform: `translateX(-${offset}px)` }">
        <div class="ach-awards-item" v-for="(item, i) in doubled" :key="i" @click="open(i % items.length)">
          <div class="ach-awards-img">
            <img :src="item.img" alt="">
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="activeImg" class="lightbox" @click.self="close">
        <button class="lightbox-close" @click="close">&times;</button>
        <div class="lightbox-inner">
          <img :src="activeImg.img" class="lightbox-img" alt="">
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const imageFiles = [
  'WPS图片.webp', 'WPS图片(1).webp',
  '图片1.webp', '图片2.webp', '图片3.webp', '图片4.webp',
  '图片5.webp', '图片6.webp', '图片7.webp', '图片8.webp',
  '图片10.webp', '图片11.webp', '图片12.webp', '图片13.webp',
  '图片14.webp', '图片15.webp', '图片16.webp', '图片17.webp',
]

const items = imageFiles.map(f => ({
  img: `/images/获奖照片/${encodeURIComponent(f)}`
}))

const doubled = [...items, ...items]
const offset = ref(0)
const itemWidth = 220
const gap = 16
let timer = null
const totalWidth = (itemWidth + gap) * items.length

const activeImg = ref(null)

function open(i) {
  activeImg.value = items[i]
  document.body.style.overflow = 'hidden'
}
function close() {
  activeImg.value = null
  document.body.style.overflow = ''
}

const next = () => {
  offset.value += itemWidth + gap
  if (offset.value >= totalWidth) offset.value = 0
}
const prev = () => {
  offset.value -= itemWidth + gap
  if (offset.value < 0) offset.value = totalWidth - itemWidth - gap
}
const startAuto = () => { timer = setInterval(next, 3500) }
const stopAuto = () => { clearInterval(timer); timer = null }
onMounted(startAuto)
onUnmounted(stopAuto)
</script>

<style scoped>
.ach-awards {
  background: #fff;
  border: 1px solid var(--border);
  padding: 18px 20px 20px;
  position: relative;
  overflow: hidden;
}
.ach-awards-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}
.ach-awards-title {
  font-family: var(--font-title);
  font-size: 22px;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: 3px;
  position: relative;
  padding-bottom: 8px;
}
.ach-awards-title::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 48px;
  height: 3px;
  background: var(--accent);
}
.ach-awards-nav {
  display: flex;
  align-items: center;
  gap: 6px;
}
.ach-awards-btn {
  width: 28px; height: 28px;
  background: #fff;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  transition: var(--transition);
}
.ach-awards-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--bg-soft);
}
.ach-awards-viewport { overflow: hidden; }
.ach-awards-track {
  display: flex;
  gap: 16px;
  transition: transform 0.5s ease;
}
.ach-awards-item {
  width: 220px;
  flex-shrink: 0;
  cursor: pointer;
}
.ach-awards-img {
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-soft);
}
.ach-awards-img img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: opacity 0.3s;
}
.ach-awards-item:hover .ach-awards-img img {
  opacity: 0.8;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox-close {
  position: absolute;
  top: 20px;
  right: 28px;
  background: none;
  border: none;
  color: #fff;
  font-size: 42px;
  cursor: pointer;
  line-height: 1;
  z-index: 1;
}
.lightbox-close:hover { opacity: 0.7; }
.lightbox-inner {
  max-width: 90vw;
  max-height: 90vh;
}
.lightbox-img {
  max-width: 88vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 4px;
}
</style>
