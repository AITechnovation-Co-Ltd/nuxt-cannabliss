<template>
  <div
    class="w-full flex flex-col relative justify-center items-center pb-10 sm:pb-20 mt-12 lg:mt-20 px-4 lg:px-12 xl:px-20 3xl:px-32 z-30">
    <!-- Title -->
    <p class="text-5xl text-primary mb-8 lg:mb-16 font-medium">Blogs</p>
    <!-- Content -->
    <div class="w-full flex flex-col items-center">
      <img src="~/static/images/IMG_02products/Path337@2x.png" class="widget337 z-20">
      <img src="~/static/images/IMG_03blogs/Path364@2x.png" class="widget364 z-20">
      <!-- Card -->
      <div class="grid grid-col-1 md:grid-cols-2 gap-y-8 sm:gap-y-0 sm:gap-x-16 text-quaternary z-30">
        <div class="hidden md:block w-full flex items-start flex-col z-30" v-for="(data, i) in blogs.slice(0, 4)"
          :key="`blog-${i}`">
          <img :src="require(`~/static/images/blogs${data.img[0]}`)" class="rounded-3xl"
            :class="{ 'mt-16 xl:mt-24': i % 2 != 0 }">
          <p class="my-4 text-lg font-normal">{{ data.title }}</p>
          <p class="text-sm font-light">{{ data.subtitle }}</p>
          <base-button @click="$router.push(`/blogs/details/${data.id}`)"
            class="mt-4 mr-auto ml-auto sm:mr-auto sm:ml-0 border-quaternary z-30">View more
          </base-button>
        </div>
        <div class="block md:hidden w-full flex items-start justify-start flex-col"
          v-for="(data, i) in blogs.slice(0, 2)" :key="i">
          <img :src="require(`~/static/images/blogs${data.img[0]}`)" class="rounded-3xl">
          <p class="my-4 text-lg font-normal">{{ data.title }}</p>
          <p class="text-sm font-light">{{ data.subtitle }}</p>
          <base-button @click="$router.push(`/blogs/details/${data.id}`)"
            class="mt-4 mr-auto ml-auto sm:mr-auto sm:ml-0 border-quaternary z-30">View more
          </base-button>
        </div>
      </div>
      <!-- Button -->
      <base-button @click="$router.push(`/blogs`)" class="px-6 mt-12 border-quaternary z-30">View all</base-button>
    </div>
    <img src="~/static/images/IMG_01home/pages_01home/Group1135@2x.png" class="absolute bottom-0 z-10">
    <img src="~/static/images/IMG_01home/pages_01home/Path330@2x.png" class="widget330 absolute z-20">
  </div>
</template>
<script>
import blogs from "@/static/json/blogs.json"
export default
  {
    data() {
      return {
        blogs,
        url: require('@/static/images/IMG_03blogs/toa.jpg')
      }
    }
  }
</script>

<style scoped>
.widget337 {
  height: 20rem;
  position: absolute;
  transform: translate(-5rem, 31rem);
}
.widget364 {
  height: 20rem;
  position: absolute;
  transform: translate(38rem, -2rem);
}
.widget330 {
  height: 36rem;
  bottom: -300px;
  left: -150px;
}
@media (max-width:640px){
  .widget337 {
  transform: translate(4rem, 31rem);
}
.widget330 {
  height: 22rem;
  bottom: -170px;
  left: -150px;
}
}
</style>
