<template>
  <div class="container">
    <div class="container-about">
      <div class="container-text-box">
        <h1 class="container-myfile">I'm Terry, 
            Web Designer & Web Developer 
            from China.
        </h1>
        <p class="container-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
          sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis iste natus error.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>
<style lang="scss" scoped>
.container{
  height: 429px;
  width: 100%;
  padding: 180px 0;
  background: #f00;
  text-align: center;
  &-mylife{
    float: left;
  }
  &-content{
    float: left;
    height: 136px;
    width: 1020px;
    margin: 20px 0 20px 0;
    font-size: 2vw;
  }
  &-text-box{
    margin: 0 auto;
    width: 1020px;
    height: 192px;
  }
}
</style>
