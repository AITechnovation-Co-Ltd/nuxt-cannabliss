<template>
  <div class="w-full relative xl:flex flex-col justify-center items-center">
    <div class="content w-full flex flex-col 2xl:flex-row py-8 px-8 lg:px-12 xl:px-20 2xl:px-36 z-20">
      <div class="w-full 2xl:w-1/3 text-xl text-quaternary font-light z-20">
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
        <BaseButton class="mt-4" @click="$router.push(`/product/details/3`)">View more</BaseButton>
      </div>

      <!-- image -->

      <div class="w-full 2xl:w-2/3 flex flex-col md:flex-row items-center justify-around z-20">
        <div class="w-full sm:w-2/3 md:w-1/2"><img src="~/static/images/IMG_01home/pages_01home/Group934@2x.png"></div>
        <div class="w-full md:w-1/2 my-4 sm:my-0 flex flex-col justify-center items-center text-quaternary ">
          <div class="flex justify-center items-center my-0 md:my-4" v-for="index in 3" :key="index">
            <base-icon icon="heart" viewBox="0 0 30 41" size="100" />
            <div class="text-xl flex flex-col justify-center ml-6">
              <h1 class="text-2xl font-semibold">Lorem Ipsum Dolor Sit</h1>
              <p class="font-light">Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="bg w-full z-10" src="~/static/images/IMG_01home/pages_01home/Group1136@2x.png" alt="">
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
  height: 220px;
  width: 20px;
}

@media (min-width:1800px) {
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
}
@media (max-width:1800px) {
  .bg {
    position: absolute;
    bottom: 0;
  }
}
@media (max-width:1400px) {
  .vl {
  height: 110px;
  width: 14px;
}
}
@media (max-width:809px) {
  .vl {
  height: 140px;
  width: 14px;
}
}
@media (max-width:702px) {
  .vl {
  height: 160px;
  width: 14px;
}
}
@media (max-width:590px) {
  .vl {
  height: 220px;
  width: 14px;
}
}
@media (max-width:455px) {
  .vl {
  height: 260px;
  width: 14px;
}
}
@media (max-width:391px) {
  .vl {
  height: 290px;
  width: 14px;
}
}
</style>