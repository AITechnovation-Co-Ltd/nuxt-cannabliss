<template>
  <div class="w-full flex flex-col mt-16 px-8 sm:px-12 lg:px-16 xl:px-28 3xl:px-32 relative z-20">
    <img src="~/static/images/IMG_03blogs/Group1152@2x.png" class="widget01">
    <!-- Content -->
    <div class="w-full flex flex-col items-center">
      <img src="~/static/images/IMG_02products/Path337@2x.png" class="widget337">
      <img src="~/static/images/IMG_03blogs/Path364@2x.png" class="widget364">
      <!-- Card -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-0 sm:gap-x-24 text-quaternary z-50">
        <div class="w-full flex flex-col" v-for="(data, i) in blogs" :key="`blog-${i}`">
          <div v-if="!load_more ? i < 4 : i >= 0">
            <img :src="require(`~/static/images/blogs${data.img[0]}`)" class="rounded-3xl"
              :class="{ 'sm:mt-16 xl:mt-36': i % 2 != 0 }">
            <p class="my-4 text-lg font-normal">{{ data.title }}</p>
            <p class="text-sm font-light truncated-2-lines">{{ data.subtitle }}</p>
            <base-button @click="$router.push(`/blogs/details/${data.id}`)"
              class="mx-auto sm:mx-0 mt-8 border-quaternary">View
              more
            </base-button>
          </div>
        </div>
      </div>

      <!-- Button -->
      <base-button v-show="!load_more" @click="load_more = true" class="px-6 -mt-20 sm:mt-20 border-quaternary z-50">
        Load
        more
      </base-button>
      <!-- <base-button v-show="load_more" @click="load_more = false" class="px-6 -mt-20 sm:mt-0 border-quaternary"
        :arrow='false'>Hide
      </base-button> -->
    </div>
  </div>
</template>

<script>
import blogs from "@/static/json/blogs.json"
export default
  {
    data() {
      return {
        load_more: false,
        blogs,
        url: require('@/static/images/IMG_03blogs/toa.jpg')
      }
    }
  }
</script>

<style scoped>
.truncated-2-lines {
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.widget337 {
  height: 20rem;
  position: absolute;
  transform: translate(-6rem, 33rem);
}

.widget364 {
  height: 20rem;
  position: absolute;
  transform: translate(36rem, 2rem);
}

.widget01 {
  height: 50rem;
  position: absolute;
  bottom: 0;
  left: 20rem;
  z-index: 10;
}

.vl {
  height: 15px;
  width: 1px;
}

@media (max-width:1441px) {
  .widget01 {
    height: 42rem;
    position: absolute;
    bottom: 0;
    left: 8rem;
    z-index: 10;
  }
}

@media (max-width: 640px) {
  .widget337 {
    transform: translate(6rem, 29rem);
  }
}
</style>