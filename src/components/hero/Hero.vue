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
    <div class="img">asfa</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hero {
  display: flex;
}
.content {
  flex-grow: 1;
}
.img {
  //   background: url("@/images/illustration-working.svg");
  height: 100vh;
  width:50%;
  background: url("../../assets/images/illustration-working.svg") no-repeat;
  flex-grow: 1;
}
</style>