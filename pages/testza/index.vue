<template>
  <div class="w-full h-full">
    <!-- <Carouselreviewphone /> -->
    <Carouselvideophone />
  </div>

</template>

<script>
import Carouselvideo from '~/components/homepage/carouselvideo.vue';
import Carouselvideophone from '~/components/homepage/carouselvideophone.vue';
import Carouselreview from '~/components/homepage/carouselrv.vue'
import Carouselreviewphone from '~/components/homepage/carouselrvphone.vue'
export default {
  components: { Carouselreview, Carouselvideo, Carouselvideophone, Carouselreviewphone },
  data() {
    return {
    };
  }
}


</script>

<style>

</style>