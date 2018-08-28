<template>
    <div>
         <el-row>
            <el-col :span="12" class="animated fadeInDown">
                <div class="grid-content bg-purple active"><iframe src="coffee/coffee.html" frameborder="0" scrolling="no" width="480px" height="440p4"></iframe></div>
            </el-col>
            <el-col :span="12" class="animated rotateInDownRight">
                <div class="grid-content bg-purple-light active"><iframe src="comet/comet.html" frameborder="0" scrolling="no" width="480px" height="440px"></iframe></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="animated rotateInDownRight">
                <div class="grid-content bg-purple active">
                    <iframe src="cube/cube.html" frameborder="0" scrolling="no" width="480px" height="440px"></iframe>
                </div>
            </el-col>
            <el-col :span="12" class="animated zoomIn">
                <div class="grid-content bg-purple-light active"><iframe src="loader/loader.html" frameborder="0" scrolling="no" width="480px" height="440px"></iframe></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="animated lightSpeedIn">
                <div class="grid-content bg-purple active"><iframe src="square_rotate/square_rotate.html" frameborder="0" scrolling="no" width="480px" height="440px"></iframe></div>
            </el-col>
            <el-col :span="12" class="animated jello">
                <div class="grid-content bg-purple-light stripe-border"><iframe src="stripe-border/Stripe-border.html" frameborder="0" scrolling="no" width="480px" height="440px"></iframe></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.stripe-border{
    background: #d3dce6;
    height: 440px;
    :hover{
        transform: translateY(-4px);
        animation: transform 1s ease;
        box-shadow: #000 0 0 20px;
        background: #d3dce6;
    }
}
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
