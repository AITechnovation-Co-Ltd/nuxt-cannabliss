<template>
  <div class="">
      <!-- <p class="text-2xl text-primary">Primary</p>
      <p class="text-2xl text-secondary">Secondary</p>
      <p class="text-2xl text-tertiary">Tertiary</p>
      <p class="text-2xl text-quaternary">Quaternary</p> -->
    <ReviewBanner class="bg-red-100"/>
    <ReviewContent class="bg-red-200"/>
  </div>
</template>

<script>
import ReviewBanner from '../../components/review/review-banner.vue';
import ReviewContent from '../../components/review/review-content.vue';
export default {
    components: { ReviewBanner, ReviewContent}
}
</script>

<style>

</style>