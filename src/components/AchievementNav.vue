<template>
  <aside class="ach-nav">
    <div class="ach-nav-head">
      <h3 class="ach-nav-title">{{ config.title }}</h3>
    </div>
    <ul class="ach-nav-list">
      <template v-for="(item, i) in config.items" :key="i">
        <li
          :class="{ active: isActive(item), parent: item.children?.length > 0 }"
          @click="onSelect(item)"
        >
          <span class="ach-nav-checkbox"></span>
          <span class="ach-nav-label">{{ item.label }}</span>
          <span v-if="item.children?.length" class="ach-nav-toggle" @click.stop="toggle(i)">{{ expanded[i] ? '−' : '+' }}</span>
        </li>
        <li
          v-for="(child, j) in item.children" :key="`${i}-${j}`"
          v-show="expanded[i]"
          class="ach-nav-child"
          :class="{ active: isActive(item) }"
          @click="onSelect(item)"
        >
          <span class="ach-nav-child-line"></span>
          <span class="ach-nav-label">{{ child.label }}</span>
        </li>
      </template>
    </ul>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const expanded = ref({})

function toggle(i) {
  expanded.value[i] = !expanded.value[i]
}

function ensureExpanded(item) {
  const idx = config.value.items.indexOf(item)
  if (idx !== -1) expanded.value[idx] = true
}

const configMap = {
  home: {
    title: '成果导览',
    queryKey: 'section',
    queryBase: '/',
    items: [
      { label: '领导认可与批示', sectionIdx: 0, children: [] },
      { label: '应用证明', sectionIdx: 1, children: [] },
      { label: '成果推广', sectionIdx: 2, children: [
        { label: '经验介绍' },
        { label: '媒体报道' },
        { label: '社会服务' },
      ]},
      { label: '标准专利软著', sectionIdx: 7, children: [
        { label: '标准' },
        { label: '专利软著' },
      ]},
      { label: '制度建设', sectionIdx: 3, children: [
        { label: '相关文件' },
        { label: '社会组织' },
      ]},
      { label: '标志性成果', sectionIdx: 4, children: [] },
      { label: '师生获奖', sectionIdx: 5, children: [
        { label: '大赛获奖' },
        { label: '教学荣誉' },
        { label: '典型案例' },
      ]},
      { label: '教科研成果', sectionIdx: 6, children: [
        { label: '教科研项目' },
        { label: '论文' },
        { label: '教材专著' },
      ]},
    ],
  },
  application: {
    title: '申报书',
    queryKey: 'tab',
    queryBase: '/application',
    items: [
      { label: '成果简介', path: '/application?tab=0', children: [] },
      { label: '主要完成人情况', path: '/application?tab=1', children: [] },
      { label: '主要完成单位情况', path: '/application?tab=2', children: [] },
    ],
  },
  report: {
    title: '成果报告',
    items: [
      { label: '成果报告', path: '/report', children: [] },
    ],
  },
  'awards-history': {
    title: '成果曾获奖励',
    queryKey: 'tab',
    queryBase: '/awards-history',
    items: [
      { label: '2026年职业教育省级教学成果', path: '/awards-history?tab=0', children: [] },
      { label: '首批全国健康学校建设单位', path: '/awards-history?tab=1', children: [] },
      { label: '首批全国急救教育试点学校', path: '/awards-history?tab=2', children: [] },
      { label: '2025年世界职业院校技能大赛总决赛争夺赛金奖', path: '/awards-history?tab=3', children: [] },
      { label: '2024年世界职业院校技能大赛总决赛争夺赛金奖', path: '/awards-history?tab=4', children: [] },
    ],
  },
  landmark: {
    title: '标志性成果',
    items: [
      { label: '标志性成果', path: '/landmark', children: [] },
    ],
  },
  attachments: {
    title: '附件材料',
    queryKey: 'tab',
    queryBase: '/attachments',
    items: [
      { label: '领导认可与批示', path: '/attachments?tab=0', children: [] },
      { label: '应用证明', path: '/attachments?tab=1', children: [] },
      { label: '成果推广', path: '/attachments?tab=2', children: [] },
      { label: '制度建设', path: '/attachments?tab=3', children: [] },
      { label: '标志性成果', path: '/attachments?tab=4', children: [] },
      { label: '师生获奖', path: '/attachments?tab=5', children: [] },
      { label: '教科研成果', path: '/attachments?tab=6', children: [] },
      { label: '标准专利软著', path: '/attachments?tab=7', children: [] },
    ],
  },
  'achievement-video': {
    title: '成果视频',
    items: [
      { label: '成果视频', path: '/achievement-video', children: [] },
    ],
  },
}

const routeName = computed(() => route.name?.toString() || 'home')
const config = computed(() => configMap[routeName.value] || configMap.home)

function isActive(item) {
  if (item.sectionIdx !== undefined) {
    const v = route.query.section
    if (v === undefined || v === null || v === '') return false
    return Number(v) === item.sectionIdx
  }
  if (item.path) {
    return route.fullPath === item.path
  }
  return false
}

function onSelect(item) {
  if (item.path) {
    router.push(item.path)
  } else if (item.sectionIdx !== undefined) {
    if (item.children?.length) ensureExpanded(item)
    const base = config.value.queryBase || '/'
    if (isActive(item)) {
      router.push(base)
    } else {
      router.push(`${base}?section=${item.sectionIdx}`)
    }
  }
}
</script>

<style scoped>
.ach-nav {
  background: #fff;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 190px);
}
.ach-nav-head {
  padding: 14px 18px;
  background: var(--primary);
  color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.ach-nav-title {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 3px;
  position: relative;
  padding-bottom: 8px;
}
.ach-nav-title::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 36px;
  height: 3px;
  background: var(--accent);
}
.ach-nav-list {
  padding: 6px 0;
  flex: 1;
  overflow-y: auto;
}
.ach-nav-list > li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 18px;
  font-size: 17px;
  color: var(--text-secondary);
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.ach-nav-list > li:hover {
  background: var(--bg-soft);
  color: var(--primary);
  border-left-color: var(--accent);
}
.ach-nav-list > li.active {
  background: var(--bg-soft);
  color: var(--primary);
  font-weight: 700;
  border-left-color: var(--accent);
}
.ach-nav-checkbox {
  width: 14px;
  height: 14px;
  border: 1.5px solid #b5b5b5;
  background: #fff;
  flex-shrink: 0;
  position: relative;
  transition: border-color 0.15s;
}
.ach-nav-list > li:hover .ach-nav-checkbox {
  border-color: var(--accent);
}
.ach-nav-list > li.active .ach-nav-checkbox {
  border-color: var(--accent);
}
.ach-nav-list > li.active .ach-nav-checkbox::after {
  content: '';
  position: absolute;
  left: 2px; top: 0px;
  width: 4px; height: 8px;
  border-right: 2px solid var(--accent);
  border-bottom: 2px solid var(--accent);
  transform: rotate(45deg);
}
.ach-nav-label { flex: 1; line-height: 1.4; }
.ach-nav-toggle {
  width: 18px; height: 18px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 3px;
  flex-shrink: 0;
  user-select: none;
  transition: var(--transition);
}
.ach-nav-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.ach-nav-child {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px 8px 44px;
  font-size: 15px;
  color: var(--text-muted);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.ach-nav-child:hover {
  background: var(--bg-soft);
  color: var(--primary);
}
.ach-nav-child.active {
  color: var(--primary);
  font-weight: 600;
}
.ach-nav-child-line {
  width: 10px;
  height: 1px;
  background: var(--border);
  flex-shrink: 0;
}
</style>
