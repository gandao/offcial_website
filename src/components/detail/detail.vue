<template>
  <div id="detail">
      <div class="section_one">
          <div class="content_wrapper">
            <div class="big">SDC UE</div>
            <div class="small">Sefonsoft SDC 可视化设计UE 是一个集编辑、分析、运行于一体的企业级大数据可视化设计平台。该产品采用拖拽式自定义编排方式，可设计出各类交互式系统、报表、大屏等多元化、炫酷的数据可视化页面。</div>
          </div>
      </div>
      <div class="section_two">
        <div class="wrapper1">
          <div class="title">Product Function</div>
          <div class="line"></div>
          <div class="content_wrapper">
            <div class="content">
              <span @click.stop.prevent="section_two_index = index" :class="{'selected': section_two_index === index}" v-for="(item,index) in section_two_data" :key="index"><a href="#"><img :src="item.img_url" /><div class="name">{{item.name}}</div></a></span>
            </div>
          </div>
          <div class="desc_wrapper">
            <div class="left"><img src="http://www.sefonsoft.com/Public/Home/default/images/product/gif/gif-4.gif"></div>
            <div class="right">
              <div class="big1">交互式数据展示</div>
              <div class="small1">丰富的Web表单组件与事件结合，低成本、高效率地设计出交互式数据展示的应用系统，快速响应需求变化。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_three">
        <div class="wrapper">
          <div class="title">Custormer Case</div>
          <div class="line"></div>
          <div class="desc_wrapper">
            <div class="left">
              <span :class="{'selected': section_three_index === 0}" @click.stop.prevent="section_three_index = 0"><a href="#"><img src="http://www.sefonsoft.com/Public/Home/default/images/product/icon/case-icon-1.png"><div class="name">大屏案例</div></a></span>
              <span :class="{'selected': section_three_index === 1}" @click.stop.prevent="section_three_index = 1"><a href="#"><img src="http://www.sefonsoft.com/Public/Home/default/images/product/icon/case-icon-2.png"><div class="name">Web交互式可视化</div></a></span>
            </div>
            <div class="right">
              <div class="title">利用大数据可视化技术，在大屏上呈现单位内部相关信息，一目了然。并支持动态数据切换、查询</div>
              <img src="http://www.sefonsoft.com/Public/Home/default/images/product/case1.jpg">
            </div>
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
        section_two_data: [
          {
          img_url: "http://www.sefonsoft.com/Public/Home/default/images/product/icon/icon1.png",
          name: "多元化数据展示"
          },{
          img_url: "http://www.sefonsoft.com/Public/Home/default/images/product/icon/icon2.png",
          name: "全方位酷炫数据可视化"
          },{
          img_url: "http://www.sefonsoft.com/Public/Home/default/images/product/icon/icon3.png",
          name: "极致体验、快速上手"
          },{
          img_url: "http://www.sefonsoft.com/Public/Home/default/images/product/icon/icon4.png",
          name: "交互式数据展示"
          },{
          img_url: "http://www.sefonsoft.com/Public/Home/default/images/product/icon/icon5.png",
          name: "灵活的数据分析"
          }
        ],
        section_three_index: 0,
        section_two_index: 0
    }
  },
  created() {
    this.header_show.is = true
  }
}
</script>
<style lang="less"  type="text/less">
#detail{
  .section_one{
    width: 100%;
    height: 836px;
    background: url("http://www.sefonsoft.com/Public/Home/default/images/product/newUE-banner.jpg") no-repeat center center;
    .content_wrapper{
      margin-left: 13%;
      padding-top: 250px;
      .big{
        font-size: 45px;
        letter-spacing: 2px;
        margin-bottom: 40px;
      }
      .small{
        width: 400px;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
  .section_two{
    .wrapper1{
      width: 80%;
      padding-bottom: 50px;
      margin:  0 auto;
      .title{
        margin-top: 50px;
        font-size: 28px;
        text-align: center;
        line-height: 80px;
      }
      .line{
        margin: 0 auto;
        width: 37px;
        height: 2px;
        background: #00AEF3;
      }
      .content_wrapper{
        width: 80%;
        margin: 0 auto;
      }
      .content{
        margin-top: 40px;
        display: flex;
        text-align: center;
        &>span{
          flex: 1;
          &:hover,&.selected{
            img{
              filter: none;
            }
            .name{
              color:#08ADF9 ;
            }
          }
          a{
            display: block;
            img{
              display: block;
              margin: 0 auto;
              filter: grayscale(100%);
            }
            color: #000;
            .name{
              margin-top: 20px;
              font-size: 12px;
              color: #858585;
            }
          }
        }
      }
      .desc_wrapper{
        width: 90%;
        margin: 0 auto;
        margin-top: 40px;
        font-size: 0;
        padding: 40px 20px;
        box-shadow: 2px 2px 5px rgba(221,221,221,0.6),-2px -2px 5px rgba(221,221,221,0.6);
        .left{
          width: 70%;
          display: inline-block;
          vertical-align: top;
          img{
            display: block;
          }
        }
        .right{
          display: inline-block;
          margin-left: 40px;
           width: 25%;
          .big1{
            font-size: 20px;
            letter-spacing: 1px;
            color: #6290E5;
          }
          .small1{
            // width: 5%;
            margin-top: 30px;
            font-size: 14px;
            line-height: 28px;
            color: #000
          }
        }
      }
    }
  }
  .section_three{
    padding-top: 2px;
    width: 100%;
    height: 710px;
    background: url("http://www.sefonsoft.com/Public/Home/default/images/product/newUE-content.jpg") no-repeat center center;
    .wrapper{
      width: 80%;
      margin: 0 auto;
    }
    .title{
        margin-top: 50px;
        font-size: 28px;
        text-align: center;
        line-height: 80px;
        color: #fff;
      }
      .line{
        margin: 0 auto;
        width: 37px;
        height: 2px;
        background: #00AEF3;
    }
    .desc_wrapper{
      margin-top: 40px;
      font-size: 0;
      .left{
        display: inline-block;
        width: 380px;
        &>span{
          margin: 0 auto;
          display: block;
          width: 290px;
          padding-top: 30px;
          // background: #09A8E9;
          background: rgba(224,224,224,0.18);
          &.selected{
            width: 320px;
            background: url("http://www.sefonsoft.com/Public/Home/default/images/product/backgroundimg.jpg");
            padding-top: 40px;
          }
          img{
            display: block;
            margin: 0 auto;
          }
          .name{
            margin-top: 10px;
            text-align: center;
            font-size: 14px;
            line-height: 30px;
            color: #fff;
            padding-bottom: 20px;
          }
        }
      }
      .right{
        display: inline-block;
        vertical-align: top;
        padding: 10px;
        background: rgba(224,224,224,0.18);
        .title{
          font-size: 13px;
          text-align: left;
          margin-top: 0;
          line-height: 40px;
          img{
            display: block;
          }
        }
      }
    }
  }
}
</style>