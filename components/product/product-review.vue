<template>
  <div class="w-full my-20 px-28">
    <h1 class="w-full text-5xl text-center font-medium text-primary">Review</h1>
    <div class="w-full flex mt-12">
      <div class="w-1/3 mr-20">
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
        <base-button class="mt-6">Write a review</base-button>
      </div>
      <div class="w-2/3">
        <ReviewCard />
        <ReviewCard />
        <base-button class="mt-6">View more</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/base-button.vue'
import ReviewCard from '../review/review-card.vue'
export default {
    components: { ReviewCard }
}
</script>

<style scoped>
.b
BaseButtongheight {
    height: 500px;
}
</style>