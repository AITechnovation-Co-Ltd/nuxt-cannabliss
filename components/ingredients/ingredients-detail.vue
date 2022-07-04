<template>
  <div class="w-full px-28">
    <!-- Breadcrumb -->
    <nav class="w-full" aria-label="Breadcrumb">
      <ol class="text-quaternary text-base inline-flex items-center justify-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <nuxt-link to="/" class="inline-flex items-center font-medium">
            <base-icon icon="angle-left" viewBox="0 0 30 41" size="20" class="mr-2" />
            <p>Home</p>
          </nuxt-link>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <div class="vl mx-1 bg-quaternary"></div>
            <p class="font-extrabold md:ml-2 ">Ingredients</p>
          </div>
        </li>
      </ol>
    </nav>

    <div class="w-full flex flex-row justify-between">
      <div class="w-2/5 mt-28">
        <h1 class="text-5xl text-primary">Ingredients</h1>
        <div class="flex items-center mt-4">
          <div class="vl-2 bg-primary mr-4 flex"></div>
          <span class="text-quaternary font-bold text-2xl">By having a hero ingredient , there's an opportunity to get
            into the SKINCARE TREND in Thailand</span>
        </div>
        <p class="mt-4 text-justify">Leucojum aestivum bulb extract ( IBR - Snowflake ) is part of the anti aging
          technology of IBR that captures and transfers flower bulbs dormancy and rejuvenation to skin . Flower bulbs go
          dormant through the winter like " beauty sleep " to allow beautiful awaken , rejuvenated blossom in the spring
          .</p>
      </div>
      <div class="w-1/2 h-full relative">
        <div class="w-full h-full flex items-start">
          <img src="~/static/images/IMG_01home/pages_01home/bee-naturalles.jpg" class="rounded-3xl w-11/12 mt-16 z-20" alt="">
        </div>
        <div class="bgimg rounded-3xl bg-primary absolute top-0 right-0"></div>
      </div>
    </div>
    
    <div class="w-full mt-28 relative">
      <img src="~/static/images/IMG_03ingredients/Group1149@2x.png" alt="">
      <div class="w-full centered absolute">
        <div class="w-full text-quaternary flex flex-row justify-evenly items-center">
          <div class="w-2/5 flex flex-col items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group622@2x.png" class="h-40" alt="">
            <h1 class="text-xl font-bold">Canabinoid (Cbd)</h1>
            <p class="mt-2">Anti inflammatory to make skin stronger</p>
            <p class="mt-8 text-center">Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua . Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
          <div class="vl-3 bg-primary"></div>
          <div class="w-2/5 flex flex-col items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group623@2x.png" class="h-40" alt="">
            <h1 class="text-xl font-bold">Leucojum Aestivum Bulb Extract ( Ibr - Snowflake®)</h1>
            <p class="mt-2">Anti Aging To Make Skin Younger And Brighter</p>
            <p class="mt-8 text-center">Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua . Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.vl {
  height: 15px;
  width: 1px;
}
.vl-2 {
  height: 60px;
  width: 6px;
}
.vl-3 {
  height: 320px;
  width: 2px;
}
.bgimg {
  width: 777px;
  height: 518px;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>