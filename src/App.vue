<template>
  <div id="app">
    <div class="header">
      <div class="header_wrapper">
        <div class="logo_wrapper">
          <a href="#"></a>
        </div>
        <div class="nav">
          <ul class="nav_wrapper">
            <li class="first_menu" v-for="(item,index) in menu_data" :key =index>
              <span class="name"><a href="#">{{item.title}}</a></span>
              <ul class="second_menu">
                <li class="second_menu_li" v-for="(item1,index1) in item.second_menu" :key=index1>
                  <span class="second_menu_wrapper">
                    <a href="#">
                        <div class="big">{{item1.title}}</div>
                        <div class="small">{{item1.desc}}</div>  
                    </a>
                  </span>
                  <ul class="third_menu">
                    <li v-for="(item2,index2) in item1.third_menu" :key=index2>
                      <a href="#">
                        <div class="title">{{item2.title}}</div>
                        <div class="desc">{{item2.decs}}</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="lang_btn">
          <div class="lang_btn_wrapper">
            <a href="#">English</a>
          </div>
          <div class="btn">
            <span><a href="#">中国站</a></span>
            <span><a href="#">English</a></span>
          </div>
        </div>
        <div class="enter_btn">
          <a href="#">登录/注册</a>
        </div>
      </div>
    </div>
    <div class="content">
      <home-page></home-page>
    </div>
    <div class="footer">
      <div class="content">
        <span v-for="(item,index) in footer_content.data" :key="index">
          {{item.title}}
          <ul><li v-for="(item1,index1) in item.content" :key="index1"><a href="#">{{item1}}</a></li></ul>
        </span>
      </div>
      <div class="desc">{{footer_content.desc}}</div>
    </div>
    <div class="cover_btn"></div>
  </div>
</template>

<script>
import home_page from "./components/home_page/home_page"
export default {
  name: 'App',
  data() {
    return {
      menu_data: [
        {
          title: "首页",
          second_menu: []
        },
        {
          title: "产品信息",
          second_menu: [
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            }

          ]
        },
        {
          title: "方案与案例",
          second_menu: [
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            }

          ]
        },
        {
          title: "资讯与案例",
          second_menu: [
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: []
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: []
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: []
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: []
            }

          ]
        },
        {
          title: "关于我们",
          second_menu: [
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: []
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: []
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: []
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: [
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                },
                {
                  title: "大数据基础",
                  decs: "大数据基础等顶顶顶顶得得得"
                }
              ]
            },
            {
              title: "大数据基础",
              desc: "Basic",
              third_menu: []
            }

          ]
        }
      ],
      footer_content: {
        data: [
          {
            title: "常见问题",
            content: ["产品常见问题","网站常见问题"]
          },
          {
            title: "热门动态",
            content: ["常见问题","热门动态","获取支持"]
          },
          {
            title: "获取支持",
            content: ["联系我们","在线提单"]
          },
          {
            title: "关于我们",
            content: ["客户案例","工作机会"]
          }
        ],
        desc: "成都四方伟业软件股份有限公司 © 2016 SEFONSOFT ALL RIGHTS RESERVED"
     }
    }
  },
  components: {
    homePage: home_page
  }
}
</script>
<style lang="less"  type="text/less">
#app {
  .header{
    position: fixed;
    font-size: 0;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.0980392);
    background: rgb(31, 31, 31);
    opacity: 0.95;
    z-index: 999;
    .header_wrapper{
      width: 80%;
      margin: 0 auto;
      .logo_wrapper{
        display: inline-block;
        width: 170px;
        height: 76px;
        vertical-align: top;
        background: url("./resource/Image/logo.jpg") center center no-repeat;
        a{
          display: block;
          width: 100%;
          height: 70px;
        }
      }
      .nav{
        display: inline-block;
        width: 45%;
        .nav_wrapper{
          display: flex;
          width: 100%;
          line-height: 70px;
          .first_menu{
            &:first-child{  
              flex: 0.7;
            }
            &:hover{
              &>span>a{
                color: #FFF;
              }
              .second_menu{
                display: flex;
                // opacity: 1;
                animation: myfirst 600ms;
                @keyframes myfirst{
                  from{
                    opacity: 0;
                  }
                  to{
                    opacity: 1;
                  }
                }
              }
            }
            flex: 1;
            text-align: center;
            &>span{
              font-size: 16px;
              a{
                color: #9B9EA3;
              }
            }
            .second_menu{
              position: absolute;
              display: none;
              top: 76px;
              left: 0;
              font-size: 15px;
              width: 100%;
              box-sizing: border-box;
              padding: 0 10%;
              flex-direction:row;
              background: #2C2D2E;
              transition: opacity 2000ms;
              .second_menu_li{
                flex: 1;
                padding: 18px 0;
                height: 40px;
                text-align: center;
                .second_menu_wrapper{
                  display: block;
                  border-right: 1px solid #9B9EA3;
                  &:last-child{
                    border-right: none;
                  }
                  a{
                    display: block;
                    color: #9B9EA3;
                    .big{
                      line-height: 25px;
                      font-size: 18px;
                      font-weight: 700;
                    }
                    .small{
                      line-height: 15px;
                      font-size: 13px;
                      }
                  }
                }
                &:hover{
                  background: #242424;
                  .second_menu_wrapper{
                    border: none;
                    a{
                      color: #fff;
                    }
                  }
                  .third_menu {
                    display: block;
                  }
                }
                .third_menu{
                  font-size: 0;
                  width: 100%;
                  position: absolute;
                  top: 75px;
                  left: 0;
                  background: #1F1F1F;
                  height: 350px;
                  box-sizing: border-box;
                  padding: 0 10%;
                  text-align: left;
                  &>li{
                    text-align: left;
                    display: inline-block;
                    box-sizing: border-box;
                    width: 25%;
                    margin-top: 20px;
                    padding-left: 15px;
                    // flex: 1 1 25%;
                    font-size: 15px;
                    .title{
                      line-height: 30px;
                      font-size: 17px;
                      font-weight: 700;
                      color: #fff;
                      
                      }
                    .desc{
                      line-height: 10px;
                      font-size: 13px;
                      color:#9B9EA3;
                    }
                    &:hover{
                      .title{
                        color: #008DFA;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .lang_btn{
        position: absolute;
        top: 0;
        right: 25%;
        display: inline-block;
        font-size: 15px;
        text-align: center;
        &:hover{
          .btn{
            visibility: visible;
          }
        }
        a{
          color: #9B9EA3;
        }
        .lang_btn_wrapper{
          width: 100px;
          line-height: 70px;
        }
        .lang_btn_wrapper:hover{
          &>a{
            color: #FFF;
          }
        }
        .btn{
          position: absolute;
          visibility: hidden;
          top: 76px;
          span{
            a{
              width: 100px;
              display: block;
              line-height: 40px;
              background: rgb(31, 31, 31);
            }
          }
          span:hover>a{
            color: #fff; 
          }
        }
      }
      .enter_btn{
        position: absolute;
        right: 13%;
        top: 18px;
        display: inline-block;
        font-size: 15px;
        letter-spacing: 2px;
        a{
           display: block;
           border-radius: 4px;
            padding: 10px 28px;
            border: 1px solid #9B9EA3;
            color: #9B9EA3;
            transition: 400ms border-radius;
            &:hover{
              color: #fff;
              border-radius: 0;
            }
        }
      }
    }
      .third_menu{
      display: none;
    }
  }
  .footer{
    position: relative;
    background: #26272C;
    padding-bottom: 180px;
    .content {
      text-align: center;
      font-size: 0;
      padding-top: 40px;
      span{
        position: relative;
        display: inline-block;
        font-size: 12px;
        color: #fff;
        width: 100px;
        border-right: 1px solid #818181;
        &:last-child{
         border-right: none;
        }
        ul{
          text-align: center;
          position: absolute;
          width: 100%;
          top: 25px;
          // left: 10px;
          li{
            line-height: 35px;
            a{
              font-size: 12px;
              color:#9B9EA3;
              &:hover{
                color: #fff;
              }
            }
          }
        }
      
      }
    }
    .desc{
      position: absolute;
      bottom: 20px;
      color: #818181;
      font-size: 10px;
      letter-spacing: 1px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
