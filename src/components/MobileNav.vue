<template>
<div class="mobile-nav">
    <ul>
      <li><a href="/">Features</a></li>
      <li><a href="/">Pricing</a></li>
      <li><a href="/">Resources</a></li>
    </ul>
    <hr>
    <div class="btn">
      <ul>
        <li><a href="/">Login</a></li>
      </ul>
      <button> Sign Up </button>
    </div>
  </div>
</template>

<script lang="ts">
    export default{};
</script>


<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap');
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: hsl(0, 0%, 75%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  margin-left:0px;
  //navigation style
  .mobile-nav{
      text-align: center;
      background-color: hsl(257, 27%, 26%);
      margin: 10px 0px;
      border-radius: 10px;
      padding: 20px 0;
      -webkit-box-shadow: 23px -8px 0px -12px rgba(0,0,0,0.16);
      box-shadow: 23px -8px 0px -12px rgba(0,0,0,0.16);
    .btn{
      button:hover{
          background-color: hsl(172, 75%, 73%);
        }
      button{
        margin-top:10px;
        font-family: Poppins;
        justify-content: center;
        font-size: 16px;
        color: #fff;
        height: 35px;
        width: 250px;
        border: 0;
        border-radius: 25px;
        background-color: hsl(180, 66%, 49%);
        outline: none;
        cursor: pointer;
      }
    }
    hr{
        width: 70%;
    }
    ul {
      list-style-type: none;
      margin: auto;
      padding: 0;
      li{
           padding: 10px;
        :hover{
          color:  hsl(0, 0%, 91%);
        }
      }
      a{
        text-decoration: none;
        color: hsl(0, 0%, 75%);
      }
    }
  }
}

</style>