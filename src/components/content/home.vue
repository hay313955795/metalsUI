<template>
    <div>
        <div class="about">
            <section class="title">
                <div>
                    <h2>关于我们</h2>
                    <p>About Us</p>
                </div>
            </section>
            <div class="about-con">
                <p>
                    <span>上海瑶河五金机电有限公司</span>成立于2010年06月12日，注册资金50万人民币元，是上海一家百货/批发/零售行业公司。公司以“专注，用心，服务”为核心价值，希望通过我们的专业水平和不懈努力，提供优质的服务。
                    多年来，上海瑶河五金机电有限公司一直秉承以用户需求为核心，在专注百货/批发/零售行业同时，提供优质、用心的服务赢得了众多业界的信赖和好评，在上海逐渐树立起公司良好品牌。公司不仅仅提供专业的服务，同时还建立了完善的售后服务体系，为中途遇到的问题和困难提供指导帮助。我们相信，通过我们的不断努力和追求，一定能够实现互利共赢。
                    <a
                            href="about.html"
                    >[ 查看详情 ]</a>
                </p>
            </div>
            <div class="advantage">
                <ul class="clearfix">
                    <li>
                        <div class="clearfix">
                            <p>选材讲究</p>
                        </div>
                    </li>
                    <li>
                        <div class="clearfix">
                            <p>领先工艺</p>
                        </div>
                    </li>
                    <li>
                        <div class="clearfix">
                            <p>类别丰富</p>
                        </div>
                    </li>
                    <li>
                        <div class="clearfix">
                            <p>服务保障</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--products-->
        <div class="products">
            <div class="pro clearfix">
                <section class="title no-titleline">
                    <h3>P</h3>
                    <div>
                        <h2>产品展示</h2>
                        <p>roducts</p>
                    </div>
                </section>
                <div class="pro-nav">
                    <ul>
                        <li :class="{active: navIsOrder===1}" @mouseenter="enter(1)">
                            <a>钻尾螺钉</a>
                        </li>
                        <li :class="{active: navIsOrder===2}" @mouseenter="enter(2)">
                            <a>组合螺丝</a>
                        </li>
                    </ul>
                </div>
                <div class="pro-list">
                    <ul>
                        <li>
                            <ul class="pro-case clearfix">
                                <li v-for=" product in productList" :key="product.id">
                                    <div>
                                        <router-link :to="{name:'productInfo',query:{id:product.id}}">
                                            <img :src="product.productImg">
                                            <p>{{product.productName}}</p>
                                        </router-link>

                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <p>
                <router-link to="/productCenter">更多产品</router-link>
            </p>
        </div>
        <!--news-->
        <!--<div class="news clearfix">-->
        <!--<section class="title">-->
        <!--<div>-->
        <!--<h2>新闻动态</h2>-->
        <!--<p>News information</p>-->
        <!--</div>-->
        <!--</section>-->
        <!--<div class="news">-->
        <!--<div class="new-img">-->
        <!--<img src="../../assets/images/news/news1.jpg">-->
        <!--</div>-->
        <!--<div class="new-list">-->
        <!--<ul>-->
        <!--<li>-->
        <!--<a href="news-detail1.html">-->
        <!--<span>2017-7-7</span>-->
        <!--<p>争创浙江省质量奖 提升品质管理意识</p>-->
        <!--</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="news-detail1.html">-->
        <!--<span>2017-7-7</span>-->
        <!--<p>五金检测中心获资格 小榄锁具“锁”向无阻</p>-->
        <!--</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="news-detail1.html">-->
        <!--<span>2017-7-7</span>-->
        <!--<p>天津工厂组织后备骨干军训活动</p>-->
        <!--</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="news-detail1.html">-->
        <!--<span>2017-7-7</span>-->
        <!--<p>五金配件的进口与国产之争</p>-->
        <!--</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="news-detail1.html">-->
        <!--<span>2017-7-7</span>-->
        <!--<p>公司顺利通过中国环境标志产品认证</p>-->
        <!--</a>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
    import {getProductByType} from "../../api/product";

    export default {
        data() {
            return {
                navIsOrder: 1,
                productList: []
            }
        },
        methods: {
            enter: function (param) {
                this.navIsOrder = param;
               this.getProduct(param);
            },
            getProduct(param){
                getProductByType(param).then(r => {
                    this.productList = r.data.rows;
                }).catch()
            }
        },
        mounted(){
            this.getProduct(1)
        }

    };
</script>
<style scoped>
</style>
