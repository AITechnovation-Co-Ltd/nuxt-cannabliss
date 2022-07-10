<template>
    <div>
        <VueSlickCarousel ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true">
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png">
            <img class="centered w-11/12" :src="require(`~/static/images/IMG_02products_detail/Group6512x.png`)">
            1
          </div>
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png">
            <img class="centered w-11/12" :src="require(`~/static/images/IMG_02products_detail/Group6512x.png`)">
            2
          </div>
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png">
            <img class="centered w-11/12" :src="require(`~/static/images/IMG_02products_detail/Group6512x.png`)">
            3
          </div>
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png">
            <img class="centered w-11/12" :src="require(`~/static/images/IMG_02products_detail/Group6512x.png`)">
            4
          </div>
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png">
            <img class="centered w-11/12" :src="require(`~/static/images/IMG_02products_detail/Group6512x.png`)">
            5
          </div>
          
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import './css/carousel.css'
export default {
  components: { VueSlickCarousel },
}
</script>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>