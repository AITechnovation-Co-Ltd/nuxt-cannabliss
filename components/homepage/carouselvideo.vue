<template>
  <div
    class="bg w-full flex relative flex-col items-center px-4 lg:px-12 xl:px-20 3xl:px-32 mt-4 lg:mt-12 xl:mt-20 3xl:mt-32">
    <h1 class="text-3xl md:text-5xl text-center text-primary">Video Review</h1>
    <hooper :settings="hooperSettings" class="flex justify-center items-center crv b">
      <slide class="z-20" v-for="(review, index) in review123" :key="index">
        <div class="relative flex w-full">
          <div class="h-full w-full flex p-4" v-for="(review, index) in review" :key="index">
            <a :href="`${review.link}`" target="_blank"><img :src="require(`~/static/images/videoreview${review.url}`)"
                class="w-full h-full" /></a>
          </div>
        </div>
      </slide>
      <!-- <slide class="z-20">
        <div class="relative flex w-3/4">
          <div class="h-full w-full flex p-4" v-for="(review, index) in review3" :key="index">
            <a :href="`${review.link}`" target="_blank"><img :src="require(`~/static/images/videoreview${review.url}`)"
                class="w-full h-full" /></a>
          </div>
        </div>
      </slide> -->
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
    <base-button class="mt-8 mr-auto ml-auto lg:mt-10 z-20" @click="$router.push(`/review`)">View
      all
    </base-button>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import banners from '@/static/json/bannerscom.json'
import Model from "~/components/homepage/modal.vue"
import '@/components/homepage/css/hooper.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {
  Hooper,
  Slide,
  Pagination as HooperPagination
} from 'hooper';
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    Model,
    VueSlickCarousel
  },
  data() {
    return {
      banners,
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        centerMode: false,
        wheelControl: false,
        trimWhiteSpace: true,
        mouseDrag: false,
        autoPlay: true,
        playSpeed: 6000,
        infiniteScroll: true,
        // transition: 2000,
      },
      review123: {
        review1: [
          { url: '/review1.png', link: 'https://vt.tiktok.com/ZSR9JH2JK/' },
          { url: '/review2.png', link: 'https://vt.tiktok.com/ZSR917gCP/' },
          { url: '/review3.png', link: 'https://vt.tiktok.com/ZSR919sfs/' },
          { url: '/review4.png', link: 'https://vt.tiktok.com/ZSRHofC2E/' },
        ],
        review2: [
          { url: '/review5.png', link: 'https://vt.tiktok.com/ZSRHofC2E/' },
          { url: '/review6.png', link: 'https://vt.tiktok.com/ZSR9JsmBo/' },
          { url: '/review7.png', link: 'https://vt.tiktok.com/ZSR919GTv/' },
          { url: '/review8.png', link: 'https://vt.tiktok.com/ZSR9eJnbw/' },
        ],
        review3: [
          { url: '/review9.png', link: 'https://vt.tiktok.com/ZSR91oHDD/' },
          { url: '/review10.png', link: 'https://vt.tiktok.com/ZSR9eJc2D/' },
          { url: '/review11.png', link: 'https://vt.tiktok.com/ZSRHEnhW3/' },
          { url: '/review13.png', link: 'https://vt.tiktok.com/ZSR9eJnbw/' },
        ],
      },
      review: [
        { url: '/review1.png' },
        { url: '/review2.png' },
        { url: '/review3.png' },
        { url: '/review4.png' },
        { url: '/review5.png' },
        { url: '/review6.png' },
        { url: '/review7.png' },
        { url: '/review8.png' },
        { url: '/review9.png' },
        { url: '/review10.png' },
        { url: '/review11.png' },
      ],
    };
  }
}
</script>

<style scoped>
.banner {
  /* height: calc(100vh - 84px); */
  height: 100vh;
  /* height: 1000px; */
}

.social {
  top: 80%;
}

@media (max-width:1024px) {
  .banner {
    height: 420px;
  }

  .social {
    top: 88%;
  }
}

.bg2 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg3 {
  height: 70%;
}

.vl {
  height: 145px;
  width: 15px;
}

.content {
  width: 480px;
}

/* 
@media (max-width: 1919px) {
  .banner {
    height: 816px;
  }
}

@media (max-width: 1000px) {
  .banner {
    height: 393px;
  }
}

@media (max-width: 820px) {
  .banner {
    height: 420px;
  }
}

@media (max-width: 768px) {
  .banner {
    height: 432px;
  }
} */
</style> 88%;
  }

;
}

.*g
@mheigh(max-w%d
h*/1909  .bannar:{flex;
  justify-co8t6nt: center;
  }lign-items: center;
}

.bg3 {
2400   height: 70%;
}
;
420393
.vl {
  height: 145px;
@mwidth(ma5pwid
he 820px){}
.b
t
5120.content {
} width: 480px;
t
5120.content {
} width: 480px;
 88%;
  }

;
}

.*g
@mheigh(max-w%d
h*/1909  .bannar:{flex;
  justify-co8t6nt: center;
  }lign-items: center;
}

.bg3 {
2400   height: 70%;
}
;
420393
.vl {
  height: 145px;
@mwidth(ma5pwid
he 820px){}
.b
t
5120.content {
} width: 480px;
