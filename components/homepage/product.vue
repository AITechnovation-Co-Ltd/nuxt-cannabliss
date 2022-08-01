<template>
  <div class="w-full mt-20 px-8 lg:px-12 xl:px-20 2xl:px-32">
    <div class="flex flex-col sm:flex-row justify-between items-start">
      <h1 class="text-5xl mb-6 sm:mb-0 md:text-5xl text-primary">Products</h1>
      <BaseButton @click="$router.push(`/product`)">View all</BaseButton>
    </div>
    <div class="w-full columns-1 lg:flex mt-0 sm:mt-16">
      <div class="hidden sm:flex w-full lg:w-1/6 mr-6">
        <ul
          class="w-full flex justify-around lg:justify-start lg:flex-col decorate-none text-xl text-primary font-light">
          <li @click="filterType('all')">
            <span class="flex justify-between items-center lg:my-2 hover:font-bold hover:cursor-pointer"
              :class="{ 'font-bold': type == 'all' }">All Products <div v-if="type == 'all'"
                class=" w-24 h-1 bg-primary" :class="{ 'hidden': xl }"></div>
            </span>
          </li>
          <li @click="filterType('hair')">
            <span class="flex justify-between items-center lg:my-2 hover:font-bold hover:cursor-pointer"
              :class="{ 'font-bold': type == 'hair' }">Hair<div v-if="type == 'hair'" class="w-40 h-1 bg-primary"
                :class="{ 'hidden': xl }"></div>
            </span>
          </li>
          <li @click="filterType('face')">
            <span class="flex justify-between items-center lg:my-2 hover:font-bold hover:cursor-pointer"
              :class="{ 'font-bold': type == 'face' }">Face<div v-if="type == 'face'" class="w-40 h-1 bg-primary"
                :class="{ 'hidden': xl }"></div>
            </span>
          </li>
          <li @click="filterType('body')">
            <span class="flex justify-between items-center lg:my-2 hover:font-bold hover:cursor-pointer"
              :class="{ 'font-bold': type == 'body' }">Body<div v-if="type == 'body'" class="w-40 h-1 bg-primary"
                :class="{ 'hidden': xl }"></div>
            </span>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-5/6">

        <!-- Product card -->
        <div v-if="list_products.length != 0"
          class="w-full mt-12 lg:mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 ">
          <div class="w-full" v-for="(product, index) in list_products" :key="index">
            <template v-if="index < page_screen * page && index >= page_screen * (page - 1)">
              <div class="relative mx-2">
                <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl[0]}`)" />
                <span v-if="product.isNew"
                  class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
                <div @click="liked(index)" class="absolute top-8 right-8 cursor-pointer">
                  <base-icon icon='heartactive' viewBox="0 0 30 41" size="50" class="text-quaternary"
                    :class="{ 'text-red-500': product.islike }" />
                </div>
                <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
              </div>
              <div class="mb-4 mx-2 text-quaternary text-xl">
                <p class="mt-2">{{ product.type }}</p>
                <p class="text-xl 2xl:text-2xl font-medium">{{ product.name.slice(0, 50) }}</p>
                <p class="my-4">{{ product.detail.slice(0, 80) }}...</p>
                <base-button @click="$router.push(`/product/details/${product.no}`)" class="border-quaternary">
                  View more
                </base-button>
              </div>
            </template>
          </div>
        </div>
        <div v-else class="w-full py-12 mt-12 bg-white text-center text-2xl text-primary">No Products</div>
        <base-pages v-if="list_products.length != 0" @change="change" :page="page" :total_pages="total_p" :limit="7">
        </base-pages>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/base-button.vue';
import products from "@/static/json/products.json"
export default {
  components: { BaseButton },
  data() {
    return {
      page: 1,
      total_p: 1,
      products,
      screen: window.screen.width,
      type: 'all',
      xl: null,
    }
  },
  computed: {
    list_products() {
      let list = []
      if (this.type === 'all') {
        list = this.products
      } else {
        list = this.products.filter((e) => e.type === this.type)
      }
      this.page = 1;
      this.total_p = Math.ceil(list.length / this.page_screen)
      return list
    },
    page_screen() {
      let item_per_page = 4
      if (this.screen <= 1536 && this.screen > 1440) {
        item_per_page = 4
      }
      else if (this.screen <= 1440 && this.screen > 1280) {
        item_per_page = 3
      }
      else if (this.screen <= 1280 && this.screen > 768) {
        item_per_page = 2
      }
      else if (this.screen <= 768) {
        item_per_page = 1
      }
      return item_per_page
    },
  },
  mounted() {
    console.log(this.page_screen)
    this.total_p = Math.ceil(this.products.length / this.page_screen)
    // console.log(this.total_p)
  },
  methods: {
    change(p) {
      console.log(p)
      this.page = p
    },
    filterType(type) {
      this.type = type
    },
    isXL() {
      if (screen.width <= 1280) {
        this.xl = true
        return true;
      }
      else {
        this.xl = false
        return false;
      }
    },
    liked(index) {
      this.products[index].islike = !this.products[index].islike
    },
  }
}
</script>

<style scoped>
.hr {
  height: 3px;
  width: 40%;
}


.centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -35%);
}
</style>