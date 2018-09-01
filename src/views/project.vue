<template>
    <div class="project">
        <div class="project-content" style="display:none" ref="project">
            <h1>Project</h1>
            <div class="project-small-title"><span>APP</span></div>
            <div class="project-content-app">
                <div>
                    <iframe src="dist/index.html" frameborder="0" scrolling="no" width="320" height="568"></iframe>
                </div>
            </div>
        </div>
        <div class="webobj">
            <h2>DEMO</h2>
            <span class="website-content">
                <router-link to="/css-animation">css-animation</router-link>
            </span>
            <span class="website-content">
                <router-link to="/jquery">jquery</router-link>
            </span>
        </div>
    </div>
</template>

<script>

export default {
    components:{
        // Webobj,
    },
    mounted(){
        window.onload=()=>{
            window.onresize=(e)=>{
                console.log(e);
                if(e.currentTarget.innerWidth<720){
                    this.$refs.project.style.display = 'block';
                }
                else{
                    this.$refs.project.style.display = 'none';
                }
            // console.log(this.$refs.project);
        }
        }
        
    }
}
</script>

<style lang="scss" scoped>
.project{
    width: 100%;
    height: 50px;
    padding: 100px 0;
    background: #fff;
    &-small-title{
        span{
            font-size: 18px;
        }
        span:nth-child(2){
            margin-left: 300px;
        }
    }
    &-content{
        text-align: center;
        width: 1020px;
        margin: 0 auto;
        height: 100%;
        background: #fff;
        h2{
            width: 100px;
        }
        &-app{
            // text-align: center;
            margin: 0 auto;
            width: 320px;
            min-width: 320px;
            height: 568px;
            background: #fafafa;
            border-radius: 6px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.2);
        }
    }
}

.website-content{
    margin-right: 10px;
    a:hover{
      box-shadow: inset 0 -6px #ede574;
      transition: all 0.4s ease 0s;
    }
    a{
        outline: none;
        color: #000;
        font-size: 18px;
    }
    
    
}
@media (max-width: 1079px) {
    .project{
        &-content{
            width: 100%;
            // background: #0f0;
        }
    }
}
@media (max-width: 720px) {
    .project{
        height: 700px;
    }
    .webobj{
    margin-top: 100px;
}
}
</style>
