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
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Group1050@2x.png" alt="" class="bg-1"> -->
    <!-- <img src="~/static/images/IMG_03blogs/Group1152@2x.png" alt="" class="bg-2 hidden xl:block"> -->
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Group1094@2x.png" alt="" class="bg-3"> -->
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Path322@2x.png" alt="" class="bg-4 hidden xl:block"> -->
    <!-- <img src="~/static/images/IMG_01home/pages_01home/CANABLISS@2x.png" alt="" class="bg-5 z-20 hidden xl:block"> -->
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Group1053@2x.png" alt="" class="bg-6"> -->
    <!-- <img src="~/static/images/IMG_01home/pages_01home/CANABLISS_01.png" alt="" class="bg-7"> -->
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Group1115@2x.png" alt="" class="bg-8"> -->
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Group1136@2x.png" alt="" class="bg-9"> -->
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
.bg-1 {
  height: 1000px;
  position: absolute;
  top: -150px;
  left: -150px;
}

.bg-2 {
  height: 900px;
  position: absolute;
  top: 50px;
  right: 50px;
}

.bg-3 {
  height: 250px;
  position: absolute;
  top: 900px;
  left: 450px;
}

.bg-4 {
  height: 400px;
  position: absolute;
  top: 1490px;
  left: 150px;
}

.bg-5 {
  height: 150px;
  position: absolute;
  top: 2150px;
  left: 170px;
}

.bg-6 {
  height: 1000px;
  position: absolute;
  top: 3600px;
  right: -650px;
}

.bg-7 {
  height: 600px;
  position: absolute;
  top: 4200px;
  left: -20px;
}

.bg-8 {
  height: 200px;
  position: absolute;
  top: 4350px;
  left: 250px;
}

.bg-9 {
  position: absolute;
  top: 2900px;
}
</style>