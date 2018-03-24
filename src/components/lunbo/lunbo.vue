<template>
  <div id="lunbo">
        <transition-group tag="ul" class="wrapper1" name="image">
            <li v-for="(item,index) in img_data" v-show="index===mark" :key=index>
                <img :src=item.url />
            <span class="btn1"><a href="#">了解"ASS EAR"产品</a></span>
            </li>
        </transition-group>
      <ul class="circle_wrapper">
          <li v-for="(item,index) in img_data" :key=index :class="{'active': index === mark}">
              <span class="circle" @click.stop.prevent="change(index)"><a href="#"></a></span>
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
            mark: 1,
            timer: {}
        }
    },
    methods: {
        autoplay() {
            this.mark++
            if (this.mark === this.img_data.length) {
                this.mark = 0
            }
        },
        play() {
            this.timer = setInterval(this.autoplay,4000)
        },
        change(i) {
            clearInterval(this.timer)
            this.mark = i
            // clearInterval(this.timer) 
            this.timer = setInterval(this.autoplay,4000)
        }
    },
    created() {
        this.play()
    }
}
</script>
<style lang="less"  type="text/less">
#lunbo{
    width: 100%; 
    position: relative;
    .wrapper1{
        padding: 0;
        margin: 0;
        position: relative;
        width: 100%;
        .image-enter-active {  
            transform: translateX(0);  
            transition: all 1.5s ease;  
        }  
        .image-leave-active {
            position: absolute;
            top: 0;
            left: 0;  
            transform: translateX(-100%);  
            transition: all 1.5s ease;  
        }  
        .image-enter {  
            transform: translateX(100%);  
        }  
        .image-leave { 
            position: absolute;
            top: 0;
            left: 0; 
            transform: translateX(0);  
        }  
        img{
            width: 100%;
            height: 700px;
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