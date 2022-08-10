<template>
  <div class="w-full flex flex-col mt-16 px-8 sm:px-12 lg:px-16 xl:px-28 3xl:px-32 relative z-20">
    <img src="~/static/images/IMG_03blogs/Group1152@2x.png" class="widget01">
    <!-- Content -->
    <div class="w-full flex flex-col items-center">
      <!-- Card -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-0 sm:gap-x-24 text-quaternary z-50">
        <div class="w-full flex flex-col" v-for="(data, i) in blogs" :key="`blog-${i}`">
          <div v-if="!load_more ? i < 4 : i >= 0">
            <img :src="url" class="rounded-3xl" :class="{ 'sm:mt-16 xl:mt-36': i % 2 != 0 }">
            <p class="my-4 text-lg font-normal">{{ data.title }}</p>
            <p class="text-sm font-light">{{ data.subtitle }}</p>
            <base-button @click="$router.push(`/blogs/details/${data.id}`)" class="mt-8 border-quaternary">View
              more
            </base-button>
          </div>
        </div>
      </div>

      <!-- Button -->
      <base-button v-show="!load_more" @click="load_more = true" class="px-6 -mt-20 sm:mt-20 border-quaternary">Load
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
</style>