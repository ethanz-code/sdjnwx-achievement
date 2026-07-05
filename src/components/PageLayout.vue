<template>
  <div class="pl">
    <div class="pl-side" ref="sideRef">
      <AchievementNav />
    </div>
    <div class="pl-body" ref="bodyRef">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import AchievementNav from './AchievementNav.vue'

const sideRef = ref(null)
const bodyRef = ref(null)

function syncHeight() {
  if (!sideRef.value || !bodyRef.value) return
  const h = sideRef.value.offsetHeight
  bodyRef.value.style.minHeight = h + 'px'
  bodyRef.value.style.setProperty('--pl-body-min-height', h + 'px')
}

onMounted(() => {
  nextTick(() => {
    syncHeight()
    setTimeout(syncHeight, 300)
  })
})
</script>

<style scoped>
.pl {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.pl-side { width: 220px; flex-shrink: 0; }
.pl-body { flex: 1; min-width: 0; display: flex; flex-direction: column; }
</style>
