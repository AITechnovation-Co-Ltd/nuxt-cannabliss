<template>
  <div class="w-full flex flex-col mt-16 px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-32">

    <!-- Content -->
    <div class="w-full flex flex-col items-center">
      <!-- Card -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-8 text-quaternary">
        <div class="w-full flex flex-col" v-for="(data, i) in blogcard" :key="`blog-${i}`">
          <div v-if="!load_more ? i < 4 : i >= 0">
            <img :src="data.url" class="rounded-3xl" :class="{ 'sm:mt-16 xl:mt-24': i % 2 != 0 }">
            <p class="my-4 text-lg font-normal">Sed Ut Perspiciatis Unde Ommis lste Natus Error Sit</p>
            <p class="text-sm font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam corporis odit saepe modi fugit aut
              officiis animi nesciunt repellat molestias dolor laborum tempore deleniti sed provident quae natus,
              voluptates consequatur?</p>
            <base-button @click="$router.push(`/blogs/details/${data.id}`)" class="mt-8 border-quaternary">View
              more
            </base-button>
          </div>
        </div>
      </div>

      <!-- Button -->
      <base-button v-show="!load_more" @click="load_more = true" class="px-6 -mt-20 sm:mt-0 border-quaternary"
        :arrow='false'>Load more
      </base-button>
      <!-- <base-button v-show="load_more" @click="load_more = false" class="px-6 -mt-20 sm:mt-0 border-quaternary"
        :arrow='false'>Hide
      </base-button> -->
    </div>
  </div>
</template>

<script>

export default
  {
    data() {
      return {
        load_more: false,
        blogcard: [{
          id: 1,
          url: require('@/static/images/IMG_03blogs/amplitude.jpg')
        }, {
          id: 2,
          url: require('@/static/images/IMG_03blogs/bee.jpg')
        }, {
          id: 3,
          url: require('@/static/images/IMG_03blogs/enecta.jpg')
        }, {
          id: 4,
          url: require('@/static/images/IMG_03blogs/toa.jpg')
        }
          , {
          id: 5,
          url: require('@/static/images/IMG_03blogs/toa.jpg')
        }
          , {
          id: 6,
          url: require('@/static/images/IMG_03blogs/toa.jpg')
        }
          , {
          id: 7,
          url: require('@/static/images/IMG_03blogs/toa.jpg')
        }
          , {
          id: 8,
          url: require('@/static/images/IMG_03blogs/toa.jpg')
        }]
      }
    }
  }
</script>

<style scoped>
.vl {
  height: 15px;
  width: 1px;
}
</style>