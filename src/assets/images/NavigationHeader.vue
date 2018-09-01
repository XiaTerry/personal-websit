<template>
<div>
       <header :class="['header', isShow == false?'selected animated fadeInDown':'']" >
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
                    <span :class="['section-typed-title', index==nowIndex?'animated fadeInRight':'']" ref="sectionTitle">{{sectionTitle[nowIndex]}}</span>
                    <span class="section-typed-cursor">|</span>
                </div>
            </div>
        </div>
    </div>
   
</div>
   
</template>

<script>
export default {
    data () {
      return {
        isShow:true,
        sectionTitle:['UI/UX Design','Brand Identity','Web Design','Mobile Apps','Analytics','Photography'],
        nowIndex:0,
        index:null,
      }
    }, 
    methods:{
     
    },
    mounted(){
    setInterval(()=>{
      // this.index++;
      this.nowIndex++;
      if(this.nowIndex == this.sectionTitle.length){
        this.nowIndex = 0;
      }
    },1500)
    window.addEventListener('scroll',()=>{
      
        if(window.scrollY>=10){
          this.isShow = false;
        }else{
          this.isShow = true;
          
        }
      });
      
    },
    methods:{
      
    }
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
  z-index: 999;
  &.selected{
    color: #000;
    background: #fff;
    a{
      color: #000;
      letter-spacing: 0.2em;
    }
  }
  a{
    outline: none;
    color: #fff;
    letter-spacing: 0.2em;
  }
  &-content{
    width: 100%;
    height: 25px;
  }
  &-logo{
    height: 25px;
    width: 34px;
    margin-top: -4px;
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
      a:hover{
      box-shadow: inset 0 -6px #ede574;
      transition: all 0.4s ease 0s;
      }
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
