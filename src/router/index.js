import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let RouteList = [
    {
        path: '/',
        component: resolve => require(['@/components/content/home.vue'], resolve),
        meta: {
            title: '首页',
            keepAlive: true,
        },
    },
    {
        path: '/aboutUs',
        component: resolve => require(['@/components/content/aboutUs.vue'], resolve),
        meta: {
            title: '关于我们',
            keepAlive: true,
        },
    },
    {
        path: '/contact',
        component: resolve => require(['@/components/content/contact.vue'], resolve),
        meta: {
            title: '联系我们',
            keepAlive: true,
        },
    },
    {
        path: '/productCenter',
        component: resolve => require(['@/components/content/productCenter.vue'], resolve),
        meta: {
            title: '产品中心',
            keepAlive: true,
        },
        children: [
            {
                path: '/',
                redirect: 'productList'
            },
            {
                path: 'productList',
                name: 'productList',
                meta: {
                    title: '产品列表',
                    keepAlive: true
                },
                component: resolve => require(['@/components/content/product/productList.vue'], resolve),
            },
            {
                path: 'productInfo',
                name: 'productInfo',
                meta: {
                    title: '产品信息',
                    keepAlive: true
                },
                component: resolve => require(['@/components/content/product/productInfo.vue'], resolve),
            },
        ]
    },
    {
        path: '/news',
        component: resolve => require(['@/components/content/news.vue'], resolve),
        meta: {
            title: '新闻中心',
            keepAlive: true,
        },
    },
]


export default new Router({ routes: RouteList })