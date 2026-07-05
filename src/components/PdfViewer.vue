<template>
  <div class="pv">
    <iframe v-if="src" :src="src" class="pv-frame" :style="{ height }"></iframe>
    <div v-else class="pv-empty">
      <p class="pv-empty-code">404</p>
      <p class="pv-empty-msg">资源文件不存在</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, default: '' },
  height: { type: String, default: '400px' }
})
</script>

<style scoped>
.pv { width: 100%; background: #fafafa; border: 1px solid var(--border); overflow: hidden; border-radius: 4px; }
.pv-frame { width: 100%; border: none; display: block; }
.pv-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 400px; gap: 8px;
}
.pv-empty-code { font-size: 56px; font-weight: 700; color: var(--primary); opacity: 0.25; line-height: 1; }
.pv-empty-msg { font-size: 15px; color: var(--text-muted); }
</style>
