<template>
  <div class="w-full px-8 lg:px-12 xl:px-20 2xl:px-32 z-20">
    <div class="w-full flex flex-col mt-4 lg:mt-0 lg:flex-row justify-between items-center">
      <div class="w-full sm:w-5/6 lg:w-1/2 xl:w-2/5 lg:mr-8 xl:mr-0">
        <h1 class="text-4xl sm:text-5xl text-primary">Ingredients</h1>
        <div class="flex items-center mt-4">
          <div class="w-1.5 h-24 2xl:h-16 bg-primary mr-4 flex"></div>
          <span class="text-quaternary font-bold text-xl sm:text-2xl">By having a hero ingredient , there's an opportunity to get
            into the SKINCARE TREND in Thailand</span>
        </div>
        <p class="mt-4 text-justify">Leucojum aestivum bulb extract ( IBR - Snowflake ) is part of the anti aging
          technology of IBR that captures and transfers flower bulbs dormancy and rejuvenation to skin . Flower bulbs go
          dormant through the winter like " beauty sleep " to allow beautiful awaken , rejuvenated blossom in the spring
          .</p>
      </div>
      <div class="w-full sm:w-5/6 lg:w-1/2 h-full mt-8 lg:mt-0 relative">
        <div class="w-full h-full flex items-start">
          <img src="~/static/images/IMG_01home/pages_01home/bee-naturalles.jpg" class="rounded-3xl w-11/12 mt-8 sm:mt-16 z-20" alt="">
        </div>
        <img src="~/static/images/IMG_03ingredients/bg-green.png" alt="" class="w-11/12 rounded-3xl absolute top-0 right-0">
        <!-- <div class="bgimg rounded-3xl bg-primary absolute top-0 right-0"></div> -->
      </div>
    </div>
    
    <div class="w-full mt-28 relative">
      <img class="bg w-full z-10" src="~/static/images/IMG_03ingredients/Group1149@2x.png" alt="">
      <div class="content w-full flex pb-4 lg:pb-0 z-20">
        <div class="w-full text-quaternary flex flex-col md:flex-row justify-evenly items-center z-20">
          <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group622@2x.png" class="h-24 xl:h-32 2xl:h-40" alt="">
            <h1 class="text-xl font-bold">Canabinoid (Cbd)</h1>
            <p class="mt-2 text-center">Anti inflammatory to make skin stronger</p>
            <p class="mt-2 2xl:mt-4 text-center">Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .</p>
          </div>
          <div class="w-0.5 h-60 xl:h-72 2xl:h-80 bg-primary hidden md:block"></div>
          <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group623@2x.png" class="h-24 xl:h-32 2xl:h-40" alt="">
            <h1 class="text-xl text-center font-bold">Leucojum Aestivum Bulb Extract ( Ibr - Snowflake®)</h1>
            <p class="mt-2 text-center">Anti Aging To Make Skin Younger And Brighter</p>
            <p class="mt-2 2xl:mt-4 text-center">Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt</p>
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
@media (min-width:1024px) {
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
}
@media (max-width:1024px) {
  .bg {
    position: absolute;
    bottom: 0;
  }
}
</style>