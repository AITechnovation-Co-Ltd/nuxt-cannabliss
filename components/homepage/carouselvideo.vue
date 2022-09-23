<template>
  <div class="bg w-full flex relative flex-col items-center px-4 lg:px-12 xl:px-20 3xl:px-32">
    <h1 class="text-3xl md:text-5xl text-primary">Video Review</h1>
    <hooper :settings="hooperSettings" class="flex justify-center items-center crv">
      <slide>
        <div class="relative flex w-full">
          <div class="h-full w-full flex" v-for="(review, index) in review1" :key="index">
            <img :src="require(`~/static/images/review${review.url}`)" class="w-full" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="relative flex w-full">
          <div class="h-full w-full flex" v-for="(review, index) in review2" :key="index">
            <img :src="require(`~/static/images/review${review.url}`)" class="w-full" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="relative flex w-full">
          <div class="h-full w-full flex" v-for="(review, index) in review3" :key="index">
            <img :src="require(`~/static/images/review${review.url}`)" class="w-full" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="relative flex w-full">
          <div class="h-full w-full flex" v-for="(review, index) in review4" :key="index">
            <img :src="require(`~/static/images/review${review.url}`)" class="w-full" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="relative flex w-full">
          <div class="h-full w-full flex" v-for="(review, index) in review5" :key="index">
            <img :src="require(`~/static/images/review${review.url}`)" class="w-full" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="relative flex w-full">
          <div class="h-full w-full flex" v-for="(review, index) in review6" :key="index">
            <img :src="require(`~/static/images/review${review.url}`)" class="w-full" />
          </div>
        </div>
      </slide>
      <slide>
        <div class="relative flex w-1/2">
          <div class="h-full w-full flex" v-for="(review, index) in review7" :key="index">
            <img :src="require(`~/static/images/review${review.url}`)" class="w-full" />
          </div>
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>

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
        // transition: 2000,
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
        { url: '/review12.png' },
        { url: '/review13.png' },
        { url: '/review14.png' },
        { url: '/review15.png' },
        { url: '/review16.png' },
        { url: '/review17.png' },
        { url: '/review18.png' },
        { url: '/review19.png' },
        { url: '/review20.png' },
        { url: '/review21.png' },
        { url: '/review22.png' },
        { url: '/review23.png' },
        { url: '/review24.png' },
        { url: '/review25.png' },
        { url: '/review26.png' },
      ],
      review1: [
        { url: '/review1.png' },
        { url: '/review2.png' },
        { url: '/review3.png' },
        { url: '/review4.png' },
      ],
      review2: [
        { url: '/review5.png' },
        { url: '/review6.png' },
        { url: '/review7.png' },
        { url: '/review8.png' },
      ],
      review3: [
        { url: '/review9.png' },
        { url: '/review10.png' },
        { url: '/review11.png' },
        { url: '/review12.png' },
      ],
      review4: [
        { url: '/review13.png' },
        { url: '/review14.png' },
        { url: '/review15.png' },
        { url: '/review16.png' },
      ],
      review5: [
        { url: '/review17.png' },
        { url: '/review18.png' },
        { url: '/review19.png' },
        { url: '/review20.png' },
      ],
      review6: [
        { url: '/review21.png' },
        { url: '/review22.png' },
        { url: '/review23.png' },
        { url: '/review24.png' },
      ],
      review7: [
        { url: '/review25.png' },
        { url: '/review26.png' },
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
