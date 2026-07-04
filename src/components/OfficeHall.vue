<template>
  <section class="office-hall">
    <div class="center">
      <div class="office-inner">
        <div class="office-column">
          <div class="all-title">
            <div class="all-title-main">
              <span>办事大厅</span>
              <div class="all-box"></div>
            </div>
          </div>
          <div class="office-icons">
            <a v-for="(item, i) in officeItems" :key="i" :href="item.link" class="office-icon">
              <div class="office-icon-img">
                <img :src="item.icon" alt="">
              </div>
              <div class="office-icon-text">{{ item.label }}</div>
            </a>
          </div>
        </div>
        <div class="office-line-vert"></div>
        <div class="office-column">
          <div class="all-title">
            <div class="all-title-main">
              <span>投诉建议</span>
              <div class="all-box"></div>
            </div>
          </div>
          <div class="office-icons">
            <a v-for="(item, i) in complaintItems" :key="i" :href="item.link" class="office-icon">
              <div class="office-icon-img">
                <img :src="item.icon" alt="">
              </div>
              <div class="office-icon-text">{{ item.label }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const officeItems = [
  { icon: 'https://via.placeholder.com/48x48/1a3c6e/fff?text=RZ', label: '人才招聘', link: '#' },
  { icon: 'https://via.placeholder.com/48x48/1a3c6e/fff?text=CG', label: '成果转化服务平台', link: '#' },
  { icon: 'https://via.placeholder.com/48x48/1a3c6e/fff?text=DSJ', label: '大数据知识管理服务平台', link: '#' },
  { icon: 'https://via.placeholder.com/48x48/1a3c6e/fff?text=DH', label: '部门电话', link: '#' },
]
const complaintItems = [
  { icon: 'https://via.placeholder.com/48x48/1a3c6e/fff?text=JB', label: '科研不端行为举报系统', link: '#' },
  { icon: 'https://via.placeholder.com/48x48/1a3c6e/fff?text=XF', label: '信访在线', link: '#' },
  { icon: 'https://via.placeholder.com/48x48/1a3c6e/fff?text=JD', label: '监督投诉', link: '#' },
]
</script>

<style scoped>
.office-hall { padding: 30px 0; }
.office-inner { display: flex; gap: 40px; align-items: flex-start; }
.office-column { flex: 1; }
.office-line-vert { width: 1px; min-height: 120px; background: #ddd; flex-shrink: 0; }
.office-icons { display: flex; gap: 16px; margin-top: 20px; flex-wrap: wrap; }
.office-icon {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  width: 140px; padding: 16px 8px; border: 1px solid #eee; border-radius: 8px;
  transition: box-shadow 0.2s;
}
.office-icon:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
.office-icon-img { width: 48px; height: 48px; border-radius: 8px; overflow: hidden; }
.office-icon-img img { width: 100%; height: 100%; object-fit: cover; }
.office-icon-text { font-size: 13px; color: #333; text-align: center; line-height: 1.4; }
</style>
