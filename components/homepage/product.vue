<template>
  <div class="w-full mt-8 sm:mt-20 px-4 lg:px-12 xl:px-20 3xl:px-36">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-3xl md:text-5xl text-primary">Products</h1>
      <BaseButton @click="$router.push(`/product`)">View all</BaseButton>
    </div>
    <div class="w-full columns-1 lg:flex mt-0 sm:mt-16">
      <div class="hidden sm:flex w-full lg:w-1/6 mr-6">
        <ul
          class="w-full flex justify-around lg:justify-start lg:flex-col decorate-none text-lg lg:text-xl text-primary font-extralight">
          <li @click="filterType('All')">
            <span class="flex items-center lg:my-4 hover:cursor-pointer" :class="{ 'font-normal': type == 'All' }">All
              <div v-if="type == 'All'" class="w-16 ml-2 h-0.5 bg-primary hidden lg:block" :class="{ 'hidden': xl }">
              </div>
            </span>
          </li>
          <li @click="filterType('Hair')">
            <span class="flex items-center lg:my-4 hover:cursor-pointer" :class="{ 'font-normal': type == 'Hair' }">Hair
              <div v-if="type == 'Hair'" class="w-16 ml-2 h-0.5 bg-primary hidden lg:block" :class="{ 'hidden': xl }">
              </div>
            </span>
          </li>
          <li @click="filterType('Face')">
            <span class="flex items-center lg:my-4 hover:cursor-pointer" :class="{ 'font-normal': type == 'Face' }">Face
              <div v-if="type == 'Face'" class="w-16 ml-2 h-0.5 bg-primary hidden lg:block" :class="{ 'hidden': xl }">
              </div>
            </span>
          </li>
          <li @click="filterType('Body')">
            <span class="flex items-center lg:my-4 hover:cursor-pointer" :class="{ 'font-normal': type == 'Body' }">Body
              <div v-if="type == 'Body'" class="w-16 ml-2 h-0.5 bg-primary hidden lg:block" :class="{ 'hidden': xl }">
              </div>
            </span>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-5/6">

        <!-- Product card -->
        <div v-if="list_products.length != 0"
          class="w-full mt-6 sm:mt-12 lg:mt-0 grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 ">
          <div class="w-full" v-for="(product, index) in list_products" :key="index">
            <template v-if="index < page_screen * page && index >= page_screen * (page - 1)">
              <div class="relative mx-2">
                <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
                <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl[0]}`)" />
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
                <p class="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 text-sm font-thin text-quaternary">{{
                    product.quantity
                }}</p>
              </div>
              <div class="my-4 mx-2 text-quaternary text-xl">
                <p class="mt-2 text-sm text-detail font-extralight capitalize">{{ product.type }}</p>
                <p class="truncated-2-lines text-base sm:text-lg font-medium ">{{ product.name }}</p>
                <p class="truncated-2-lines mb-4 mt-2 text-xl text-detail font-bold thai">{{ product.detail }}</p>
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
      type: 'All',
      xl: null,
    }
  },
  computed: {
    list_products() {
      let list = []
      this.getProducts()
      if (this.type === 'All') {
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
      else if (this.screen <= 1280) {
        item_per_page = 2
      }
      return item_per_page
    },
  },
  mounted() {
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
    async liked(index) {
      this.products[index].islike = await !this.products[index].islike
      await this.$store.dispatch('me/setProducts', this.products)
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

.truncated-2-lines {
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

}
</style>