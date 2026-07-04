<template>
  <section class="slideshow">
    <div class="slideshow-title-bar">
      <span class="center">济南护理职业学院科研成果管理系统 — 推动科研创新，服务社会发展</span>
    </div>
    <div class="swiper-container center" ref="container">
      <div class="swiper-wrapper" :style="{ transform: `translateX(-${current * 100}%)` }">
        <div v-for="(slide, i) in slides" :key="i" class="swiper-slide">
          <a :href="slide.link" target="_blank">
            <img :src="slide.img" :alt="slide.title">
            <div class="cover">{{ slide.title }}</div>
          </a>
        </div>
      </div>
      <div class="swiper-pagination">
        <span v-for="(_, i) in slides" :key="i"
          :class="{ active: i === current }"
          @click="current = i"></span>
      </div>
      <button class="swiper-btn prev" @click="prev">&#10094;</button>
      <button class="swiper-btn next" @click="next">&#10095;</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const current = ref(0)
let timer = null
const slides = [
  { img: 'https://picsum.photos/seed/slide1/1200/400', title: '济南护理职业学院科研团队在人工智能领域取得重要突破', link: '#' },
  { img: 'https://picsum.photos/seed/slide2/1200/400', title: '2026年度科研成果申报工作正式启动', link: '#' },
  { img: 'https://picsum.photos/seed/slide3/1200/400', title: '我校三项成果获得省级科学技术奖励', link: '#' },
  { img: 'https://picsum.photos/seed/slide4/1200/400', title: '校企合作科研平台建设取得新进展', link: '#' },
  { img: 'https://picsum.photos/seed/slide5/1200/400', title: '青年科研人才培养计划成效显著', link: '#' },
]
const next = () => { current.value = (current.value + 1) % slides.length }
const prev = () => { current.value = (current.value - 1 + slides.length) % slides.length }
const startAuto = () => { timer = setInterval(next, 4000) }
const stopAuto = () => { clearInterval(timer); timer = null }
onMounted(startAuto)
onUnmounted(stopAuto)
</script>

<style scoped>
.slideshow-title-bar {
  background: #c00; color: #fff; text-align: center;
  padding: 8px 0; font-size: 15px;
}
.swiper-container {
  position: relative; overflow: hidden; height: 400px;
  margin-top: 0;
}
.swiper-wrapper { display: flex; transition: transform 0.5s ease; height: 100%; }
.swiper-slide { min-width: 100%; position: relative; }
.swiper-slide img { width: 100%; height: 400px; object-fit: cover; }
.cover {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: #fff; padding: 30px 20px 16px; font-size: 20px; font-weight: 600;
}
.swiper-pagination {
  position: absolute; bottom: 16px; right: 20px; display: flex; gap: 8px; z-index: 2;
}
.swiper-pagination span {
  width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.5);
  cursor: pointer;
}
.swiper-pagination span.active { background: #fff; }
.swiper-btn {
  position: absolute; top: 50%; transform: translateY(-50%); z-index: 2;
  background: rgba(0,0,0,0.3); color: #fff; border: none;
  width: 44px; height: 44px; font-size: 20px; cursor: pointer; border-radius: 50%;
  transition: background 0.2s;
}
.swiper-btn:hover { background: rgba(0,0,0,0.6); }
.prev { left: 16px; }
.next { right: 16px; }
</style>
