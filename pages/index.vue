<template>
  <div>
    <div class="bg-red-500 h-96">
      sadasasdas
    </div>
    <div class="w-1/2 flex flex-col relative">
      <img src="@/static/images/IMG_01home/pages_01home/review02.png" class="absolute -top-8 w-24 h-20 z-10">
      <v-carousel cycle height="400" hide-delimiter-background delimiter-icon="mdi-minus" :show-arrows="false"
        class="absolute">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%" class="relative flex justify-center rounded-xl">
            <div class="w-full bg-blue-300 px-10 py-20 rounded-xl">
              <p>star start start star</p>
              <p class="my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis omnis laboriosam
                debitis totam
                eius, velit animi voluptas rerum architecto unde doloribus voluptatem quaerat quos excepturi sapiente
                mollitia! Nobis, enim?</p>
              <div class="w-full flex justify-between">
                <div class="w-1/3 flex relative">
                  <img src="@/static/images/IMG_01home/pages_01home/review03.png" class="absolute -top-14 w-24 h-24">
                  <p class="absolute right-0">kamakim</p>
                </div>
                <p class="w-2/3 px-2 text-end">testtest</p>
              </div>

            </div>
            <p class="absolute inset-x-1/2">{{ i + 1 }}/{{ slides.length }}</p>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <img src="@/static/images/IMG_01home/pages_01home/review01.png" class="absolute -bottom-8 right-0 w-24 h-20 z-10">
    </div>
    <div class="mt-20 bg-blue-500">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      colors: [
        '#DAF7A6',
        '#FFC300',
        '#FF5733',
        '#C70039',
        '#581845',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>