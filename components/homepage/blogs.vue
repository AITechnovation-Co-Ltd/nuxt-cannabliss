
<template>
  <div
    class="w-full flex flex-col justify-center items-center pb-10 sm:pb-20 mt-12 lg:mt-20 px-4 lg:px-12 xl:px-20 3xl:px-32">
    <!-- Title -->
    <p class="text-5xl text-primary mb-8 lg:mb-16 font-medium">Blogs</p>
    <!-- Content -->
    <div class="w-full flex flex-col items-center">
      <!-- Card -->
      <div class="grid grid-col-1 md:grid-cols-2 gap-y-8 sm:gap-y-0 sm:gap-x-16 text-quaternary">
        <div class="hidden md:block w-full flex items-start flex-col" v-for="(data, i) in blogs.slice(0, 4)"
          :key="`blog-${i}`">
          <img :src="url" class="rounded-3xl" :class="{ 'mt-16 xl:mt-24': i % 2 != 0 }">
          <p class="my-4 text-lg font-normal">{{ data.title }}</p>
          <p class="text-sm font-light">{{ data.subtitle }}</p>
          <base-button @click="$router.push(`/blogs/details/${data.id}`)"
            class="mt-4 mr-0 sm:mr-auto ml-auto sm:ml-0 border-quaternary">View more
          </base-button>
        </div>
        <div class="block md:hidden w-full flex items-start justify-start flex-col" v-for="(data, i) in blogs" :key="i"
          :class="{ 'hidden': i % 2 != 0 }">
          <img :src="url" class="rounded-3xl">
          <p class="my-4 text-lg font-normal">{{ data.title }}</p>
          <p class="text-sm font-light">{{ data.subtitle }}</p>
          <base-button @click="$router.push(`/blogs/details/${data.id}`)"
            class="mt-4 mr-0 sm:mr-auto ml-auto sm:ml-0 border-quaternary">View more
          </base-button>
        </div>
      </div>
      <!-- Button -->
      <base-button @click="$router.push(`/blogs`)" class="px-6 mt-12 border-quaternary">View all</base-button>
    </div>
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
</style>
