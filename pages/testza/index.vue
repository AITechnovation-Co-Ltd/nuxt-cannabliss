<template>
  <div class="w-full h-full">
    <Carouselvideo />
    <!-- <carouselreview /> -->
  </div>

</template>

<script>
import Carouselvideo from '~/components/homepage/carouselvideo.vue';
import Carouselreview from '~/components/homepage/carouselrv.vue'
export default {
  components: { Carouselreview, Carouselvideo },
  data() {
    return {
    };
  }
}


</script>

<style>

</style>