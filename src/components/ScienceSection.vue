<template>
  <section class="science">
    <div class="center science-inner">
      <div class="science-left">
        <div class="all-title">
          <div class="all-title-main">
            <span style="color:#444;">科普快讯</span>
            <div class="all-box"></div>
          </div>
          <a href="#" class="all-title-more">更多>></a>
        </div>
        <div class="science-content">
          <div class="science-featured">
            <a :href="scienceFeatured.link">
              <div class="science-img"><img :src="scienceFeatured.img" alt=""></div>
              <div class="science-featured-title hovRuglar">{{ scienceFeatured.title }}</div>
            </a>
            <div class="gold" style="margin-top:8px;"><span class="date">{{ scienceFeatured.date }}</span></div>
          </div>
          <ul class="science-list">
            <li v-for="(item, i) in scienceList" :key="i">
              <a :href="item.link">
                <div class="hovBlod" style="padding:8px 0;color:#666;">{{ item.title }}</div>
              </a>
              <div class="line"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="science-right">
        <div class="video-section">
          <div class="all-title">
            <div class="all-title-main">
              <span style="color:#444;">视频</span>
              <div class="all-box"></div>
            </div>
            <a href="#" class="all-title-more">更多>></a>
          </div>
          <div class="video-slider">
            <div v-for="(item, i) in videoItems" :key="i" class="video-card">
              <a :href="item.link">
                <div class="video-img">
                  <img :src="item.img" alt="">
                  <div class="video-play-icon">&#9654;</div>
                </div>
                <div class="video-title hovRuglar">{{ item.title }}</div>
                <div class="video-date gold">{{ item.date }}</div>
              </a>
            </div>
          </div>
        </div>
        <div class="media-section">
          <div class="all-title">
            <div class="all-title-main">
              <span style="color:#444;">新媒体矩阵</span>
              <div class="all-box"></div>
            </div>
            <a href="#" class="all-title-more">更多>></a>
          </div>
          <div class="media-grid">
            <div v-for="(item, i) in mediaItems" :key="i" class="media-item">
              <div class="media-qr">
                <img :src="item.qr" alt="">
              </div>
              <div class="media-name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scienceFeatured = {
  img: 'https://picsum.photos/seed/science1/260/160',
  title: '济南护理职业学院推出科研创新科普读物',
  date: '03-05',
  link: '#',
}
const scienceList = [
  { title: '基础研究是整个科学体系的源头', link: '#' },
  { title: '人工智能正重新定义技术与艺术边界', link: '#' },
  { title: '以云端医学影像"激活"多元健康服务', link: '#' },
  { title: '从实验室到手术室 纳米对比剂重塑医疗', link: '#' },
]
const videoItems = [
  { img: 'https://picsum.photos/seed/video1/200/120', title: '2025年科研投入首次突破千亿元', date: '06-02', link: '#' },
  { img: 'https://picsum.photos/seed/video2/200/120', title: '加强基础研究 打牢科技强国根基', date: '05-11', link: '#' },
  { img: 'https://picsum.photos/seed/video3/200/120', title: '全面提升基础研究水平和原始创新能力', date: '05-11', link: '#' },
]
const mediaItems = [
  { qr: 'https://via.placeholder.com/80x80/e8e8e8/666?text=QR1', name: '济南护理职业学院\n官方微信公众号' },
  { qr: 'https://via.placeholder.com/80x80/e8e8e8/666?text=QR2', name: '科研处\n官方微信公众号' },
  { qr: 'https://via.placeholder.com/80x80/e8e8e8/666?text=QR3', name: '学术期刊\n官方微信公众号' },
  { qr: 'https://via.placeholder.com/80x80/e8e8e8/666?text=QR4', name: '科金谭\n微信视频号' },
  { qr: 'https://via.placeholder.com/80x80/e8e8e8/666?text=QR5', name: '科金谭\n哔哩哔哩\n官方账号' },
  { qr: 'https://via.placeholder.com/80x80/e8e8e8/666?text=QR6', name: '科学未来式\n抖音官方账号' },
]
</script>

<style scoped>
.science { background: #f9f9f9; padding: 30px 0; }
.science-inner { display: flex; gap: 30px; }
.science-left { flex: 1; }
.science-right { width: 400px; flex-shrink: 0; }
.science-content { margin-top: 16px; display: flex; gap: 24px; }
.science-featured { width: 260px; flex-shrink: 0; }
.science-img { border-radius: 4px; overflow: hidden; }
.science-img img { width: 100%; height: 160px; object-fit: cover; display: block; }
.science-featured-title { margin-top: 8px; font-size: 14px; }
.science-list { flex: 1; }
.science-list li { }
.line { height: 1px; background: #eee; }
.video-section { margin-bottom: 30px; }
.video-slider { display: flex; gap: 16px; margin-top: 16px; }
.video-card { flex: 1; }
.video-img { position: relative; border-radius: 4px; overflow: hidden; }
.video-img img { width: 100%; height: 100px; object-fit: cover; display: block; }
.video-play-icon {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 36px; height: 36px; background: rgba(0,0,0,0.6); border-radius: 50%;
  color: #fff; display: flex; align-items: center; justify-content: center;
  font-size: 14px;
}
.video-title { font-size: 13px; margin-top: 6px; line-height: 1.4; }
.video-date { font-size: 12px; margin-top: 4px; }
.media-grid { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 16px; }
.media-item { width: calc(33.33% - 11px); text-align: center; }
.media-qr { width: 80px; height: 80px; margin: 0 auto 8px; border-radius: 4px; overflow: hidden; }
.media-qr img { width: 100%; height: 100%; object-fit: cover; }
.media-name { font-size: 12px; color: #666; line-height: 1.5; }
</style>
