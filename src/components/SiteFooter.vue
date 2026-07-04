<template>
  <footer class="site-footer">
    <div class="center footer-inner">
      <div class="footer-qr-row">
        <div class="footer-qr" v-for="(qr, i) in qrs" :key="i">
          <div class="footer-qr-img">
            <img :src="qr.img" :alt="qr.label">
          </div>
          <div class="footer-qr-label">{{ qr.label }}</div>
        </div>
      </div>

      <div class="footer-info">
        <p>地址：济南市历城区港西路3636号</p>
        <p>招生咨询电话：0531-58164412 &nbsp;&nbsp; 0531-59532205 &nbsp;&nbsp; 0531-59822206</p>
        <p>党政办公室电话：0531-58238101 &nbsp;&nbsp; 传真：0531-58238201</p>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-copyright">
        Copyright © 2005-2021 &nbsp; 版权所有：济南护理职业学院
      </div>
    </div>
  </footer>
</template>

<script setup>
const qrs = [
  { img: '/qr-wechat.webp', label: '微信公众号' },
  { img: '/qr-appeal.webp', label: '学校接诉即办系统' },
  { img: '/qr-website.webp', label: '学校官网' },
  { img: '/qr-admission.webp', label: '招生小助理' },
]
</script>

<style scoped>
.site-footer {
  background: var(--primary);
  color: rgba(255,255,255,0.85);
  padding: 32px 0 0;
  margin-top: 24px;
  position: relative;
  overflow: hidden;
}
.site-footer::before {
  content: '';
  position: absolute;
  top: 50%;
  right: -60px;
  transform: translateY(-50%);
  width: 320px;
  height: 320px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><g fill='none' stroke='%23b0994a' stroke-width='0.8'><rect x='80' y='20' width='40' height='160'/><rect x='20' y='80' width='160' height='40'/></g></svg>") center / contain no-repeat;
  opacity: 0.08;
  pointer-events: none;
}
.site-footer::after {
  content: '';
  position: absolute;
  bottom: -40px;
  left: -40px;
  width: 160px;
  height: 160px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><g fill='none' stroke='%23b0994a' stroke-width='1'><rect x='80' y='20' width='40' height='160'/><rect x='20' y='80' width='160' height='40'/></g></svg>") center / contain no-repeat;
  opacity: 0.12;
  pointer-events: none;
}
.footer-inner {
  text-align: center;
  padding-bottom: 24px;
}
.footer-qr-row {
  display: flex;
  justify-content: center;
  gap: 64px;
  margin-bottom: 28px;
}
.footer-qr {
  text-align: center;
}
.footer-qr-img {
  width: 116px;
  height: 116px;
  background: #fff;
  padding: 6px;
  border: 1px solid var(--accent);
}
.footer-qr-img img {
  width: 100%;
  height: 100%;
  display: block;
}
.footer-qr-label {
  margin-top: 8px;
  font-size: 14px;
  color: rgba(255,255,255,0.85);
  font-family: var(--font-title);
  font-weight: 500;
  letter-spacing: 1px;
}
.footer-info {
  margin-bottom: 20px;
}
.footer-info p {
  font-size: 14px;
  line-height: 2;
  color: rgba(255,255,255,0.85);
}
.footer-divider {
  width: 80px;
  height: 1px;
  background: rgba(255,255,255,0.3);
  margin: 0 auto 16px;
}
.footer-copyright {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  font-family: var(--font-title);
  letter-spacing: 0.5px;
}
</style>
