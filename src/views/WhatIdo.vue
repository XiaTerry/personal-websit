<template>
<div class="whatido">
    <div class="whatido-fw">
        <div>
            <h2 class="whatido-title">What I Do</h2>
        </div>
        <div :class="['whatido-content1',isAct == true?'animated fadeInDown':'']">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="iconfont">
                            <i class="el-icon-edit icon"></i>
                        </div>
                        <div class="whatido-content1-name">UI/UX DESIGN</div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">
                        <div class="iconfont">
                            <i class="el-icon-edit icon"></i>
                        </div>
                        <div class="whatido-content1-name">BRAND IDENTITY</div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="iconfont">
                            <i class="el-icon-edit icon"></i>
                        </div>
                        <div class="whatido-content1-name">WEB DESIGN</div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div :class="['whatido-content2',isAct == true?'animated fadeInUp':'']">
             <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="iconfont">
                            <i class="el-icon-edit icon"></i>
                        </div>
                        <div class="whatido-content1-name">MOBILE APPS</div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">
                        <div class="iconfont">
                            <i class="el-icon-edit icon"></i>
                        </div>
                        <div class="whatido-content1-name">ANALYTICS</div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="iconfont">
                            <i class="el-icon-edit icon"></i>
                        </div>
                        <div class="whatido-content1-name">PHOTOGRAPHY</div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </el-col>
            </el-row>
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
        if(window.scrollY>=1400){
          this.isAct = true;
        }else{
          this.isAct = false;
        }
      });
    window.onresize=()=>{
        console.log(this.$children[0].$el.span);
    }
  }
}
</script>
<style lang="scss" scoped>
    .whatido{
        width: 100%;
        height: 600px;
        background: #f5f5f5;
        text-align: center;
        padding: 180px 0;
        &-title{
            width: 1020px;
            height: 44px;
            text-align:left;
            margin-bottom: 30px;
        }
        &-fw{
            width: 1020px;
            height: 554px;
            margin: 0 auto;
        }
        &-content1{
            margin-bottom: 30px;
            &-name{
            font-size: 20px;
            color: #000;
            padding-bottom: 10px;
        }
        }
        
    }
  .grid-content {
    text-align: left;
    border-radius: 4px;
    min-height: 200px;
    p{
      color: #9ca3ad;  
    }
  }
  .icon{
    margin-top: 10px;
    text-align: center;
    line-height: 44px;
    height: 44px;
    width: 33px;
    font-size: 20px;
    border: 1px solid #000;
  }
  .iconfont{
    text-align: left;
  }
@media (max-width: 1079px){
    .whatido{
        &-fw{
            width: 100%;
        }
        &-title{
            margin-left:5% ;
        }
        &-content1,&-content2{
            margin: 0 5%;
        }
    }
}
</style>
