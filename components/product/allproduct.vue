<template>
    <div class="w-full flex flex-col justify-center px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36">
        <div class="w-full flex justify-end ">
            <h1 v-show="type == 'all'" class="w-full lg:w-9/12 lg:-mr-10 text-4xl text-primary">All Products</h1>
            <h1 v-show="type != 'all'" class="w-full lg:w-9/12 lg:-mr-10 text-4xl text-primary">All Products {{ ": " + type }}</h1>
        </div>
        <!-- Categories -->
        <div class="w-full flex flex-col lg:flex-row items-start">

            <!-- List Categories -->
            <div class="w-full lg:w-3/12 mt-0 sm:mt-10">
                <h1 class="text-2xl sm:text-3xl text-primary">Categories</h1>
                <hr class="w-full my-3 sm:my-6 border-b border-gray-200 flex flex-col justify-center items-center" />
                <div>
                    <ul class="decoration-none text-primary text-lg grid grid-cols-3 md:grid-cols-6 lg:grid-cols-1 gap-2 md:gap-x-2 lg:gap-y-4">
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('Best Seller')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'Best Seller' }">Best Seller</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('New In')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'New In' }">New In</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('all')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'all' }">All Products</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('Hair')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'Hair' }">Hair</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('Face')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'Face' }">Face</span>
                        </li>
                        <li class="flex items-center justify-center lg:justify-start" @click="filterType('Body')">
                            <span class="hover:font-bold hover:cursor-pointer"
                                :class="{ 'font-bold': type == 'Body' }">Body</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Product cards -->
            <div class="w-full lg:w-9/12 lg:ml-10">

                <!-- Sort by -->
                <div class="w-full py-4 mt-8 bg-tertiary flex flex-row items-center justify-between sm:justify-end">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center mx-2 sm:mx-4">
                        <p class="text-white">Items per page</p>
                        <select class="text-quaternary rounded-xl mr-1 sm:mx-4" v-model="item_per_page" name="" id="">
                            <option selected value=6>6</option>
                            <option value=12>12</option>
                            <option value=18>18</option>
                            <option value=24>24</option>
                        </select>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start sm:items-center ml-2 sm:ml-0 mx-2 sm:mx-4">
                        <p class="text-white">Sort by</p>
                        <select class="text-quaternary rounded-xl mr-1 sm:mx-4" name="" id="">
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
                <div class="w-full mt-12 grid grid-cols-2 2xl:grid-cols-3 gap-x-4">
                    <div class="w-full" v-for="(product, index) in list_products" :key="index">
                        <template v-if="index < item_per_page * page && index >= item_per_page * (page - 1)">
                            <!-- v-if="xxl ? index < 4 * page && index >= 4 * (page - 1) : index < 6 * page && index >= 6 * (page - 1)"> -->
                            <div class="relative">
                                <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                                <img :src="require(`~/static/images/products${product.imgUrl}`)"
                                    class="centered w-full" />
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
                                <p class="text-sm sm:text-base">{{ product.type }}</p>
                                <p class="text-xl sm:text-2xl xl:text-3xl font-medium">{{ product.name.slice(0, 50) }}</p>
                                <p class="my-4 text-base sm:text-lg">{{ product.detail.slice(0, 80) }}..</p>
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
            item_per_page: 6,
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
            this.total_p = Math.ceil(list.length / this.item_per_page)
            // this.total_p = Math.ceil(this.xxl ? list.length / 4 : list.length / 6)
            return list

        },
    },
    async mounted() {
        // console.log(this.$route.params.type)
        if (this.$route.params.type) this.type = await this.$route.params.type
        this.total_p = Math.ceil(this.products.length / this.item_per_page)
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
