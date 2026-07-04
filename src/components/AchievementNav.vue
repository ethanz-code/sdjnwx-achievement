<template>
  <aside class="ach-nav">
    <div class="ach-nav-head">
      <h3 class="ach-nav-title">成果导览</h3>
    </div>
    <ul class="ach-nav-list">
      <li
        v-for="(item, i) in items"
        :key="i"
        :class="{ active: activeIdx === i }"
        @click="$emit('select', i)"
      >
        <span class="ach-nav-checkbox"></span>
        <span class="ach-nav-label">{{ item.label }}</span>
      </li>
    </ul>
  </aside>
</template>

<script setup>
defineProps({ activeIdx: { type: Number, default: 0 } })
defineEmits(['select'])
const items = [
  { label: '领导认可与指示' },
  { label: '应用证明' },
  { label: '成果指示' },
  { label: '标准专利软著' },
  { label: '制度建设' },
  { label: '标志性成果' },
  { label: '师生获奖' },
  { label: '研发成果' },
]
</script>

<style scoped>
.ach-nav {
  background: #fff;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
}
.ach-nav-head {
  padding: 14px 18px;
  background: var(--primary);
  color: #fff;
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
.ach-nav-list { padding: 6px 0; flex: 1; }
.ach-nav-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 18px;
  font-size: 14px;
  color: var(--text-secondary);
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: var(--transition);
}
.ach-nav-list li:hover {
  background: var(--bg-soft);
  color: var(--primary);
  border-left-color: var(--accent);
}
.ach-nav-list li.active {
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
  transition: var(--transition);
}
.ach-nav-list li:hover .ach-nav-checkbox {
  border-color: var(--accent);
}
.ach-nav-list li.active .ach-nav-checkbox {
  border-color: var(--accent);
}
.ach-nav-list li.active .ach-nav-checkbox::after {
  content: '';
  position: absolute;
  left: 2px; top: 0px;
  width: 4px; height: 8px;
  border-right: 2px solid var(--accent);
  border-bottom: 2px solid var(--accent);
  transform: rotate(45deg);
}
.ach-nav-label { flex: 1; line-height: 1.4; }
</style>
