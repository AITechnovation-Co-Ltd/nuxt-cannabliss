<template>
  <div class="w-full columns-1 lg:flex justify-center px-4 sm:px-12 lg:px-16 xl:px-20 3xl:px-32">
    <!-- Categories -->
    <div class="w-full lg:w-3/12 flex flex-col items-start">

      <!-- List Categories -->
      <div class="w-full lg:w-80 mt-10">
        <h1 class="text-xl font-normal text-primary">Categories</h1>
        <!-- <hr class="w-full lg:w-8/12 xl:w-10/12 3xl:w-11/12 my-6 border-b-px border-primary flex flex-col justify-center items-center"> -->
        <div class="hrr bg-primary my-6 w-full lg:w-4/6"></div>
        <div>
          <ul
            class="decoration-none text-primary font-extralight text-sm grid grid-cols-4 lg:grid-cols-1 gap-2 md:gap-x-2 lg:gap-y-4">
            <li class="flex items-center justify-center lg:justify-start" @click="filterType('All Products')">
              <span class="hover:font-normal hover:cursor-pointer"
                :class="{ 'font-normal': type == 'All Products' }">All Products</span>
            </li>
            <li class="flex items-center justify-center lg:justify-start" @click="filterType('Hair')">
              <span class="hover:font-normal hover:cursor-pointer"
                :class="{ 'font-normal': type == 'Hair' }">Hair</span>
            </li>
            <li class="flex items-center justify-center lg:justify-start" @click="filterType('Face')">
              <span class="hover:font-normal hover:cursor-pointer"
                :class="{ 'font-normal': type == 'Face' }">Face</span>
            </li>
            <li class="flex items-center justify-center lg:justify-start" @click="filterType('Body')">
              <span class="hover:font-normal hover:cursor-pointer"
                :class="{ 'font-normal': type == 'Body' }">Body</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- All Review -->
    <div class="w-full lg:w-9/12">
      <!-- Write a review -->
      <div class="w-full flex justify-start py-2 px-4 mt-6 sm:mt-8 bg-tertiary ">
        <base-button @click="$refs.uploadReviewRef.show()" color="white">
          Write a review</base-button>
      </div>
      <!-- Review card -->
      <div v-if="list_reviews.length != 0" class="w-full flex flex-col justify-center divide-y divide-primary47">
        <div v-for="(review, index) in list_reviews.slice(0, count)" :key="index">
          <div class="w-full columns-1 xl:flex px-4 py-8 text-quaternary">
            <!-- Image Product-->
            <div class="w-full xl:w-2/5 columns-1 items-start xl:flex">
              <div class="productimg">
                <img :src="require(`~/static/images/products${review.imgUrl}`)" class="w-auto h-24">
              </div>
              <p class="mt-3 xl:mt-0 text-sm font-extralight">{{ review.product_name }}</p>
            </div>
            <!-- Details review -->
            <div class="w-full xl:w-3/5 flex flex-col ml-0 xl:ml-4 mt-4 xl:mt-0 ">
              <div class="flex sm:flex justify-between">
                <p class="text-lg font-light">{{ review.name }}</p>
                <div class="flex flex-row w-40">
                  <div v-for="i in review.score" :key="`review-${i}`">
                    <base-icon icon="star" viewBox="0 0 30 41" size="30" class="text-primary" />
                  </div>
                  <div v-for="j in (5 - review.score)" :key="`review+${j}`">
                    <base-icon icon="star" viewBox="0 0 30 41" size="30" class="text-gray-300" />
                  </div>
                </div>
              </div>
              <!-- Comment -->
              <p class="my-4 text-sm font-extralight">{{ review.review }}</p>
              <!-- Date -->
              <p class="text-sm font-extralight">{{ review.date }}</p>
            </div>
          </div>
        </div>
        <!-- Load More -->
      </div>
      <div v-else class="w-full py-12 mt-12 bg-white text-center font-light text-2xl text-primary">No Reviews
      </div>
      <div class="w-full flex justify-start py-4 px-4 mt-8">
        <base-button v-if="count <= list_reviews.length" @click="count += 4" class_icon="rotate-90">Load more
        </base-button>
      </div>
      <!-- Dialog -->
      <dialog-review ref="uploadReviewRef" />
    </div>
  </div>
</template>

<script>
import DialogReview from "@/components/review/dialog-review.vue"
import ReviewCard from "@/components/review/review-card.vue"
import reviews from "@/static/json/review.json"
export default {
  components: {
    ReviewCard, DialogReview
  },
  data() {
    return {
      count: 4,
      reviews,
      load_more: false,
      type: 'All Products',
    }
  },
  computed: {
    list_reviews() {
      let list = []
      if (this.type === 'All Products') {
        list = this.reviews
      } else {
        list = this.reviews.filter((e) => e.type === this.type)
      }
      return list
    },
  },
  methods: {
    filterType(type) {
      this.type = type
    },
  },
}
</script>

<style scoped>
.vl {
  height: 15px;
  width: 1px;
}

.hrr {
  height: .5px;
  opacity: .71;
}

.productimg {
  min-width: 100px;
  max-height: 100px;
}
</style>