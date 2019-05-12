<template>
  <div class="hello">
    <div class="top-intr">
      <div>
        <p class="pull-left">上海瑶河五金机电有限公司</p>
        <p class="pull-right">
          <a href="products.html">推荐产品</a>
          <a href="contact.html">联系我们</a>
        </p>
      </div>
    </div>
    <!--nav-->
    <div class="nav">
      <div class="logobar clearfix">
        <div class="na-logo">
          <img src="../assets/images/logo.png" style="width: 300px;">
        </div>
        <div class="na-phone clearfix">
          <img src="../assets/images/phone.png">
          <div>
            <p>全国服务电话：</p>
            <p>021-59164317</p>
          </div>
        </div>
        <div class="na-search">
          <form>
            <input type="text" placeholder="搜索相应的产品并跳转到产品列表">
            <input type="button" value="搜索" class="btn">
          </form>
        </div>
      </div>
      <div class="nav-list">
        <ul class="clearfix">
          <li :class="{active: navIsOrder===1}" @click="navIsOrder = 1">
            <router-link to="/">网站首页</router-link>
          </li>
          <li :class="{active: navIsOrder===2}" @click="navIsOrder = 2">
            <router-link to="/aboutUs">关于我们</router-link>
          </li>
          <li :class="{active: navIsOrder===3}" @click="navIsOrder = 3">
            <router-link to="/productCenter">产品中心</router-link>
          </li>
          <li :class="{active: navIsOrder===4}" @click="navIsOrder = 4">
            <router-link to="/news">新闻中心</router-link>
          </li>
          <li :class="{active: navIsOrder===5}" @click="navIsOrder = 5">
            <router-link to="/contact">联系我们</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--banner-->
    <div id="wrapper">
      <div class="fullwidthbanner-container">
        <div class="fullwidthbanner">
          <avue-carousel :option="option"></avue-carousel>
        </div>
      </div>
    </div>

    <!-- 从这里开始 -->
    <!--about-->
    <router-view/>
    <!-- 到这里结束 插入一个路由 -->
    <!--footer-->
    <footer>
      <div class="foot-nav">
        <ul class="clearfix">
          <li :class="{active: navIsOrder===1}" @click="navIsOrder = 1">
            <router-link to="/">网站首页</router-link>
          </li>
          <li :class="{active: navIsOrder===2}" @click="navIsOrder = 2">
            <router-link to="/aboutUs">关于我们</router-link>
          </li>
          <li :class="{active: navIsOrder===3}" @click="navIsOrder = 3">
            <router-link to="/productCenter">产品中心</router-link>
          </li>
          <li :class="{active: navIsOrder===4}" @click="navIsOrder = 4">
            <router-link to="/news">新闻中心</router-link>
          </li>
          <li :class="{active: navIsOrder===5}" @click="navIsOrder = 5">
            <router-link to="/contact">联系我们</router-link>
          </li>
        </ul>
      </div>
      <div class="cp-mes">
        <p>公司地址：嘉定区塔城东路37号&emsp;联系电话：13917276958 15901789296</p>
        <p>上海瑶河五金机电有限公司&emsp;企业注册编号310114002137538</p>
        <p>
          &copy; 2019 www.yhwj.com | Designed&Developed By
          <a
            style="color:#fff;"
            href="http://www.tracenight.com/"
            target="_blank"
          >tracenight</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      navIsOrder: 1,
      option: {
        height: 500,
        data: [
          {
            title: "",
            href: "https://avue.top",
            src: require("../assets/images/slides/slide1.jpg")
          },
          {
            title: "",
            href: "https://avue.top",
            src: require("../assets/images/slides/slide2.jpg")
          },
          {
            title: "",
            href: "https://avue.top",
            src: require("../assets/images/slides/slide3.jpg")
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/banner-j.css";
@import "../assets/css/main.css";
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
