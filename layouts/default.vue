<template>
    <div class="w-screen bg-secondary scroll-smooth">
        <Navbar />
        <div class="w-full relative" v-for="(item, i) in menus" :key="`banner-${i}`">
            <img v-if="route_name == item.route || route_name == item.sub_routes" class="w-full bg z-10"
                :src="item.src">
            <div v-if="route_name == item.route || route_name == item.sub_routes" class="content flex z-20">
                <h1 class="text-5xl 2xl:text-7xl text-primary">{{ item.label }}</h1>
            </div>
        </div>
        <div v-if="route_name != 'product'" class="flex items-center px-3 mt-8 text-quaternary px-4 sm:px-12 lg:px-16 xl:px-20 2xl:px-32">
            <base-icon icon="angle-left" viewBox="0 0 24 24" size="18" />
            <nuxt-link to="/" class="hover:underline mr-2">Home |
            </nuxt-link>
            <div v-for="(item, i) in menus" :key="`menus-${i}`" class="flex">
                <p v-if="route_name == item.route || route_name == item.sub_routes"
                    @click="$router.push(`${item.path}`)" class="mr-2 cursor-pointer hover:underline"
                    :class="{ 'font-bold ': route_name == item.route }">{{ item.label }}</p>
                <p v-if="route_name == item.sub_routes" @click="$router.push(`${item.path}`)">| <span
                        class="font-bold">{{breadcrumb}}</span></p>
            </div>
        </div>
        <div class="w-full">
            <nuxt />
        </div>
        <button class="to-top hide" id="totop" @click="toTop">
            <base-icon icon="angle-up" viewBox="0 0 24 24" size="30" class="text-white" />
        </button>
        <Foot class="mt-20" />
    </div>
</template>

<script>
import Navbar from '../components/layout/navbar.vue'
import Foot from '../components/layout/foot.vue'
export default {
    components: { Navbar, Foot },
    data() {
        return {
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
        breadcrumb(){
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

.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width:1024px) {
  img.bg {
    object-fit: cover;
    width: auto;
    height: 220px;
  }
}
</style>