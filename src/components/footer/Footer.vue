<template>
  <footer class="footer">
    <div class="wrapper">
      <h3 class="logo">Shortly</h3>
      <div class="sections-wrapper">
        <div class="section">
          <h4>Features</h4>
          <ul>
            <li>Link shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div class="section">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div class="section">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="social">
          <img
            src="@/assets/icon-facebook.svg"
            alt=""
            width="20"
            height="20"
            class="icon"
          />
          <img
            src="@/assets/icon-twitter.svg"
            alt=""
            width="20"
            height="20"
            class="icon"
          />
          <img
            src="@/assets/icon-pinterest.svg"
            alt=""
            width="20"
            height="20"
            class="icon"
          />
          <img
            src="@/assets/icon-instagram.svg"
            alt=""
            width="20"
            height="20"
            class="icon"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "./src/styles/_variables.scss";
.footer {
  width: 100%;
  height: 300px;
  background: $veryDarkViolet;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
  padding: 10px;
}

.logo {
  color: #fff;
  font-size: 30px;
  margin: 0;
}

.icon {
  padding: 0 10px;
}

.sections-wrapper {
  display: flex;
  width: 65%;
  justify-content: space-between;
}

.section {
  display: flex;
  flex-direction: column;
  color: $grayishViolet;
}

.social {
  display: flex;
}

ul {
  list-style-type: none;
  text-align: left;
  margin: 0;
  padding: 0;
}

li {
  padding: 4px 0;
  font-size: 12px;
}

h4 {
  margin: 0;
  margin-bottom: 10px;
  text-align: left;
  color: #fff;
  font-size: 14px;
}
</style>
