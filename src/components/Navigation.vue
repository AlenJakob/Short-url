<template>
  <div class="nav">
    <img alt="Site logo" src="../assets/logo.svg" width="121" height="33" />
    <ul class="links">
      <li><a href="/">Features</a></li>
      <li><a href="/">Pricing</a></li>
      <li><a href="/">Resources</a></li>
    </ul>
    <hr />
    <div class="btns">
      <a class="login" href="/">Login</a><br />
      <a class="signin" href="/"> Sign Up </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
.links {
  padding: 0;
  margin: 0;
}
//navigation style
@mixin flex {
  display: flex;
  flex-direction: row;
}
.nav {
  background: #fff;
  padding: 30px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .btns {
    display: flex;
    align-items: center;
    margin: 0px 0px 0px auto;
    .buttsigninon:hover {
      background-color: hsl(172, 75%, 73%);
    }
    .signin {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Poppins;
      font-size: 16px;
      margin-left: 15px;
      color: #fff;
      height: 35px;
      width: 100px;
      border: 0;
      border-radius: 25px;
      background-color: hsl(180, 66%, 49%);
      outline: none;
      cursor: pointer;
    }
  }
  .login {
    vertical-align: middle;
  }
  a {
    text-decoration: none;
    color: hsl(0, 0%, 75%);
  }
  a:hover {
    color: hsl(0, 0%, 9%);
  }
  ul {
    list-style-type: none;
    li {
      margin: 0px 15px 0px 10px;
      :hover {
        color: hsl(0, 0%, 9%);
      }
    }
    a {
      text-decoration: none;
      color: hsl(0, 0%, 75%);
    }
  }
}
//Mobile Navigation style
@media only screen and (min-width: 920px) {
  hr {
    display: none;
  }
  .nav,
  .btns {
    @include flex();
  }
  ul {
    @include flex();
    flex-wrap: wrap;
  }
  br {
    display: none;
  }
}
@media only screen and (max-width: $desktop) {
  .nav {
    img {
      display: none;
    }
    text-align: center;
    background-color: hsl(257, 27%, 26%);
    margin: 10px 0px;
    border-radius: 10px;
    padding: 20px 0;
    -webkit-box-shadow: 23px -8px 0px -12px rgba(0, 0, 0, 0.16);
    box-shadow: 23px -8px 0px -12px rgba(0, 0, 0, 0.16);
    .btns {
      .signin:hover {
        background-color: hsl(172, 75%, 73%);
      }
      .signin {
        font-family: Poppins;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #fff;
        width: 250px;
        border: 0;
        border-radius: 25px;
        background-color: hsl(180, 66%, 49%);
        outline: none;
        cursor: pointer;
      }
    }
  }
  hr {
    width: 70%;
  }
  ul {
    list-style-type: none;
    li {
      :hover {
        color: hsl(0, 0%, 91%);
      }
    }
    a {
      text-decoration: none;
      color: hsl(0, 0%, 75%);
    }
  }
}
</style>
