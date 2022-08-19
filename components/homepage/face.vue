<template>
  <div class="w-full h-auto mt-0 sm:mt-6 relative xl:flex flex-col justify-center items-center z-10">
    <div class="content  w-full flex flex-col 2xl:flex-row py-8 px-4 lg:px-12 xl:px-20 3xl:px-32 z-20">
      <div class="w-full 2xl:w-1/3 text-xl text-quaternary font-light z-20">
        <p class="text-sm">{{products[0].type}}</p>
        <h1 class="text-2xl font-light">{{products[0].genre}}:</h1>
        <h2 class="text-2xl text-primary font-normal">{{products[0].name}}</h2>
        <div class="w-full flex items-center mt-6">
          <p class="text-sm font-extralight pl-2 sm:pl-3 border-l-2 border-primary">{{products[0].subtitle_th}}</p>
        </div>
        <p class="mt-6 text-sm font-extralight">{{products[0].detail_th}}</p>
        <base-button class="mt-8 hidden sm:block z-20" @click="$router.push(`/product/details/1`)">View more</base-button>
      </div>

      <!-- image -->

      <div class="w-full 2xl:w-2/3 flex flex-col md:flex-row items-center justify-around z-20">
        <div class="w-full sm:w-2/3 md:w-1/2"><img class="h-96 mr-auto ml-auto" :src="require(`~/static/images/products${products[0].imgUrl[0]}`)"></div>
        <div class="w-full md:w-1/2 my-4 sm:my-0 flex flex-col justify-center items-center text-quaternary ">
          <div class="flex justify-center items-center my-0 md:my-4" v-for="(indication,index) in indications" :key="index">
            <base-icon icon="heart" viewBox="0 0 30 41" size="70" />
            <div class="text-xl flex flex-col justify-center ml-6">
              <h1 class="text-lg font-normal">{{indication.title}}</h1>
              <p class="text-sm font-extralight w-60">{{indication.detail}}</p>
            </div>
          </div>
        </div>
    <base-button class=" mr-1 md:ml-auto block sm:hidden z=20" @click="$router.push(`/product/details/3`)">View more</base-button>
      </div>
    </div>
    <img class="bg w-full z-10" src="~/static/images/IMG_01home/pages_01home/Group1136@2x.png" alt="">
  </div>

</template>

<script>
import products from "@/static/json/products.json"
export default {
  data() {
    return {
      products,
      indications:[
        {title:"สารสกัด CBD",detail:"ช่วยต้านการอักเสบของผิวหน้า"},
        {title:"สารสกัด Snowbell",detail:"ทำความสะอาด และ ปรับผิวขาวกระจ่างใส"},
        {title:"Amino Acids",detail:"เติมอาหารให้ผิว เผยผิวเนียนนุ่ม เปล่งปลั่ง"}
      ]
    }
  }
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
  height: 120px;
  width: 15px;
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
</style>