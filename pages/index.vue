<template>
  <div class="bg-secondary">
    <!-- Carousel -->
    <Carousel />

    <!-- Products -->
    <Product />

    <!-- Ingredients -->
    <Ingredients />

    <!-- Face -->
    <Face />

    <!-- Video Review -->
    <VideoReview />

    <!-- Blogs -->
    <Blogs />

    <!-- Review -->
    <Review />

    <!-- FAQ -->
    <Faq />

    <Subscribe />

    <!-- Partner -->
    <Partner />

  </div>
</template>

<script>
import Subscribe from '../components/layout/subscribe.vue'
import Carousel from '~/components/homepage/carousel.vue'
import Product from '~/components/homepage/product.vue'
import Ingredients from '~/components/homepage/ingredients'
import Blogs from '/components/homepage/blogs'
import Faq from '~/components/homepage/faq.vue'
import Review from '~/components/homepage/review'
import Partner from '~/components/homepage/partner.vue'
import VideoReview from '../components/homepage/video-review.vue'
import Face from '~/components/homepage/face.vue'

export default {
  components: {Subscribe, Carousel, Product, Ingredients, Blogs, Faq, Review, Partner, VideoReview, Face },

}
</script>