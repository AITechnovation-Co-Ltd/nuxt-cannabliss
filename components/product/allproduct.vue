<template>
    <div class="w-full flex flex-col justify-center px-4 md:px-8 lg:px-12 xl:px-24 3xl:px-36">
        <div class="w-full flex flex-col lg:flex-row justify-end ">
            <div class="w-full lg:w-3/12 flex font-extralight text-sm text-quaternary items-center">
                <base-icon icon="angle-left" viewBox="0 0 24 24" size="18" />&nbsp;
                <nuxt-link to="/" class="hover:underline">Home</nuxt-link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <p>Products</p>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <p class="font-normal">{{ type }}</p>
            </div>
            <div class="w-full lg:ml-10 lg:w-9/12">
                <h1 class="w-full text-2xl mt-6 lg:mt-0 sm:text-4xl font-extralight text-primary">{{ type }}</h1>
            </div>
        </div>

        <div class="w-full flex flex-col lg:flex-row items-start">
            <!-- List Categories -->
            <div class="w-full lg:w-3/12 mt-3 sm:mt-10 hidden lg:block">
                <h1 class="text-xl text-primary">Categories</h1>
                <!-- <hr class="w-5/6 my-3 sm:my-6 border-b border-gold flex flex-col justify-center items-center" /> -->
                <div class="w-5/6 my-3 sm:my-6 bg-gold hrr"></div>
                <div>
                    <ul
                        class="decoration-none text-primary font-extralight text-sm grid grid-cols-3 md:grid-cols-6 lg:grid-cols-1 gap-2 md:gap-x-2 lg:gap-y-4">
                        <li class="flex items-center justify-center lg:justify-start"
                            @click="filterType('Best Seller')">
                            <span class="hover:font-normal hover:cursor-pointer"
                                :class="{ 'font-normal': type == 'Best Seller' }">Best Seller</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('New In')">
                            <span class="hover:font-normal hover:cursor-pointer"
                                :class="{ 'font-normal': type == 'New In' }">New In</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start"
                            @click="filterType('All Products')">
                            <span class="hover:font-normal hover:cursor-pointer"
                                :class="{ 'font-normal': type == 'All Products' }">All Products</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('Hair')">
                            <span class="hover:font-normal hover:cursor-pointer"
                                :class="{ 'font-normal': type == 'Hair' }">Hair</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('Face')">
                            <span class="hover:font-normal hover:cursor-pointer"
                                :class="{ 'font-normal': type == 'Face' }">Face</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('Body')">
                            <span class="hover:font-normal hover:cursor-pointer"
                                :class="{ 'font-normal': type == 'Body' }">Body</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Product cards -->
            <div class="w-full lg:w-9/12 lg:ml-10">

                <!-- Sort by -->
                <div
                    class="w-full py-3 mt-3 sm:mt-8 bg-tertiary flex flex-row items-center justify-between sm:justify-end">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center mx-2 hidden lg:flex">
                        <p class="text-xs text-white">Items per page</p>
                        <select class="h-8 w-16 text-xs text-quaternary rounded-xl mr-1 sm:mx-4"
                            v-model="item_per_page">
                            <option selected value=6>6</option>
                            <option value=12>12</option>
                            <option value=18>18</option>
                            <option value=24>24</option>
                        </select>
                    </div>

                    <div class="flex flex-col sm:flex-row items-start sm:items-center ml-2 sm:ml-0 mx-2 lg:hidden">
                        <p class="text-xs text-white">Categories</p>
                        <select class="h-8 w-32 py-px text-xs text-quaternary rounded-xl mr-1 sm:mx-2" v-model="type">
                            <option selected value="Best Seller">Best Seller</option>
                            <option value="New In">New In</option>
                            <option selected value="All Products">All Products</option>
                            <option value="Hair">Hair</option>
                            <option value="Face">Face</option>
                            <option value="Body">Body</option>
                        </select>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start sm:items-center ml-2 sm:ml-0 mx-2">
                        <p class="text-xs text-white">Sort by</p>
                        <select class="h-8 w-32 py-px text-xs text-quaternary rounded-xl mr-1 sm:mx-2">
                            <option value="">A-Z</option>
                            <option value="">Z-A</option>
                            <option value="">Newest</option>
                            <option selected value="">Best Selling</option>
                            <option value="">Price(Low to hight)</option>
                            <option value="">Price(hight to low)</option>
                        </select>
                    </div>
                </div>

                <!-- Product card -->
                <div v-if="list_products.length != 0" class="w-full mt-12 grid grid-cols-2 2xl:grid-cols-3 gap-x-4">
                    <div class="w-full" v-for="(product, index) in list_products" :key="index">
                        <template v-if="index < item_per_page * page && index >= item_per_page * (page - 1)">
                            <!-- v-if="xxl ? index < 4 * page && index >= 4 * (page - 1) : index < 6 * page && index >= 6 * (page - 1)"> -->
                            <div class="relative mx-2">
                                <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                                <img class="centered w-full"
                                    :src="require(`~/static/images/products${product.imgUrl[0]}`)" />
                                <span v-if="product.isNew"
                                    class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
                                <div @click="liked(index)"
                                    class="absolute top-2 right-2 sm:top-8 sm:right-8 cursor-pointer block sm:hidden">
                                    <base-icon class="hidden sm:block" icon='heartactive' viewBox="0 0 30 41" size="40"
                                        :color="islike_product0 ? '#f05252' : '#d5d6d7'" />
                                </div>
                                <div @click="liked(index)"
                                    class="absolute top-2 right-2 sm:top-8 sm:right-8 cursor-pointer hidden sm:block">
                                    <base-icon class="hidden sm:block" icon='heartactive' viewBox="0 0 30 41" size="50"
                                        :color="product.islike ? '#f05252' : '#d5d6d7'" />
                                </div>
                                <p
                                    class="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 text-sm font-thin text-quaternary">
                                    {{ product.quantity }}</p>
                            </div>
                            <div class="my-4 mx-2 text-quaternary text-xl">
                                <p class="mt-2 text-sm text-detail font-extralight capitalize">{{ product.type }}{{islike_product0}}</p>
                                <p class="truncated-2-lines text-base sm:text-lg font-medium ">{{ product.name }}</p>
                                <p class="truncated-2-lines mb-4 mt-2 text-xl text-detail font-bold thai">{{
                                        product.detail
                                }}</p>
                                <base-button @click="$router.push(`/product/details/${product.no}`)"
                                    class="border-quaternary">
                                    View more
                                </base-button>
                            </div>
                        </template>
                    </div>
                </div>
                <div v-else class="w-full py-12 mt-12 bg-white text-center font-light text-2xl text-primary">No Products
                </div>
                <base-pages v-if="list_products.length != 0" class="mt-12" @change="change" :page="page"
                    :total_pages="total_p" :limit="7"></base-pages>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from "../base/base-button.vue";
import products from "@/static/json/products.json"
export default {
    data() {
        return {
            page: 1,
            total_p: 1,
            products,
            type: 'All Products',
            xxl: null,
            item_per_page: 6,
        };
    },
    components: { BaseButton },
    computed: {
        list_products() {
            this.getProducts()
            let list = this.products
            if (this.type === 'All Products') {
                list = this.products
            } else {
                list = this.products.filter((e) => e.type === this.type)
            }
            this.page = 1;
            this.total_p = Math.ceil(list.length / this.item_per_page)
            // this.total_p = Math.ceil(this.xxl ? list.length / 4 : list.length / 6)
            return list

        },
    },
    async mounted() {
        this.total_p = Math.ceil(this.products.length / this.item_per_page)
    },
    methods: {
        change(p) {
            this.page = p
        },
        filterType(type) {
            this.type = type
        },
        async getProducts() {
            const self = this
            try {
                let products = await self.$store.getters['me/getProducts']
                if (products != []) {
                    self.products = products
                }
            } catch (err) {
                console.log('error', err);
            }
        },
        async liked(index) {
            this.products[index].islike = await !this.products[index].islike
            this.$store.dispatch('me/setProducts', this.products)
        },
    }
};
</script>

<style scoped>
.vl {
    height: 15px;
    width: 1px;
}

.hrr {
    height: 0.5px;
    opacity: .34;
}

.centered {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -35%);
}

.truncated-2-lines {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
