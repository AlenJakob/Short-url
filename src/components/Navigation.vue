<template>
<div class="nav">
  <img alt="Site logo" src="../assets/logo.svg" width="121" height="33" />
    <ul>
      <li><a href="/">Features</a></li>
      <li><a href="/">Pricing</a></li>
      <li><a href="/">Resources</a></li>
    </ul>
    <div class="btn">
      <ul>
        <li><a href="/">Login</a></li>
      </ul>
      <button> Sign Up </button>
    </div>
  </div>
</template>

<script lang="ts">
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
  //navigation style
  .nav{
      display: flex;
      flex-direction: row;
      padding: 30px 100px;
    img{
      padding-top: 15px;
    }
    .btn{
      margin: 0px 0px 0px auto;
      display: flex;
      flex-direction: row;
      button:hover{
          background-color: hsl(172, 75%, 73%);
        }
      button{
        margin-top:10px;
        font-family: Poppins;
        justify-content: center;
        font-size: 16px;
        margin-left: 15px;
        color: #fff;
        padding: 0px;
        height: 35px;
        width: 100px;
        border: 0;
        border-radius: 25px;
        background-color: hsl(180, 66%, 49%);
        outline: none;
        cursor: pointer;
        
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      list-style-type: none;
      li{
        margin: 0px 15px 0px 10px;
        :hover{
          color:  hsl(0, 0%, 9%);
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