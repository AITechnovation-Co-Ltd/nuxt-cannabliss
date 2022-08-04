<template>
  <div class="w-full h-auto mt-8 sm:mt-20 text-quaternary flex flex-col lg:flex-row items-center px-4 lg:px-12 xl:px-20 z-20">
    <div class="w-full sm:w-11/12 lg:w-2/5">
      <h1 class="text-3xl xl:text-4xl 2xl:text-5xl text-primary">Ingredients</h1>
      <div class="mt-4 lg:mt-8 flex items-center">
        <p class="content text-base sm:text-lg border-l-2 border-primary pl-2 lg:pl-4">By having a hero ingredient , there's an opportunity to get
          into the SKINCARE
          TREND in
          Thailand </p>
      </div>
      <p class="mt-3 lg:mt-8 text-sm font-extralight">Leucojum aestivum bulb extract ( IBR - Snowflake ) is part of
        the anti aging
        technology
        of IBR that captures and transfers flower bulbs dormancy and rejuvenation to skin . Flower bulbs go
        dormant
        through the winter like " beauty sleep " to allow beautiful awaken , rejuvenated blossom in the spring.
      </p>
      <base-button class="mt-4 lg:mt-8 hidden sm:block" @click="$router.push(`/ingredients`)">View more</base-button>
    </div>
    <div class="w-full sm:w-11/12 lg:w-3/5 mt-4 lg:mt-0 ml-0 sm:ml-3 flex">
      <div class="w-1/2 flex flex-col">
        <img class="rounded-3xl" src="~/static/images/IMG_01home/pages_01home/IMG_1290.jpg" alt="">
      </div>
      <div class="w-1/2 ml-3 lg:ml-8">
        <img class="mt-12 lg:mt-28 rounded-3xl" src="~/static/images/IMG_01home/pages_01home/IMG_1262.jpg" alt="">
      </div>
    </div>
    <base-button class="mt-6 mr-0 ml-auto lg:mt-8 block sm:hidden" @click="$router.push(`/ingredients`)">View more</base-button>
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
export default {

}
</script>

<style scoped>
.vl {
  height: 60px;
  width: 4px;
}

.bg {
  height: 700px;
}
.content {
  width: 470px;
}
@media (max-width: 1355px) {
.vl {
  height: 80px;
  width: 5px;
}
}
@media (max-width: 1023px) {
.vl {
  height: 60px;
  width: 5px;
}
}
@media (max-width: 520px) {
.vl {
  height: 85px;
  width: 5px;
}
}
</style>