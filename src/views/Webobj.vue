<template>
<div>
     <div class="project-web animated fadeInDown">
        
        <div class="project-web-content">
               <router-view/>
         </div>
         
    </div>
     
</div>
    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.project-web{
    width: 100%;
    height: 700px;
    background: #fff;
    // padding: 100px 0;
    margin-top: 100px;
    &-content{
        text-align: left;
        width: 100%;
        margin: 0 auto;
        height: 100%;
        // height: 667px;
        // background: #fafafa;
        border-radius: 6px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.2);
    }
    
}
.project-web{
    // margin-top: 667px;
}
.applet{
    margin-top: -60px;
    float: right;
}

</style>
