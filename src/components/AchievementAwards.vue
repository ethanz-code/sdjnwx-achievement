<template>
  <section class="ach-awards">
    <svg class="ach-awards-wave" viewBox="0 0 1440 340" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,310 C100,240 180,300 260,290 C340,280 420,220 500,260 C580,250 660,190 740,230 C820,220 900,160 980,190 C1060,180 1140,120 1220,140 C1300,130 1380,70 1440,30" fill="none" stroke="var(--accent)" stroke-width="2" opacity="0.35" stroke-dasharray="1800" stroke-dashoffset="1800">
        <animate attributeName="stroke-dashoffset" from="1800" to="0" dur="3s" fill="freeze" begin="0.3s"/>
      </path>
      <path d="M0,320 C100,250 180,310 260,300 C340,290 420,230 500,270 C580,260 660,200 740,240 C820,230 900,170 980,200 C1060,190 1140,130 1220,150 C1300,140 1380,80 1440,40" fill="none" stroke="var(--accent)" stroke-width="1.2" opacity="0.2" stroke-dasharray="1800" stroke-dashoffset="1800">
        <animate attributeName="stroke-dashoffset" from="1800" to="0" dur="3s" fill="freeze" begin="0.6s"/>
      </path>
    </svg>
    <div class="ach-awards-head">
      <h3 class="ach-awards-title">成果获奖</h3>
      <div class="ach-awards-nav">
        <button class="ach-awards-btn" @click="prev">&lt;</button>
        <button class="ach-awards-btn" @click="next">&gt;</button>
        <a href="#" class="ach-awards-more">更多&gt;&gt;</a>
      </div>
    </div>
    <div class="ach-awards-viewport" ref="viewport" @mouseenter="stopAuto" @mouseleave="startAuto">
      <div class="ach-awards-track" :style="{ transform: `translateX(-${offset}px)` }">
        <div class="ach-awards-item" v-for="(item, i) in doubled" :key="i">
          <div class="ach-awards-img">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="ach-awards-name">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const items = [
  { img: 'https://picsum.photos/seed/award1/300/200', title: '山东省科学技术进步奖 二等奖' },
  { img: 'https://picsum.photos/seed/award2/300/200', title: '山东省教学成果奖 特等奖' },
  { img: 'https://picsum.photos/seed/award3/300/200', title: '中国护理学会科技奖 一等奖' },
  { img: 'https://picsum.photos/seed/award4/300/200', title: '全国职业院校技能大赛 一等奖' },
  { img: 'https://picsum.photos/seed/award5/300/200', title: '山东省自然科学奖 三等奖' },
  { img: 'https://picsum.photos/seed/award6/300/200', title: '国家卫生健康委科技进步奖' },
  { img: 'https://picsum.photos/seed/award7/300/200', title: '山东省职业教育教学成果 一等奖' },
  { img: 'https://picsum.photos/seed/award8/300/200', title: '全国医学教育科技奖 二等奖' },
  { img: 'https://picsum.photos/seed/award9/300/200', title: '山东省高校优秀教学成果奖' },
  { img: 'https://picsum.photos/seed/award10/300/200', title: '中国康复医学会科技奖' },
]

const doubled = [...items, ...items]
const offset = ref(0)
const itemWidth = 220
const gap = 16
let timer = null
const totalWidth = (itemWidth + gap) * items.length

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
  margin-top: 16px;
  background: #fff;
  border: 1px solid var(--border);
  padding: 18px 20px 20px;
  overflow: visible;
  position: relative;
}
.ach-awards > * { position: relative; z-index: 1; }
.ach-awards { overflow: visible; }
.ach-awards-viewport { overflow: hidden; }
section.ach-awards > svg.ach-awards-wave {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: 0;
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
.ach-awards-more {
  margin-left: 10px;
  font-size: 13px;
  color: var(--accent-dark);
}
.ach-awards-more:hover { text-decoration: underline; }
.ach-awards-viewport { overflow: hidden; }
.ach-awards-track {
  display: flex;
  gap: 16px;
  transition: transform 0.5s ease;
}
.ach-awards-item {
  width: 220px;
  flex-shrink: 0;
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
}
.ach-awards-name {
  margin-top: 8px;
  font-family: var(--font-title);
  font-size: 14px;
  color: var(--text);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.ach-awards-item:hover .ach-awards-name { color: var(--accent); }
</style>
