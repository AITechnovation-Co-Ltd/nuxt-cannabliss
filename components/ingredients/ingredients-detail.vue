<template>
  <div class="w-full px-4 sm:px-12 lg:px-16 xl:px-28 3xl:px-32 z-20 relative">
    <div class="w-full flex flex-col mt-0 sm:mt-4 lg:mt-0 lg:flex-row justify-between items-start lg:items-center">
      <div class="w-full lg:w-1/2 lg:mr-8 xl:mr-0 pr-0 lg:pr-20 xl:pr-32">
        <img src="~/static/images/IMG_03ingredients/CANABLISS@2x.png" class="widget">
        <h1 class="text-4xl sm:text-5xl mt-4 sm:mt-0 text-primary">Ingredients</h1>
        <img src="~/static/images/IMG_03ingredients/Group1053@2x.png" class="widget1053">
        <div class="flex items-center mt-4">
          <!-- <div class="w-0.5 h-24 2xl:h-12 bg-primary mr-4 flex"></div> -->
          <span class="text-quaternary font-normal text-2xl border-l-2 border-primary pl-2 sm:pl-4 thai">ผสานพลัง 2
            สารสกัดมหัศจรรย์จากธรรมชาติ เพื่อดูแลผิวของคุณให้กระจ่างใส และแข็งแรงขึ้น</span>
        </div>
        <p class="mt-4 text-justify text-quaternary text-xl font-light thai">ด้วยสารสกัด CBD
          จากกัญชงที่มีส่วนช่วยในการลดการอักเสบ
          ปรับสภาพ และ คืนความชุ่มชื้นให้กับผิว และ Snow Bell Extract จากประเทศเกาหลี ที่มีสารต้านอนุมูลอิสระ
          และทำให้ผิวแลดูขาว กระจ่างใสขึ้น</p>
      </div>
      <div class="w-full lg:w-1/2 h-full mt-8 lg:mt-0 lg:mt-0 relative">
        <div class="w-full h-full flex items-start">
          <img src="~/static/images/IMG_01home/pages_01home/bee-naturalles.jpg"
            class="rounded-3xl w-11/12 mt-8 sm:mt-12 z-20" alt="">
        </div>
        <img src="~/static/images/IMG_03ingredients/bg-green.png" alt=""
          class="w-11/12 rounded-3xl absolute top-0 right-0">
        <!-- <div class="bgimg rounded-3xl bg-primary absolute top-0 right-0"></div> -->
      </div>
    </div>

    <div class="w-full mt-16 lg:mt-28 relative">
      <img class="bg w-full z-10" src="~/static/images/IMG_03ingredients/Group1149@2x.png" alt="">
      <div class="content w-full flex pb-4 lg:pb-0 z-20">
        <div class="w-full text-quaternary flex flex-col md:flex-row justify-evenly items-center z-20">
          <div class="w-full md:w-2/5 flex flex-col items-center text-sm font-extralight justify-center">
            <img src="~/static/images/IMG_03ingredients/Group622@2x.png" class="h-24 xl:h-32 2xl:h-40" alt="">
            <h1 class="text-lg font-normal">Canabinoid (Cbd)</h1>
            <p class="mt-2 text-center">Anti inflammatory to make skin stronger</p>
            <p class="mt-2 2xl:mt-4 text-center">Lorem ipsur dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut Iabore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commnodo</p>
          </div>
          <div class="vl h-60 xl:h-64 bg-primary hidden md:block"></div>
          <div class="w-full md:w-2/5 flex flex-col text-sm font-extralight items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group623@2x.png" class="h-24 xl:h-32 2xl:h-40" alt="">
            <h1 class="text-lg text-center font-normal">Leucojum Aestivum Bulb Extract <br class="block sm:hidden"> (
              Ibr - Snowflake®)</h1>
            <p class="mt-2 text-center">Anti Aging To Make Skin Younger And Brighter</p>
            <p class="mt-2 2xl:mt-4 text-center">Lorem ipsur dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut Iabore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commnodo</p>
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
.widget {
  height: 7.5rem;
  position: absolute;
  transform: translate(4.2rem, -4.7rem);
}

.widget1053 {
  height: 40rem;
  left: 0;
  position: absolute;
  transform: translate(-15rem, -4.5rem);
}

.vl {
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

@media (max-width:1441px) {
  .widget1053 {
    height: 35rem;
    left: 0;
    position: absolute;
    transform: translate(-15rem, -4.5rem);
  }

  .widget {
    height: 6.5rem;
    position: absolute;
    transform: translate(4.2rem, -4rem);
  }

}

@media (min-width:1024px) {
  .content {
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