<template>
  <div id="log_in">
      <div class="wrapper">
          <div class="title_wrapper">
              <div class="big">{{data.title_big}}</div>
              <div class="small">{{data.title_small}}</div>
          </div>
          <div class="input_wrapper">
              <input type="text"  placeholder="支持邮箱、手机登录"/>
              <input type="password" placeholder="密码"/>
              <div class="btn enter"><a href="#">立即登录</a></div>
              <div class="btn_wrapper">
                  <span><a href="#">忘记密码？</a></span>
                  <span><a href="#">员工登录入口</a></span>
              </div>
              <div class="btn register"><a href="#">新用户注册</a></div>
          </div>
          <div class="other_enter_wrapper">
              <div class="title">第三方社交网络登录</div>
              <div class="wrapper1">
                <span><a href="#"><img src="./qq.png">QQ账号登录</a></span>
                <span class="center"><a href="#"><img src="./微信.png">微信账号登录</a></span>
                <span><a href="#"><img src="./微博 (1).png">微博账号登录</a></span>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    props: ["header_show"],
    data() {
        return {
            data: {
                title_big: "用户登录",
                title_small: "欢迎登录四方伟业，登录您可进行产品资料下载。",
                other_enter_data: [{content: "QQ账号登录"},{content: "微博账号登录"},{content: "微信账号登录"}]
            }
        }
    },
    created() {
    this.header_show.is = false
  }
}
</script>
<style lang="less"  type="text/less">
#log_in{
    width: 100%;
    height: 900px;
    background: url("http://www.sefonsoft.com/Public/Home/default/images/register/login-bg.jpg") no-repeat center center;
    .wrapper{
        margin-left: 15%;
        padding-top: 150px;
        .title_wrapper{
            margin-bottom: 60px;
            color: #fff;
            .big{
                font-size: 40px;
                font-weight: 100;
                line-height: 120px;
                letter-spacing: 4px;
            }
            .small{
                font-size: 13px;
                letter-spacing: 2px;
            }
        }
        .input_wrapper{
            input{
                // box-sizing: border-box;
                padding: 10px 40px;
                display: block;
                margin-top: 10px;
                width: 240px;
                height: 20px;
                border-radius: 3px;
                outline: none;
                font-size: 17px;
                letter-spacing: 1px;
                border: 1px solid #fff;
                &:focus{
                    border: 1px solid #02A7E3;
                    box-shadow: 1px 1px 6px rgba(2,167,227,0.3);
                }
            }
            .btn{
                width: 320px;
                height: 42px;
                background-color: #02A7E3;
                text-align: center;
                border-radius: 3px;
                a{
                    font-size: 14px;
                    letter-spacing: 1px;
                    color: #fff;
                    line-height: 42px;
                }
                &.enter{
                    margin-top: 20px;
                    &:hover{
                        background: #2c2e2e;
                    }
                }
                &.register{
                    background: #38599E;
                    &:hover{
                         background: #2c2e2e;
                    }
                }
            }
            .btn_wrapper{
                margin-top: 20px;
                margin-bottom: 20px;
                width: 320px;
                position: relative;
                span{
                    a{
                        color: #fff;
                        font-size: 13px;
                        letter-spacing: 2px;
                        &:hover{
                            color:#02A7E3;
                        }
                    }
                    &:last-child{
                       position: absolute;
                       top: 50%;
                       right: 2px;
                       transform: translateY(-50%);
                    }
                }
            }
        }
        .other_enter_wrapper{
            margin-top: 80px;
            .title{
                color: #fff;
                font-size: 15px;
                letter-spacing: 2px;
                margin-bottom: 50px;
            }
            .wrapper1{
                font-size: 0;
                img{
                    box-sizing: border-box;
                    width: 24px;
                    height: 24px;
                    vertical-align: middle;
                    background: #fff;
                    border-radius: 12px;
                    margin-right: 7px;
                }
                span{
                    display: inline-block;
                    a{
                        color: #fff;
                        font-size: 11px;
                        // letter-spacing: 1px;
                        &:hover{
                            color:#02A7E3;
                        }
                    }
                    margin-left: 40px;
                    &:first-child{
                        margin-left: 0;
                    }
                }
            }
        }
    }
}
</style>