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
    height: 2540px;
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
@media (max-width: 1079px) {
    .project-web{
        &-content{
            width: 100%;
            // background: #f00;
            margin: 5% 0;
        }
    }
    overflow: hidden;
}
@media (max-width: 720px) {
    .project-web{
        height: 4940px;
        &-content{
            // width: 100%;
            height: 100%;
            // background: #f00;
            margin: 5% 0;
        }
    }
}

</style>
