<template>
  <div class="products-list">
    <div>
      <ul class="pro-case clearfix">
        <li>
          <div>
            <router-link to="/productCenter/productInfo">
              <img src="../../../assets/images/pro/zwld/D1.jpg">
              <p>外六角华司钻尾螺钉2</p>
            </router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/productCenter/productInfo">
              <img src="../../../assets/images/pro/zwld/D2.jpg">
              <p>小沉头钻尾螺钉</p>
            </router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/productCenter/productInfo">
              <img src="../../../assets/images/pro/zwld/D3.jpg">
              <p>小盘头带垫（咖啡色）钻尾螺钉</p>
            </router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/productCenter/productInfo">
              <img src="../../../assets/images/pro/zwld/D4.jpg">
              <p>钻尾螺丝</p>
            </router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/productCenter/productInfo">
              <img src="../../../assets/images/pro/zhld/D1.jpg">
              <p>GB9074.1</p>
            </router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/productCenter/productInfo">
              <img src="../../../assets/images/pro/zhld/D2.jpg">
              <p>十字盘头机螺钉弹垫组合</p>
            </router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/productCenter/productInfo">
              <img src="../../../assets/images/pro/zhld/D3.jpg">
              <p>十一字小盘头机螺钉平弹垫</p>
            </router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/productCenter/productInfo">
              <img src="../../../assets/images/pro/zhld/D4.jpg">
              <p>钻十字外六角头凹穴机螺钉平尾螺丝</p>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typeId: 0
    };
  },
  watch: {
    typeId: {
      handler: function() {
        console.log("参数变化");
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.typeId = to.query.id;
    next();
  }
};
</script>
<style scoped>
</style>
