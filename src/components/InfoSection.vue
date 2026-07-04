<template>
  <section class="information center">
    <div class="info-left">
      <div class="all-title">
        <div class="all-title-main">
          <div class="tab-item" :class="{ active: activeTab === 'fund' }" @click="activeTab = 'fund'">
            科研动态
            <div class="all-box" v-show="activeTab === 'fund'"></div>
          </div>
          <div class="info-line"></div>
          <div class="tab-item" :class="{ active: activeTab === 'policy' }" @click="activeTab = 'policy'">
            政策要闻
            <div class="all-box" v-show="activeTab === 'policy'"></div>
          </div>
        </div>
        <a href="#" class="all-title-more">更多>></a>
      </div>

      <div v-if="activeTab === 'fund'" class="tab-content">
        <div class="info-main">
          <div class="info-left-col">
            <div class="info-card" v-for="(item, i) in fundCards" :key="i">
              <a :href="item.link" target="_blank">
                <div class="info-card-img">
                  <img :src="item.img" :alt="item.title">
                  <div class="card-pagination"><span class="active"></span></div>
                </div>
                <div class="info-card-title hovRuglar">{{ item.title }}</div>
                <div class="info-card-date gold">{{ item.date }}</div>
              </a>
            </div>
            <div class="arrow-nav">
              <span class="arrow-btn">&#10094;</span>
              <span class="arrow-btn">&#10095;</span>
            </div>
          </div>
          <ul class="info-right-col">
            <li v-for="(item, i) in fundList" :key="i">
              <a :href="item.link" target="_blank">
                <span class="marker"></span>
                <span class="info-text hovBlod">{{ item.title }}</span>
                <span class="date">{{ item.date }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="activeTab === 'policy'" class="tab-content">
        <div class="info-main">
          <div class="info-left-col">
            <div class="info-card" v-for="(item, i) in policyCards" :key="i">
              <a :href="item.link" target="_blank">
                <div class="info-card-img">
                  <img :src="item.img" :alt="item.title">
                  <div class="card-pagination"><span class="active"></span></div>
                </div>
                <div class="info-card-title hovRuglar">{{ item.title }}</div>
                <div class="info-card-date gold">{{ item.date }}</div>
              </a>
            </div>
            <div class="arrow-nav">
              <span class="arrow-btn">&#10094;</span>
              <span class="arrow-btn">&#10095;</span>
            </div>
          </div>
          <ul class="info-right-col">
            <li v-for="(item, i) in policyList" :key="i">
              <a :href="item.link" target="_blank">
                <span class="marker"></span>
                <span class="info-text hovBlod">{{ item.title }}</span>
                <span class="date">{{ item.date }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="info-right">
      <div class="all-title">
        <div class="all-title-main">
          <span>通知公告</span>
          <div class="all-box"></div>
        </div>
        <a href="#" class="all-title-more">更多>></a>
      </div>
      <div class="info-right-list">
        <div class="info-right-item" v-for="(item, i) in notices" :key="i">
          <a :href="item.link" target="_blank">
            <span class="hovBlod">{{ item.title }}</span>
            <span class="date">{{ item.date }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('fund')

const fundCards = [
  { img: 'https://picsum.photos/seed/fund1/260/160', title: '济南护理职业学院2026年度科研成果申报工作启动', date: '07-03', link: '#' },
  { img: 'https://picsum.photos/seed/fund2/260/160', title: '科研处召开2026年度科研工作推进会', date: '06-30', link: '#' },
]
const fundList = [
  { title: '济南护理职业学院三项成果获省级科学技术奖', date: '07-01', link: '#' },
  { title: '人工智能与大数据科研平台通过验收', date: '06-30', link: '#' },
  { title: '我校教师在国际顶级期刊发表高水平论文', date: '06-28', link: '#' },
  { title: '2026年度青年科研基金项目评审结果公布', date: '06-25', link: '#' },
  { title: '科研处组织2026年国家自然科学基金申报动员会', date: '06-20', link: '#' },
  { title: '跨学科交叉研究中心揭牌仪式举行', date: '06-18', link: '#' },
  { title: '校企合作联合实验室建设方案通过论证', date: '06-15', link: '#' },
  { title: '济南市教育局来校调研科研管理工作', date: '06-12', link: '#' },
]
const policyCards = [
  { img: 'https://picsum.photos/seed/policy1/260/160', title: '教育部关于深化高校科研改革的指导意见', date: '06-29', link: '#' },
  { img: 'https://picsum.photos/seed/policy2/260/160', title: '济南市科技创新政策解读会在我校召开', date: '06-26', link: '#' },
]
const policyList = [
  { title: '国务院办公厅关于改革完善科研经费管理的若干意见', date: '06-29', link: '#' },
  { title: '教育部：加强高校有组织科研 推动高质量发展', date: '06-26', link: '#' },
  { title: '山东省"十四五"卫生健康科技创新规划', date: '06-24', link: '#' },
  { title: '科技部等三部门联合印发科研诚信管理办法', date: '06-20', link: '#' },
  { title: '财政部：优化科研经费管理 激发创新活力', date: '06-18', link: '#' },
]

const notices = [
  { title: '关于2026年度科研成果统计工作的通知', date: '06-11', link: '#' },
  { title: '关于2026年度科研项目申报的通知', date: '05-29', link: '#' },
  { title: '关于公布2026年度科研项目初审结果的通知', date: '04-29', link: '#' },
  { title: '关于召开2026年度科研工作大会的通知', date: '04-16', link: '#' },
]
</script>

<style scoped>
.information { display: flex; gap: 30px; margin-top: 30px; }
.info-left { flex: 1; }
.info-right { width: 360px; flex-shrink: 0; }
.tab-item { display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 18px; font-weight: 400; }
.tab-item.active { font-weight: 700; }
.tab-item .all-box { display: none; }
.tab-item.active .all-box { display: block; }
.tab-content { margin-top: 16px; }
.info-main { display: flex; gap: 20px; }
.info-left-col { width: 280px; flex-shrink: 0; }
.info-card { margin-bottom: 16px; }
.info-card-img { position: relative; border-radius: 4px; overflow: hidden; }
.info-card-img img { width: 100%; height: 160px; object-fit: cover; display: block; }
.card-pagination {
  position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px;
}
.card-pagination span {
  width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.4);
}
.card-pagination span.active { background: #fff; }
.info-card-title { margin-top: 8px; font-size: 14px; line-height: 1.4; }
.info-card-date { margin-top: 4px; font-size: 13px; }
.arrow-nav { display: flex; gap: 12px; margin-top: 12px; }
.arrow-btn {
  width: 28px; height: 28px; border: 1px solid #ddd; display: flex;
  align-items: center; justify-content: center; cursor: pointer; font-size: 12px; color: #999;
}
.arrow-btn:hover { border-color: #c00; color: #c00; }
.info-right-col { flex: 1; }
.info-right-col li { padding: 7px 0; border-bottom: 1px dotted #eee; }
.info-right-col li a { display: flex; align-items: flex-start; gap: 8px; }
.info-right-col .info-text { font-size: 14px; }
.info-right-col .date { flex-shrink: 0; font-size: 12px; }
.info-right-list { margin-top: 16px; }
.info-right-item { padding: 10px 0; border-bottom: 1px dotted #eee; }
.info-right-item a { display: flex; justify-content: space-between; align-items: center; }
.info-right-item span:first-child { font-size: 14px; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-right: 12px; }
.info-right-item .date { flex-shrink: 0; }
</style>
