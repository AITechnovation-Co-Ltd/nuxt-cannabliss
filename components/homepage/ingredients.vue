<template>
  <div class="w-full px-28 mt-20 text-quaternary flex items-center">
    <div class="w-2/5">
      <h1 class="text-7xl text-primary">Ingredients</h1>
      <div class="mt-8 flex items-center">
        <div class="vl bg-primary"></div>
        <p class="text-3xl ml-4">By having a hero ingredient , there's an opportunity to get into the SKINCARE TREND in
          Thailand </p>
      </div>
      <p class="mt-8 text-2xl">Leucojum aestivum bulb extract ( IBR - Snowflake ) is part of the anti aging technology
        of IBR that captures and transfers flower bulbs dormancy and rejuvenation to skin . Flower bulbs go dormant
        through the winter like " beauty sleep " to allow beautiful awaken , rejuvenated blossom in the spring.</p>
      <BaseButton @click="$router.push(`/ingredients`)" class="mt-12">View more</BaseButton>
    </div>
    <div class="w-3/5 ml-16 flex">
      <div class="w-1/2 flex flex-col">
        <img class="rounded-3xl" src="~/static/images/IMG_01home/pages_01home/IMG_1290.jpg" alt="">
        <div class="ml-4 mt-6 flex space-x-3">
          <div class="h-5 w-5 rounded-full bg-tertiary"></div>
          <div class="h-5 w-5 rounded-full bg-gray-300"></div>
        </div>
      </div>
      <div class="w-1/2 ml-8">
        <img class="mt-28 rounded-3xl" src="~/static/images/IMG_01home/pages_01home/IMG_1262.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/base-button.vue';
export default {
  components: { BaseButton }
}
</script>

<style scoped>
.vl {
  height: 120px;
  width: 10px;
}
</style>