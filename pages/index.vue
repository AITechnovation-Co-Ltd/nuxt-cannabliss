<template>
  <div class="bg-secondary relative overflow-hidden">
    <!-- Carousel -->
    <Carousel class="z-10 md:block hidden" />

    <!-- CarouselPhone -->
    <Carouselphone class="z-10 md:hidden block" />
    <img src="~/static/images/IMG_01home/pages_01home/Group1094@2x.png" class="widgetmini1094">
    <!-- Products -->
    <Product class="z-10" />

    <!-- Ingredients -->
    <Ingredients class="relative z-20" />

    <!-- Face -->
    <Face class="relative z-10" />

    <!-- Video Review -->
    <VideoReview class="z-10" />
    <img src="~/static/images/IMG_03ingredients/CANABLISS_01@2x.png" class="widget01 z-10">
    <img src="~/static/images/IMG_01home/pages_01home/Group1115@2x.png" class="widget1115">
    <img src="~/static/images/IMG_01home/pages_01home/Group1053@2x.png" class="widget1053 z-10">
    <!-- Blogs -->
    <Blogs class="z-10" />
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Group1135@2x.png" class="absolute bg z-10"> -->
    <!-- <img src="~/static/images/IMG_01home/pages_01home/Path330@2x.png" class="widget330 z-20"> -->
    <!-- Review -->
    <slick class="z-10" />
    <!-- <Review class="z-10" /> -->

    <!-- FAQ -->
    <img src="~/static/images/IMG_01home/pages_01home/Group1110@2x.png" class="widget1110">
    <img src="~/static/images/IMG_01home/pages_01home/Group1094@2x.png" class="widget1094 z-10">
    <Faq class="z-10" />

    <Subscribe class="my-12 z-10" />

    <!-- Partner -->
    <Partner class="relative z-10" />
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
  components: { Subscribe, Carousel, Product, Ingredients, Blogs, Faq, Review, Partner, VideoReview, Face, slick, Carouselphone },
  layout: 'home',
}
</script>
<style scoped>
.bg{
  bottom: 34.5%;
}
.widgetmini1094 {
  height: 8rem;
  position: absolute;
  transform: translate(24rem, 2rem);
  /* 2xl:h-48 absolute 2xl:-translate-y-16 2xl:translate-x-96 */
}

.widget01 {
  height: 48rem;
  position: absolute;
  transform: translate(-2.2rem, -13rem);
}

.widget1115 {
  height: 9rem;
  position: absolute;
  transform: translate(12rem, 1.5rem);
}

.widget1053 {
  height: 40rem;
  right: 0;
  position: absolute;
  transform: translate(18rem, -30rem);
}

.widget330 {
  height: 48rem;
  position: absolute;
  transform: translate(-14rem, -20rem);
}

.widget1110 {
  height: 6rem;
  position: absolute;
  transform: translate(17rem, -1rem);
}

.widget1094 {
  height: 80rem;
  position: absolute;
  left: -96.5rem;
}

@media (max-width:1441px) {
  .widget01 {
    height: 32rem;
    position: absolute;
    transform: translate(-1.8rem, -13rem);
  }

  .widgetmini1094 {
    height: 8rem;
    position: absolute;
    transform: translate(20rem, 0rem);
    /* 2xl:h-48 absolute 2xl:-translate-y-16 2xl:translate-x-96 */
  }

  .widget1094 {
    height: 50rem;
    position: absolute;
    left: -70.5rem;
  }

  .widget330 {
    height: 36rem;
    position: absolute;
    transform: translate(-10rem, -20rem);
  }

  .widget1115 {
    height: 7rem;
    position: absolute;
    transform: translate(12rem, 1.5rem);
  }
}

@media (max-width:500px) {
  .widget330 {
    height: 13rem;
    position: absolute;
    transform: translate(-4rem, -11rem);
  }
}
</style>