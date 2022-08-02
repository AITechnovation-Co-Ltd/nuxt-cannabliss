<template>
  <div v-if="!no_product" class="w-full">
    <div class="w-full relative mt-20 px-8 lg:px-12 xl:px-20 2xl:px-32">
      <h1 class="w-full text-5xl text-center font-normal text-primary">Review</h1>
      <div class="w-full flex flex-col xl:flex-row mt-12">
        <div class="w-full xl:w-1/4 2xl:mr-20">
          <div class="w-full flex items-center">
            <p class="text-4xl font-light mr-4">4.0</p>
            <div class="flex -space-x-2">
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-gray-300" />
            </div>
          </div>
          <p class="ml-2 mt-2 text-quaternary text-sm">Based on reviews</p>
          <base-button @click="$refs.DialogReviewRefs.show()" class="mt-6">Write a review</base-button>
        </div>
        <div class="w-full mt-8 lg:mt-0 xl:w-3/4">
          <div class="w-full columns-1 xl:flex justify-center" v-for="index in 2" :key="index">
            <div class="w-full columns-1 xl:flex px-4 py-8 border-b-2 border-gray-200 text-quaternary">
              <!-- Image Product-->
              <div class="w-full xl:w-2/5 columns-1 items-start md:flex ">
                <img src="@/static/images/IMG_04review/product-review.png" class="w-24 h-12 mr-0 md:mr-6">
                <p class="mt-6 md:mt-0 text-sm font-extralight">Canabliss Oasiz : <br>Super Berry Hydrating Mask</p>
              </div>
              <!-- Details review -->
              <div class="w-full xl:w-3/5 flex flex-col ml-4 mt-6 xl:mt-0 ">
                <div class="columns-1 xl:flex justify-between">
                  <p class="text-lg font-light">Kimberly K.</p>
                  <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
                </div>
                <!-- Comment -->
                <p class="my-4 text-sm font-extralight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aperiam tempore eius
                  commodi
                  laudantium
                  earum temporibus ex illum, adipisci dolorem quia consequatur hic necessitatibus debitis minima beatae
                  architecto. Quia, eaque.</p>
                <!-- Date -->
                <p class="text-sm font-extralight">12/06/22</p>
              </div>
            </div>
          </div>
          <base-button @click="$router.push(`/review`)" class="mt-6">View more</base-button>
        </div>
      </div>
      <dialog-review ref="DialogReviewRefs" :product_name="product_name" />
    </div>
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Group1135@2x.png" alt=""> -->
  </div>
</template>

<script>
import DialogReview from '@/components/review/dialog-review.vue'
import ReviewCard from '../review/review-card.vue'
import products from "@/static/json/products.json"
export default {
  components: { ReviewCard, DialogReview },
  data() {
    return {
      products,
      product_name: '',
      no_product: false,
    }
  },
  props: {
    params: {
      type: String,
      required: false,
    }
  },
  methods: {
    async fetch() {
      const self = this
      if (self.$store.getters['me/getProductName'] != '') {
        let products_test = await self.products.filter((e) => e.name == self.$store.getters['me/getProductName'])
        console.log(products_test.length)
        if (products_test.length == 0) {
          self.no_product = true
        }
        else {
          self.product_name = products_test[0].name
        }
      }
      else {
        let products_test = await self.products.filter((e) => e.no == self.params)
        self.product_name = products_test[0].name
      }
    },
  },
  mounted() {
    this.fetch()
  }
}
</script>

<style scoped>
.b BaseButtongheight {
  height: 500px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
}
</style>