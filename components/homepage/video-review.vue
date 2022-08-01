<template>
  <div class="w-full mt-24 mb-12 flex flex-col-reverse md:flex-row items-center px-8 lg:px-12 xl:px-20 2xl:px-32">
    <div class="w-full sm:w-11/12 md:w-1/2 xl:w-3/5 mt-6 md:mt-0 relative">
      <img class="rounded-3xl" src="~/static/images/IMG_01home/pages_01home/sunny-ng.jpg" alt="">
      <div class="centered hidden h-32 w-32 mr-8 bg-white opacity-30 rounded-full flex items-center justify-center"></div>
      <div class="centered hidden h-24 w-24 bg-tertiary rounded-full flex items-center justify-center">
        <base-icon icon="play" viewBox="0 0 30 41" size="40" class="text-white" />
      </div>
    </div>
    <div class="w-full sm:w-11/12 md:w-1/2 xl:w-2/5 ml-0 md:ml-8 2xl:ml-20 text-xl text-quaternary font-light">
      <p>Video Review</p>
      <h1 class="text-4xl xl:text-5xl font-light mt-1 xl:mt-2">Canabliss Oasiz :</h1>
      <h2 class="text-3xl 2xl:text-4xl text-primary mt-1 xl:mt-2">Super Berry Hydrating Mask</h2>
      <div class="w-full flex items-center mt-3 xl:mt-6">
        <div class="h-56 sm:h-32 md:h-44 2xl:h-56 w-4 bg-primary mr-4"></div>
        <p class="text-base xl:text-lg">Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua . Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat</p>
      </div>
      <BaseButton class="mt-4 xl:mt-12">View more</BaseButton>
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
img {
  filter: brightness(0.7);
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vl {
  height: 170px;
  width: 20px;
}
</style>