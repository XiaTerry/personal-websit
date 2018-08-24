<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-copy">
                <p>? 2018 HENDRIE. ALL RIGHTS RESERVED.</p>
            </div>
            <div>
                <a href=""><i class="iconfont icon-github"></i></a>
                <a href=""><i class="iconfont icon-iconsf-copy"></i></a>
                <a href=""><i class="iconfont icon-csdn"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.footer{
    height: 306px;
    width: 100%;
    background: #fafafa;
    &-content{
        height: 66px;
        width: 100%;
        padding: 120px 0;
    }
    a{
        margin-right: 40px;
        color: #ccc;
        font-size: 20px;
    }
    a:hover{
        color: #292929;
    }
}
</style>
