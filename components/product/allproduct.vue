<template>
    <div class="w-full flex flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36">
        <!-- Categories -->
        <div class="w-3/12 flex flex-col items-start mr-10">
            <!-- Breadcrumb -->
            <div class="w-80">
                <nav class="w-full flex justify-start items-center" aria-label="Breadcrumb">
                    <ol
                        class="text-quaternary text-base inline-flex items-center justify-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <nuxt-link to="/" class="inline-flex items-center font-medium">
                                <base-icon icon="angle-left" viewBox="0 0 30 41" size="20" class="mr-2" />
                                <p>Home</p>
                            </nuxt-link>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <div class="vl mx-1 bg-quaternary"></div>
                                <p class="font-medium md:ml-2">Product</p>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <div class="vl mx-1 bg-quaternary"></div>
                                <p class="font-extrabold md:ml-2">All Products</p>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <!-- List Categories -->
            <div class="w-80 mt-10">
                <h1 class="text-3xl text-primary">Categories</h1>
                <hr class="w-full my-6 border-b border-gray-200 flex flex-col justify-center items-center" />
                <div>
                    <ul class="decoration-none text-primary text-lg space-y-4">
                        <li @click="filterType('best')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'best' }">Best Seller</span>
                        </li>
                        <li @click="filterType('new')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'new' }">New In</span>
                        </li>
                        <li @click="filterType('all')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'all' }">All Products</span>
                        </li>
                        <li @click="filterType('hair')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'hair' }">Hair</span>
                        </li>
                        <li @click="filterType('face')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'face' }">Face</span>
                        </li>
                        <li @click="filterType('body')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'body' }">Body</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Product cards -->
        <div class="w-9/12 ml-10">
            <h1 v-if="type == 'all'" class="w-full text-4xl text-primary">All Products</h1>
            <h1 v-else-if="type == 'face'" class="w-full text-4xl text-primary">Face</h1>
            <h1 v-else-if="type == 'body'" class="w-full text-4xl text-primary">Body</h1>
            <h1 v-else-if="type == 'hair'" class="w-full text-4xl text-primary">Hair</h1>
            <h1 v-else-if="type == 'best'" class="w-full text-4xl text-primary">Best Seller</h1>
            <h1 v-else-if="type == 'new'" class="w-full text-4xl text-primary">New In</h1>
            <!-- <h1 v-else class="w-full text-4xl text-primary">All Products</h1> -->

            <!-- Sort by -->
            <div class="w-full py-4 mt-8 bg-tertiary flex flex-row items-center justify-end">
                <div class="flex flex-row items-center mx-4">
                    <p class="text-white">Items per page</p>
                    <select class="text-quaternary rounded-xl mx-4" name="" id="">
                        <!-- <option value="">1</option> -->
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </div>
                <div class="flex flex-row items-center mx-4">
                    <p class="text-white">Sort by</p>
                    <select class="text-quaternary rounded-xl mx-4" name="" id="">
                        <option></option>
                        <option value="">A-Z</option>
                        <option value="">Z-A</option>
                        <option value="">Newest</option>
                        <option value="">Best Selling</option>
                        <option value="">Price(Low to hight)</option>
                        <option value="">Price(hight to low)</option>
                    </select>
                </div>
            </div>

            <!-- Product card -->
            <div class="w-full mt-20 grid grid-cols-2 2xl:grid-cols-3 gap-x-4">
                <div class="w-full" v-for="(product, index) in list_products" :key="index">
                    <template
                        v-if="xxl ? index < 4 * page && index >= 4 * (page - 1) : index < 6 * page && index >= 6 * (page - 1)">
                        <div class="relative">
                            <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                            <img :src="require(`~/static/images/products${product.imgUrl}`)" class="centered w-full" />
                            <span v-if="product.isNew"
                                class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
                            <div v-if="product.islike == true">
                                <base-icon icon="heartactive" viewBox="0 0 30 41" size="50"
                                    class="hover:cursor-pointer text-red-500 absolute top-8 right-8" />
                            </div>

                            <div v-else>
                                <base-icon icon="heart" viewBox="0 0 30 41" size="50"
                                    class="hover:cursor-pointer text-primary absolute top-8 right-8" />
                            </div>
                            <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
                        </div>
                        <div class="mb-4 text-quaternary text-xl">
                            <p>{{ product.type }}</p>
                            <p class="text-2xl xl:text-3xl font-medium">{{ product.name.slice(0, 50) }}</p>
                            <p class="my-4">{{ product.detail.slice(0, 80) }}...</p>
                            <base-button @click="$router.push(`/product/details/${product.no}`)"
                                class="border-quaternary">View more
                            </base-button>
                        </div>
                    </template>
                </div>
            </div>
            <base-pages class="mt-12" @change="change" :page="page" :total_pages="total_p" :limit="7"></base-pages>
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
            type: 'all',
            xxl: null,
        };
    },
    components: { BaseButton },
    computed: {
        list_products() {
            let list = []
            if (this.type === 'all') {
                list = this.products
            } else {
                list = this.products.filter((e) => e.type === this.type)
            }
            this.page = 1;
            this.total_p = Math.ceil(this.xxl ? list.length / 4 : list.length / 6)
            return list

        },
    },
    async mounted() {
        // console.log(this.$route.params.type)
        if (this.$route.params.type) this.type = await this.$route.params.type
        this.total_p = Math.ceil(this.isXXL() ? this.products.length / 4 : this.products.length / 6)
    },
    methods: {
        change(p) {
            this.page = p
        },
        filterType(type) {
            this.type = type
            //this.calPage();
        },
        isXXL() {
            if (screen.width <= 1536) {
                this.xxl = true
                return true;
            }
            else {
                this.xxl = false
                return false;
            }
        },
    }
};
</script>

<style scoped>
.vl {
    height: 15px;
    width: 1px;
}

.centered {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -35%);
}
</style>
