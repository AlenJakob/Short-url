<template>
  <div class="hero">
    <div class="content">
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing
      </p>
      <button class="btn">Get Started</button>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hero {
  margin: 5em 0;
  width: 100%;
  padding-bottom: 2em;
  background: white;
  display: flex;
}
.content {
  flex-grow: 1;
}
.img {
  height: 400px;
  background: url("../../assets/images/illustration-working.svg") no-repeat;
  background-size: cover;
  flex-basis: 100%;
  flex-grow: 1;
}
</style>