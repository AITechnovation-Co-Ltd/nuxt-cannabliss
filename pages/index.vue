<template>
  <div class="bg-secondary relative overflow-hidden">
    <!-- Carousel -->
    <Carousel class="z-10 md:block hidden" />

    <!-- CarouselPhone -->
    <Carouselphone class="z-10 md:hidden block" />

    <!-- Products -->
    <Product class="z-10" />

    <!-- Ingredients -->
    <Ingredients class="relative z-20" />

    <!-- Face -->
    <Face class="relative z-10" />

    <!-- Video Review -->
    <VideoReview class="z-10" />

    <!-- Blogs -->
    <Blogs class="z-10" />

    <!-- Review -->
    <slick class="z-10" />
    <!-- <Review class="z-10" /> -->

    <!-- FAQ -->
    <Faq class="z-10" />

    <Subscribe class="z-10 hidden" />

    <!-- Partner -->
    <Partner class="z-10" />

    <!-- background -->
  </div>
</template>

<script>
import slick from '~/components/homepage/slick.vue'
import Subscribe from '../components/layout/subscribe.vue'
import Carousel from '~/components/homepage/carousel.vue'
import Carouselphone from '~/components/homepage/carouselphone.vue'
import Product from '~/components/homepage/product.vue'
import Ingredients from '~/components/homepage/ingredients'
import Blogs from '/components/homepage/blogs'
import Faq from '~/components/homepage/faq.vue'
import Review from '~/components/homepage/review'
import Partner from '~/components/homepage/partner.vue'
import VideoReview from '../components/homepage/video-review.vue'
import Face from '~/components/homepage/face.vue'

export default {
  components: { Subscribe, Carousel, Product, Ingredients, Blogs, Faq, Review, Partner, VideoReview, Face, slick , Carouselphone},
  layout: 'home',
}
</script>
<style scoped>

</style>