<template>
  <div class="cl">
    <div v-if="loading" class="cl-load">检测文件中...</div>

    <iframe v-else-if="kind === 'pdf'" :src="url" class="cl-frame"></iframe>

    <div v-else class="cl-empty">
      <div class="cl-empty-icon">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="52" rx="4" fill="none" stroke="#d0d0d0" stroke-width="2"/>
          <line x1="16" y1="24" x2="64" y2="24" stroke="#e8e8e8" stroke-width="2"/>
          <line x1="24" y1="30" x2="56" y2="30" stroke="#e8e8e8" stroke-width="1.5"/>
          <line x1="24" y1="36" x2="48" y2="36" stroke="#e8e8e8" stroke-width="1.5"/>
          <line x1="16" y1="46" x2="52" y2="46" stroke="#e8e8e8" stroke-width="1.5"/>
          <circle cx="56" cy="52" r="16" fill="none" stroke="#d0d0d0" stroke-width="2"/>
          <line x1="66" y1="62" x2="74" y2="70" stroke="#d0d0d0" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="cl-empty-code">404</p>
      <p class="cl-empty-msg">该资源文件暂未上传</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const dirMap = {
  home: '成果导览',
  application: '申报书',
  report: '成果报告',
  'awards-history': '成果曾获奖励',
  landmark: '标志性成果',
  attachments: '成果导览',
  'achievement-video': '',
}

const tabFiles = {
  application: [
    '全人健康·全链协同·处方育人：医药卫生类高职院校健康教育体系的创新与实践',
    '',
    '',
  ],
  'awards-history': [
    '1.2026年职业教育省级教学成果-特等',
    '2.首批全国健康学校建设单位',
    '3.首批全国急救教育试点学校',
    '4.2025年世界职业院校技能大赛总决赛争夺赛：挺直中国脊梁—青少年脊柱侧弯全周期智慧方案',
    '5.2024年世界职业院校技能大赛总决赛争夺赛：智慧良钥-认知症老人的整体照护',
  ],
  attachments: [
    '一、领导认可与批示',
    '二、应用证明',
    '三、成果推广',
    '四、制度建设',
    '五、标志性成果',
    '六、师生获奖',
    '七、教科研成果',
    '八、标准专利软著',
  ],
}

const sectionFiles = [
  '一、领导认可与批示',
  '二、应用证明',
  '三、成果推广',
  '四、制度建设',
  '五、标志性成果',
  '六、师生获奖',
  '七、教科研成果',
  '八、标准专利软著',
]

const dirName = computed(() => {
  const name = route.name?.toString() || ''
  return dirMap[name] || name
})

const subName = computed(() => {
  const tab = route.query.tab
  if (tab !== undefined && tab !== null && tab !== '') {
    const idx = Number(tab)
    const files = tabFiles[route.name?.toString() || '']
    if (files && files[idx] !== undefined) return files[idx]
  }

  const section = route.query.section
  if (section !== undefined && section !== null && section !== '') {
    const idx = Number(section)
    if (!isNaN(idx) && sectionFiles[idx] !== undefined) return sectionFiles[idx]
    return section
  }

  const defaults = {
    report: '成果报告最终版',
    landmark: '标志性成果',
    application: '全人健康·全链协同·处方育人：医药卫生类高职院校健康教育体系的创新与实践',
  }
  const n = route.name?.toString() || ''
  return defaults[n] || 'index'
})

const basePath = computed(() => {
  const d = dirName.value
  const s = subName.value
  if (!d) return ''
  return `/docs/${d}/${s}`
})

const kind = ref('')
const url = ref('')
const loading = ref(true)

let loadId = 0

async function checkFile(path) {
  try {
    const r = await fetch(path + '?_t=' + Date.now(), { method: 'HEAD' })
    if (r.ok && !r.headers.get('content-type')?.includes('text/html')) return true
  } catch (_) {}
  return false
}

async function load() {
  const id = ++loadId
  loading.value = true
  kind.value = ''
  url.value = ''

  const bp = basePath.value
  if (!bp) {
    loading.value = false
    kind.value = 'none'
    return
  }

  for (const ext of ['pdf', 'docx']) {
    const u = bp + '.' + ext
    if (await checkFile(u)) {
      if (id !== loadId) return
      kind.value = ext
      url.value = u
      loading.value = false
      return
    }
  }

  if (id !== loadId) return
  loading.value = false
  kind.value = 'none'
}

watch([dirName, subName], () => { load() }, { immediate: true })
</script>

<style scoped>
.cl { width: 100%; min-width: 0; flex: 1; display: flex; flex-direction: column; min-height: 85vh; }
.cl-load {
  display: flex; align-items: center; justify-content: center;
  min-height: 400px; font-size: 15px; color: var(--text-muted);
  background: #fff; border: 1px solid var(--border); flex: 1;
}
.cl-frame { width: 100%; border: none; display: block; flex: 1; min-height: 400px; }
.cl-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 400px; gap: 12px;
  background: #fafafa; border: 1px solid var(--border); flex: 1;
}
.cl-empty-icon { opacity: 0.35; margin-bottom: 4px; }
.cl-empty-code { font-size: 56px; font-weight: 700; color: var(--primary); opacity: 0.2; line-height: 1; }
.cl-empty-msg { font-size: 16px; color: var(--text-muted); letter-spacing: 1px; }
</style>
