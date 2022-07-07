<template>
  <div class="w-full flex flex-col justify-center px-36">
    <p class="text-primary text-7xl">FAQ</p>
    <div class="w-full flex my-6">
      <!-- Dropdown FQA -->
      <div class="w-1/2 flex flex-col">

        <!-- FQA 1-->
        <base-dropdown class="my-6" dropdownClass="mt-2" @opened="checkDataOpen" openUp="toggle" >
          <div slot="toggle" class="flex items-center justify-between">
            <p align="start" class="text-3xl font-medium text-quaternary my-2 mr-28"
              :class="{ 'text-primary': dropdown_data }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus<br>Error Sit Voluptatem Accusantium</p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data,
              'transform rotate-0 duration-200': !dropdown_data,
            }" viewBox="0 0 233 168" width="26" color='#5E5F5F' />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-4/6 text-xl text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-5/6 border-b border-gray-300">

        <!-- FAQ 2-->
        <base-dropdown class="my-6" dropdownClass="mt-2" @opened="checkDataOpen2">
          <div slot="toggle" class="flex items-center">
            <p align="start" class="text-3xl font-medium text-quaternary my-2 mr-28"
              :class="{ 'text-primary': dropdown_data2 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus<br>Error Sit Voluptatem Accusantium</p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data2,
              'transform rotate-0 duration-200': !dropdown_data2,
            }" viewBox="0 0 233 168" width="26" color='#5E5F5F' />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-4/6 text-xl text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-5/6 border-b border-gray-300">

        <!-- FAQ 3 -->
        <base-dropdown class="my-6" dropdownClass="mt-2" @opened="checkDataOpen3">
          <div slot="toggle" class="flex items-center">
            <p align="start" class="text-3xl font-medium text-quaternary my-2 mr-28"
              :class="{ 'text-primary': dropdown_data3 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus<br>Error Sit Voluptatem Accusantium</p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data3,
              'transform rotate-0 duration-200': !dropdown_data3,
            }" viewBox="0 0 233 168" width="26" color='#5E5F5F' />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-4/6 text-xl text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-5/6 border-b border-gray-300">

        <!-- FAQ 4 -->
        <base-dropdown class="my-6" dropdownClass="mt-2" @opened="checkDataOpen4">
          <div slot="toggle" class="flex items-center">
            <p align="start" class="text-3xl font-medium text-quaternary my-2 mr-28"
              :class="{ 'text-primary': dropdown_data4 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus<br>Error Sit Voluptatem Accusantium</p>
            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data4,
              'transform rotate-0 duration-200': !dropdown_data4,
            }" viewBox="0 0 233 168" width="26" color='#5E5F5F' />
          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-4/6 text-xl text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-5/6 border-b border-gray-300">
      </div>

      <!-- Picture-->
      <div class="w-1/2 flex justify-center items-center">
        <img src="@/static/images/IMG_01home/pages_01home/enecta.jpg" class="rounded-3xl">
      </div>
    </div>

    <div class="w-full my-28 flex justify-center text-quaternary space-x-60">
      <div class="flex flex-col items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="100" class="mb-8"/>
        <p class="text-3xl mb-4 font-medium">24 Services</p>
        <p class="text-xl">Consultations via email</p>
      </div>
      <div class="flex flex-col items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="100" class="mb-8" />
        <p class="text-3xl mb-4 font-medium">30 Days Return</p>
        <p class="text-xl">You have to 30 days to return</p>
      </div>
      <div class="flex flex-col items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="100" class="mb-8"/>
        <p class="text-3xl mb-4 font-medium">Fast Delivery</p>
        <p class="text-xl">On order above $ 50</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown_data: true,
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
</style>