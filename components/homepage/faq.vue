<template>
  <div class="maincrs w-full flex flex-col justify-center px-20">
    <p class="font-medium text-primary text-4xl">FAQ</p>
    <div class="w-full flex my-6">
      <!-- Dropdown FQA -->
      <div class="w-1/2 flex flex-col">
        <!-- FQA 1-->
        <base-dropdown class="my-4" dropdownClass="mt-2" @opened="checkDataOpen">
          <div slot="toggle" class="flex items-center">
            <p align="start" class="text-lg font-medium text-quaternary my-2 mr-28"
              :class="{ 'text-primary': dropdown_data }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus<br>Error Sit Voluptatem Accusantium</p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data,
              'transform rotate-0 duration-200': !dropdown_data,
            }" viewBox="0 0 233 168" width="26" color='#5E5F5F' />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="text-sm text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
          <hr>
        </base-dropdown>
        <!-- FQA 2-->
        <base-dropdown class="my-4" dropdownClass="mt-2" @opened="checkDataOpen2">
          <div slot="toggle" class="flex items-center">
            <p align="start" class="text-lg font-medium text-quaternary my-2 mr-28"
              :class="{ 'text-primary': dropdown_data2 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus<br>Error Sit Voluptatem Accusantium</p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data2,
              'transform rotate-0 duration-200': !dropdown_data2,
            }" viewBox="0 0 233 168" width="26" color='#5E5F5F' />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="text-sm text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
          <hr>
        </base-dropdown>
        <!-- FQA 3 -->
        <base-dropdown class="my-4" dropdownClass="mt-2" @opened="checkDataOpen3">
          <div slot="toggle" class="flex items-center">
            <p align="start" class="text-lg font-medium text-quaternary my-2 mr-28"
              :class="{ 'text-primary': dropdown_data3 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus<br>Error Sit Voluptatem Accusantium</p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data3,
              'transform rotate-0 duration-200': !dropdown_data3,
            }" viewBox="0 0 233 168" width="26" color='#5E5F5F' />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="text-sm text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
          <hr>
        </base-dropdown>
        <!-- FQA 4 -->
        <base-dropdown class="my-4" dropdownClass="mt-2" @opened="checkDataOpen4">
          <div slot="toggle" class="flex items-center">
            <p align="start" class="text-lg font-medium text-quaternary my-2 mr-28"
              :class="{ 'text-primary': dropdown_data4 }">
              Sed Ut Perspiciatis Unde Omnis Iste Natus<br>Error Sit Voluptatem Accusantium</p>
            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data4,
              'transform rotate-0 duration-200': !dropdown_data4,
            }" viewBox="0 0 233 168" width="26" color='#5E5F5F' />
          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="text-sm text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
              provident optio magnam, commodi
              corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
              reprehenderit? Officia.</p>
          </base-dropdown-item>
          <hr>
        </base-dropdown>
      </div>
      <!-- Picture-->
      <div class="w-1/2 flex justify-center items-center">
        <img src="@/static/images/IMG_01home/pages_01home/enecta.jpg" class="w-4/5 h-96 rounded-xl">
      </div>
    </div>
    <div class="w-full flex text-quaternary ">
      <div class="w-1/3 flex flex-col items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="56" class="mb-4"/>
        <p class="text-lg font-medium">24 Services</p>
        <p>Consultations via email</p>
      </div>
      <div class="w-1/3 flex flex-col items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="56" class="mb-4" />
        <p class="text-lg font-medium">30 Days Return</p>
        <p>You have to 30 days to return</p>
      </div>
      <div class="w-1/3 flex flex-col items-center ">
        <base-icon icon="heart" viewBox="0 0 24 24" size="56" class="mb-4"/>
        <p class="text-lg font-medium">Fast Delivery</p>
        <p>On order above $ 50</p>
      </div>
    </div>
  </div>
</template>

<script>
import { throws } from 'assert'
import baseIcon from '../base/base-icon.vue'

export default {
  components: { baseIcon },
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
      console.log(toggle)
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
.maincrs {
  min-height: calc(100vh - 84px);
}
</style>