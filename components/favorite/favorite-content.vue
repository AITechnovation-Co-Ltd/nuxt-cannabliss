<template>
    <div class="w-full flex flex-row justify-center px-24 lg:px-12 xl:px-20 2xl:px-36">
        <!-- Categories -->
        <div class="w-3/12 flex flex-col items-center">
            <!-- Breadcrumb -->
            <div class="w-80">
                <nav class="w-full my-8" aria-label="Breadcrumb">
                    <ol
                        class="text-quaternary text-base inline-flex items-center justify-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <nuxt-link to="/" class="inline-flex items-center font-medium">
                                <base-icon icon="angle-left" viewBox="0 0 30 41" size="20" class="mr-2" />
                                <p>Home</p>
                            </nuxt-link>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <div class="vl mx-1 bg-quaternary"></div>
                                <p class="font-extrabold md:ml-2 ">Favorite</p>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Product cards -->
        <div class="w-9/12">
            <p class="w-full text-4xl text-primary font-light">Favorite</p>

            <!-- Sort by -->
            <div class="w-full flex flex-row items-center justify-end py-4 mt-4 bg-tertiary ">
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
                        <option value="">Best Selling</option>
                    </select>
                </div>
            </div>
            <!-- Product card -->
            <div class="w-full mt-20 grid grid-cols-2 xl:grid-cols-3 gap-x-4">
                <div class="w-full" v-for="(product, index) in products" :key="index">
                    <template v-if="index < 6 * page && index >= 6 * (page - 1)">
                        <div class="relative">
                            <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                            <img class="centered w-full" :src="product.img" alt="" />
                            <span v-if="product.isNew"
                                class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
                            <base-icon icon="heartactive" viewBox="0 0 30 41" size="50"
                                class="hover:cursor-pointer text-red-500 absolute top-8 right-8" />
                            <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
                        </div>
                        <div class="mb-4 text-quaternary text-xl">
                            <p>{{ product.type }}</p>
                            <p class="text-xl xl:text-2xl 2xl:text-3xl font-medium">{{ product.name }}</p>
                            <p class="mt-4">{{ product.detail }}</p>
                            <base-button @click="$router.push(`/product/details`)" class="mt-3 border-quaternary">View more
                            </base-button>
                        </div>
                    </template>
                </div>
            </div>
            <base-pages @change="change" :page="page" :total_pages="total_p" :limit="7"></base-pages>
        </div>
    </div>
</template>

<script>
import basePages from '../base/base-pages.vue'
import products from "@/static/json/products.json"
export default {
    components: { basePages },
    data() {
        return {
            page: 1,
            total_p: 1,
            products
        }
    },
    mounted() {
        this.total_p = Math.ceil(this.products.length / 6)
    },
    methods: {
        change(p) {
            console.log(p)
            this.page = p
        },
    }
}
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