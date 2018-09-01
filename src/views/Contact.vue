<template>
    <div class="contact">
        <div class="contact-content">
            <h1>Contact Me</h1>
            <form action="" class="">
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
                    <a href="">Send Message</a>
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
        width: 1060px;
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
textarea:focus,input:focus{
     border-bottom: 1px solid #000;
     transition: all 0.4s ease;
     color: #000;
}
a{
    box-shadow: inset 0 -6px #ede574;
}
a:hover{
    box-shadow: inset 0 -12px #ede574;
    transition: all 0.4s ease;
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
 @media (max-width: 1079px){
     .contact{
         &-content{
            max-width: 100%;
            padding: 0 5%;
         }
     }
    .value{
        input{
            width: 78%;
            
        }
        textarea{
            width:  90%;
            height: 40px;
        }
    }
 }
 @media (max-width: 720px){
     .contact{
         &-content{
            max-width: 100%;
            padding: 0 5%;
         }
     }
     .bg-purple {
        float: none;
     }
     .el-col-12{
         width: 100%;
     }
    .value{
        input{
            height: 40px;
        }
        textarea{
            height: 40px;
        }
    }
 }
</style>
