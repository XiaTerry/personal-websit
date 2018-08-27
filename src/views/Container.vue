<template>
  <div class="container">
    <div class="container-about">
      <div class="container-text-box">
        <h1 :class="['container-myfile',isAct == true?'animated fadeInDown':'']">I'm Terry, 
            Web Designer & Web Developer 
            from China.
        </h1>
        <div :class="['container-content',isAct == true?'animated fadeInDown':'']">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
          sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis iste natus error.
        </p>
        <a href="">DOWNLOAD RESUME</a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      isAct:false,
    }
  },
  mounted(){
     window.addEventListener('scroll',()=>{
        if(window.scrollY>=600){
          this.isAct = true;
        }else{
          this.isAct = false;
        }
      });
  }
};
</script>
<style lang="scss" scoped>
.container{
  height: 429px;
  width: 100%;
  padding: 180px 0;
  background: #fff;
  text-align: center;
  &-mylife{
    float: left;
    line-height: 64px;
  }
  &-about{
    width: 100%;
  }
  &-content{
    float: left;
    // height: 236px;
    width: 1020px;
    margin: 20px 0 20px 0;
    font-size: 2vw;
    color: #9ca3ad;
  }
  &-text-box{
    text-align: left;
    margin: 0 auto;
    width: 1020px;
    max-width: 1020px;
    height: 356px;
  }
}
a{
  color: #000;
  box-shadow: inset 0 -6px #ede574;
}
a:hover{
  box-shadow: inset 0 -12px #ede574;
  transition: all 0.4s ease 0s;
}
@media (max-width: 1079px){
  .container{
    &-text-box{
      max-width: 100%;
      h1{
        font-size: 28px;
        padding: 0 5%;
      }
    }
    &-content{
      p{
        padding: 0 5%;
      }
      a{
        margin-left: 5%;
      }
      width: 100%;
    }
  }
}
</style>
