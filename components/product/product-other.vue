<template>
  <div class="w-full px-4 lg:px-12 xl:px-28 3xl:px-32">
    <h1 class="text-4xl sm:text-5xl text-primary text-center font-medium my-12">You may also like</h1>
    <div class="w-full grid grid-cols-2 xl:grid-cols-4 ">
      <div class="w-full " v-for="(product, index) in products" :key="index">
        <template v-if="index < page_screen * page && index >= page_screen * (page - 1)">
          <div class="relative mx-2">
            <img src="~/static/images/IMG_02products_detail/Path357@2x.png" class="" />
            <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl[0]}`)" />
            <span v-if="product.isNew"
              class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
            <div @click="liked(product.no)"
              class="absolute top-2 right-2 sm:top-8 sm:right-8 cursor-pointer block sm:hidden">
              <base-icon class="hidden sm:block" icon='heartactive' viewBox="0 0 30 41" size="40"
                :color="product.islike ? '#f05252' : '#d5d6d7'" />
            </div>
            <div @click="liked(product.no)"
              class="absolute top-2 right-2 sm:top-8 sm:right-8 cursor-pointer hidden sm:block">
              <base-icon class="hidden sm:block" icon='heartactive' viewBox="0 0 30 41" size="50"
                :color="product.islike ? '#f05252' : '#d5d6d7'" />
            </div>
            <p class="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 text-sm font-thin text-quaternary">
              {{ product.quantity }}</p>
          </div>
          <div class="my-4 mx-2 text-quaternary text-xl">
            <p class="mt-2 text-xs sm:text-sm capitalize">{{ product.type }}</p>
            <p class="truncated-2-lines text-base sm:text-lg font-medium ">{{ product.genre + ': ' }}{{ product.name }}
            </p>
            <p class="truncated-2-lines mb-4 mt-2 text-xl text-detail font-bold thai">{{ product.detail_th }}</p>
            <base-button @click="$router.push(`/product/details/${product.no}`)" class="border-quaternary">
              View more
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
    this.productname = await this.$store.getters['me/getProductName']
    this.list_products()
  },
  computed: {
    page_screen() {
      let item_per_page = 4
      if (this.screen > 1439) {
        item_per_page = 4
      }
      else if (this.screen <= 1439 && this.screen > 1280) {
        item_per_page = 3
      }
      else if (this.screen <= 1280) {
        item_per_page = 2
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
    async liked(n) {
      let list = await this.products.findIndex((e => e.no == n))
      this.products[list].islike = !this.products[list].islike
      this.$store.dispatch('me/setProducts', this.products)
    },
    async list_products() {
      const self = this
      await self.getProducts()
      if (self.$store.getters['me/getProductName'] != '') {
        let list = await self.data.filter((e) => e.name != self.productname)
        self.products = list
      }
      else {
        if (this.params.length < 3) {
          let list = await self.data.filter((e) => e.no != self.params)
          self.products = list
        }
        else {
          let list = await self.data.filter((e) => e.name != self.params)
          self.products = list
        }
      }
      self.total_p = Math.ceil(self.products.length / self.page_screen)
    },
    async getProducts() {
      const self = this
      try {
        let products = await self.$store.getters['me/getProducts']
        if (products != []) {
          self.data = products
        }
      } catch (err) {
        console.log('error', err);
      }
    },
  },
};
</script>

<style scoped>
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
    height: 30vw;
  }
}
</style>