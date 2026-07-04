<template>
  <div id="app-root">
    <SiteHeader />
    <main class="main-content">
      <div class="center three-col">
        <AchievementNav :active-idx="activeIdx" @select="activeIdx = $event" />
        <AchievementVideo />
        <AchievementIntro :active-idx="activeIdx" />
      </div>
      <div class="center">
        <AchievementAwards />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import AchievementNav from './components/AchievementNav.vue'
import AchievementVideo from './components/AchievementVideo.vue'
import AchievementIntro from './components/AchievementIntro.vue'
import AchievementAwards from './components/AchievementAwards.vue'

const activeIdx = ref(0)
</script>

<style>
:root {
  --primary: #1a3c6e;
  --primary-dark: #122a4d;
  --accent: #b0994a;
  --accent-dark: #8d7838;
  --bg: #ffffff;
  --bg-soft: #f5f5f5;
  --text: #000000;
  --text-secondary: #333333;
  --text-muted: #888888;
  --border: #e0e0e0;
  --transition: all 0.15s ease;
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", sans-serif;
  --font-title: "Noto Serif SC", "Source Han Serif SC", "SourceHanSerifCN", "STSong", "Songti SC", "SimSun", "Times New Roman", serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { background: var(--bg); }
body {
  font-family: var(--font-body);
  color: var(--text);
  font-size: 15px;
  line-height: 1.7;
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a { text-decoration: none; color: inherit; transition: var(--transition); }
ul { list-style: none; }
img { max-width: 100%; vertical-align: middle; }
.center {
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
}
@media (min-width: 1500px) {
  .center { max-width: 1500px; }
}
.pointer { cursor: pointer; }
.main-content { padding: 20px 0 24px; }
.three-col {
  display: grid;
  grid-template-columns: 220px 1fr 1fr;
  gap: 16px;
  align-items: stretch;
}
</style>
