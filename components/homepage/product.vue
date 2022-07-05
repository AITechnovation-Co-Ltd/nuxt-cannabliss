<template>
  <div class="w-full px-28 mt-20">
    <div class="flex justify-between">
      <h1 class="text-7xl text-primary">Products</h1>
      <BaseButton @click="$router.push(`/product`)">View all</BaseButton>
    </div>
    <div class="w-full mt-16 flex">
      <div class="w-1/6 mr-6">
        <ul class="decorate-none text-3xl text-primary font-light space-y-8">
          <li @click="filterType('all')">
            <span class="flex justify-between items-center hover:font-bold hover:cursor-pointer"
              :class="{ 'font-bold': type == 'all' }">All Products <div v-if="type == 'all'"
                class="w-24 h-1 bg-primary"></div>
            </span>
          </li>
          <li @click="filterType('hair')">
            <span class="flex justify-between items-center hover:font-bold hover:cursor-pointer"
              :class="{ 'font-bold': type == 'hair' }">Hair<div v-if="type == 'hair'" class="w-48 h-1 bg-primary"></div>
            </span>
          </li>
          <li @click="filterType('face')">
            <span class="flex justify-between items-center hover:font-bold hover:cursor-pointer"
              :class="{ 'font-bold': type == 'face' }">Face<div v-if="type == 'face'" class="w-48 h-1 bg-primary"></div>
            </span>
          </li>
          <li @click="filterType('body')">
            <span class="flex justify-between items-center hover:font-bold hover:cursor-pointer"
              :class="{ 'font-bold': type == 'body' }">Body<div v-if="type == 'body'" class="w-48 h-1 bg-primary"></div>
            </span>
          </li>
        </ul>
      </div>
      <div class="w-5/6">
        <!-- Product card -->

        <div class="w-full mt-20 grid grid-cols-3 gap-x-4">
          <div class="w-full" v-for="(product, index) in list_products" :key="index">
            <template v-if="index < 3 * page && index >= 3 * (page - 1)">
              <div class="relative">

                <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl}`)" />
                <span v-if="product.isNew"
                  class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
                <base-icon icon="heartactive" viewBox="0 0 30 41" size="50"
                  class="hover:cursor-pointer text-red-500 absolute top-8 right-8" />
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
  mounted() {
    this.total_p = Math.ceil(this.products.length / 3)
  },
  methods: {
    change(p) {
      console.log(p)
      this.page = p
    },
    filterType(type) {
      this.type = type
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