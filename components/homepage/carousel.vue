<template>
  <div class="bg w-full relative px-28">
    <div class="flex h-5/6 items-center justify-between">
      <div class="w-1/2 h-full flex items-center justify-center">
        <div class="flex h-full flex-col items-start justify-center">
          <h1 class="text-6xl text-quaternary">Canabliss Oasiz</h1>
          <h2 class="mt-2 text-7xl text-primary font-medium">Red Fruit Overnight Mask</h2>
          <div class="mt-8 w-full flex items-center">
            <div class="vl bg-primary mr-8"></div>
            <p class="text-4xl font-light text-quaternary">Lorem ipsum dolor sit amet , consectetur adipiscing elit ,
              sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua .</p>
          </div>
          <div class="w-full mt-20 flex items-center hidden">
            <div class="h-28 w-28 mr-8 border-2 border-tertiary rounded-full flex items-center justify-center">
              <div class="h-24 w-24 bg-tertiary rounded-full flex items-center justify-center">
                <base-icon icon="play" viewBox="0 0 30 41" size="30" class="text-white" />
              </div>
            </div>
            <p class="text-3xl text-quaternary">Watch the video</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 flex justify-center">
        <img class="w-full" src="~/static/images/IMG_06fav/Group1063@2x.png" alt="">
      </div>
    </div>
    <div class="w-full h-1/6 flex justify-between items-start">
      <div class="w-full">
        <p class="text-4xl text-primary"><span class="font-bold">1</span>/4</p>
        <div class="progres mt-7 bg-primary rounded-full h-0.5 flex items-center">
          <div class="bg-primary h-1.5 rounded-full" style="width: 25%"></div>
        </div>
      </div>
      <div class="flex space-x-12 mt-12">
        <a href=""><img class="w-12" src="~/static/images/IMG_01home/pages_01home/icons8-facebook@2x.png" alt=""></a>
        <a href=""><img class="w-12" src="~/static/images/IMG_01home/pages_01home/icons8-instagram@2x.png" alt=""></a>
        <a href=""><img class="w-12" src="~/static/images/IMG_01home/pages_01home/icons8-line@2x.png" alt=""></a>
        <a href=""><img class="w-12" src="~/static/images/IMG_01home/pages_01home/icons8-twitter@2x.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
  height: calc(100vh - 84px);
}
.vl {
  height: 145px;
  width: 15px;
}
.progres {
  width: 500px;
}
</style>