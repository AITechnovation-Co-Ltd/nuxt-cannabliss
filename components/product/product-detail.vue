<template>
  <div class="w-full px-28">

    <!-- Breadcrumb -->
    <nav class="w-full" aria-label="Breadcrumb">
      <ol class="text-quaternary text-base inline-flex items-center justify-center space-x-3">
        <li class="inline-flex items-center">
          <nuxt-link to="/" class="inline-flex items-center font-medium">
            <base-icon icon="angle-left" viewBox="0 0 30 41" size="20" class="mr-2" />
            <p>Home</p>
          </nuxt-link>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <div class="vl mx-1 bg-quaternary"></div>
            <p class="font-medium ml-2 ">Product</p>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <div class="vl mx-1 bg-quaternary"></div>
            <p class="font-medium ml-2 ">All Products</p>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <div class="vl mx-1 bg-quaternary"></div>
            <p class="font-extrabold ml-2 ">Canabliss GuardianTinted Hybrid block SPF50 PA+++</p>
          </div>
        </li>
      </ol>
    </nav>

    <!-- Content -->
    <div class="w-full flex justify-evenly items-center">
      <div class="w-1/2">
        <img src="~/static/images/IMG_02products_detail/Group6512x.png" alt="">
        <div class="grid grid-cols-4 gap-4">
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png" alt="">
            <img class="centered" src="~/static/images/IMG_02products_detail/Group6512x.png" alt="">
          </div>
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png" alt="">
            <img class="centered" src="~/static/images/IMG_02products_detail/Group6512x.png" alt="">
          </div>
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png" alt="">
            <img class="centered" src="~/static/images/IMG_02products_detail/Group6512x.png" alt="">
          </div>
          <div class="relative">
            <img src="~/static/images/IMG_02products_detail/Rectangle199@2x.png" alt="">
            <img class="centered" src="~/static/images/IMG_02products_detail/Group6512x.png" alt="">
          </div>
        </div>
      </div>
      <div class="w-1/3 ml-36">
        <p>Face</p>
        <div class="flex justify-between items-end">
          <h1 class="text-4xl font-light">Canabliss Guardian</h1>
          <p>100ML</p>
        </div>
        <h2 class="text-4xl font-semibold text-primary">Tinted Hybrid Block SPF50 Pa+++</h2>
        <div class="flex my-4">
          <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-tertiary mr-4" />
          <p>(55)</p>
        </div>
        <p class="my-2 font-semibold">Lorem ipsum dolor sit amet , consectetur adipiscing elit sed do eiusmod</p>
        <p class="my-6">Lorem ipsum dolor sit amet , consectetur adipiscing elit sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua .</p>
        <div class="w-full flex-col text-2xl text-primary">
          <div class="w-full flex justify-between hover:cursor-pointer">
            <p>How to use</p>
            <p>+</p>
          </div>
          <hr class="my-3">
          <div class="w-full flex justify-between hover:cursor-pointer">
            <p>Ingredients</p>
            <p>+</p>
          </div>
          <div class="w-full mt-10 flex items-center text-quaternary">
            <div class="h-3 w-3 bg-primary rounded-full mr-2"></div>
            <p>Available</p>
          </div>
          <div class="w-full flex mt-6">
            <button class="px-8 h-14 text-quaternary border border-quaternary rounded-full mr-4">Go to shopping</button>
            <div class="h-14 w-14 flex items-center justify-center border border-primary rounded-full">
              <base-icon icon="heart" viewBox="0 0 30 41" size="35" class="text-primary"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- More detail -->
    <div class="w-full mt-16 relative">
      <img src="~/static/images/IMG_03ingredients/Group1149@2x.png" alt="">
      <div class="w-full centered absolute">
        <div class="w-full text-quaternary flex flex-row justify-evenly items-center">
          <div class="w-2/5 flex flex-col items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group622@2x.png" class="h-40" alt="">
            <h1 class="text-xl font-bold">Canabinoid (Cbd)</h1>
            <p class="mt-2">Anti inflammatory to make skin stronger</p>
          </div>
          <div class="vl-3 bg-primary"></div>
          <div class="w-2/5 flex flex-col items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group623@2x.png" class="h-40" alt="">
            <h1 class="text-xl font-bold">Leucojum Aestivum Bulb Extract ( Ibr - Snowflake®)</h1>
            <p class="mt-2">Anti Aging To Make Skin Younger And Brighter</p>
          </div>
        </div>
      </div>
    </div>
    <!-- -->

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

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
hr {
  width: 100%;
  border-bottom: solid .5px #78A695;
}
</style>