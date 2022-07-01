<template>
  <div>
    <Navbar />
    <ReviewBanner class="bg-red-100"/>
    <ReviewContent class="bg-red-200"/>
    <Foot />
  </div>
</template>

<script>
import Navbar from '../../components/layout/navbar.vue';
import ReviewBanner from '../../components/review/review-banner.vue';
import ReviewContent from '../../components/review/review-content.vue';
import Foot from '../../components/layout/foot.vue';
export default {
    components: { Navbar, ReviewBanner, ReviewContent, Foot }
}
</script>

<style>

</style>