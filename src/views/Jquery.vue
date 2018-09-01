<template>
    <div>
        <el-row>
            <el-col :span="24" class="animated fadeInDown">
                <div class="grid-content bg-purple active"><iframe src="battery_loader/battery_loader.html" frameborder="0" scrolling="no" width="100%" height="100%"></iframe></div>
            </el-col>
        </el-row>
        <el-row>
             <el-col :span="24" class="animated rotateInDownRight">
                <div class="grid-content bg-purple-light active"><iframe src="slideshow/slideshow.html" frameborder="0" scrolling="no" width="100%" height="100%"></iframe></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="animated fadeInDown">
                <div class="grid-content bg-purple active"><iframe src="slideshow/slideshow3.html" frameborder="0" scrolling="no" width="100%" height="100%"></iframe></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="animated rotateInDownRight">
                <div class="grid-content bg-purple-light active"><iframe src="tab/tab_filter1.html" frameborder="0" scrolling="no" width="100%" height="100%"></iframe></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.active{
    :hover{
        cursor: pointer;
        transform: translateY(-4px);
        animation: transform 1s ease;
        box-shadow: #000 0 0 20px;
    }
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
   .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    height: 440px;
    margin: 40px 10px 0 20px;
  }
  .grid-content:hover{
      cursor:pointer;
  }
</style>
