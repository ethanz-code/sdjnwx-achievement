<template>
  <aside class="ach-intro">
    <div class="ach-intro-head">
      <h3 class="ach-intro-title">成果简介</h3>
    </div>
    <div class="ach-intro-body">
      <p class="ach-intro-text">{{ excerpt }}</p>
      <button class="ach-intro-more" @click="showPdf = true">查看更多</button>
    </div>

    <Teleport to="body">
      <div v-if="showPdf" class="ach-modal" @click.self="showPdf = false">
        <div class="ach-modal-panel">
          <div class="ach-modal-head">
            <span class="ach-modal-title">成果简介</span>
            <button class="ach-modal-close" @click="showPdf = false">&times;</button>
          </div>
          <iframe :src="pdfSrc" class="ach-modal-frame"></iframe>
        </div>
      </div>
    </Teleport>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const showPdf = ref(false)
const pdfSrc = '/docs/成果简介/成果简介.pdf'

const excerpt = '本成果积极响应习近平总书记"健康第一"教育理念的重要指示精神与"健康中国"战略部署，落实《"健康中国2030"规划纲要》"加大学校健康教育力度"的要求，直面高职健康教育普遍存在的"育人目标偏差、教学资源分散、实施路径粗放"三大教学短板，着力解决学生健康意识淡漠、自身健康维护和促进能力不足的问题。学校依托2016年"中国青春健康教育示范基地"建设，历经10年探索实践，系统构建健康教育体系，将卫生类高职院校的专业特色充分转化为健康育人优势，致力于培养学生成为健康生活践行者、技能文明传承者、健康中国传播者。'
</script>

<style scoped>
.ach-intro {
  background: #fff;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  min-height: var(--pl-body-min-height, 500px);
  max-height: calc(100vh - 190px);
}
.ach-intro-head {
  padding: 14px 18px;
  background: var(--primary);
  color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
}
.ach-intro-title {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 3px;
  position: relative;
  padding-bottom: 8px;
}
.ach-intro-title::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 36px;
  height: 3px;
  background: var(--accent);
}
.ach-intro-body {
  padding: 14px 22px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.ach-intro-body::before {
  content: '';
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 76px;
  height: 76px;
  border: 1.5px solid var(--accent);
  opacity: 0.12;
  pointer-events: none;
  z-index: 0;
}
.ach-intro-body::after {
  content: '';
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 64px;
  height: 64px;
  border: 1px solid var(--accent);
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
}
.ach-intro-body > * { position: relative; z-index: 1; }
.ach-intro-text {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.9;
  text-indent: 2em;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.ach-intro-more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding: 8px 24px;
  font-size: 15px;
  color: #fff;
  background: var(--accent-dark, #b8860b);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  transition: opacity 0.2s;
  letter-spacing: 2px;
}
.ach-intro-more:hover { opacity: 0.85; }

.ach-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.ach-modal-panel {
  width: 100%;
  height: 100%;
  max-width: 1100px;
  max-height: 90vh;
  background: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,0,0,0.3);
}
.ach-modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background: var(--primary);
  color: #fff;
  flex-shrink: 0;
}
.ach-modal-title {
  font-family: var(--font-title);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}
.ach-modal-close {
  background: none;
  border: none;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
  padding: 0 4px;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.ach-modal-close:hover { opacity: 1; }
.ach-modal-frame {
  width: 100%;
  flex: 1;
  border: none;
}
</style>
