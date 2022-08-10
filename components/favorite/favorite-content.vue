<template>
    <div class="w-full flex flex-col justify-center pt-10 sm:pt-20 px-4 md:px-8 lg:px-12 xl:px-24 3xl:px-36">
        <div class="w-full flex flex-col lg:flex-row items-center">
            <div class="w-full lg:w-2/12 flex font-extralight text-sm text-quaternary">
                <base-icon icon="angle-left" viewBox="0 0 24 24" size="18" />&nbsp;
                <nuxt-link to="/" class="hover:underline">Home</nuxt-link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <img src="~/static/images/IMG_02products/Group1132@2x.png" class="widget1132">
                <p class="font-normal">Favorite</p>
            </div>
            <div class="w-full lg:w-10/12">
                <h1 class="w-full text-2xl mt-6 lg:mt-0 sm:text-4xl font-light text-primary">Favorite</h1>
            </div>
        </div>
        <!-- Categories -->
        <div class="w-full flex justify-end">
            <!-- Product cards -->
            <div class="w-full lg:w-10/12 mr-0 ml-auto">
                <img src="~/static/images/IMG_06fav/Group389@2x.png" class="widget389">
                <!-- Sort by -->
                <div
                    class="w-full py-3 mt-3 sm:mt-8 bg-tertiary flex flex-row items-center justify-between sm:justify-end">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center mx-2">
                        <p class="text-xs text-white">Items per page</p>
                        <select class="h-8 w-16 text-xs text-quaternary rounded-xl mr-1 sm:mx-4" v-model="item_per_page"
                            @change="pagegiantion">
                            <option selected value=6>6</option>
                            <option value=12>12</option>
                            <option value=18>18</option>
                            <option value=24>24</option>
                        </select>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start sm:items-center ml-2 sm:ml-0 mx-2">
                        <p class="text-xs text-white">Sort by</p>
                        <select v-model="sort_by" @change="sortby()"
                            class="h-8 w-32 py-px text-xs text-quaternary rounded-xl mr-1 sm:mx-2">
                            <option value="" hidden disabled selected>Please Select</option>
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>
                            <option value="date">Newest</option>
                            <option value="low-hight">Price(Low to hight)</option>
                            <option value="hight-low">Price(Hight to low)</option>
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
                                <span v-if="$day.getDatetoNow(product.release) <= 7"
                                    class="px-3 sm:px-9 py-0.5 sm:py-2 text-white text-sm sm:text-base absolute top-3 left-3 sm:top-4 sm:left-4 3xl:top-8 3xl:left-8 bg-primary rounded-full">New</span>
                                <div @click="liked(product.no)"
                                    class="absolute top-1 right-1 sm:top-4 sm:right-4 3xl:top-8 3xl:right-8 cursor-pointer block sm:hidden">
                                    <base-icon class="hidden sm:block" icon='heartactive' viewBox="0 0 30 41" size="40"
                                        :color="product.islike ? '#f05252' : '#d5d6d7'" />
                                </div>
                                <div @click="liked(product.no)"
                                    class="absolute top-1 right-1 sm:top-4 sm:right-4 3xl:top-8 3xl:right-8 cursor-pointer hidden sm:block">
                                    <base-icon class="hidden sm:block" icon='heartactive' viewBox="0 0 30 41" size="50"
                                        :color="product.islike ? '#f05252' : '#d5d6d7'" />
                                </div>
                                <p
                                    class="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 text-sm font-thin text-quaternary">
                                    {{ product.quantity }}</p>
                            </div>
                            <div class="my-4 mx-2 text-quaternary text-xl">
                                <p class="mt-2 text-xs sm:text-sm capitalize">{{ product.type }}</p>
                                <p class="truncated-2-lines text-base sm:text-lg font-medium ">{{ product.genre + ': '
                                }}{{
        product.name
}}</p>
                                <p class="truncated-2-lines mb-4 mt-2 text-xl text-detail font-bold thai">{{
                                        product.detail_th
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
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
        pagegiantion() {
            this.total_p = Math.ceil(this.products_liked.length / this.item_per_page)
        },
        sortby() {
            if (this.sort_by === 'a-z') {
                this.products_liked?.sort((a, b) => {
                    let textA = a.name.toUpperCase();
                    let textB = b.name.toUpperCase();
                    return (textA > textB) ? 1 : -1;
                })
            }
            else if (this.sort_by === 'z-a') {
                this.products_liked?.sort((a, b) => {
                    let textA = a.name.toUpperCase();
                    let textB = b.name.toUpperCase();
                    return (textA > textB) ? -1 : 1;
                })
            }
            else if (this.sort_by === 'low-hight') {
                this.products_liked?.sort((a, b) => {
                    let priceA = a.price;
                    let priceB = b.price;
                    return (priceA > priceB) ? 1 : -1;
                })
            }
            else if (this.sort_by === 'hight-low') {
                this.products_liked?.sort((a, b) => {
                    let priceA = a.price;
                    let priceB = b.price;
                    return (priceA > priceB) ? -1 : 1;
                })
            }
            else if (this.sort_by === 'date') {
                this.products_liked?.sort((a, b) => {
                    let noA = a.no;
                    let noB = b.no;
                    return (noA > noB) ? -1 : 1;
                })
            }
            this.page = 1
        },
        async liked(n) {
            let list = await this.products.findIndex((e => e.no == n))
            this.products[list].islike = false
            this.$store.dispatch('me/setProducts', this.products)
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
.widget1132 {
    height: 6rem;
    position: absolute;
    transform: translate(35rem, -3.5rem);
}

.widget389 {
    height: 40rem;
    position: absolute;
    left: -10.5rem;
}

@media (max-width:1441px) {
    .widget389 {
        height: 33rem;
        position: absolute;
        left: -8.5rem;
    }
}

.vl {
    height: 15px;
    width: 1px;
}

.truncated-2-lines {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.centered {
    height: 12vw;
    width: auto;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -35%);
}

@media (max-width:1419px) {
    .centered {
        height: 18vw;
    }
}

@media (max-width:1023px) {
    .centered {
        height: 25vw;
    }
}
</style>
