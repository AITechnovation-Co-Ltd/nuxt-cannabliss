<template>
  <div class="w-full px-8 lg:px-12 xl:px-20 2xl:px-32">
    <h1 class="text-5xl text-primary text-center font-medium my-12">You may also like</h1>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      <div class="w-full " v-for="(product, index) in products" :key="index">
        <template v-if="index < page_screen * page && index >= page_screen * (page - 1)">
          <div class="relative mx-2">
            <img src="~/static/images/IMG_02products_detail/Path357@2x.png" alt="">
            <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl[0]}`)">
            <span v-if="product.isNew"
              class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
            <div @click="liked(index)" class="absolute top-8 right-8 cursor-pointer">
              <base-icon icon='heartactive' viewBox="0 0 30 41" size="50" class="text-quaternary"
                :class="{ 'text-red-500': product.islike }" />
            </div>
            <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
          </div>
          <div class="text-quaternary text-xl mx-2">
            <p>{{ product.type }}</p>
            <p class="text-xl xl:text-2xl font-medium">{{ product.name.slice(0, 50) }}</p>
            <p class="my-4">{{ product.detail.slice(0, 80) }}...</p>
            <base-button @click="$router.push(`/product/details/${product.no}`), scrollToTop">View more
            </base-button>
          </div>
        </template>
      </div>
    </div>
    <base-pages class="mt-8" @change="change" :page="page" :total_pages="total_p" :limit="7"></base-pages>
  </div>
</template>

<script>
import data from "@/static/json/products.json"
export default {
  data() {
    return {
      data,
      page: 1,
      total_p: 1,
      screen: window.screen.width,
      products: []
    }
  },
  props: {
    params: {
      type: String,
      required: false,
    }
  },
  async mounted() {
    // console.log(this.page_screen)
    console.log(this.params)
    this.list_products()
  },
  computed: {
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
  methods: {
    change(p) {
      this.page = p
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    liked(index) {
      this.products[index].islike = !this.products[index].islike
    },
    list_products() {
      let list = []
      list = this.data.filter((e) => e.no != this.params)
      this.page = 1;
      this.total_p = Math.ceil(list.length / this.page_screen)
      console.log(list)
      this.products = list
    },
  },
};
</script>

<style scoped>
.centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -35%);
}
</style>