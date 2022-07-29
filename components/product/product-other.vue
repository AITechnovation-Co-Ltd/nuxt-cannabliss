<template>
  <div class="w-full px-8 lg:px-12 xl:px-20 2xl:px-36">
    <div class="hidden lg:block 2xl:hidden">
      <h1 class="text-5xl text-primary text-center font-medium my-12">You may also like</h1>
      <div class="w-full grid grid-cols-3 gap-x-4">
        <div class="w-full" v-for="(product, index) in products" :key="index">
          <template v-if="index < 3 * page && index >= 3 * (page - 1)">
            <div class="relative">
              <img src="~/static/images/IMG_02products_detail/Path357@2x.png" alt="">
              <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl[0]}`)">
              <span v-if="product.isNew"
                class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
              <base-icon icon="heart" viewBox="0 0 30 41" size="50" class="text-quaternary absolute top-8 right-8" />
              <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
            </div>
            <div class="text-quaternary text-xl">
              <p>{{ product.type }}</p>
              <p class="text-2xl 2xl:text-3xl font-medium">{{ product.name.slice(0, 50) }}</p>
              <p class="my-4">{{ product.detail.slice(0, 80) }}...</p>
              <BaseButton @click="$router.push(`/product/details/${product.no}`), scrollToTop">View more
              </BaseButton>
            </div>
          </template>
        </div>
      </div>
      <base-pages class="mt-8" @change="change" :page="page" :total_pages="total_p" :limit="7"></base-pages>
    </div>
    <div class="hidden 2xl:block">
      <h1 class="text-5xl text-primary text-center font-medium my-12">You may also like</h1>
      <div class="w-full grid grid-cols-4 gap-x-4">
        <div class="w-full" v-for="(product, index) in products" :key="index">
          <template v-if="index < 4 * page && index >= 4 * (page - 1)">
            <div class="relative">
              <img src="~/static/images/IMG_02products_detail/Path357@2x.png" alt="">
              <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl[0]}`)">
              <span v-if="product.isNew"
                class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
              <base-icon icon="heart" viewBox="0 0 30 41" size="50" class="text-quaternary absolute top-8 right-8" />
              <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
            </div>
            <div class="text-quaternary text-xl">
              <p>{{ product.type }}</p>
              <p class="text-2xl 2xl:text-3xl font-medium">{{ product.name.slice(0, 50) }}</p>
              <p class="my-4">{{ product.detail.slice(0, 80) }}...</p>
              <BaseButton @click="$router.push(`/product/details/${product.no}`), scrollToTop">View more
              </BaseButton>
            </div>
          </template>
        </div>
      </div>
      <base-pages class="mt-8" @change="change" :page="page" :total_pages="total_p" :limit="7"></base-pages>
    </div>
    <div class="block lg:hidden">
      <h1 class="text-5xl text-primary text-center font-medium my-12">You may also like</h1>
      <div class="w-full grid grid-cols-2 gap-x-4">
        <div class="w-full" v-for="(product, index) in products" :key="index">
          <template v-if="index < 2 * page && index >= 2 * (page - 1)">
            <div class="relative">
              <img src="~/static/images/IMG_02products_detail/Path357@2x.png" alt="">
              <img class="centered w-full" :src="require(`~/static/images/products${product.imgUrl[0]}`)">
              <span v-if="product.isNew"
                class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
              <base-icon icon="heart" viewBox="0 0 30 41" size="50" class="text-quaternary absolute top-8 right-8" />
              <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
            </div>
            <div class="text-quaternary text-xl">
              <p>{{ product.type }}</p>
              <p class="text-2xl 2xl:text-3xl font-medium">{{ product.name.slice(0, 50) }}</p>
              <p class="my-4">{{ product.detail.slice(0, 80) }}...</p>
              <BaseButton @click="$router.push(`/product/details/${product.no}`), scrollToTop">View more
              </BaseButton>
            </div>
          </template>
        </div>
      </div>
      <base-pages class="mt-8" @change="change" :page="page" :total_pages="total_p" :limit="7"></base-pages>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/base-button.vue'
import products from "@/static/json/products.json"
export default {
  data() {
    return {
      products,
      page: 1,
      total_p: 1,
    }
  },
  components: { BaseButton },
  async mounted() {
    this.total_p = Math.ceil(this.products.length / 6)
  },
  methods: {
    change(p) {
      this.page = p
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -35%);
}
</style>