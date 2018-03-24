<template>
  <div id="home_page">
    <div class="section_one">
      <lunbo></lunbo>
    </div>
    <div class="section_two">
      <div class="title"></div>
      <div class="nav">
          <ul><li><a href="#"></a></li></ul>
      </div>
      <div class="section_two_content">
        <ul>
          <li v-for="{item,index} in 5" :key=index><a href="#"></a></li>
        </ul>
      </div>
    </div>
    <div class="section_three">
      <div class="title"></div>
      <div class="nav">
          <ul><li><a href="#"></a></li></ul>
      </div>
      <div class="section_three_content">
        <ul>
          <li v-for="{item,index} in 5" :key=index><a href="#"></a></li>
        </ul>
      </div>
      <div class="desc">
        <div class="big"></div>
        <div class="small"></div>
      </div>
    </div>
    <div class="section_four">
      <div class="title"></div>
      <div class="section_four_content">
        <ul>
          <li v-for="{item,index} in 5" :key=index><a href="#"></a></li>
        </ul>
      </div>
    </div>
    <div class="section_five">
      <div class="title"></div>
      <div class="nav">
          <ul><li><a href="#"></a></li></ul>
      </div>
      <div class="section_five_content">
        <ul>
          <li v-for="{item,index} in 5" :key=index><a href="#"></a></li>
        </ul>
      </div>
    </div>
    <div class="section_six">
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import lunbo from "../lunbo/lunbo"
export default {
  components: {
    lunbo: lunbo
  }
}
</script>
<style lang="less"  type="text/less">
#home_page{
  .section_one{
  }
}
</style>