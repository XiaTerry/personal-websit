<template>
<div>
  
    <header :class="['header', isShow == false?'selected animated fadeInDown':'']" ref="head">
      <div class="header-content">
        <div class="header-logo">
          <a href="#" class="h-logo" ref="h">H.</a>
          <a href="#"><i class="iconfont icon-menu"  @click="isshow" ref="menu"></i></a>
          <a href="#"><i :class="['iconfont icon-searchclose',showMenu == true?'animated fadeInRight':'']"  @click="showClose" ref="close" style="display:none"></i></a>
        </div>
        <!-- <a href="#"></a> -->
        <div class="header-top-menu">
          <ul>
            <li v-for="(item,index) in list" :key="index"><a href="#" @click="selected(index)" :class="selectedLiIndex == index? 'selected':''">{{item}}</a></li>
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
   <div :class="['active',showMenu == true?'animated fadeInRight':'']" v-show="showMenu">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <a href="#" @click="selected(index)" :class="selectedLiIndex == index? 'selected':''">{{item}}</a>
      </li>
    </ul>
  </div>
</div>
   
</template>

<script>
export default {
    data () {
      return {
        list:['ABOUT','WHAT I DO','WORKS','BLOG','CONTACT'],
        isShow:true,
        sectionTitle:['UI/UX Design','Brand Identity','Web Design','Mobile Apps','Analytics','Photography'],
        nowIndex:0,
        index:null,
        isactive:false,
        showMenu:false,
        selectedLiIndex:-1,
      }
    }, 
    methods:{
     isshow(){
      this.showMenu = true;
      this.$refs.menu.style.display = 'none';
      this.$refs.close.style.display = 'block';
     },
     showClose(){
      this.showMenu = false;
      this.$refs.menu.style.display = 'block';
      this.$refs.close.style.display = 'none';
     },
     selected(index){
       this.selectedLiIndex = index;
     }
    },
    mounted(){
    setInterval(()=>{
      this.nowIndex++;
      if(this.nowIndex == this.sectionTitle.length){
        this.nowIndex = 0;
      }
    },1500);
        window.onresize=(e)=>{
          if(e.currentTarget.innerWidth<=1079){
            // console.log(this.$refs.menu.style);
            // console.log(e.currentTarget.innerWidth);
            this.$refs.menu.style.display = 'block';
            this.$refs.h.style.display = 'none';
          }else{
            this.$refs.menu.style.display = 'none';
            this.$refs.h.style.display = 'block';
          }
        }
       window.addEventListener('scroll',(e)=>{
        //  console.log(e.currentTarget.onresize=(e)=>{});
         
        if(window.scrollY>=10){
          this.isShow = false;
          // this.$refs.menu.style.display = 'block';
          this.$refs.menu.style.color = '#000';
          this.$refs.close.style.color = '#000';
          this.$refs.head.style.boxShadow = '#ccc 0 0 100px';
        }else{
          this.isShow = true;
          this.$refs.menu.style.color = '#fff';
          this.$refs.close.style.color = '';
          this.$refs.head.style.boxShadow = '';
        }
      });
    },
}
</script>

<style lang="scss" scoped>
.selected{
  box-shadow: inset 0 -6px #ede574;
  transition: all 0.4s ease 0s;
}
.icon-searchclose{
  font-size: 26px;
  position: absolute;
  right: 250px;
  margin: -10px 0;
  cursor: pointer;
  color: #fff;
}
 .icon-menu{
  position: absolute;
  left: 40px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-top: -10px;
  font-size: 26px;
  color: #000;
}

.active{
    position: fixed;
    bottom: 0;
    right: 0;
    // left: 0;
    top: 0;
    z-index: 999;
    background: #fff;
    ul{
      height: 100%;
      display: block;
      text-align: left;
      padding: 50px 30px;
      float: right;
      li{
        a{
          color: #000;
        }
        a:hover{
          box-shadow: inset 0 -6px #ede574;
          transition: all 0.4s ease 0s;
        }
        width: 170px;
        margin-bottom: 20px;
        float: none;
        margin-left: 0;
      }
    }
  }
.header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 35px 0;
  width: 100%;
  height: 20px;
  z-index: 999;
  // box-shadow: #ccc 0 0 100px;
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
    height: 25px;
  }
  &-logo{
    width: 34px;
    margin-left: 40px;
    .h-logo{
      float: left;
      font-size: 20px;
      display: none;
    }
  }
  &-top-menu{
    ul{
      margin-right: 40px;
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
@media (max-width: 1079px){
  .header{
    &-content{
      width: 100%;
    }
    width: 100%;
    a{
      color: #000;
    }
  }
  .header-top-menu{
    ul{
      display: none;
    }
  }
}
</style>
