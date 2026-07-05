<template>
  <div class="home-body">
    <PageLayout>
    <div class="top-row" :class="{ 'has-content': hasSection }">
      <AchievementVideo />
      <AchievementIntro v-if="!hasSection" />
      <ContentLoader v-else />
    </div>
    </PageLayout>
    <AchievementAwards />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../components/PageLayout.vue'
import AchievementVideo from '../components/AchievementVideo.vue'
import AchievementIntro from '../components/AchievementIntro.vue'
import AchievementAwards from '../components/AchievementAwards.vue'
import ContentLoader from '../components/ContentLoader.vue'

const route = useRoute()
const hasSection = computed(() => {
  const s = route.query.section
  return s !== undefined && s !== null && s !== ''
})
</script>

<style scoped>
.top-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
  flex: 1;
}
.top-row > :first-child {
  align-self: start;
  width: 100%;
  min-height: var(--pl-body-min-height, 400px);
}
.top-row > :last-child {
  align-self: start;
}
.top-row.has-content > :last-child {
  align-self: stretch;
  min-height: max(var(--pl-body-min-height, 400px), 85vh);
}
.home-body { display: flex; flex-direction: column; gap: 16px; }
</style>
