<template>
<div>
     <header class="header">
      <div class="header-content">
        <div class="header-logo">
          <a href="#">H.</a>
        </div>
        <div class="header-top-menu">
          <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">WHAT I DO</a></li>
            <li><a href="#">WORKS</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </header>
    <div class="section">
        <div class="section-slide"></div>
        <div class="section-centrize">
            <div class="section-vertical-center">
                <div class="section-st-title">
                    <div class="section-typing-title" style="display:none">
                        <p>UI/UX Design</p>
                        <p>Brand Identity</p>
                        <p>Web Design</p>
                        <p>Mobile Apps</p>
                        <p>Analytics</p>
                        <p>Photography</p>
                    </div>
                    <span class="section-typed-title">Web Design</span>
                    <span class="section-typed-cursor">|</span>
                </div>
            </div>
        </div>
    </div>
</div>
   
</template>

<script>

export default {
    
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 35px 0;
  width: 100%;
  height: 20px;
//   background: #ff8;
  a{
    outline: none;
    color: #fff;
  }
  &-content{
    width: 100%;
    height: 25px;
  }
  &-logo{
    height: 25px;
    width: 34px;
    margin-left: 40px;
    a{
      float: left;
      font-size: 20px;
    }
  }
  &-top-menu{
    
    ul{
      margin-right: 40px;
      margin-top: -25px;
      float:right;
      li{
      float: left;
      margin-left: 40px;
    }
    }
  }
}
.section{
    &-slide{
        height: 624px;
        background:url(../assets/images/slide-bg-1.jpg) no-repeat center/cover;
    }
    &-st-title{
        position: absolute;
        height: 108px;
        width: 100%;
        margin: 20px 0 10px 0;
        color: #fff;
        bottom:200px;
        top: 300px;
    }
    &-typed-title{
        display: inline-block;
        height: 121px;
        font-size: 7.9vw;
        text-align: center;
        line-height: 121px;
    }
    &-typed-cursor{
        font-size: 7.9vw;
    }
}
</style>
