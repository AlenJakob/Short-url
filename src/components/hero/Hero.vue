<template>
  <div class="container">
    <div class="img"></div>
    <div class="hero">
      <div class="content">
        <h1 class="title">More than just shorter links</h1>
        <p class="article">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button class="btn btn-hero">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  margin: 5em 0;
  width: 100%;
  background: #fff;
  height: 500px;
  display: flex;
  justify-content: center;
  padding-bottom: 8em;
}
.hero {
  width: 90%;
  max-width: 1000px;
  display: flex;
}
.content {
  padding-top: 2em;
  max-width: 600px;
  text-align: left;
  color: #34313a;
  & .title {
    margin-bottom: unset;
    font-size: 3em;
    line-height: 1.1em;
  }
  & .article {
    margin-top: 0.2em;
    font-size: 1.2em;
    color: #9e9aa7;
  }
}
.img {
  position: absolute;
  right: 0;
  width: 670px;
  height: 460px;
  background: url("../../assets/images/illustration-working.svg") no-repeat;

  background-size: cover;
}
.btn-hero {
  margin-top: 1em;
  padding: 1em 2.3em;
  border-radius: 30px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
}
</style>