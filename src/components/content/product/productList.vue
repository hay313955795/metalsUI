<template>
    <div class="products-list">
        <div>
            <p v-if="productList.length===0" class="pro-case clearfix" style="text-align: center;">暂无数据</p>
            <ul class="pro-case clearfix">
                <li v-for="product in productList" :key="product.id">
                    <div>
                        <router-link :to="{name:'productInfo',query:{id:product.id}}">
                            <img :src="product.productImg">
                            <p>{{product.productName}}</p>
                        </router-link>
                    </div>
                </li>
            </ul>
            <el-pagination
                    v-if="productList.length>0"
                    class="pro-case clearfix"
                    background
                    layout="prev, pager, next"
                    :page-size="limit"
                    @current-change="currentChange"
                    @prev-click="prevClick"
                    @next-click="nextClick"
                    :total="total">
            </el-pagination>

        </div>
    </div>
</template>
<script>

    import {UrlSearch} from '../../../utils/getParam'
    import {getProductByType} from "../../../api/product";

    export default {
        data() {
            return {
                typeId: 1,
                productList: [],
                total: 0,
                page: 1,
                limit: 4
            };
        },
        watch: {
            typeId: {
                handler: function () {
                    if (this.typeId != 0) {
                        this.findProductByType();
                    }
                }
            }
        },
        methods: {
            findProductByType() {
                let self = this;
                if (typeof self.typeId == "undefined") {
                    self.typeId = 1
                }
                let param = self.typeId + '?page=' + self.page + '&limit=' + self.limit;
                getProductByType(param).then(r => {
                    self.total = r.data.total;
                    self.productList = r.data.rows;
                }).catch()
            },
            currentChange(page) {
                this.page = page;
                this.findProductByType();
            },
            prevClick(page) {
                this.page = page;
                this.findProductByType();
            },
            nextClick(page) {
                this.page = page;
                this.findProductByType();
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.typeId = to.query.id;
            next();
        },
        mounted() {
            let id = UrlSearch('id');
            if (id != 0) {
                this.typeId = id;
            }
            this.findProductByType();
        }
    };
</script>
<style scoped>
</style>
