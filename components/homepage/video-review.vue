<template>
  <div class="w-full mt-12 sm:mt-24 flex flex-col-reverse md:flex-row items-center px-4 lg:px-12 xl:px-20 3xl:px-32">
    <div class="w-full sm:w-11/12 md:w-1/2 xl:w-3/5 mt-6 md:mt-0 relative z-20 flex justify-center">
      <!-- <iframe class="aspect-video video" src="https://www.youtube.com/embed/hVr4bcsxoow"
        title="เปิดตัวพรีเซ็นเตอร์ CANABLISS - อิงฟ้า วราหะ" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe> -->
      <iframe class="aspect-video video" src="https://www.youtube.com/embed/jEelr3apb1A" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <div class="w-full sm:w-11/12 md:w-1/2 xl:w-2/5 ml-0 md:ml-8 2xl:ml-20 text-xl text-quaternary font-light z-20">
      <p class="text-xs sm:text-sm">Video Review</p>
      <h1 class="text-xl sm:text-3xl font-light mt-1">{{ products[15].genre }}:</h1>
      <h2 class="text-xl sm:text-3xl font-normal text-primary">{{ products[15].name }}</h2>
      <div class="w-full flex items-center mt-3 xl:mt-6">
        <p class="text-sm border-l-2 border-primary pl-2 sm:pl-3 font-extralight">{{ products[15].subtitle_th }} <br>
          <br>
          {{ products[15].detail_th }}
        </p>
      </div>
      <base-button class="mt-4 xl:mt-12 hidden sm:block" @click="$router.push(`/product/details/3`)">View more
      </base-button>
    </div>
    <!-- <Model ref="alertPopup" /> -->
  </div>
</template>

<script>
import products from "@/static/json/products.json"
import Model from "~/components/homepage/modal.vue"
export default {
  data() {
    return {
      products,
    }
  },
  components: {
    Model
  },
  mounted(){
    console.log(this.products)
  }
}
</script>

<style scoped>
img {
  filter: brightness(0.7);
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vl {
  height: 170px;
  width: 20px;
}

@media (max-width:640px) {
  .centered {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.video {
  width: 40vw;
  height: auto;
}

@media (max-width:1024px) {
  .video {
    width: 96%;
    height: auto;
  }
}
</style>