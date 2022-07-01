<template>
  <div class="w-full flex flex-row justify-center">
    <!-- Categories -->
    <div class="w-3/12 flex flex-col items-center">
      <!-- Breadcrumb -->
      <div class="w-80">
        <nav class="w-full flex justify-start items-center" aria-label="Breadcrumb">
          <ol class="text-quaternary text-base inline-flex items-center justify-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <nuxt-link to="/" class="inline-flex items-center font-medium">
                <base-icon icon="angle-left" viewBox="0 0 30 41" size="20" class="mr-2" />
                <p>Home</p>
              </nuxt-link>
            </li>
            <li>
              <div class="flex items-center">
                <div class="vl mx-1 bg-quaternary"></div>
                <p class="font-medium md:ml-2">Review</p>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- List Categories -->
      <div class="w-80 mt-10">
        <h1 class="text-3xl text-primary">Categories</h1>
        <hr class="w-full my-6 border-b-2 border-gray-200 flex flex-col justify-center items-center">
        <div>
          <ul class="decoration-none text-primary text-lg space-y-4">
            <li><span class="hover:font-bold hover:cursor-pointer">All Products</span></li>
            <li><span class="hover:font-bold hover:cursor-pointer">Hair</span></li>
            <li><span class="hover:font-bold hover:cursor-pointer">Face</span></li>
            <li><span class="hover:font-bold hover:cursor-pointer">Body</span></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- All Review -->
    <div class="w-9/12">
      <!-- Write a review -->
      <div class="w-full flex justify-start py-4 px-4 mt-8 bg-tertiary ">
        <base-button @click="$refs.uploadReviewRef.show()" arrow="white" class="text-white">Write a review</base-button>
      </div>
      <!-- Review card -->
      <div>
        <review-card />
        <review-card />
        <review-card />
        <review-card />
        <review-card />
      </div>
      <!-- Load More -->
      <div class="w-full flex justify-start py-4 px-4 mt-8">
        <base-button class="border-quaternary">Load more</base-button>
      </div>
      <dialog-review ref="uploadReviewRef"/>
    </div>
    <!-- Dialog -->
    
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