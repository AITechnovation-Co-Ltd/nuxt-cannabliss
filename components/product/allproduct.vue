<template>
    <div class="w-full flex flex-row justify-center">
        <!-- Categories -->
        <div class="w-3/12 flex flex-col items-center">

            <!-- Breadcrumb -->
            <div class="w-80">
                <nav class="w-full flex justify-start items-center" aria-label="Breadcrumb">
                    <ol class="text-quaternary text-base inline-flex items-center justify-center space-x-1 md:space-x-3">
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
            <div class="w-full mt-20 grid grid-cols-3 gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from './product-card.vue';
export default {
    components: { ProductCard }
}
</script>

<style scoped>
.vl {
    height: 15px;
    width: 1px;
}
</style>