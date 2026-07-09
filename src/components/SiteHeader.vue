<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
function isTabActive(to) {
  const [p, qs] = to.split('?')
  if (route.path !== p) return false
  if (!qs) return true
  const params = new URLSearchParams(qs)
  for (const [k, v] of params) {
    if (route.query[k] !== v) return false
  }
  return true
}
</script>

<template>
  <header class="site-header">
    <div class="header-top">
      <div class="center header-top-inner">
        <div class="header-logo-group">
          <div class="header-logo">
            <router-link to="/"><img src="/logo.webp" alt="济南护理职业学院"></router-link>
          </div>
          <div class="header-project-title">《全人健康·全链协同·处方育人：卫生类高职院校健康教育体系的创新与实践》</div>
        </div>
      </div>
    </div>
    <nav class="header-nav">
      <div class="center nav-inner">
        <div class="nav-left">
          <router-link to="/" class="nav-item" exact-active-class="active">首页</router-link>
          <div class="nav-dropdown">
            <router-link to="/application" class="nav-item" active-class="active">申报书</router-link>
            <div class="dropdown-menu">
              <router-link to="/application?tab=0" :class="{ active: isTabActive('/application?tab=0') }">成果简介</router-link>
              <router-link to="/application?tab=1" :class="{ active: isTabActive('/application?tab=1') }">主要完成人情况</router-link>
              <router-link to="/application?tab=2" :class="{ active: isTabActive('/application?tab=2') }">主要完成单位情况</router-link>
            </div>
          </div>
          <router-link to="/report" class="nav-item" active-class="active">成果报告</router-link>
          <div class="nav-dropdown">
            <router-link to="/awards-history" class="nav-item" active-class="active">成果曾获奖励</router-link>
            <div class="dropdown-menu">
              <router-link to="/awards-history?tab=0" :class="{ active: isTabActive('/awards-history?tab=0') }">2026年职业教育省级教学成果</router-link>
              <router-link to="/awards-history?tab=1" :class="{ active: isTabActive('/awards-history?tab=1') }">首批全国健康学校建设单位</router-link>
              <router-link to="/awards-history?tab=2" :class="{ active: isTabActive('/awards-history?tab=2') }">首批全国急救教育试点学校</router-link>
              <router-link to="/awards-history?tab=3" :class="{ active: isTabActive('/awards-history?tab=3') }">2025年世界职业院校技能大赛总决赛争夺赛金奖</router-link>
              <router-link to="/awards-history?tab=4" :class="{ active: isTabActive('/awards-history?tab=4') }">2024年世界职业院校技能大赛总决赛争夺赛金奖</router-link>
            </div>
          </div>
          <router-link to="/landmark" class="nav-item" active-class="active">标志性成果</router-link>
          <div class="nav-dropdown">
            <router-link to="/attachments" class="nav-item" active-class="active">附件材料</router-link>
            <div class="dropdown-menu">
              <router-link to="/attachments?tab=0" :class="{ active: isTabActive('/attachments?tab=0') }">领导认可与批示</router-link>
              <router-link to="/attachments?tab=1" :class="{ active: isTabActive('/attachments?tab=1') }">应用证明</router-link>
              <router-link to="/attachments?tab=2" :class="{ active: isTabActive('/attachments?tab=2') }">成果推广</router-link>
              <router-link to="/attachments?tab=3" :class="{ active: isTabActive('/attachments?tab=3') }">制度建设</router-link>
              <router-link to="/attachments?tab=4" :class="{ active: isTabActive('/attachments?tab=4') }">标志性成果</router-link>
              <router-link to="/attachments?tab=5" :class="{ active: isTabActive('/attachments?tab=5') }">师生获奖</router-link>
              <router-link to="/attachments?tab=6" :class="{ active: isTabActive('/attachments?tab=6') }">教科研成果</router-link>
              <router-link to="/attachments?tab=7" :class="{ active: isTabActive('/attachments?tab=7') }">标准专利软著</router-link>
            </div>
          </div>
          <router-link to="/achievement-video" class="nav-item" active-class="active">成果视频</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header { background: #fff; border-bottom: 1px solid var(--border); }
.header-top {
  background: #fff;
  padding: 18px 0;
}
.header-top-inner {
  display: flex;
  align-items: center;
}
.header-logo-group {
  display: flex;
  align-items: center;
  gap: 28px;
}
.header-logo img {
  height: 72px;
  width: auto;
  display: block;
}
.header-project-title {
  font-family: var(--font-title);
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 2px;
  max-width: 700px;
  line-height: 1.5;
}
.header-nav { background: var(--primary); }
.nav-inner { height: 60px; }
.nav-left {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.nav-item {
  flex: 1;
  height: 60px;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  color: #fff;
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  text-align: center;
  transition: background 0.15s;
}
.nav-left .nav-item:hover,
.nav-left .nav-item.active { background: var(--accent); }
.nav-dropdown {
  flex: 1;
  height: 60px;
  position: relative;
}
.nav-dropdown > .nav-item {
  width: 100%;
  height: 100%;
}
.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid var(--border);
  box-shadow: 0 6px 24px rgba(0,0,0,0.18);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease, visibility 0.15s;
}
.dropdown-menu a {
  display: block;
  padding: 8px 12px;
  font-size: 14px;
  color: var(--text-secondary);
  font-family: var(--font-body);
  cursor: pointer;
  line-height: 1.5;
  word-break: break-all;
  border-left: 3px solid transparent;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.dropdown-menu a:hover,
.dropdown-menu a.active {
  background: var(--bg-soft);
  color: var(--primary);
  border-left-color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: var(--accent);
  text-decoration-thickness: 2px;
}
.dropdown-menu a.active {
  font-weight: 700;
}
</style>
