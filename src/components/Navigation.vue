<template>
<div class="nav">
  <img alt="Site logo" src="../assets/logo.svg" width="121" height="33" />
      <ul>
        <li><a href="/">Features</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Resources</a></li>
      </ul>
      <hr>
      <div class="btn">
          <a class="login" href="/">Login</a><br/>
        <a class="button" href="/"> Sign Up </a>
      </div>
</div>
</template>

<script lang="ts">
  export default{};
</script>


<style lang="scss">
#app {
  //navigation style
  @mixin flex{
    display: flex;
    flex-direction: row;
  }
  .nav{
      padding: 30px 100px;
    img{
      padding-top: 15px;
    }
    .btn{
      margin: 0px 0px 0px auto;
      .button:hover{
          background-color: hsl(172, 75%, 73%);
        }
      .button{
        margin-top:15px;
        vertical-align: middle;
        text-align: center;
        font-family: Poppins;
        justify-content: center;
        font-size: 16px;
        margin-left: 15px;
        padding-top: 6px;
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
    .login{
      vertical-align: middle;
      padding-top:20px;
    }
    a{
        text-decoration: none;
        color: hsl(0, 0%, 75%);
      }
    a:hover{color:  hsl(0, 0%, 9%);}
    ul {
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
  //Mobile Navigation style
  @media only screen and (min-width:920px){
    hr{
      display:none;
    }
    .nav, .btn{
      @include flex();
    }
    ul{
      @include flex();
      flex-wrap:wrap;
    }
    br{
      display: none;
    }
  }
  @media only screen and (max-width: 920px){

    .nav{
      img{
      display: none !important;
      }
      text-align: center;
      background-color: hsl(257, 27%, 26%);
      margin: 10px 0px;
      border-radius: 10px;
      padding: 20px 0;
      -webkit-box-shadow: 23px -8px 0px -12px rgba(0,0,0,0.16);
      box-shadow: 23px -8px 0px -12px rgba(0,0,0,0.16);
    .btn{
      .button:hover{
          background-color: hsl(172, 75%, 73%);
        }
      .button{
        margin-top:20px;
        text-align: center;
        margin-left:0;
        font-family: Poppins;
        justify-content: center;
        font-size: 16px;
        color: #fff;
        height: 35px;
        width: 250px ;
        border: 0;
        border-radius: 25px;
        background-color: hsl(180, 66%, 49%);
        outline: none;
        cursor: pointer;
      }
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