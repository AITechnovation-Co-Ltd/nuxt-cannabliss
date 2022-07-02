<template>
  <div class="w-full flex flex-col px-28">
    <!-- Breadcrumb -->
    <div class="w-80 my-12">
      <nav class="w-full flex justify-start items-center" aria-label="Breadcrumb">
        <ol class="text-quaternary text-base inline-flex items-center justify-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <nuxt-link to="/" class="inline-flex items-center font-medium">
              <base-icon icon="angle-left" viewBox="0 0 30 41" size="20" class="mr-2" />
              <p>Home</p>
            </nuxt-link>
          </li>
          <li>
            <div class="flex items-center">
              <div class="vl mx-1 bg-quaternary"></div>
              <p class="font-medium md:ml-2">Blogs</p>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <!-- Content -->
    <div class="w-full flex flex-col items-center">
        <!-- Card -->
        <div class="grid grid-cols-2 gab-1 text-quaternary">
          <div class="w-11/12 flex flex-col px-10" v-for="(data, i) in blogcard" :key="i">
            <img :src="data.url" class="h-96 w-full rounded-lg" :class="{ 'mt-24': i % 2 != 0 }">
            <p class="my-4 text-lg font-medium">Sed Ut Perspiciatis Unde Ommis lste Natus Error Sit</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam corporis odit saepe modi fugit aut
              officiis animi nesciunt repellat molestias dolor laborum tempore deleniti sed provident quae natus,
              voluptates consequatur?</p>
            <base-button @click="$router.push(`/blogs/details/${data.id}`)" class="w-2/6 mt-4 border-quaternary">View more</base-button>
          </div>
        </div>
        <!-- Button -->
      <base-button class="px-6 mt-24 mb-4 border-quaternary">Load more</base-button>
    </div>
  </div>
</template>

<script>

export default
  {
    data() {
      return {
        blogcard: [{
          id:1,
          url: require('@/static/images/IMG_03blogs/amplitude.jpg')
        }, {
          id:2,
          url: require('@/static/images/IMG_03blogs/bee.jpg')
        }, {
          id:3,
          url: require('@/static/images/IMG_03blogs/enecta.jpg')
        }, {
          id:4,
          url: require('@/static/images/IMG_03blogs/toa.jpg')
        }]
      }
    }
  }
</script>


