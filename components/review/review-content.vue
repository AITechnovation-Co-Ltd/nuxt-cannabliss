<template>
  <div class="w-full columns-1 lg:flex justify-center px-4 sm:px-12 lg:px-16 xl:px-20 2xl:px-32">
    <!-- Categories -->
    <div class="w-full lg:w-3/12 flex flex-col items-start">

      <!-- List Categories -->
      <div class="w-full lg:w-80 mt-10">
        <h1 class="text-3xl text-primary">Categories</h1>
        <hr class="w-full lg:w-8/12 xl:w-10/12 2xl:w-11/12 my-6 border-b border-primary flex flex-col justify-center items-center">
        <div class="w-full flex justify-around lg:flex-col decoration-none text-primary text-lg space-y-4">
          <p class="mt-4 lg:mt-0"><span class="hover:font-bold hover:cursor-pointer">All Products</span></p>
          <p><span class="hover:font-bold hover:cursor-pointer">Hair</span></p>
          <p><span class="hover:font-bold hover:cursor-pointer">Face</span></p>
          <p><span class="hover:font-bold hover:cursor-pointer">Body</span></p>
        </div>
      </div>
    </div>

    <!-- All Review -->
    <div class="w-full lg:w-9/12">
      <!-- Write a review -->
      <div class="w-full flex justify-start py-3 xl:py-4 px-4 mt-8 bg-tertiary ">
        <base-button @click="$refs.uploadReviewRef.show()" color_arrow="white"
          class="text-white border-white hover:border-white">Write a review</base-button>
      </div>
      <!-- Review card -->
      <div class="w-full columns-1 xl:flex justify-center" v-for="index in 4" :key="index">
        <div class="w-full columns-1 xl:flex px-4 py-8 border-b-2 border-gray-200 text-quaternary">
          <!-- Image Product-->
          <div class="w-full xl:w-2/5 columns-1 items-center md:flex ">
            <img src="@/static/images/IMG_04review/product-review.png" class="w-24 h-12 mr-0 md:mr-6">
            <p class="mt-6 md:mt-0 ">Canabliss Oasiz : <br>Super Berry Hydrating Mask</p>
          </div>
          <!-- Details review -->
          <div class="w-full xl:w-3/5 flex flex-col mt-6 xl:mt-0 ">
            <div class="columns-1 xl:flex justify-between">
              <p class="text-xl ">Kimberly K.</p>
              <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
            </div>
            <!-- Comment -->
            <p class="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aperiam tempore eius commodi
              laudantium
              earum temporibus ex illum, adipisci dolorem quia consequatur hic necessitatibus debitis minima beatae
              architecto. Quia, eaque.</p>
            <!-- Date -->
            <p>12/06/22</p>
          </div>
        </div>
      </div>
      <!-- Load More -->
      <div class="w-full flex justify-start py-4 px-4 mt-8">
        <base-button class="border-quaternary">Load more</base-button>
      </div>
    </div>
    <!-- Dialog -->
    <dialog-review ref="uploadReviewRef" />
  </div>
</template>

<script>
import DialogReview from "@/components/review/dialog-review.vue"
import ReviewCard from "@/components/review/review-card.vue"
export default {
  components: {
    ReviewCard, DialogReview
  }
}
</script>

<style scoped>
.vl {
  height: 15px;
  width: 1px;
}
</style>