<template>
  <footer class="footer">
    <div class="wrapper">
      <h3 class="logo">
        <img src="@/assets/logo.svg" alt="" srcset="" width="121" height="33" />
      </h3>

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
  @media (max-width: $desktop) {
    height: auto;
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  @media (max-width: $desktop) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }
}

.logo {
  filter: brightness(0) invert(1);
  margin: 0;
  @media (max-width: $desktop) {
    margin-bottom: 20px;
  }
}

.icon {
  padding: 0 10px;
}

.sections-wrapper {
  display: flex;
  width: 65%;
  justify-content: space-between;
  @media (max-width: $desktop) {
    flex-direction: column;
  }
}

.section {
  display: flex;
  flex-direction: column;
  color: $grayishViolet;
  @media (max-width: $desktop) {
    padding: 10px 0;
  }
}

.social {
  display: flex;
  @media (max-width: $desktop) {
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }
}

ul {
  list-style-type: none;
  text-align: left;
  margin: 0;
  padding: 0;
  @media (max-width: $desktop) {
    text-align: center;
  }
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
  @media (max-width: $desktop) {
    text-align: center;
  }
}
</style>
