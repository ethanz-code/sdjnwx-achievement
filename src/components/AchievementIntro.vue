<template>
  <aside class="ach-intro">
    <div class="ach-intro-head">
      <h3 class="ach-intro-title">成果简介</h3>
    </div>
    <div class="ach-intro-body">
      <h4 class="ach-intro-h">{{ currentItem.title }}</h4>
      <div class="ach-intro-meta">
        <span>来源：{{ currentItem.source }}</span>
        <span class="dot">·</span>
        <span>时间：{{ currentItem.date }}</span>
      </div>
      <div class="ach-intro-divider"></div>
      <p class="ach-intro-text" v-for="(p, i) in currentItem.paragraphs" :key="i">
        {{ p }}
      </p>
      <a href="#" class="ach-intro-more">查看详情&gt;&gt;</a>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ activeIdx: { type: Number, default: 0 } })
const items = [
  {
    title: '护理学科建设取得标志性突破',
    source: '教务处',
    date: '2026-07-02',
    paragraphs: [
      '我院护理学科团队围绕老年慢病管理与社区护理服务开展系统研究，形成一批可推广、可复制的标志性成果，填补了区域内护理学科的多项空白。',
      '相关成果在山东省科学技术奖评选中荣获二等奖 2 项、三等奖 3 项，发表 SCI 论文 18 篇，获国家发明专利授权 6 项。',
    ],
  },
  {
    title: '康复治疗技术应用成果显著',
    source: '康复医学系',
    date: '2026-06-18',
    paragraphs: [
      '康复治疗技术团队聚焦神经康复、运动损伤康复等方向开展联合攻关，研发的智能康复训练系统已在 12 家医疗机构完成应用验证。',
      '项目获省级课题立项 3 项，成果转化签约金额突破 800 万元。',
    ],
  },
  {
    title: '智慧健康养老服务模式创新',
    source: '老年保健系',
    date: '2026-05-30',
    paragraphs: [
      '面向健康养老产业重大需求，构建"医-养-护"一体化智慧健康养老服务模式，建立可推广的行业标准与人才培养体系。',
      '已为济南市 5 个社区提供技术服务，覆盖老年人群约 1.2 万人。',
    ],
  },
  {
    title: '中医药传承创新成果',
    source: '中医药学系',
    date: '2026-05-12',
    paragraphs: [
      '中医药学系在中药制剂工艺优化、传统疗法现代化等方面取得新进展，发表高水平论文 9 篇，获实用新型专利 5 项。',
    ],
  },
  {
    title: '医学检验技术研究进展',
    source: '医学检验系',
    date: '2026-04-25',
    paragraphs: [
      '医学检验系团队在快速检测、分子诊断方向实现关键技术突破，相关产品已进入临床试验阶段。',
    ],
  },
  {
    title: '药学服务能力建设',
    source: '药学系',
    date: '2026-04-08',
    paragraphs: [
      '药学系围绕临床药学服务开展系统研究，建立合理用药监测体系，相关成果获省级立项 2 项。',
    ],
  },
  {
    title: '公共卫生应急能力研究',
    source: '公共卫生系',
    date: '2026-03-20',
    paragraphs: [
      '公共卫生系聚焦突发公共卫生事件应急处置，形成决策咨询报告 3 份，获省领导批示肯定。',
    ],
  },
  {
    title: '医学影像技术应用突破',
    source: '医学影像系',
    date: '2026-03-05',
    paragraphs: [
      '医学影像系在 AI 辅助诊断、影像组学方向取得阶段性成果，发表 SCI 论文 6 篇。',
    ],
  },
]
const currentItem = computed(() => items[props.activeIdx])
</script>

<style scoped>
.ach-intro {
  background: #fff;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
}
.ach-intro-head {
  padding: 14px 18px;
  background: var(--primary);
  color: #fff;
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
  padding: 20px 22px 22px;
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
.ach-intro-h {
  font-family: var(--font-title);
  font-size: 18px;
  color: var(--primary);
  line-height: 1.55;
  margin-bottom: 10px;
  font-weight: 700;
}
.ach-intro-meta {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 12px;
}
.ach-intro-meta .dot { margin: 0 6px; }
.ach-intro-divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 12px;
}
.ach-intro-text {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.85;
  text-indent: 2em;
  margin-bottom: 8px;
}
.ach-intro-more {
  display: inline-block;
  margin-top: 12px;
  font-size: 13px;
  color: var(--accent-dark);
  align-self: flex-start;
}
.ach-intro-more:hover { text-decoration: underline; }
</style>
