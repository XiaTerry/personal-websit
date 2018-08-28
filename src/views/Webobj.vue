<template>
<div>
     <div class="project-web animated fadeInDown">
        <div class="project-web-content">
           <router-view></router-view>
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
    height: 1520px;
    background: #fff;
    margin-top: 100px;
    &-content{
        text-align: left;
        width: 1020px;
        margin: 0 auto;
        height:100%;
        border-radius: 6px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.2);
    }   
}



</style>
