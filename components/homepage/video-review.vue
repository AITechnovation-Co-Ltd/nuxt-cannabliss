<template>
  <div class="w-full px-28 mt-24 mb-12 flex items-center">
    <div class="w-3/5 relative">
      <img class="rounded-3xl" src="~/static/images/IMG_01home/pages_01home/sunny-ng.jpg" alt="">
      <div class="centered h-32 w-32 mr-8 bg-white opacity-30 rounded-full flex items-center justify-center"></div>
      <div class="centered h-24 w-24 bg-tertiary rounded-full flex items-center justify-center">
        <base-icon icon="play" viewBox="0 0 30 41" size="40" class="text-white" />
      </div>
    </div>
    <div class="w-2/5 pl-28 text-xl text-quaternary font-light">
      <p>Video Review</p>
      <h1 class="text-5xl font-light mt-2">Canabliss Oasiz :</h1>
      <h2 class="text-5xl text-primary mt-2">Super Berry Hydrating Mask</h2>
      <div class="w-full flex items-center mt-6">
        <div class="vl bg-primary mr-4"></div>
        <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua . Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat</p>
      </div>
      <BaseButton class="mt-12">View more</BaseButton>
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