<template>
    <div class="w-full bg-secondary scroll-smooth relative overflow-hidden">
        <Navbar />
        <div class="w-full relative" v-for="(item, i) in menus" :key="`banner-${i}`">
            <img v-if="route_name == item.route || route_name == item.sub_routes" class="w-full bg z-10"
                :src="item.src">
            <div v-if="route_name == item.route || route_name == item.sub_routes" class="content flex z-20">
                <h1 class="text-6xl text-primary font-normal">{{ item.label }}</h1>
            </div>
        </div>
        <div v-if="!no_breadcrumb.includes(route_name)"
            class="flex items-center px-3 mt-10 sm:mt-20 text-quaternary font-extralight text-sm px-4 sm:px-12 lg:px-16 xl:px-28 3xl:px-32">
            <base-icon icon="angle-left" viewBox="0 0 24 24" size="15" />&nbsp;&nbsp;
            <nuxt-link to="/" class="hover:underline mr-2 ">Home&nbsp;&nbsp;|&nbsp;
            </nuxt-link>
            <div v-for="(item, i) in menus" :key="`menus-${i}`" class="flex">
                <p v-if="route_name == item.route || route_name == item.sub_routes"
                    @click="$router.push(`${item.path}`)" class="mr-2 cursor-pointer hover:underline"
                    :class="{ 'font-normal ': route_name == item.route }">{{ item.label }}</p>
                <p v-if="route_name == item.sub_routes" @click="$router.push(`${item.path}`)"
                    class="font-normal line-clamp-1">&nbsp;|&nbsp;&nbsp;{{ breadcrumb }}</p>
            </div>
        </div>
        <img v-if="route_name == 'blogs'" src="~/static/images/IMG_03blogs/Group1151@2x.png" class="widget1151">
        <img v-if="route_name == 'review'" src="~/static/images/IMG_03ingredients/Group1053@2x.png"
            class="reviewwidget1053">
        <img v-if="route_name == 'product-details-id'" src="~/static/images/IMG_02products_detail/Group1053@2x.png"
            class="widget1053">
        <!-- <div v-for="(item, i) in menus" :key="`banner-${i}`"> -->

        <!-- <img v-show="route_name == 'blog'" src="~/static/images/IMG_03blogs/Group1151@2x.png" class="widget1151"> -->

        <!-- </div> -->
        <div class="w-full">
            <nuxt />
        </div>
        <button class="to-top hide" id="totop" @click="toTop">
            <base-icon icon="angle-up" viewBox="0 0 24 24" size="30" class="text-white" />
        </button>
        <img src="~/static/images/IMG_01home/pages_01home/Group831@2x.png" class="footleft z-50">
        <img src="~/static/images/IMG_01home/pages_01home/Group388@2x.png" class="footright z-50">
        <Foot class="mt-10 sm:mt-20 z-20" />
    </div>
</template>

<script>
import Navbar from '../components/layout/navbar.vue'
import Foot from '../components/layout/foot.vue'
export default {
    components: { Navbar, Foot },
    middleware: 'auth',
    data() {
        return {
            no_breadcrumb: ['product', 'favorite'],
            menus: [{ path: "/blogs", label: "Blogs", route: ['blogs'], sub_routes: ["blogs-details-id"], src: require("~/static/images/IMG_03blogs/Group1120@2x.png") },
            { path: "/review", label: "Review", route: ['review'], src: require("~/static/images/IMG_04review/Group1162@2x.png") },
            { path: "/product", label: "Products", route: ['product'], sub_routes: ["product-details-id"], src: require("~/static/images/IMG_02products_detail/Group1137@2x.png") },
            { path: "/contact", label: "Contact", route: ['contact'], src: require("~/static/images/IMG_05contacts/Group1163@2x.png") },
            { path: "/ingredients", label: "Ingredients", route: ['ingredients'], src: require("~/static/images/IMG_03ingredients/Group1150@2x.png"), },
            { path: "/favorite", label: "Favorite", route: ['favorite'], src: require("~/static/images/IMG_02products_detail/Group1137@2x.png"), }]
        }
    },
    computed: {
        route_name() {
            return this.$route.name
        },
        breadcrumb() {
            return this.$store.getters['me/getBreadcrumb']
        },
    },
    async mounted() {
        const myID = document.getElementById("totop");
        var myScrollFunc = function () {
            var y = window.scrollY;
            if (y >= 100) {
                myID.className = "to-top show"
            } else {
                myID.className = "to-top hide"
            }
        };
        window.addEventListener("scroll", myScrollFunc);
    },
    methods: {
        toTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    }
}
</script>

<style scoped>
.to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #78A695;
    z-index: 50;
    transition: all 1s;
}

.hide {
    opacity: 0;
    bottom: -100%;
}

.show {
    opacity: 1;
    bottom: 20px;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.widget1151 {
    height: 12rem;
    position: absolute;
    right: 16rem;
    top: 630px;
    z-index: 200;
    transform: translateY(-6rem);
}

.reviewwidget1053 {
    height: 40rem;
    top: 30rem;
    left: -20rem;
    position: absolute;
}

.widget1053 {
    height: 40rem;
    position: absolute;
    right: 0;
    transform: translate(23rem, -9rem);
}

@media (max-width:1441px) {
    .widget1053 {
        height: 35rem;
        position: absolute;
        right: 0;
        transform: translate(20rem, -8rem);
    }

    .reviewwidget1053 {
        height: 30rem;
        top: 24rem;
        left: -15rem;
        position: absolute;
    }

    .widget1151 {
        height: 10rem;
        position: absolute;
        right: 4rem;
        top: 530px;
        z-index: 200;
        transform: translateY(-6rem);
    }
}

@media (max-width:1024px) {
    img.bg {
        object-fit: cover;
        width: auto;
        height: 220px;
    }
}
</style>