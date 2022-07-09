<template>
  <div class="w-full mt-20 px-24 lg:px-12 xl:px-20 2xl:px-36">
    <div class="flex justify-between">
      <h1 class="text-7xl text-primary">Products</h1>
      <BaseButton @click="$router.push(`/product`)">View all</BaseButton>
    </div>
    <div class="w-full columns-1 lg:flex mt-16">
      <div class="w-full lg:w-1/6 mr-6">
        <ul class="w-full flex justify-around lg:flex-col decorate-none text-3xl text-primary font-light">
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

        <div class="w-full mt-10 lg:mt-20 grid grid-cols-2 xl:grid-cols-3 gap-x-4">
          <div class="w-full" v-for="(product, index) in list_products" :key="index">
            <template
              v-if="xl ? index < 2 * page && index >= 2 * (page - 1) : index < 3 * page && index >= 3 * (page - 1)">
              <div class="relative">

                <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl}`)" />
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
                <p class="text-3xl font-medium">{{ product.name.slice(0, 50) }}</p>
                <p class="my-4">{{ product.detail.slice(0, 80) }}...</p>
                <base-button @click="$router.push(`/product/details/${product.no}`)" class="border-quaternary">
                  View more
                </base-button>
              </div>
            </template>
          </div>
        </div>
        <base-pages @change="change" :page="page" :total_pages="total_p" :limit="7"></base-pages>
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
      return list
    },
  },
  async mounted() {
    await this.isXL()
    // console.log(this.isXL())
    this.total_p = Math.ceil(this.isXL() ? this.products.length / 2 : this.products.length / 3)
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
    }
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