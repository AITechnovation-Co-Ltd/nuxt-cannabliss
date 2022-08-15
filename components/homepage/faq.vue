<template>
  <div class="w-full flex flex-col justify-center mt-8 sm:mt-12 px-4 lg:px-12 xl:px-20 3xl:px-32">
    <p class="text-primary text-4xl sm:text-5xl">FAQ</p>
    <div class="w-full flex flex-col lg:flex-row items-start mt-4 mb-6 sm:mt-6 z-20">
      <!-- Dropdown FQA -->
      <div class="w-full lg:w-1/2 flex flex-col mr-0 lg:mr-28">

        <!-- FQA 1-->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-base sm:text-lg font-normal text-quaternary my-2"
              :class="{ 'text-primary': dropdown_data }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus <br class="hidden sm:block"> Error Sit Voluptatem Accusantium
            </p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data,
              'transform rotate-0 duration-200': !dropdown_data,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-sm font-extralight text-quaternary ">Lorem ipsum dolor sit amet consectetur
              adipisicing
              elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-full border-b border-gray-300">

        <!-- FAQ 2-->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen2">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-base sm:text-lg font-normal text-quaternary my-2"
              :class="{ 'text-primary': dropdown_data2 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus <br class="hidden sm:block"> Error Sit Voluptatem Accusantium
            </p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data2,
              'transform rotate-0 duration-200': !dropdown_data2,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-sm font-extralight text-quaternary ">Lorem ipsum dolor sit amet consectetur
              adipisicing
              elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-full border-b border-gray-300">

        <!-- FAQ 3 -->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen3">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-base sm:text-lg font-normal text-quaternary my-2"
              :class="{ 'text-primary': dropdown_data3 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus <br class="hidden sm:block"> Error Sit Voluptatem Accusantium
            </p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data3,
              'transform rotate-0 duration-200': !dropdown_data3,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-sm font-extralight text-quaternary ">Lorem ipsum dolor sit amet consectetur
              adipisicing
              elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-full border-b border-gray-300">

        <!-- FAQ 4 -->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen4">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-base sm:text-lg font-normal text-quaternary my-2"
              :class="{ 'text-primary': dropdown_data4 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus <br class="hidden sm:block"> Error Sit Voluptatem Accusantium
            </p>
            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data4,
              'transform rotate-0 duration-200': !dropdown_data4,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />
          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-sm font-extralight text-quaternary ">Lorem ipsum dolor sit amet consectetur
              adipisicing
              elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
        </base-dropdown>
      </div>

      <!-- Picture-->
      <div class="w-full md:w-11/12 lg:w-1/2 mt-8 xl:mt-10 z-20">
        <img src="@/static/images/IMG_01home/pages_01home/enecta.jpg" class="rounded-3xl">
      </div>
    </div>
    <img src="~/static/images/IMG_03blogs/Path364@2x.png" class="widget364 z-10">
    <img src="~/static/images/IMG_03ingredients/CANABLISS@2x.png" class="widget z-10">

    <div class="w-full my-0 mb-0 mt-12 sm:my-20 flex flex-wrap justify-evenly text-quaternary">
      <div class="flex flex-col mx-4 sm:mx-0 items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="60" class="mb-4" />
        <p class="text-lg font-normal">24 Services</p>
        <p class="text-sm font-extralight">Consultations via email</p>
      </div>
      <div class="mt-8 sm:mt-0 flex flex-col mx-4 sm:mx-0 items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="60" class="mb-4" />
        <p class="text-lg font-normal">30 Days Return</p>
        <p class="text-sm font-extralight">You have to 30 days to return</p>
      </div>
      <div class="mt-8 md:mt-0 flex flex-col mx-4 sm:mx-0 items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="60" class="mb-4" />
        <p class="text-lg font-normal">Fast Delivery</p>
        <p class="text-sm font-extralight">On order above $ 50</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown_data: false,
      dropdown_data2: false,
      dropdown_data3: false,
      dropdown_data4: false,
    }
  },
  methods: {
    checkDataOpen(toggle) {
      // console.log(toggle)
      this.dropdown_data = toggle
    },
    checkDataOpen2(toggle) {
      this.dropdown_data2 = toggle
    },
    checkDataOpen3(toggle) {
      this.dropdown_data3 = toggle
    },
    checkDataOpen4(toggle) {
      this.dropdown_data4 = toggle
    },
  }
}
</script>

<style scoped>
.widget {
  height: 7.5rem;
  position: absolute;
  right: 2.5rem;
  transform: translate(0rem, 6rem);
}

.widget364 {
  height: 20rem;
  position: absolute;
  right: 0;
  transform: translate(2.5rem, -17rem);
}
</style>