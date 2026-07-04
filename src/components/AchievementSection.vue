<template>
  <section class="achievement">
    <div class="center achievement-inner">
      <div class="achievement-left">
        <div class="all-title">
          <div class="all-title-main" style="display:flex;align-items:center;">
            <div class="tab-item" :class="{ active: achTab === 'funded' }" @click="achTab = 'funded'">
              资助成果
              <div class="all-box" v-show="achTab === 'funded'"></div>
            </div>
            <div class="info-line"></div>
            <div class="tab-item" :class="{ active: achTab === 'selected' }" @click="achTab = 'selected'">
              成果选编
              <div class="all-box" v-show="achTab === 'selected'"></div>
            </div>
          </div>
          <a href="#" class="all-title-more">更多>></a>
        </div>

        <div v-if="achTab === 'funded'" class="ach-content">
          <div class="ach-cards">
            <div class="ach-card" v-for="(item, i) in fundedCards" :key="i">
              <a :href="item.link" target="_blank">
                <div class="ach-card-img"><img :src="item.img" :alt="item.title"></div>
                <div class="ach-card-title hovRuglar">{{ item.title }}</div>
                <div class="ach-card-date gold">{{ item.date }}</div>
              </a>
            </div>
          </div>
          <ul class="ach-list">
            <li v-for="(item, i) in fundedList" :key="i">
              <a :href="item.link" target="_blank">
                <span class="marker"></span>
                <span class="info-text hovBlod">{{ item.title }}</span>
                <span class="date">{{ item.date }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div v-if="achTab === 'selected'" class="ach-content">
          <div class="ach-cards">
            <div v-for="(item, i) in selectedCards" :key="i" class="ach-card">
              <a :href="item.link" target="_blank">
                <div class="ach-card-img"><img :src="item.img" :alt="item.title"></div>
                <div class="ach-card-title hovRuglar">{{ item.title }}</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="achievement-right">
        <div class="all-title">
          <div class="all-title-main" style="display:flex;align-items:center;">
            <div class="tab-item" :class="{ active: jrnTab === 'journal' }" @click="jrnTab = 'journal'">
              学术期刊
              <div class="all-box" v-show="jrnTab === 'journal'"></div>
            </div>
            <div class="info-line"></div>
            <div class="tab-item" :class="{ active: jrnTab === 'forum' }" @click="jrnTab = 'forum'">
              学术论坛
              <div class="all-box" v-show="jrnTab === 'forum'"></div>
            </div>
          </div>
          <a href="#" class="all-title-more">更多>></a>
        </div>

        <div v-if="jrnTab === 'journal'" class="journal-content">
          <div class="journal-icons">
            <a href="#">
              <div class="journal-icon">
                <img src="https://via.placeholder.com/80x80/1a3c6e/fff?text=FR" alt="">
              </div>
              <div class="journal-name">Fundamental<br>Research</div>
            </a>
            <a href="#">
              <div class="journal-icon">
                <img src="https://via.placeholder.com/80x80/1a3c6e/fff?text=SCF" alt="">
              </div>
              <div class="journal-name">济南护理职业学院<br>学报</div>
            </a>
          </div>
          <ul class="journal-list">
            <li v-for="(item, i) in journalItems" :key="i">
              <a :href="item.link">
                <div class="journal-item-title hovBlod">{{ item.title }}</div>
                <div class="line"></div>
              </a>
            </li>
          </ul>
        </div>

        <div v-if="jrnTab === 'forum'" class="forum-content">
          <ul>
            <li v-for="(item, i) in forumItems" :key="i">
              <a :href="item.link">
                <span class="marker"></span>
                <span class="info-text hovBlod">{{ item.title }}</span>
                <span class="date">{{ item.date }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const achTab = ref('funded')
const jrnTab = ref('journal')

const fundedCards = [
  { img: 'https://picsum.photos/seed/ach1/260/160', title: '我校科研团队在超高温合金设计制备方面取得进展', date: '07-02', link: '#' },
  { img: 'https://picsum.photos/seed/ach2/260/160', title: '高效自旋流产生机制研究领域取得进展', date: '07-02', link: '#' },
]
const fundedList = [
  { title: '二维半导体光学制冷研究领域取得新进展', date: '07-02', link: '#' },
  { title: '低维材料皮米形变无损探测领域取得进展', date: '06-24', link: '#' },
  { title: '构建人类衰老的多模态时钟研究方面取得进展', date: '06-16', link: '#' },
  { title: '高效稳定蓝光发光二极管领域取得进展', date: '06-16', link: '#' },
  { title: '东亚直立人演化研究方面取得新进展', date: '06-12', link: '#' },
]
const selectedCards = [
  { img: 'https://picsum.photos/seed/sel1/200/130', title: '发现全量子效应调控的新型物态', link: '#' },
  { img: 'https://picsum.photos/seed/sel2/200/130', title: '镍基超导电性的实验发现', link: '#' },
  { img: 'https://picsum.photos/seed/sel3/200/130', title: '局部域的拓扑循环同调', link: '#' },
  { img: 'https://picsum.photos/seed/sel4/200/130', title: '揭示日冕全局性磁场的演化', link: '#' },
]

const journalItems = [
  { title: '于晓辉等：为什么这种硼化物更硬更稳？答案藏在电子填充上', link: '#' },
  { title: '冯建东等：月球尘埃揭秘——显微镜"看清"月球磁场微观遗迹', link: '#' },
  { title: '王科等：谁该被纳入？碳排放企业准入阈值优化', link: '#' },
  { title: '刘源等：破解耐药质粒广泛流行传播的秘密', link: '#' },
  { title: '曲申等：复杂网络揭示红树林生态变迁的风险传导机制', link: '#' },
]

const forumItems = [
  { title: '第10期学术论坛"人工智能与数字经济"在济南召开', date: '05-14', link: '#' },
  { title: '第9期学术论坛（青年）"碳中和关键技术"成功举办', date: '05-13', link: '#' },
  { title: '第8期学术论坛"数智时代的经济计量理论"召开', date: '04-01', link: '#' },
  { title: '第7期学术论坛（青年）"消费决策机理与行为优化"召开', date: '03-31', link: '#' },
  { title: '第6期学术论坛"低空经济基础理论和实践"召开', date: '03-27', link: '#' },
]
</script>

<style scoped>
.achievement { padding: 30px 0; }
.achievement-inner { display: flex; gap: 30px; }
.achievement-left { flex: 1; }
.achievement-right { width: 400px; flex-shrink: 0; }
.tab-item { display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 18px; font-weight: 400; }
.tab-item.active { font-weight: 700; }
.tab-item .all-box { background: #c00; }
.ach-content { margin-top: 16px; }
.ach-cards { display: flex; gap: 16px; }
.ach-card { width: 50%; }
.ach-card-img { border-radius: 4px; overflow: hidden; }
.ach-card-img img { width: 100%; height: 160px; object-fit: cover; display: block; }
.ach-card-title { margin-top: 8px; font-size: 14px; line-height: 1.4; }
.ach-card-date { margin-top: 4px; font-size: 13px; }
.ach-list { margin-top: 12px; }
.ach-list li { padding: 5px 0; border-bottom: 1px dotted #eee; }
.ach-list li a { display: flex; align-items: flex-start; gap: 8px; }
.journal-content { margin-top: 16px; }
.journal-icons { display: flex; gap: 32px; margin-bottom: 16px; }
.journal-icons a { text-align: center; }
.journal-icon { width: 80px; height: 80px; border-radius: 8px; overflow: hidden; margin: 0 auto 8px; }
.journal-icon img { width: 100%; height: 100%; object-fit: cover; }
.journal-name { font-size: 13px; color: #1a3c6e; font-weight: 600; line-height: 1.3; }
.journal-list li { padding: 0; }
.journal-item-title { font-size: 13px; padding: 10px 0; color: #666; line-height: 1.5; }
.line { height: 1px; background: #eee; }
.forum-content { margin-top: 16px; }
.forum-content li { padding: 6px 0; border-bottom: 1px dotted #eee; }
.forum-content li a { display: flex; align-items: flex-start; gap: 8px; }
</style>
