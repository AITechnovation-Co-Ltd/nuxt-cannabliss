<template>
    <div class="w-full flex flex-col justify-center px-4 md:px-8 lg:px-12 xl:px-24 3xl:px-36">
        <div class="w-full flex flex-col lg:flex-row items-center">
            <div class="w-full lg:w-2/12 flex font-extralight text-sm text-quaternary">
                <base-icon icon="angle-left" viewBox="0 0 24 24" size="18" />&nbsp;
                <nuxt-link to="/" class="hover:underline">Home</nuxt-link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <p class="font-normal">Favorite</p>
            </div>
            <div class="w-full lg:w-10/12">
                <h1 class="w-full text-2xl mt-6 lg:mt-0 sm:text-4xl font-extralight text-primary">Favorite</h1>
            </div>
        </div>
        <!-- Categories -->
        <div class="w-full flex justify-end">
            <!-- Product cards -->
            <div class="w-full lg:w-10/12 mr-0 ml-auto">
                <!-- Sort by -->
                <div
                    class="w-full py-3 mt-3 sm:mt-8 bg-tertiary flex flex-row items-center justify-between sm:justify-end">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center mx-2">
                        <p class="text-xs text-white">Items per page</p>
                        <select class="h-8 w-16 text-xs text-quaternary rounded-xl mr-1 sm:mx-4"
                            v-model="item_per_page">
                            <option selected value=6>6</option>
                            <option value=12>12</option>
                            <option value=18>18</option>
                            <option value=24>24</option>
                        </select>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start sm:items-center ml-2 sm:ml-0 mx-2">
                        <p class="text-xs text-white">Sort by</p>
                        <select v-model="sort_by" @change="sortby(sort_by)"
                            class="h-8 w-32 py-px text-xs text-quaternary rounded-xl mr-1 sm:mx-2">
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>
                            <option value="">Newest</option>
                            <option selected value="">Best Selling</option>
                            <option value="">Price(Low to hight)</option>
                            <option value="">Price(hight to low)</option>
                        </select>
                    </div>
                </div>

                <!-- Product card -->
                <div v-if="products_liked.length != 0" class="w-full mt-12 grid grid-cols-2 2xl:grid-cols-3 gap-x-4">
                    <div class="w-full" v-for="(product, index) in products_liked" :key="index">
                        <template v-if="index < item_per_page * page && index >= item_per_page * (page - 1)">
                            <div class="relative mx-2">
                                <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                                <img class="centered w-full"
                                    :src="require(`~/static/images/products${product.imgUrl[0]}`)" />
                                <span v-if="product.isNew"
                                    class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
                                <div @click="liked(index)"
                                    class="absolute top-2 right-2 sm:top-8 sm:right-8 cursor-pointer block sm:hidden">
                                    <base-icon class="hidden sm:block" icon='heartactive' viewBox="0 0 30 41" size="40"
                                        :color="product.islike ? '#f05252' : '#d5d6d7'" />
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
                                <p class="mt-2 text-xs sm:text-sm capitalize">{{ product.type }}</p>
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
                <base-pages v-if="products_liked.length != 0" class="mt-12" @change="change" :page="page"
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
            products_liked: [],
            item_per_page: 6,
            sort_by: '',
        };
    },
    components: { BaseButton },
    async mounted() {
        await this.filter_liked()
    },
    methods: {
        change(p) {
            this.page = p
        },
        sortby(value) {
            if (value === 'a-z') {
                this.products_liked.sort((a, b) => {
                    // console.log(a,b)
                    let textA = a.name.toUpperCase();
                    let textB = b.name.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })
                // console.log(this.products_liked)
            }
            else if (value === 'z-a') {
                this.products_liked.reverse((a, b) => {
                    let textA = a.name.toUpperCase();
                    let textB = b.name.toUpperCase();
                    return (textA > textB) ? 1 : (textA < textB) ? -1 : 0;
                })
            }
        },
        async liked(index) {
            this.products[index].islike = await !this.products[index].islike
            await this.$store.dispatch('me/setProducts', this.products)
            this.filter_liked()
        },
        async filter_liked() {
            let list = []
            await this.getProducts()
            list = this.products.filter((e) => e.islike === true)
            this.total_p = Math.ceil(list.length / this.item_per_page)
            this.products_liked = list
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

.truncated-2-lines {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

}
</style>
