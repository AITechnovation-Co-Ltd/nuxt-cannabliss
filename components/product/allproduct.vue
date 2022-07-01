<template>
    <div class="w-full flex flex-row justify-center px-28">
        <!-- Categories -->
        <div class="w-3/12 flex flex-col items-center">

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
                                <p class="font-extrabold md:ml-2 ">All Products</p>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <!-- List Categories -->
            <div class="w-80 mt-10">
                <h1 class="text-3xl text-primary">Categories</h1>
                <hr class="w-full my-6 border-b-2 border-gray-200 flex flex-col justify-center items-center">
                <div>
                    <ul class="decoration-none text-primary text-lg space-y-4">
                        <li><span class="hover:font-bold hover:cursor-pointer">Best Seller</span></li>
                        <li><span class="hover:font-bold hover:cursor-pointer">New In</span></li>
                        <li><span class="hover:font-bold hover:cursor-pointer">All Products</span></li>
                        <li><span class="hover:font-bold hover:cursor-pointer">Hair</span></li>
                        <li><span class="hover:font-bold hover:cursor-pointer">Face</span></li>
                        <li><span class="hover:font-bold hover:cursor-pointer">Body</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Product cards -->
        <div class="w-9/12">
            <h1 class="w-full text-4xl text-primary">All Products</h1>

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
                        <option value="">Best Selling</option>
                    </select>
                </div>
            </div>

            <!-- Product card -->
            <div class="w-full mt-20 grid grid-cols-3 gap-x-6 gap-y-10">
                <div class="w-full" v-for="(product, index) in products" :key="index">
                    <div class="relative">
                        <img src="~/static/images/IMG_02products_detail/Path357@2x.png" alt="">
                        <img class="centered w-full" :src="product.img" alt="">
                        <span v-if="product.isNew"
                            class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
                        <base-icon icon="heart" viewBox="0 0 30 41" size="50"
                            class="text-quaternary absolute top-8 right-8" />
                        <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
                    </div>
                    <div class="text-quaternary text-xl">
                        <p>{{ product.type }}</p>
                        <p class="text-3xl font-medium">{{ product.name }}</p>
                        <p class="mt-4">{{ product.datial }}</p>
                        <button class="mt-4 px-8 py-2 border-2 border-quaternary rounded-full">View more</button>
                    </div>
                </div>
            </div>
            <div class="w-full mt-20 flex justify-end items-center">
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center space-x-3">
                        <li>
                            <div
                                class="h-9 w-9 rounded-full flex justify-center items-center border border-quaternary hover:bg-primary hover:text-white hover:border-none hover:cursor-pointer">
                                <a href="#" class="">
                                    <!-- <span class="sr-only">Previous</span> -->
                                    <svg class="w-5 h-5 text-quaternary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div
                                class="h-9 w-9 rounded-full flex justify-center items-center bg-primary hover:bg-primary hover:text-white hover:border-none hover:cursor-pointer">
                                <a href="#" class="leading-tight rounded-full text-white">1</a>
                            </div>
                        </li>
                        <li>
                            <div
                                class="h-9 w-9 rounded-full flex justify-center items-center text-quaternary border border-quaternary hover:bg-primary hover:text-white hover:border-none hover:cursor-pointer">
                                <a href="#" class="leading-tight rounded-full">2</a>
                            </div>
                        </li>
                        <li>
                            <div
                                class="h-9 w-9 rounded-full flex justify-center items-center text-quaternary border border-quaternary hover:bg-primary hover:text-white hover:border-none hover:cursor-pointer">
                                <a href="#" class="leading-tight rounded-full">3</a>
                            </div>
                        </li>

                        <li>
                            <div
                                class="h-9 w-9 rounded-full flex justify-center items-center border border-quaternary hover:bg-primary hover:text-white hover:border-none hover:cursor-pointer">
                                <a href="#" class="">
                                    <!-- <span class="sr-only">Next</span> -->
                                    <svg class="w-5 h-5 text-quaternary" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: true, img:require("~/static/images/IMG_06fav/Group508@2x.png") },
                { name: "Canabliss Oasiz : Red Fruit Overnight Mask", type: "Face", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: true, img:require("~/static/images/IMG_02products_detail/Group669@2x.png") },
                { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_06fav/Group508@2x.png") },
                { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_06fav/Group508@2x.png") },
                { name: "Canabliss Oasiz : Red Fruit Overnight Mask", type: "Face", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_02products_detail/Group669@2x.png") },
                { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_06fav/Group508@2x.png") },
                { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_06fav/Group508@2x.png") },
                { name: "Canabliss Oasiz : Red Fruit Overnight Mask", type: "Face", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_02products_detail/Group669@2x.png") },
                { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_06fav/Group508@2x.png") },
            ]
        }
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