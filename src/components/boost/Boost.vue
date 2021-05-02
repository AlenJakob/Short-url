<template>
  <div class="boost">
    <div class="content">
      <h3 class="title">Boost your links today</h3>
      <button class="btn btn-boost">Get Started</button>
    </div>
  </div>
</template>


<style scoped lang="scss">
.boost {
  overflow: hidden;
  width: 100%;
  padding: 2.5em 0;
  background: url("../../assets/images/bg-boost-desktop.svg") no-repeat center;
  background-size: cover;
}
.btn-boost {
  max-width: 200px;
  padding: 1em 2.3em;
  border-radius: 50px !important;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  width: 90%;
  margin-top: 0;
  font-size: 2em;
  color: #fff;
  @media (max-width: $desktop) {
    font-size: 1.5em;
  }
}
</style>