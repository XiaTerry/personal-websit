<template>
    <div class="contact">
        <div class="contact-content">
            <h1>Contact Me</h1>
            <form action="">
                <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div class="value">
							<input type="text" name="name" placeholder="Name *" />
						</div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div class="value">
							<input type="tel" name="tel" placeholder="Phone *" />
						</div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div class="value">
							<input type="text" name="email" placeholder="Email *" />
						</div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div class="value">
							<input type="text" name="subject" placeholder="Subject *" />
						</div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple-light">
                        <div class="value">
							<textarea name="message" placeholder="Message"></textarea>
						</div>
                    </div>
                </el-col>
            </el-row>
                <el-row>
                    <el-button size="mini">Send Message</el-button>
                </el-row>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.contact{
    padding: 180px 0;
    height: 450px;
    width: 100%;
    background: #fff;
    &-content{
        width: 1020px;
        height: 100%;
        background: #fff;
        margin: 0 auto;
        text-align: left;
    }
}
.value{
    input{
        height: 66px;
        width: 100%;
        outline: none;
        border:none;
        border-bottom: 1px solid #ccc;
    }
    textarea{
        height: 80px;
        width: 100%;
        outline: none;
        border: none;
        border-bottom:1px solid #ccc; 
        resize: none;
    }
    
}
  .bg-purple {
    // background: #d3dce6;
  }
  .bg-purple-light {
    // background: #e5e9f2;
  }
  .grid-content {
    margin: 20px 5px;
    border-radius: 4px;
    min-height: 66px;
  }
 
</style>
