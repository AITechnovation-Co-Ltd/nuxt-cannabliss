<template>
  <div class="bg w-full relative">
    <hooper :settings="hooperSettings" class="flex justify-center items-center">

      <!-- <slide v-for="index in 4" :key="index">
        <div class="bg flex justify-center items-center">
          <div class="w-full bg3 flex-col-reverse sm:flex-row mb-32 flex h-full items-center justify-between">
            <div class="w-full sm:w-1/2 h-full flex items-center justify-center">
              <div class="flex h-full flex-col items-start justify-center">
                <h1 class="text-2xl sm:text-3xl font-light text-quaternary">Canabliss Oasiz</h1>
                <h2 class="mt-0 sm:mt-2 text-2xl sm:text-3xl 2xl:text-5xl text-primary font-normal">Red Fruit Overnight Mask</h2>
                <div class="mt-4 xl:mt-8 w-full flex items-center">
                  <div class="h-16 sm:h-32 md:h-24 lg:h-20 w-2 sm:w-3 md:w-2 lg:w-1 bg-primary mr-2 sm:mr-4"></div>
                  <p class="content text-sm sm:text-lg font-extralight text-quaternary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .</p>
                </div>
                <div class="w-full flex items-center mt-4 md:mt-10 ml-4">
                  <div class="h-16 w-16 sm:h-20 sm:w-20 mr-4 border-2 border-tertiary rounded-full flex items-center justify-center">
                    <div class="h-12 w-12 sm:h-16 sm:w-16 bg-tertiary rounded-full flex items-center justify-center">
                      <base-icon icon="play" viewBox="0 0 30 41" size="30" class="text-white" />
                    </div>
                  </div>
                  <p class="text-lg text-quaternary">Watch the video</p>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2 flex justify-center">
              <img class="w-11/12 sm:w-full" src="~/static/images/IMG_06fav/Group1063@2x.png" alt="">
            </div>
          </div>
        </div>
      </slide> -->
      <slide v-for="(banner, index) in banners" :key="index">
        <div class="relative banner">
          <div
            class="absolute h-full w-full md:w-2/3 lg:w-3/4 flex items-center justify-center z-10 pl-10 lg:pl-20 pr-32 lg:pr-60">
            <div class="w-full lg:-mt-48 flex flex-col items-start justify-center sm:-mt-12">
              <h1 class="text-2xl lg:text-3xl sm:text-2xl font-light text-quaternary">{{ banner.tag }}</h1>
              <h2 class="mt-0 sm:mt-2 text-2xl lg:text-5xl sm:text-3xl text-primary font-medium">{{ banner.head }}</h2>
              <div class="mt-4 xl:mt-8 w-full flex items-center border-l-2 border-primary pl-2 lg:pl-4">
                <p class="content text-2xl font-normal text-quaternary thai leading-6 lg:leading-8">{{ banner.detail }}
                </p>
              </div>
              <div class="w-full flex items-center mt-8">
                <div
                  class="lg:hidden h-16 w-16 mr-4 border-2 border-tertiary rounded-full flex items-center justify-center">
                  <div
                    class="lg:hidden h-12 w-12 bg-tertiary rounded-full flex items-center justify-center cursor-pointer">
                    <base-icon icon="play" viewBox="0 0 30 41" size="20" class="text-white" />
                  </div>
                </div>
                <!-- play button responsive -->
                <div
                  class="lg:flex hidden h-16 w-16 mr-4 border-2 border-tertiary rounded-full  items-center justify-center">
                  <div @click="$refs.alertPopup.show()"
                    class="lg:flex hidden h-12 w-12 bg-tertiary rounded-full flex items-center justify-center cursor-pointer">
                    <base-icon icon="play" viewBox="0 0 30 41" size="16" class="text-white" />
                  </div>
                </div>
                <p class="text-lg text-quaternary">Watch the video</p>
              </div>
            </div>
          </div>
          <!-- <img :src="require(`~/static/images/banner/test1440.jpeg`)" class="w-full top-0 z-1 absolute " /> -->
          <img :src="require(`~/static/images/banner${banner.url}`)" class="w-full top-0 z-1 absolute " />
          <!-- <img :src="require(`~/static/images/banner/1440x480.jpeg`)" class="w-full h-full top-0 z-1 absolute" /> -->
        </div>
      </slide>

      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
    <div class="social justify-center sm:absolute right-8 xl:right-24 2xl:right-36">
      <div class="flex space-x-6 sm:space-x-8">
        <img class="w-8 sm:w-6 lg:w-8 hidden" src="~/static/images/IMG_01home/pages_01home/icons8-facebook@2x.png"
          alt="">
        <img class="w-8 sm:w-6 lg:w-8 hidden" src="~/static/images/IMG_01home/pages_01home/icons8-instagram@2x.png"
          alt="">
        <a href="https://lin.ee/i5MkM6w" target="_blank">
          <img class="w-8 sm:w-6 lg:w-8 hidden" src="~/static/images/IMG_01home/pages_01home/icons8-line@2x.png" alt="">
        </a>
        <img class="w-8 sm:w-6 lg:w-8 hidden" src="~/static/images/IMG_01home/pages_01home/icons8-twitter@2x.png"
          alt="">
      </div>
    </div>
    <Model ref="alertPopup" />
  </div>
</template>

<script>
import banners from '@/static/json/bannerscom.json'
import Model from "~/components/homepage/modal.vue"
import '@/components/homepage/css/hooper.css'
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
    Model
  },
  data() {
    return {
      banners,
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        centerMode: true,
        autoPlay: true,
        playSpeed: 6000,
        wheelControl: false,
      },
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
</style>