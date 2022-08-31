<template>
  <div class="w-full flex flex-col px-4 sm:px-12 lg:px-16 xl:px-28 3xl:px-32">
    <!-- -->
    <div class="w-full flex flex-col lg:flex-row justify-center items-center">
      <!-- Details -->
      <div class="w-full sm:w-11/12 xl:w-1/2 pr-0 sm:pr-24">
        <!-- <p class="my-4 text-4xl text-primary thai font-thin">ต้านการอักเสบของสิว</p>
        <p class="my-4 text-4xl text-primary thai font-extralight">ต้านการอักเสบของสิว</p>
        <p class="my-4 text-4xl text-primary thai font-light">ต้านการอักเสบของสิว</p>
        <p class="my-4 text-4xl text-primary thai font-normal">ต้านการอักเสบของสิว</p>
        <p class="my-4 text-4xl text-primary thai font-medium">ต้านการอักเสบของสิว</p>
        <p class="my-4 text-4xl text-primary thai font-semibold">ต้านการอักเสบของสิว</p>
        <p class="my-4 text-4xl text-primary thai font-bold">ต้านการอักเสบของสิว</p>
        <p class="my-4 text-4xl text-primary thai font-extrabold">ต้านการอักเสบของสิว</p>
        <p class="my-4 text-4xl text-primary thai font-black">ต้านการอักเสบของสิว</p> -->
        <img src="~/static/images/IMG_03ingredients/CANABLISS@2x.png" class="widget">
        <p class="my-4 text-5xl sm:text-7xl text-primary thai" :class="{ 'text-3xl sm:text-3xl': blogs.id == 3 }">{{ blogs.title }}</p>
        <p class="pl-2 font-medium text-quaternary border-l-2 sm:border-l-4 border-primary text-2xl leading-7 thai">
          {{ blogs.subtitle }}</p>
        <p class="my-4 text-quaternary text-lg 3xl:text-xl leading-6 thai">{{ blogs.detail_title }}</p>
        <p class="text-quaternary text-lg 3xl:text-xl leading-6 thai">
          {{ blogs.first_header }}<br><span v-html="blogs.first_detail"
            class="text-quaternary text-lg 3xl:text-xl leading-6 thai"></span></p>
      </div>

      <!-- Picture -->
      <img src="~/static/images/IMG_03blogs/Path364@2x.png" class="widget364">
      <div class="w-full sm:w-11/12 xl:w-1/2 mt-8 xl:mt-0 h-full relative">
        <div class="w-full h-full flex items-start justify-start sm:justify-center">
          <img v-if="img[1]" :src="require(`~/static/images/blogs${img[1]}`)" class="rounded-3xl w-11/12 mt-8 z-20">
        </div>
        <img src="~/static/images/IMG_03ingredients/bg-blue2.png" class="w-11/12 rounded-3xl absolute top-0 right-0">
      </div>
    </div>
    <!-- -->
    <div class="w-full flex flex-col-reverse lg:flex-row justify-center items-center mt-8">
      <!-- Picture -->
      <div class="w-full sm:w-11/12 xl:w-3/5 flex justify-center">
        <img  v-if="img[2]" :src="require(`~/static/images/blogs${img[2]}`)" class="w-full sm:w-6/12 xl:w-9/12 rounded-3xl">
      </div>
      <!-- Details -->
      <img src="~/static/images/IMG_03blogs_details/Group803@2x.png" class="widget803">
      <div class="w-full sm:w-11/12 xl:w-2/5">
        <p class="mb-4 text-5xl sm:text-7xl text-primary thai">{{ blogs.second_header }}</p>
        <p v-html="blogs.second_detail" class="text-quaternary text-lg 3xl:text-xl leading-6 thai"></p>
        <p v-html="blogs.second_detail2" class="my-4 text-quaternary text-lg 3xl:text-xl leading-6 thai"></p>
      </div>
      <a href=""></a>
    </div>
    <div class="w-full mt-4">
      <p class="text-quaternary text-lg 3xl:text-xl leading-6 thai">{{blogs.more_detail}}</p><br>
      <p class="text-quaternary text-lg 3xl:text-xl leading-6 thai">{{blogs.more_detail2}}</p><br>
      <!-- <p class="text-quaternary text-lg 3xl:text-xl leading-6 thai">{{blogs.more_detail3}}</p><br> -->
    </div>
    <div class="w-full" v-show="blogs.id == 3">
      <p class="text-quaternary text-lg 3xl:text-xl leading-6 thai">ทั้งนี้ ผู้สนใจสามารถดูรายละเอียดผลิตภัณฑ์ น้ำตบ Canabliss Essence ได้ที่ <a href='www.morhelloclinic.com' target='_blank' class='text-primary hover:underline'> www.morhelloclinic.com </a> และสามารถพิสูจน์ความเด้งของน้ำตบ Canabliss Essence ได้แล้วตั้งแต่วันนี้ ณ ร้าน BEAUTRIUM ทุกสาขา</p>
    </div>
    <!-- Benefis of cbd -->
    <div v-show="blogs.id == 1" class="w-full flex flex-col items-center">
      <p class="my-10 text-2xl sm:text-4xl text-primary font-medium">Benefits Of CBD For Acne</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="flex items-center">
          <img src="~/static/images/IMG_03blogs_details/01@2x.png" class="widget01">
          <img src="@/static/images/IMG_03blogs_details/reduce.png" class="w-20 sm:w-24 mr-4">
          <p class="ml-2 font-normal">Reduce redness <br> & inflammation</p>
        </div>
        <div class="flex items-center">
          <img src="~/static/images/IMG_03blogs_details/02@2x.png" class="widget02">
          <img src="@/static/images/IMG_03blogs_details/regulates.png" class="w-20 sm:w-24 mr-4">
          <p class="ml-2 font-normal">Regulates oil <br> Production in the skin</p>
        </div>
        <div class="flex items-center">
          <img src="~/static/images/IMG_03blogs_details/03@2x.png" class="widget03">
          <img src="@/static/images/IMG_03blogs_details/sebum.png" class="w-20 sm:w-24 mr-4">
          <p class="ml-2 font-normal">Make sebum less-viscous <br> preventing clogging</p>
        </div>
        <!-- <img src="~/static/images/IMG_03blogs_details/Group1154@2x.png" class="widgetline"> -->
        <div class="flex items-center">
          <img src="~/static/images/IMG_03blogs_details/04@2x.png" class="widget04">
          <img src="@/static/images/IMG_03blogs_details/inhibits.png" class="w-20 sm:w-24 mr-4">
          <p class="ml-2 font-normal">Inhibits bacterial <br> Growth in the pores</p>
        </div>
        <div class="flex items-center">
          <img src="~/static/images/IMG_03blogs_details/05@2x.png" class="widget05">
          <img src="@/static/images/IMG_03blogs_details/promotes.png" class="w-20 sm:w-24 mr-4">
          <p class="ml-2 font-normal">Promotes the regeneration <br> of new skin cells</p>
        </div>
        <div class="flex items-center">
          <img src="~/static/images/IMG_03blogs_details/06@2x.png" class="widget06">
          <img src="@/static/images/IMG_03blogs_details/suppressed.png" class="w-20 sm:w-24 mr-4">
          <p class="ml-2 font-normal">Suppressed cell prolifera</p>
        </div>
        <!-- <img src="~/static/images/IMG_03blogs_details/Group1154@2x.png" class="widgetline2"> -->
      </div>
    </div>
  </div>
</template>

<script>
import blogs from "@/static/json/blogs.json"
export default {
  data() {
    return {
      blogs,
      img: [],
    }
  },
  async mounted() {
    await this.fetch()
    this.$store.dispatch('me/setBreadcrumb', this.blogs.title)
  },
  methods: {
    async fetch() {
      let list = await this.blogs.filter((e) => e.id == this.params)
      this.img = list[0].img
      this.blogs = list[0]
    },
  },
  props: {
    params: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.widget364 {
  height: 20rem;
  position: absolute;
  transform: translate(37rem, -13rem);
}

.widget01 {
  height: 5rem;
  position: absolute;
  transform: translate(6rem, -1.5rem);
}

.widget02 {
  height: 5rem;
  position: absolute;
  transform: translate(6rem, -1.5rem);
}

.widget03 {
  height: 5rem;
  position: absolute;
  transform: translate(6rem, -1.5rem);
}

.widget04 {
  height: 5rem;
  position: absolute;
  transform: translate(6rem, -1.5rem);
}

.widget05 {
  height: 5rem;
  position: absolute;
  transform: translate(6rem, -1.5rem);
}

.widget06 {
  height: 5rem;
  position: absolute;
  transform: translate(6rem, -1.5rem);
}

.widgetline {
  height: 4rem;
  position: absolute;
  transform: translate(17.5rem, 5rem);
}

.widgetline2 {
  height: 4rem;
  position: absolute;
  transform: translate(43rem, 5rem);
}

.widget {
  height: 7.5rem;
  position: absolute;
  transform: translate(4.5rem, -3rem);
}

.widget803 {
  height: 70rem;
  position: absolute;
  transform: translate(-18rem, -26rem);
}

@media (max-width:1441px) {
  .widget {
    height: 6.5rem;
    position: absolute;
    transform: translate(4.5rem, -2.3rem);
  }

  .widget803 {
    height: 50rem;
    position: absolute;
    transform: translate(-13rem, -16rem);

  }
}

@media (max-width:580px) {
  .widget {
    height: 4rem;
    position: absolute;
    transform: translate(2rem, -0.9rem);
  }
}

.vl {
  height: 15px;
  width: 1px;
}
</style>