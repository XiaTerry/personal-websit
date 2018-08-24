<template>
    <div class="project">
        <div class="project-content">
            <h1>Project</h1>
            <h2>App</h2>
            <div class="project-content-app">
                
            </div>
            <div class="applet animated fadeInDown">
            <h2>Applet</h2>
                <div class="project-content-app project-content-applet">
                    
                </div>
            </div>
            <div class="project-web animated fadeInDown">
                <h2>Website</h2>
                <div class="project-content-web">
                    <iframe src="" frameborder="0" height="667" width="1020"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        
    }
}
</script>

<style lang="scss" scoped>
.project{
    width: 100%;
    height: 1662px;
    background: #fff;
    &-content{
        text-align: left;
        width: 1020px;
        margin: 0 auto;
        height: 100%;
        background: #fff;
        &-app{
            float: left;
            width: 375px;
            min-width: 375px;
            height: 667px;
            background: #fafafa;
            border-radius: 6px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.2);
        }
        &-applet{
            float: right;

        }
        &-web{
            // margin-top: 667px;
            width: 100%;
            height: 667px;
            background: #fafafa;
             border-radius: 6px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.2);
        }
    }
}
.project-web{
    margin-top: 667px;
}
.applet{
    margin-top: -60px;
    float: right;
}
</style>
