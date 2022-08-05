<template>
  <div class="bg w-full relative">
    <hooper :settings="hooperSettings" class="flex justify-center items-center">
      <slide v-for="(banner, index) in banners" :key="index">
        <div class="relative banner">
          <div class="absolute h-full w-full flex items-start justify-center z-10 mt-8">
            <div class="maincontent flex flex-col w-full items-start justify-between pl-9 pr-6">
              <h1 class="text-lg font-light text-quaternary">{{banner.tag}}</h1>
              <h2 class="text-3xl text-primary font-medium">{{banner.head}}</h2>
              <div class="mt-2 xl:mt-8 w-full flex items-center border-l-2 border-primary px-2">
                <p class="content text-base font-extralight text-quaternary">{{banner.detail}}</p>
              </div>
              <div class="w-full flex items-center mt-2">
                <div
                  class="h-16 w-16 sm:h-20 sm:w-20 mr-2 border-2 border-tertiary rounded-full flex items-center justify-center">
                  <div
                    class="h-12 w-12 sm:h-16 sm:w-16 bg-tertiary rounded-full flex items-center justify-center cursor-pointer">
                    <base-icon icon="play" viewBox="0 0 30 41" size="18" class="text-white" />
                  </div>
                </div>
                <p class="text-base text-quaternary font-medium">Watch the video</p>
              </div>
            </div>
          </div>
          <img :src="require(`~/static/images/bannerphone${banner.url}`)" class="w-full top-0 z-1 absolute " />
        </div>
      </slide>
    </hooper>
  </div>
</template>

<script>
import banners from '@/static/json/banners.json'
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
    HooperPagination
  },
  data() {
    return {
      banners,
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        centerMode: true,
        autoPlay: false,
        playSpeed: 6000,
        wheelControl: false,
      },
    };
  }
}
</script>

<style scoped>
.banner {
  height: 844px;
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
.maincontent {
  height: 300px;
}
</style>