<template>
  <div class="w-screen static xl:relative ">
    <img class="w-full hidden xl:block" src="~/static/images/IMG_01home/pages_01home/Group1136@2x.png" alt="">
    <div class="centered w-full columns-1 xl:flex justify-center items-center px-20">

      <div class="w-full xl:w-1/3 text-xl text-quaternary font-light">
        <p>Face</p>
        <h1 class="text-4xl 2xl:text-5xl font-light mt-2">Canabliss Oasiz :</h1>
        <h2 class="text-4xl 2xl:text-5xl text-primary mt-2">First Step Amino Essence</h2>
        <div class="w-full flex items-center mt-6">
          <div class="vl bg-primary mr-4"></div>
          <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua . Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur .</p>
        </div>
        <p class="mt-6">Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua . Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat .</p>
        <BaseButton class="mt-12">View more</BaseButton>
      </div>

      <!-- image -->

      <div class="w-full flex justify-around xl:w-2/3">
        <div class="w-1/2"><img src="~/static/images/IMG_01home/pages_01home/Group934@2x.png"></div>
        <div class="w-1/2 flex flex-col justify-center items-center text-quaternary ">
          <div class="flex justify-center items-center my-4" v-for="index in 3" :key="index">
            <base-icon icon="heart" viewBox="0 0 30 41" size="100" />
            <div class="text-xl ml-6 mt-6">
              <h1 class="text-2xl font-semibold">Lorem Ipsum Dolor Sit</h1>
              <p class="font-light">Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do</p>
            </div>
          </div>
        </div>
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
@media (max-width:1280px){
  .centered {
  position: static;
  top: 0;
  left: 0;
  transform: translate(0%, 0%);
}
}
</style>