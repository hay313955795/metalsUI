<template>
  <div class="pg">
    <div class="pg-nav">
      <div>
        <p>
          当前位置：
          <router-link to="/">首页</router-link>&nbsp;/&nbsp;
          <router-link to="/productCenter">产品中心</router-link>
        </p>
      </div>
    </div>
    <div class="products-nav clearfix">
      <span>产品分类：</span>
      <div>
        <router-link :to="{name:'productList',query:{id:type.id}}" v-for="type in allProductType" :key='type.id'>{{type.typeName}}</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { getAllType } from "../../api/product";

export default {
  data() {
    return {
      allProductType: []
    };
  },
  methods: {
    getType() {
      getAllType()
        .then(r => {
          this.allProductType = r.data
          console.log(this.allProductType)
        })
        .catch();
    }
  },
  mounted(){
    this.getType()
  }
};
</script>
<style scoped>
</style>
