<template>
  <PageLayout>
    <div v-if="routeName === 'achievement-video'" class="vid-page">
      <AchievementVideo src="https://cdn.itcox.cn/sdts/JinanNursingNationalProject.mp4" />
    </div>
    <ContentLoader v-else />
  </PageLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../components/PageLayout.vue'
import AchievementVideo from '../components/AchievementVideo.vue'
import ContentLoader from '../components/ContentLoader.vue'

const route = useRoute()
const routeName = computed(() => route.name)
</script>

<style scoped>
.vid-page { display: flex; width: 100%; aspect-ratio: 16 / 9; }
.vid-page > * { flex: 1; }
</style>
