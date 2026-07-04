<template>
  <header class="site-header">
    <div class="header-top">
      <div class="center header-top-inner">
        <div class="header-logo-group">
          <div class="header-logo">
            <img src="/logo.webp" alt="济南护理职业学院">
          </div>
          <div class="header-project-title">《全人健康·全链协同·处方育人：卫生类高职院校健康教育体系的创新与实践》</div>
        </div>
      </div>
    </div>
    <nav class="header-nav">
      <div class="center nav-inner">
        <div class="nav-left">
          <a href="/" class="nav-item active">首页</a>
          <div class="nav-dropdown">
            <a href="#" class="nav-item">申报书</a>
            <div class="dropdown-menu">
              <a href="#">成果简介</a>
              <a href="#">主要完成人情况</a>
              <a href="#">主要完成单位情况</a>
            </div>
          </div>
          <a href="#" class="nav-item">成果报告</a>
          <div class="nav-dropdown">
            <a href="#" class="nav-item">成果曾获奖励</a>
            <div class="dropdown-menu">
              <a href="#">2026年职业教育省级教学成果</a>
              <a href="#">首批全国健康学校建设单位</a>
              <a href="#">首批全国急救教育试点学校</a>
              <a href="#">2025年世界职业院校技能大赛金奖</a>
              <a href="#">2024年世界职业院校技能大赛金奖</a>
            </div>
          </div>
          <a href="#" class="nav-item">标志性成果</a>
          <div class="nav-dropdown">
            <a href="#" class="nav-item">附件材料</a>
            <div class="dropdown-menu">
              <a href="#">领导认可与批示</a>
              <a href="#">应用证明</a>
              <a href="#">成果推广</a>
              <a href="#">制度建设</a>
              <a href="#">标志性成果</a>
              <a href="#">师生获奖</a>
              <a href="#">教科研成果</a>
              <a href="#">标准专利软著</a>
            </div>
          </div>
          <a href="#" class="nav-item">成果视频</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

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
.nav-inner {
  height: 60px;
}
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
  transition: var(--transition);
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
  transition: var(--transition);
  line-height: 1.4;
  word-break: break-all;
  border-left: 3px solid transparent;
}
.dropdown-menu a:hover {
  background: var(--bg-soft);
  color: var(--primary);
  font-weight: 600;
  border-left-color: var(--accent);
  text-decoration: underline;
}
</style>
