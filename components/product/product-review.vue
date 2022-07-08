<template>
  <div class="w-full">
    <div class="w-full relative mt-20 px-8 lg:px-12 xl:px-20 2xl:px-36">
      <h1 class="w-full text-5xl text-center font-medium text-primary">Review</h1>
      <div class="w-full flex flex-col xl:flex-row mt-12">
        <div class="w-full xl:w-1/4 2xl:mr-20">
          <div class="w-full flex items-center">
            <p class="text-5xl font-light mr-4">4.0</p>
            <div class="flex">
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-primary" />
              <base-icon icon="star" viewBox="0 0 30 41" size="45" class="text-gray-300" />
            </div>
          </div>
          <p class="mt-2 text-quaternary">Based on reviews</p>
          <base-button @click="$refs.DialogReviewRefs.show()" class="mt-6">Write a review</base-button>
        </div>
        <div class="w-full mt-8 lg:mt-0 xl:w-3/4">
          <div class="w-full flex px-4 py-8 border-b-2 border-gray-200 text-quaternary">
            <!-- Image Product-->
            <div class="w-2/5 flex flex-col xl:flex-row ">
              <div class="w-1/3 relative">
                <img src="@/static/images/IMG_04review/product-review.png" width="150" class="absolute -top-20">
              </div>
              <p class="mt-16 xl:mt-0">Canabliss Oasiz : <br>Super Berry Hydrating Mask</p>
            </div>
            <!-- Details review -->
            <div class="w-3/5 flex flex-col">
              <!-- Name and Point-->
              <div class="flex justify-between">
                <p class="text-xl ">Kimberly K.</p>
                <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
              </div>
              <!-- Comment -->
              <p class="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aperiam tempore eius
                commodi
                laudantium
                earum temporibus ex illum, adipisci dolorem quia consequatur hic necessitatibus debitis minima beatae
                architecto. Quia, eaque.</p>
              <!-- Date -->
              <p>12/06/22</p>
            </div>
          </div>
          <div class="w-full flex px-4 py-8 border-b-2 border-gray-200 text-quaternary">
            <!-- Image Product-->
            <div class="w-2/5 flex flex-col xl:flex-row ">
              <div class="w-1/3 relative">
                <img src="@/static/images/IMG_04review/product-review.png" width="150" class="absolute -top-20">
              </div>
              <p class="mt-16 xl:mt-0">Canabliss Oasiz : <br>Super Berry Hydrating Mask</p>
            </div>
            <!-- Details review -->
            <div class="w-3/5 flex flex-col">
              <!-- Name and Point-->
              <div class="flex justify-between">
                <p class="text-xl ">Kimberly K.</p>
                <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
              </div>
              <!-- Comment -->
              <p class="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aperiam tempore eius
                commodi
                laudantium
                earum temporibus ex illum, adipisci dolorem quia consequatur hic necessitatibus debitis minima beatae
                architecto. Quia, eaque.</p>
              <!-- Date -->
              <p>12/06/22</p>
            </div>
          </div>
          <base-button @click="$router.push(`/review`)" class="mt-6">View more</base-button>
        </div>
      </div>
      <dialog-review ref="DialogReviewRefs" />
    </div>
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Group1135@2x.png" alt=""> -->
  </div>
</template>

<script>
import DialogReview from '@/components/review/dialog-review.vue'
import BaseButton from '../base/base-button.vue'
import ReviewCard from '../review/review-card.vue'
export default {
  components: { ReviewCard, DialogReview }
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