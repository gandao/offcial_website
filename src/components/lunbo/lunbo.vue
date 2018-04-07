<template>
  <div id="lunbo">
    <ul ref="content" class="wrapper1">
        <li>
            <span class="btn1"><a href="#">了解"ASS EAR"产品</a></span>
        </li>
        <li>
            <span class="btn1"><a href="#">了解"ASS EAR"产品</a></span>
        </li>
        <li class="third">
            <span class="btn1"><a href="#">了解"ASS EAR"产品</a></span>
        </li>
        <li>
            <span class="btn1"><a href="#">了解"ASS EAR"产品</a></span>
        </li>
    </ul>
    <ul class="circle_wrapper">
        <li v-for="(item,index) in img_data" :key=index :class="{'active': index === mark}">
            <span class="circle" @click.stop.prevent="fun_circle(index)"><a href="#"></a></span>
            <span class="desc">{{item.desc}}</span>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            img_data: [
                {
                    url: "http://www.sefonsoft.com/Data/Uploads/2017-03-21/58d087d6625d9.jpg",
                    desc: "Adae asdas"
                },
                {
                    url: "http://www.sefonsoft.com/Data/Uploads/2017-03-16/58c9e92529a4d.jpg",
                    desc: "ASdd ERa"
                },
                {
                    url: "http://www.sefonsoft.com/Data/Uploads/2017-03-21/58d087d6625d9.jpg",
                    desc: "ERRR ASC"
                },
                {
                    url: "http://www.sefonsoft.com/Data/Uploads/2017-03-16/58c9e92529a4d.jpg",
                    desc: "TTEW WA"
                }
            ],
            mark: 0,
            pos: 0,
            timer: {}
        }
    },
    methods: {
        fun_circle(index) {
            clearInterval(this.timer)
            this.change(index)
            this.timer = setInterval(this.play,3500)
        },
        change(index) {
            this.$refs.content.style.left = (index * -100).toString() + '%'
            this.section_four_circle_index = index
            this.mark = index
        },
        play() {
          if (this.mark !== 3 && this.pos === 0) {
              this.mark++
              this.change(this.mark)
          } else if (this.mark === 3 && this.pos === 0) {
              this.pos = 1
              this.mark--
              this.change(this.mark)
          } else if (this.mark !== 0 && this.pos === 1) {
              this.mark--
              this.change(this.mark)
          } else if (this.mark === 0 && this.pos === 1) {
              this.mark++
              this.change(this.mark)
              this.pos = 0
          }
        }
    },
    created() {
        this.timer = setInterval(this.play,3500)
    }
}
</script>
<style lang="less"  type="text/less">
#lunbo{
    width: 100%; 
    position: relative;
    height: 750px;
    overflow: hidden;
    .wrapper1{
        padding: 0;
        margin: 0;
        position: relative;
        width: 400%;
        height: 750px;
        font-size: 0;
        left: 0;
        transition: left 700ms;
        li{
            position: relative;
            display: inline-block;
            width: 25%;
            height: 750px;
            background: url("http://www.sefonsoft.com/Data/Uploads/2017-03-21/58d087d6625d9.jpg") no-repeat center center;
            &.third{
                background: url("http://www.sefonsoft.com/Data/Uploads/2017-03-15/58c90cf122cc0.jpg") no-repeat center center;
            }
            &:first-child{
                background: url("http://www.sefonsoft.com/Public/Home/default/images/banner-home.jpg") no-repeat center center;
            }
            &:last-child{
                background: url("http://www.sefonsoft.com/Data/Uploads/2017-03-16/58c9e92529a4d.jpg") no-repeat center center;
            }
        }
        .btn1{
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 20px;
            background: #5493FB;
            padding: 15px 40px;
            a{
                color: #fff;
                font-size: 17px;
                line-height: 20px;
                letter-spacing: 1px;
            }
            border-radius: 5px;
        }
    }
    .circle_wrapper{
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0;
        color:#fff;
        li{
            position: relative;
            display: inline-block;
            font-size: 12px;
            width: 40px;
            height: 20px;
             text-align: center;
            .desc{
                text-align: center;
                display: none;
                position: absolute;
                width: 90px;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 16px;
            }
            .circle{
                // margin-right: 10px;
                a{
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 5px;
                    background: #89888A;
                    opacity: 0.3;
                    vertical-align: middle;
                }
                &:hover{
                    a{ 
                        width: 14px;
                        height: 14px;
                        border-radius: 8px;
                        background: #fff;
                    }
                    &+.desc{
                        display: block;
                    }
                }
            }
            &.active{
                a{ 
                    width: 14px;
                    height: 14px;
                    border-radius: 8px;
                    background: #fff;
                }
            }
        }
    }
}
</style>