<template>
  <div class="">
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