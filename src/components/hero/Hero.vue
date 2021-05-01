<template>
  <div class="container">
    <div class="img"></div>
    <div class="hero">
      <div class="content">
        <h1>More than just shorter links</h1>
        <p>
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
  max-width: 600px;
  text-align: left;
}
.img {
  position: absolute;
  right: 0;
  width: 500px;
  height: 500px;
  background: url("../../assets/images/illustration-working.svg") no-repeat;
  background-size: cover;
}
.btn-hero {
  padding: 1em 3em;
  border-radius: 50px;
  font-weight: bold;
}
</style>