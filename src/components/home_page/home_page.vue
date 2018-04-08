<template>
  <div id="home_page">
    <div class="section_one">
      <lunbo></lunbo>
    </div>
    <div class="section_two">
      <div class="title">
        <span>我们的产品+</span><span class="high_light">深度定制</span>
      </div>
      <div class="nav">
          <ul ><li :class="{'section_two_nav_active': index === section_two_index}" @mouseenter="section_content_nav_hover(index)" v-for="(item,index) in section_content" :key="index" ><a href="#">{{item.name}}</a></li></ul>
      </div>
      <div class="section_two_content">
        <ul ref="section_two"  :style="{'width': section_content[section_two_index].content.length/3*100 + '%'}">
          <li  @click.stop.prevent="fun_detail" :style="{'width': 100/section_content[section_two_index].content.length + '%'}" v-for="(item1,index1) in section_content[section_two_index].content" :key=index1><a href="#">
            <img :src="item1.url" />
            <div class="title">{{item1.name}}</div>
            <div class="desc">{{item1.desc}}</div>
            <span class="icon"></span>
            </a></li>
        </ul>
        <div class="circle">
          <span  class="hover" @click.stop.prevent="section_two_change(index)" :class="{'circle_active': index === section_two_circle}" v-for="(item,index) in Math.ceil(section_content[section_two_index].content.length/3)" :key="index"><a href="#"></a></span>
        </div>
      </div>
    </div>
    <div class="section_three">
      <div class="title">方案与案例</div>
      <div class="nav">
          <ul><li :class="{'section_three_nav_active': section_three_index === index}" @mouseenter="section_three_nav_hover(index)" v-for="(item,index) in section_three_content" :key="index"><a href="#">{{item.nav_name}}</a></li></ul>
      </div>
      <div class="section_three_content">
        <ul ref="section_three"  :style="{'width': section_three_content[section_three_index].content.length/4*100 + '%'}">
          <li :style="{'width': 100/section_three_content[section_three_index].content.length + '%'}" v-for="(item,index) in section_three_content[section_three_index].content" :key=index><a href="#">
            <img :src="item.url" />
            </a></li>
        </ul>
      </div>
      <span @click.stop.prevent="section_three_change(1)" class="btn_left"><a href="#"></a></span>
      <span @click.stop.prevent="section_three_change(-1)" class="btn_right"><a href="#"></a></span>
      <div class="desc">
        <div class="big">{{section_three_content[section_three_index].desc_big}}</div>
        <div class="small">{{section_three_content[section_three_index].desc_small}}</div>
      </div>
    </div>
    <div class="section_four">
      <div class="title">咨询与服务,
        <span class="highlight">全面满足需求</span>
      </div>
      <div class="section_four_content">
        <ul ref="section_four" :style="{'height': section_four_content.length * 180 + 'px'}">
          <li @click.stop.prevent="fun_detail" v-for="(item,index) in section_four_content" :key="index"><a href="#">
            <div class="img_wrapper">
              <img :src="item.url"/>
            </div>
            <div class="section_four_content1">
              <div class="big">{{item.name}}</div>
              <div class="small">{{item.desc}}</div>
              <span class="icon"></span>
            </div>
            </a></li>
        </ul>
      </div>
      <div class="section_four_circle">
          <span :class="{'section_four_active': index === section_four_circle_index}" @click.stop.prevent="section_four_change(index)" v-for="(item,index) in Math.ceil(section_four_content.length/2)" :key="index"><a href="#"></a></span>
      </div>
    </div>
    <div class="section_five">
      <div class="title">热门动态，及时了解行业新闻</div>
      <div class="nav">
          <ul><li  :class="{'section_five_nav_active':section_five_index === index}" v-for="(item,index) in section_five_content" :key="index" @mouseenter="section_five_nav_hover(index)"><a href="#">{{item.nav_name}}</a></li></ul>
      </div>
      <div class="section_five_content">
        <ul ref="section_five" :style="{'width': section_five_content[section_five_index].content.length*380 + 'px'}">
          <li @click.stop.prevent="fun_detail" v-for="(item,index) in section_five_content[section_five_index].content" :key=index ><a href="#">
            <div class="img_wrapper">
              <img :src="item.url" />
            </div>
            <div class="section_five_desc">
              <div class="big">{{item.title}}</div>
              <div class="small">{{item.desc}}</div>
            </div>
            </a></li>
        </ul>
        <div class="section_five_circle">
          <span @click.stop.prevent="section_five_circle_click(index)" :class="{'section_five_circle_active':section_five_circle_index === index}" v-for="(item,index) in Math.ceil(section_five_content[section_five_index].content.length/3)" :key="index"><a href="#"></a></span>
        </div>
      </div>
    </div>
    <div class="section_six">
      <ul>
        <li @click.stop.prevent="fun_detail"><a href="#">
          <div class="img_wrapper"><img src="http://www.sefonsoft.com/Public/Home/default/images/main/quickIcon2.png"/></div>
          <div class="desc">
            <div class="big">7*12小时服务</div>
            <div class="small">专家一对一</div>
          </div>
          </a></li>
        <li><a href="#">
          <div class="img_wrapper"><img src="http://www.sefonsoft.com/Public/Home/default/images/main/quickIcon1.png"/></div>
          <div class="desc">
            <div class="big">标准化实施</div>
            <div class="small">全智能实时监控</div>
          </div>
          </a></li>
        <li><a href="#">
          <div class="img_wrapper"><img src="http://www.sefonsoft.com/Public/Home/default/images/main/quickIcon2.png"/></div>
          <div class="desc">
            <div class="big">持续业务保障</div>
            <div class="small">响应零延迟</div>
          </div>
          </a></li>
        <li><a href="#">
          <div class="img_wrapper"><img src="http://www.sefonsoft.com/Public/Home/default/images/main/quickIcon1.png"/></div>
          <div class="desc">
          <div class="big">7*12小时服务</div>
          <div class="small">专家一对一</div>
          </div>
          </a>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
import lunbo from "../lunbo/lunbo"
export default {
  props: ["header_show"],
  data() {
    return {
      section_content: [
        {
          name: "大数据基础",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            }
          ],
          desc_big: "金融方案解决方案",
          desc_small: "银行机构如何逐鹿小微金融、进行银行客户管理和风险管理，四方伟业大数据提供专业全面的解决方案。建立全面风险管理体系，对于增强金融企业的核心竞争力，实现可持续化发展，具有十分重要的意义。"
        },
        {
          name: "大数据分析",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            }
          ],
          desc_big: "金融方案解决方案",
          desc_small: "银行机构如何逐鹿小微金融、进行银行客户管理和风险管理，四方伟业大数据提供专业全面的解决方案。建立全面风险管理体系，对于增强金融企业的核心竞争力，实现可持续化发展，具有十分重要的意义。"
        },
        {
          name: "大数据可视化",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            }
          ]
        },
        {
          name: "应用产品",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            }
          ]
        },
        {
          name: "其他",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-28/57998138d2032.png",
              name: "政务综合协作平台",
              desc: "丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及丰富的内容以及"
            }
          ]
        }
      ],
      section_two_index: 2,
      section_two_circle: 0,
      section_three_content: [
        {
          nav_name: '政府方案',
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            }
          ],
          desc_big: "政府方案解决方案",
          desc_small: "政府通过开放数据打通数据来源的壁垒，带动商业发展，甚至可以带来全新的商业模式，从而实现“大众创业、万众创新”，对于产业发展具有重大意义。"
        },
        {
          nav_name: '金融方案',
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            }
          ],
          desc_big: "金融方案解决方案",
          desc_small: "银行机构如何逐鹿小微金融、进行银行客户管理和风险管理，四方伟业大数据提供专业全面的解决方案。建立全面风险管理体系，对于增强金融企业的核心竞争力，实现可持续化发展，具有十分重要的意义。"
        },
        {
          nav_name: '电信方案',
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            }
          ],
          desc_big: "电信方案解决方案",
          desc_small: "大数据热浪的推进，为手握大把数据资源的电信运营商带来了机遇。四方伟业助力运营商挖掘出“数据金矿”的价值，结合大数据能力帮助运营商快速搭建平台，应对业务高并发、群发应急、拦截过滤等应用场景。"
        },
        {
          nav_name: '公工方案',
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            }
          ],
          desc_big: "公共方案解决方案",
          desc_small: "大数据的发展，为城市管理决策提供数据源，从而大幅提升城市管理质量与管理效率。四方伟业大数据助力公共事业单位合理地协调城市相关资源，为城市公共事业的可持续发展提供决策支持。"
        },
        {
          nav_name: '应用方案',
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            }
          ],
          desc_big: "应用案例解决方案",
          desc_small: "在政务、交通、电信、工业、能源、环保、旅游、金融等领域，为您提供典型的应用案例，助您发现和利用数据价值，发掘商机和服务。"
        },
        {
          nav_name: '其他',
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-12-13/584fc2673cf17.png",
              name: "疾病预防"
            }
          ],
          desc_big: "其他解决方案",
          desc_small: "数据，已经渗透到当今每一个行业和业务职能领域，成为重要的生产因素。人们对于海量数据的挖掘和运用，预示着新一波生产率增长和消费者盈余浪潮的到来。"
        }
      ],
      section_three_index: 2,
      section_three_change_index: 0,
      section_four_content: [
        {
          url: "http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-3.png",
          name: "标准规范体系建设",
          desc: "大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的。"
        },
        {
          url: "http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-3.png",
          name: "标准规范体系建设",
          desc: "大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的。"
        },
        {
          url: "http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-3.png",
          name: "标准规范体系建设",
          desc: "大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的。"
        },
        {
          url: "http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-3.png",
          name: "标准规范体系建设",
          desc: "大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的。"
        },
        {
          url: "http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-3.png",
          name: "标准规范体系建设",
          desc: "大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的。"
        },
        {
          url: "http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-3.png",
          name: "标准规范体系建设",
          desc: "大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的。"
        },
        {
          url: "http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-3.png",
          name: "标准规范体系建设",
          desc: "大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的大数据系统建设的。"
        }
      ],
      section_four_circle_index: 0,
      section_five_content: [
        {
          nav_name: "企业动态",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-29/58db52aac5444.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-06-14/5940a5cf43fd4.png",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-13/5785dbddb75e4.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-06-14/5940a5cf43fd4.png",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-13/5785dbddb75e4.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            }
          ]
        },
        {
          nav_name: "产品动态",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-29/58db52aac5444.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-06-14/5940a5cf43fd4.png",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-13/5785dbddb75e4.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-06-14/5940a5cf43fd4.png",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-13/5785dbddb75e4.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-06-14/5940a5cf43fd4.png",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-13/5785dbddb75e4.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-06-14/5940a5cf43fd4.png",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2016-07-13/5785dbddb75e4.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            }
          ]
        },
        {
          nav_name: "社会动态",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            }
          ]
        },
        {
          nav_name: "企业动态",
          content: [
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-28/58da13b52b241.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            },
            {
              url: "http://www.sefonsoft.com/Data/Uploads/2017-03-29/58db52aac5444.jpg",
              title: "四方伟业顺利通过CMMI 5",
              desc: "近日，四方伟业顺利通过CMMI 5能力评估认"
            }
          ]
        }
      ],
      section_five_index: 0,
      section_five_circle_index: 0
    }
  },
  created() {
    this.header_show.is = false
  },
  methods: {
    section_two_change(index) {
      var len = 0 - index
      var width = this.section_content[this.section_two_index].content.length / 3 * 100
      var animation = 3 / this.section_content[this.section_two_index].content.length * len * width
      this.$refs.section_two.style.transition = "left 700ms"
      this.$refs.section_two.style.left = animation.toString() + "%"
      this.section_two_circle = index
    },
    section_content_nav_hover(index) {
      this.$refs.section_two.style.transition = "left 0ms"
      this.$refs.section_two.style.left = "0"
      this.section_two_circle = 0
      this.section_two_index = index
    },
    section_three_change(index) {
      this.section_three_change_index += index
      if (this.section_three_content[this.section_three_index].content.length <= 4) {
        return
      }
      if (this.section_three_change_index < 4 - this.section_three_content[this.section_three_index].content.length) {
        this.section_three_change_index = 4 - this.section_three_content[this.section_three_index].content.length
      } else if (this.section_three_change_index > 0) {
        this.section_three_change_index = 0
      }
      var width = 100 / this.section_three_content[this.section_three_index].content.length
      var animation = this.section_three_change_index * width * this.section_three_content[this.section_three_index].content.length / 4
      console.log(animation)
      this.$refs.section_three.style.transition = "left 700ms"
      this.$refs.section_three.style.left = animation.toString() + "%"
    },
    section_three_nav_hover(index) {
      this.section_three_index = index
      this.section_three_change_index = 0
    },
    section_four_change(index) {
      if (this.section_four_content.length <= 2) {
        return
      }
      var width = index * (-360)
      console.log(width)
      this.$refs.section_four.style.top = width.toString() + 'px'
      this.section_four_circle_index = index
    },
    section_five_nav_hover(index) {
      this.section_five_index = index
      this.$refs.section_five.style.transition = "left 0ms"
      this.$refs.section_five.style.left = "0"
      this.section_five_circle_index = 0
    },
    section_five_circle_click(index) {
      var width = -1140 * index
      console.log(width)
      this.$refs.section_five.style.transition = "left 700ms"
      this.$refs.section_five.style.left = width.toString() + "px"
      this.section_five_circle_index = index
    },
    fun_detail() {
      this.$router.push({name: "detail"})
    }
  },
  components: {
    lunbo: lunbo
  }
}
</script>
<style lang="less"  type="text/less">
#home_page{
  .section_two{
    width: 80%;
    margin: 0 auto;
    padding-bottom: 50px;
    .title{
      line-height: 150px;
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      letter-spacing: 2px;
      .high_light{
        color: #1886DF;
      }
    }
    .nav{
      width: 60%;
      margin: 0 auto;
      margin-bottom: 50px;
      ul{
        display: flex;
        li{
          flex: 1;
          text-align: center;
          &:hover,&.section_two_nav_active{
            background: #1886DF;
            a{
            color: #fff;
            }
          }
          border-radius: 4px;
          padding: 10px 0;
          a{
            color: #9B9EA3;
          }
        }
      }
    }
    .section_two_content{
      overflow: hidden;
      width: 95%;
      margin: 0 auto;
      ul{
        font-size: 0;
        margin-bottom: 40px;
        position: relative;
        left: 0;
        // transition: left 700ms;
        li{
          position: relative;
          text-align: center;
          display: inline-block;
          width: 33%;
          padding-bottom: 50px;
          &:hover{
            background: #F7F7F7;
            .icon{
              visibility: visible;
            }
          }
          img{
            display: inline-block;
            padding: 50px 50px;
          }
          .title{
            font-size: 23px;
            font-weight: normal;
            color:#000;
            letter-spacing: 2px;
            line-height: 40px;
          }
          .desc{
            padding: 20px 30px;
            font-size: 13px;
            color: #9B9EA3;
            line-height: 20px;
          }
          .icon{
            position: absolute;
            visibility: hidden;
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%);
            width: 17px;
            height: 12px;
            background: url("http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-hover.png") no-repeat;
          }
        }
      }
      .circle{
        text-align: center;
        span{
          display: inline-block;
          // width: 14px;
          // height: 14px;
          border-radius: 7px;
          background: #CDD2D6;
          margin-right: 15px;
          a{
            display: block;
            width: 14px;
            height: 14px;
          }
          &.circle_active{
            background: #4E4E4E;
          }
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
  }
  .section_three{
    background: url("http://www.sefonsoft.com/Public/Home/default/images/main/Solutionbg.jpg") center center no-repeat;
    position: relative;
    padding-bottom: 500px;
    .title{
      line-height: 200px;
      font-size: 40px;
      color: #fff;
      text-align: center;
    }
    .nav{
      width: 40%;
      position: absolute;
      right: 15%;
      top: 160px;
      ul{
        display: flex;
        li{
          
          text-align: center;
          flex: 1;
          border-radius: 4px;
          a{
            font-size: 15px;
            letter-spacing: 2px;
            display: block;
            color: #fff;
            padding: 10px 0;
          }
          &:hover,&.section_three_nav_active{
            background: #1886DF;
          }
        }
      }
    }
    .section_three_content{
      position: absolute;
      right: 15%;
      top: 260px;
      width: 40%;
      overflow: hidden;
      ul{
        position: relative;
        font-size: 0;
        left: 0;
        text-align: center;
        li{
          box-sizing: border-box;
          display: inline-block;
          img{
            border-radius: 5px;
            border: 1px solid #fff; 
            display: block;
            &:hover{
            background: rgba(158,158,158,0.3);
            }
          }
        }
      }
    }
    .btn_left,.btn_right{
      position: absolute;
      top: 328px;
      transform: translateY(-50%);
      // width: 100px;
      // height: 200px;
      a{
        display: block;
        width: 13px;
        height: 26px;
      }
    }
    .btn_left{
      right: 60%;
      background: url("http://www.sefonsoft.com/Public/Home/default/images/main/solutionleft.png") no-repeat;
    }
    .btn_right{
      background: url("http://www.sefonsoft.com/Public/Home/default/images/main/solutionRight.png") no-repeat;
      right: 160px;
    }
    .desc{
        position: absolute;
        top: 450px;
        right: 20%;
        color: #fff;
        width: 35%;
        .big{
            font-size: 35px;
            line-height: 100px;
        }
        .small{
          line-height: 30px;
        }
      }
  }
  .section_four{
    width: 80%;
    margin: 0 auto;
    padding-bottom: 100px;
    background: url("http://www.sefonsoft.com/Public/Home/default/images/main/technical-cooperation-bg.png") right bottom no-repeat;
    .title{
      font-size: 38px;
      color: #000;
      line-height: 150px;
      margin-top: 60px;
      letter-spacing: 2px;
      .highlight{
        color:#1886DF;
      }
    }
    .section_four_content{
      height: 360px;
      overflow: hidden;
      width: 500px;
      margin-left: 30px;
      ul{
        width: 500px;
        position: relative;
        font-size: 0;
        top: 0;
        transition: top 1100ms;
        li{
          height: 180px;
          box-sizing: border-box;
          padding: 20px 30px;
          position: relative;
          &:hover{
            background: rgba(158,158,158,0.1);
            .icon{
              visibility: visible !important;
            }
          }
          .img_wrapper{
            display: inline-block;
            vertical-align: top;
          }
          .section_four_content1{
            position: relative;
            width: 300px;
            display: inline-block;
            margin-left: 30px;
            .big{
              font-size: 23px;
              color:#000;
              margin-bottom: 15px;
              margin-top: 5px;
            }
            .small{
              font-size: 13px;
              color: #9B9EA3;
              line-height: 25px;
            }
            .icon{
              visibility:hidden;
              width: 17px;
              height: 12px;
              background: url("http://www.sefonsoft.com/Public/Home/default/images/main/cooperation-icon-hover.png") no-repeat;
              position: absolute;
              bottom: -25px;
              left: 0;
            }
          }
          
        }
      }
      
    }
    .section_four_circle {
        width: 500px;
        text-align: center;
        margin-top: 40px;
        span{
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          margin-left: 15px;
          a{
            display: block;
            width: 12px;
            height: 12px;
          }
          background: #CDD2D6;
          &:hover,&.section_four_active{
            background: #4E4E4E;
          }
        }
      }
  }
  .section_five{
    background: url("http://www.sefonsoft.com/Public/Home/default/images/main/NewBg.jpg") center center no-repeat;
    .title{
      width: 78%;
      margin: 0 auto;
      font-size: 40px;
      line-height: 100px;
      padding-top: 90px;
      color: #fff;
      letter-spacing: 2px;
    }
    .nav{
      width: 78%;
      margin: 0 auto;
      margin-bottom: 50px;
      ul{
        font-size: 0;
        margin-top: 20px;
        li{
          display: inline-block;    
          border-radius: 4px;  
          a{
            display: inline-block;
            color: #fff;
            padding: 9px 22px;
            font-size: 14px;
          }
          &:hover,&.section_five_nav_active{
            background: #1886DF;
          }
        }
      }
    }
    .section_five_content{
      padding-bottom: 80px;
      width: 1140px;
      margin: 0 auto;
      overflow: hidden;
      ul{
        position: relative;
        left: 0;
        font-size: 0;
        height: 320px;
        li{
          vertical-align: top;
            position: relative;
            margin-right: 30px;
            &:last-child{
              margin-right: 0;
            }
            a{
              display: block;
            }
            .img_wrapper{
              img{
                width: 350px;
                height: 200px;
                border-radius: 5px 5px 0 0;
                display: block;
                // position: relative;
                // top: 0;
                transition: height 350ms;
              }
            }
            width: 350px;
            display: inline-block;
            box-sizing: border-box;
            a:hover{
              .img_wrapper{
                 height: 130px;
                img{
                  // top: -70px;
                   height: 130px;
                }
              }
              .section_five_desc{
                background: #4E4E4E;
                .big{
                  color: #fff;
                }
                padding: 35px 0px;
                height: 190px;
              }
            }
            .section_five_desc{
              width: 350px;
              height: 120px;
              box-sizing: border-box;
              background: #fff;
              border-radius: 0 0 5px 5px;
              // transition: padding 350ms;
              transition: height 350ms;
              .big{
                margin: 0 25px;
                font-size: 18px;
                line-height: 60px;
                color: #000;
                border-bottom: 1px solid #959595;
              }
              .small{
                padding: 0 25px;
                color: #959595;
                font-size: 11px;
                line-height: 40px;
                padding-bottom: 10px;
              }
            }
        }
      }
      .section_five_circle{
        margin-top: 50px;
        text-align: center;
        span{
          display: inline-block;
          margin-right: 10px;
          &:last-child{
            margin-right: 0
          }
          &.section_five_circle_active{
            a{
              border: 1px solid #fff;
              background: #fff;
            }
          }
          a{
            display: block;
            width: 13px;
            height: 13px;
            border-radius: 7px;
            border: 1px solid #fff;
          }
        }
      }
    }
  }
  .section_six{
    ul{
      display: flex;
      padding: 30px 0;
      width: 80%;
      margin: 0 auto;
      li{
        flex: 1;
        border-right: 1px solid #b1b1b1;
        text-align: center;
        &:last-child{
          border-right: none;
        }
        .img_wrapper{
          display: inline-block;
          vertical-align: top;
          margin-right: 10px;
          margin-top: 5px;
        }
        .desc{
          display: inline-block;
          font-size: 18px;
          line-height: 30px;
          .big{
            color: #000;
          }
          .small{
            color:#727171;
          }
        }
      }
    }
  }
}
</style>