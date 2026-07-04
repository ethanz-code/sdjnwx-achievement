<template>
  <header class="site-header">
    <div class="header-bar">
      <div class="center header-bar-inner">
        <span>《全人健康·全链协同·处方育人：卫生类高职院校健康教育体系的创新与实践》</span>
      </div>
    </div>
    <div class="header-top">
      <div class="center header-top-inner">
        <div class="header-logo">
          <img src="/logo.webp" alt="济南护理职业学院">
        </div>
        <div class="header-search">
          <input type="text" placeholder="请输入搜索关键词" v-model="keyword" @keyup.enter="onSearch">
          <button @click="onSearch">查询</button>
        </div>
      </div>
    </div>
    <nav class="header-nav">
      <div class="center nav-inner">
        <div class="nav-left">
          <a href="/" class="nav-item active">首页</a>
          <a href="#" class="nav-item">学校概况</a>
          <a href="#" class="nav-item">申报书</a>
          <a href="#" class="nav-item">成果报告</a>
          <a href="#" class="nav-item">成果曾获奖励</a>
          <a href="#" class="nav-item">佐证材料</a>
          <a href="#" class="nav-item nav-attach">
            <svg class="nav-attach-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
              </path>
            </svg>
            <span>附件材料</span>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const keyword = ref('')
const onSearch = () => {}
</script>

<style scoped>
.site-header { background: #fff; border-bottom: 1px solid var(--border); }
.header-bar {
  background: var(--accent);
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
.header-bar-inner {
  font-family: var(--font-title);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 1.5;
}
.header-bar-inner span { display: inline-block; }
.header-top {
  background: #fff;
  padding: 18px 0;
}
.header-top-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo img {
  height: 72px;
  width: auto;
  display: block;
}
.header-search {
  display: flex;
  align-items: stretch;
  border: 2px solid var(--accent);
}
.header-search input {
  width: 260px; height: 36px;
  border: none; padding: 0 12px;
  font-size: 14px; outline: none;
  background: #fff; color: var(--text);
}
.header-search input::placeholder { color: var(--text-muted); }
.header-search button {
  height: 36px; padding: 0 22px;
  background: var(--accent); color: #fff; border: none;
  cursor: pointer; font-size: 14px;
  font-weight: 500;
}
.header-search button:hover { background: var(--accent-dark); }
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
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
  text-align: center;
  transition: var(--transition);
}
.nav-left .nav-item:hover,
.nav-left .nav-item.active { background: var(--accent); }
</style>
