<template>
  <div id="app-root">
    <SiteHeader />
    <main class="main-content">
      <div class="center">
        <HomeView v-if="isHome" />
        <router-view v-else />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomeView from './views/HomeView.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')
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
</style>
