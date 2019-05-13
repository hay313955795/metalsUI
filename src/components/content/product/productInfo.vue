<template>
    <div class="products-detail">
        <img :src="productInfo.productImg">
        <div class="cen">
            <p>{{productInfo.productName}}</p>
            <p>单个重量：{{productInfo.productSingleWeight}}</p>
            <p>一包重量：{{productInfo.productTotalWeight}}</p>
            <p>参考价格：{{productInfo.productPrice}}（每包）</p>
        </div>
    </div>
</template>
<script>
    import {UrlSearch} from '../../../utils/getParam'
    import {getProductByproductId} from "../../../api/product";

    export default {
        data() {
            return {
                productId: 0,
                productInfo: {}
            }
        },
        methods: {
            getProduct() {
                getProductByproductId(this.productId).then(r => {
                    this.productInfo = r.data;
                }).catch()
            }
        },
        mounted() {
            let id = UrlSearch('id');
            this.productId = id;
            this.getProduct();
        }

    };
</script>
<style scoped>
</style>
