<template>
  <section class="guide">
    <div class="center guide-inner">
      <div class="guide-left">
        <div class="all-title guide-title">
          <div class="all-title-main" style="display:flex;align-items:center;">
            <div class="tab-item" :class="{ active: guideTab === 'project' }" @click="guideTab = 'project'">
              科研项目
              <div class="all-box" v-show="guideTab === 'project'"></div>
            </div>
            <div class="guide-line"></div>
            <div class="tab-item" :class="{ active: guideTab === 'apply' }" @click="guideTab = 'apply'">
              申请指南
              <div class="all-box" v-show="guideTab === 'apply'"></div>
            </div>
          </div>
          <a href="#" class="all-title-more" style="color:#fff;">更多>></a>
        </div>

        <ul v-if="guideTab === 'project'" class="guide-list">
          <li v-for="(item, i) in projectGuides" :key="i">
            <a :href="item.link" target="_blank">
              <span class="marker" style="background:#a79a6e"></span>
              <span class="guide-text">{{ item.title }}</span>
              <span class="date" style="color:rgba(255,255,255,0.6)">{{ item.date }}</span>
            </a>
          </li>
        </ul>
        <ul v-if="guideTab === 'apply'" class="guide-list">
          <li v-for="(item, i) in applyGuides" :key="i">
            <a :href="item.link" target="_blank">
              <span class="marker" style="background:#a79a6e"></span>
              <span class="guide-text">{{ item.title }}</span>
              <span class="date" style="color:rgba(255,255,255,0.6)">{{ item.date }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="guide-right">
        <div class="all-title guide-title">
          <div class="all-title-main" style="display:flex;align-items:center;">
            <div class="tab-item" :class="{ active: rightTab === 'entrance' }" @click="rightTab = 'entrance'">
              快速入口
              <div class="all-box" v-show="rightTab === 'entrance'"></div>
            </div>
            <div class="guide-line"></div>
            <div class="tab-item" :class="{ active: rightTab === 'faq' }" @click="rightTab = 'faq'">
              常见问答
              <div class="all-box" v-show="rightTab === 'faq'"></div>
            </div>
          </div>
        </div>

        <div v-if="rightTab === 'entrance'" class="guide-cards">
          <a href="#" class="guide-card">
            <div class="guide-card-title">科研管理信息系统</div>
            <div class="guide-card-sub">SDJNWX</div>
            <div class="guide-card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
          </a>
          <a href="#" class="guide-card">
            <div class="guide-card-title">成果认定系统</div>
            <div class="guide-card-sub">ACHIEVE</div>
            <div class="guide-card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
          </a>
        </div>

        <div v-if="rightTab === 'faq'" class="faq-list">
          <ul>
            <li v-for="(item, i) in faqItems" :key="i" class="faq-section">
              <div class="faq-category">{{ item.category }}</div>
              <div class="faq-links">
                <a v-for="(link, j) in item.links" :key="j" :href="link.url">> {{ link.label }}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const guideTab = ref('project')
const rightTab = ref('entrance')

const projectGuides = [
  { title: '2026年度科研项目申报指南', date: '01-19', link: '#' },
  { title: '关于2026年度科研项目申报与结题等有关事项的通知', date: '01-14', link: '#' },
  { title: '山东省自然科学基金联合基金项目指南', date: '07-03', link: '#' },
  { title: '国家社科基金年度项目申报公告', date: '06-29', link: '#' },
  { title: '教育部人文社科研究项目申报通知', date: '06-26', link: '#' },
  { title: '横向科研项目管理办法（修订版）', date: '06-23', link: '#' },
]
const applyGuides = [
  { title: '科研项目申报流程说明', date: '01-19', link: '#' },
  { title: '项目申请书填写注意事项', date: '01-14', link: '#' },
  { title: '依托单位变更申请指南', date: '07-03', link: '#' },
  { title: '科研经费预算编制说明', date: '06-29', link: '#' },
  { title: '项目中期检查报告提交要求', date: '06-26', link: '#' },
  { title: '结题验收材料准备清单', date: '06-23', link: '#' },
]
const faqItems = [
  { category: '申报', links: [
    { label: '项目类型', url: '#' }, { label: '申报时间', url: '#' },
    { label: '项目定位', url: '#' }, { label: '申报条件', url: '#' },
    { label: '信息系统', url: '#' },
  ]},
  { category: '实施', links: [
    { label: '提交材料', url: '#' }, { label: '项目变更', url: '#' }, { label: '日常管理', url: '#' },
  ]},
  { category: '结题', links: [
    { label: '材料提交', url: '#' }, { label: '项目成果', url: '#' }, { label: '日常管理', url: '#' },
  ]},
  { category: '经费', links: [
    { label: '预算管理', url: '#' }, { label: '资金拨付', url: '#' },
    { label: '资金使用', url: '#' }, { label: '决算编制', url: '#' },
  ]},
]
</script>

<style scoped>
.guide { background: #1a3c6e; padding: 30px 0; margin-top: 30px; }
.guide-inner { display: flex; gap: 40px; }
.guide-left { flex: 1; }
.guide-right { width: 400px; flex-shrink: 0; }
.guide-title { border-bottom-color: rgba(255,255,255,0.2); }
.guide-title .tab-item { color: #fff; cursor: pointer; display: flex; align-items: center; gap: 8px; }
.guide-title .tab-item .all-box { background: #fff; }
.guide-line { width: 1px; height: 16px; background: rgba(255,255,255,0.4); margin: 0 12px; }
.guide-list { margin-top: 16px; }
.guide-list li { padding: 6px 0; }
.guide-list li a { display: flex; align-items: flex-start; gap: 10px; color: #fff; }
.guide-text { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; }
.guide-text:hover { font-weight: 700; }
.guide-cards { display: flex; gap: 16px; margin-top: 16px; }
.guide-card {
  flex: 1; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px;
  padding: 20px; text-align: center; cursor: pointer; transition: background 0.2s;
  position: relative; overflow: hidden;
}
.guide-card:hover { background: rgba(255,255,255,0.08); }
.guide-card-title { color: #fff; font-size: 15px; font-weight: 600; }
.guide-card-sub { color: rgba(255,255,255,0.5); font-size: 12px; margin-top: 4px; }
.guide-card-icon { margin-top: 12px; }
.faq-list { margin-top: 16px; }
.faq-section { padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.15); }
.faq-category { color: #fff; font-weight: 600; font-size: 14px; margin-bottom: 8px; }
.faq-links { display: flex; flex-wrap: wrap; gap: 8px 16px; }
.faq-links a { color: rgba(255,255,255,0.75); font-size: 13px; }
.faq-links a:hover { color: #fff; }
</style>
