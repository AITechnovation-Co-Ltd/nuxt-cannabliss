<template>
  <div class="bg-secondary">
    <Navbar />

    <!-- Carousel -->
    <Carousel class="bg-red-100" />

    <!-- Products -->
    <Product class="bg-red-200" />

    <!-- Ingredients -->
    <Ingredients class="bg-red-300" />

    <!-- Face -->
    <face class="bg-red-400" />

    <!-- Video Review -->
    <VideoReview class="bg-red-500" />

    <!-- Blogs -->
    <Blogs class="bg-red-600" />

    <!-- Review -->
    <Review class="bg-red-700" />

    <!-- FAQ -->
    <Faq class="bg-red-800" />

    <Subscribe />

    <!-- Partner -->
    <Partner class="bg-red-900" />

    <Foot />
  </div>
</template>

<script>
import Foot from '~/components/layout/foot.vue'
import Navbar from '~/components/layout/navbar.vue'
import Subscribe from '~/components/layout/subscribe.vue'
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
  components: { Navbar, Foot, Subscribe, Carousel, Product, Ingredients, Blogs, Faq, Review, Partner, VideoReview, Face },

}
</script>