<template>
    <div class="w-full flex flex-col justify-center px-4 pt-10 sm:pt-20 md:px-8 lg:px-12 xl:px-24 3xl:px-36 relative">
        <div class="w-full flex flex-col lg:flex-row justify-end ">
            <div class="w-full lg:w-3/12 flex font-extralight text-sm text-quaternary items-center">
                <base-icon icon="angle-left" viewBox="0 0 24 24" size="18" />&nbsp;
                <nuxt-link to="/" class="hover:underline">Home</nuxt-link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <p>Products</p>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <p class="font-normal">{{ get_type != '' ? get_type : type }}</p>
            </div>
            <div class="w-full lg:ml-10 lg:w-9/12">
                <!-- edfghjkfghjyuiewqeuiqyieyuirwteriuqetyurtwryuieqwtritrqwtryuiw -->
                <img src="~/static/images/IMG_02products/Group1132@2x.png" class="widget1132">
                <h1 class="w-full text-2xl mt-6 lg:mt-0 sm:text-4xl font-extralight text-primary">{{ type }}</h1>
            </div>
        </div>

        <div class="w-full flex flex-col lg:flex-row items-start">
            <img src="~/static/images/IMG_02products/Group1053@2x.png" class="widget1053">
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
                            <option value="New In">New In</option>
                            <option value="Best Seller">Best Seller</option>
                            <option value="All Products">All Products</option>
                            <option value="Hair">Hair</option>
                            <option value="Face">Face</option>
                            <option value="Body">Body</option>
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
                <div v-if="list_products.length != 0" class="w-full mt-12 grid grid-cols-2 2xl:grid-cols-3 gap-x-4">
                    <div class="w-full" v-for="(product, index) in list_products" :key="index">
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
                                <p class="mt-2 text-sm text-detail font-extralight capitalize">{{ product.type
                                }}</p>
                                <p class="truncated-2-lines text-base sm:text-lg font-medium "
                                    :class="{ 'thai sm:text-2xl': getLanguage }">{{ getLanguage ? product.genre_th + ': ' :product.genre + ': ' }}{{
        getLanguage ? product.name_th : product.name
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
            sort_by: '',
            item_per_page: 6,
        };
    },
    components: { BaseButton },
    computed: {
        list_products() {
            const self = this
            self.getProducts()
            let list = []
            if (self.type == 'All Products') {
                list = self.products
            }
            else {
                if (self.type == 'Best Seller') {
                    list = self.products.filter((e) => e.best === true)
                }
                else if (self.type == 'New In') {
                    list = self.products.filter((e) => self.$day.getDatetoNow(e.release) <= 7)
                }
                else {
                    list = self.products.filter((e) => e.type === self.type)
                }
            }
            self.page = 1;
            self.total_p = Math.ceil(list.length / self.item_per_page)
            return list
        },
        get_type() {
            let type = this.$store.getters['me/getType']
            if (type != '') this.type = type
            this.$store.dispatch('me/setType', '')
            return type
        },
        getLanguage() {
            return this.$store.getters['me/getLanguage']
        }
    },
    async mounted() {
        // this.total_p = await Math.ceil(this.products.length / this.item_per_page)
    },
    methods: {
        sortby() {
            if (this.sort_by === 'a-z') {
                this.list_products?.sort((a, b) => {
                    let textA = a.name.toUpperCase();
                    let textB = b.name.toUpperCase();
                    return (textA > textB) ? 1 : -1;
                })
            }
            else if (this.sort_by === 'z-a') {
                this.list_products?.sort((a, b) => {
                    let textA = a.name.toUpperCase();
                    let textB = b.name.toUpperCase();
                    return (textA > textB) ? -1 : 1;
                })
            }
            else if (this.sort_by === 'low-hight') {
                this.list_products?.sort((a, b) => {
                    let priceA = a.price;
                    let priceB = b.price;
                    return (priceA > priceB) ? 1 : -1;
                })
            }
            else if (this.sort_by === 'hight-low') {
                this.list_products?.sort((a, b) => {
                    let priceA = a.price;
                    let priceB = b.price;
                    return (priceA > priceB) ? -1 : 1;
                })
            }
            else if (this.sort_by === 'date') {
                this.list_products?.sort((a, b) => {
                    let noA = a.no;
                    let noB = b.no;
                    return (noA > noB) ? -1 : 1;
                })
            }
            this.page = 1
        },
        change(p) {
            this.page = p
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
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
        async liked(n) {
            let list = await this.products.findIndex((e => e.no == n))
            this.products[list].islike = !this.products[list].islike
            this.$store.dispatch('me/setProducts', this.products)
        },
    }
};
</script>

<style scoped>
.widget1053 {
    height: 40rem;
    left: 0;
    position: absolute;
    transform: translate(-20rem, -9rem);
}

.widget1132 {
    height: 6rem;
    position: absolute;
    transform: translate(15rem, -3.5rem);
}

.vl {
    height: 15px;
    width: 1px;
}

.hrr {
    height: 0.5px;
    opacity: .34;
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

@media (max-width:1441px) {
    .widget1053 {
        height: 30rem;
        left: 0;
        position: absolute;
        transform: translate(-15rem, -9rem);
    }
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
