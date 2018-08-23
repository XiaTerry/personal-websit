<template>
<div class="whatido">
    <div class="whatido-fw">
        <div>
            <h2 class="whatido-title">What I Do</h2>
        </div>
        <div class="whatido-content1">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <i class="el-icon-edit"></i>
                    </div>
                </el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
        <div class="whatido-content2">
             <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
    </div>
</div>
 
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .whatido{
        width: 100%;
        height: 600px;
        background: #f0f;
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
            background: #ff0;
            margin: 0 auto;
        }
        &-content1{
            margin-bottom: 30px;
        }
    }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 200px;
  }
  

</style>
