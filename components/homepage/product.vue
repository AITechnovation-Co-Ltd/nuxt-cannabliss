<template>
  <div class="w-full px-28 mt-20">
    <div class="flex justify-between">
      <h1 class="text-7xl text-primary">Products</h1>
      <BaseButton>View all</BaseButton>
    </div>
    <div class="w-full mt-16 flex">
      <div class="w-1/6">
        <ul class="decorate-none text-3xl text-primary font-light space-y-8">
          <li class="font-bold">
            <div class="flex items-center">
              <p>All</p>
              <div class="hr bg-primary ml-4"></div>
            </div>
          </li>
          <li>Hair</li>
          <li>Face</li>
          <li>Body</li>
        </ul>
      </div>
      <div class="w-5/6">
        <!-- Product card -->
        <div class="w-full grid grid-cols-3 gap-x-6 gap-y-10">
          <div class="w-full" v-for="(product, index) in products" :key="index">
            <div class="relative">
              <img src="~/static/images/IMG_02products_detail/Path357@2x.png" alt="">
              <img class="centered w-full" :src="product.img" alt="">
              <span v-if="product.isNew"
                class="px-10 py-2 text-white absolute top-5 left-5 bg-primary rounded-full">New</span>
              <base-icon icon="heart" viewBox="0 0 30 41" size="50" class="text-quaternary absolute top-8 right-8" />
              <p class="absolute bottom-8 right-8">{{ product.quantity }}</p>
            </div>
            <div class="text-quaternary text-xl">
              <p>{{ product.type }}</p>
              <p class="text-3xl font-medium">{{ product.name }}</p>
              <p class="mt-4">{{ product.datial }}</p>
              <BaseButton class="mt-8">View more</BaseButton>
            </div>
          </div>
        </div>
        <div class="w-ful mt-8">
          <p class="text-4xl text-primary"><span class="font-bold">1</span>/3</p>
          <div class="progres mt-5 bg-primary rounded-full h-0.5 flex items-center">
            <div class="bg-primary h-1.5 rounded-full" style="width: 33%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/base-button.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      products: [
        { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: true, img: require("~/static/images/IMG_06fav/Group508@2x.png") },
        { name: "Canabliss Oasiz : Red Fruit Overnight Mask", type: "Face", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img: require("~/static/images/IMG_02products_detail/Group669@2x.png") },
        { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img: require("~/static/images/IMG_06fav/Group508@2x.png") },
      ]
    }
  }
}
</script>

<style scoped>
.hr {
  height: 3px;
  width: 40%;
}
.centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -35%);
}
.progres {
  width: 500px;
}
</style>