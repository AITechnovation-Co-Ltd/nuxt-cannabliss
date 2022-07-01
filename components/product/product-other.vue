<template>
  <div class="w-full px-28">
    <h1 class="text-5xl text-primary text-center font-medium my-20">You may also like</h1>
    <div class="w-full grid grid-cols-4 gap-4">
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
          <button class="mt-4 px-8 py-2 border-2 border-quaternary rounded-full">View more</button>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center my-8">
      <div class="flex flex-col">
        <p class="text-3xl"><span class="font-bold">1</span>/3</p>
        <div class="w-96 mt-4 bg-primary rounded-full h-0.5 flex items-center">
          <div class="bg-primary h-1.5 rounded-full" style="width: 33%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: true, img:require("~/static/images/IMG_06fav/Group508@2x.png") },
        { name: "Canabliss Oasiz : Red Fruit Overnight Mask", type: "Face", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_02products_detail/Group669@2x.png") },
        { name: "Canabliss Crown : Anti -Fall Nourishing Shampoo", type: "Hair", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_06fav/Group508@2x.png") },
        { name: "Canabliss Oasiz : Red Fruit Overnight Mask", type: "Face", detail: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor", quantity: "100", isNew: false, img:require("~/static/images/IMG_02products_detail/Group669@2x.png") },
      ]
    }
  }
}
</script>

<style scoped>
.centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -35%);
}
</style>