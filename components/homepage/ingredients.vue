<template>
  <div class="w-full mt-20 text-quaternary flex items-center py-12 px-24 lg:px-12 xl:px-20 2xl:px-36">
    <div class="w-2/5">
      <h1 class="text-3xl xl:text-4xl 2xl:text-7xl text-primary">Ingredients</h1>
      <div class="mt-8 flex items-center">
        <div class="vl bg-primary"></div>
        <p class="text-xl xl:text-2xl 2xl:text-3xl ml-4">By having a hero ingredient , there's an opportunity to get
          into the SKINCARE
          TREND in
          Thailand </p>
      </div>
      <p class="mt-8 text-base xl:text-xl 2xl:text-2xl">Leucojum aestivum bulb extract ( IBR - Snowflake ) is part of
        the anti aging
        technology
        of IBR that captures and transfers flower bulbs dormancy and rejuvenation to skin . Flower bulbs go
        dormant
        through the winter like " beauty sleep " to allow beautiful awaken , rejuvenated blossom in the spring.
      </p>
      <BaseButton @click="$router.push(`/ingredients`)" class="mt-12">View more</BaseButton>
    </div>
    <div class="w-3/5 ml-8 lg:ml-16 flex">
      <div class="w-1/2 flex flex-col">
        <img class="rounded-3xl" src="~/static/images/IMG_01home/pages_01home/IMG_1290.jpg" alt="">
      </div>
      <div class="w-1/2 ml-8">
        <img class="mt-28 rounded-3xl" src="~/static/images/IMG_01home/pages_01home/IMG_1262.jpg" alt="">
      </div>
    </div>
    <!-- <div class="w-2/5">
      <h1 class="text-3xl xl:text-4xl 2xl:text-7xl text-primary">Ingredients</h1>
      <div class="mt-8 flex items-center">
        <div class="vl bg-primary"></div>
        <p class="text-xl xl:text-2xl 2xl:text-3xl ml-4">By having a hero ingredient , there's an opportunity to get into the SKINCARE TREND in
          Thailand </p>
      </div>
      <p class="mt-8 text-base xl:text-xl 2xl:text-2xl">Leucojum aestivum bulb extract ( IBR - Snowflake ) is part of the anti aging technology
        of IBR that captures and transfers flower bulbs dormancy and rejuvenation to skin . Flower bulbs go dormant
        through the winter like " beauty sleep " to allow beautiful awaken , rejuvenated blossom in the spring.</p>
      <BaseButton @click="$router.push(`/ingredients`)" class="mt-12">View more</BaseButton>
    </div>
    <div class="w-3/5 ml-16 flex">
      <div class="w-1/2 flex flex-col">
        <img class="rounded-3xl" src="~/static/images/IMG_01home/pages_01home/IMG_1290.jpg" alt=""
      </div>
      <div class="w-1/2 ml-8">
        <img class="mt-28 rounded-3xl" src="~/static/images/IMG_01home/pages_01home/IMG_1262.jpg" alt="">
      </div>
    </div> -->
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

.bg {
  height: 700px;
}
</style>