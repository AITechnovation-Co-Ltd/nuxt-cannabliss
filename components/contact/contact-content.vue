<template>
  <div class="w-full flex flex-col justify-center text-3xl px-8 lg:px-12 xl:px-20 2xl:px-36">
    <div class="w-full">
      <!-- Breadcrumb -->
      <nav class="w-full mb-4 sm:my-8" aria-label="Breadcrumb">
        <ol class="text-quaternary text-base inline-flex items-center justify-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <nuxt-link to="/" class="inline-flex items-center font-medium">
              <base-icon icon="angle-left" viewBox="0 0 30 41" size="20" class="mr-2" />
              <p>Home</p>
            </nuxt-link>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <div class="vl mx-1 bg-quaternary"></div>
              <p class="font-extrabold md:ml-2 ">Contact</p>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="flex flex-col lg:flex-row">
      <!-- Details Contract -->
      <div class="w-full lg:w-1/2 flex flex-col my-4">
        <a class="flex items-center " href="https://goo.gl/maps/ndXssawVBm4sNwf96" target="_blank">
          <img src="~static/images/IMG_05contacts/Group1164@2x.png" alt="" class="w-20 h-20 mr-4">
          <p class="text-lg lg:text-xl 2xl:text-2xl text-quaternary font-light">2922 / 209-214, Charn Issara Tower 2,12A
            <br class="hidden lg:block"/>
            Floor, New Petchburi Road, Bang Kapi <br class="hidden lg:block"/>
            Subdistrict,Huai Khwang Distric Bangkok</p>
        </a>

        <div class="flex items-center my-4">
          <base-icon viewBox="0 0 153 178" icon="phone" class="w-20 h-20 ml-4" />
          <p class="text-primary text-lg lg:text-xl border-primary">+391 (0)35 2568 4593</p>
        </div>

        <div class="flex items-center">
          <base-icon viewBox="0 0 157 156" icon="email" class="w-20 h-20 mr-4" />
          <p class="text-primary text-lg lg:text-xl border-primary">morhello@domain.com</p>
        </div>
      </div>

      <!-- Email Box -->
      <div class="w-full lg:w-1/2 flex flex-col items-center">
        <p class="mb-8 text-3xl sm:text-4xl xl:text-5xl text-primary">Have some questions ?</p>
        <a href="https://lin.ee/i5MkM6w" target="_blank">
          <img src="~/static/images/IMG_05contacts/qrline.png" alt="" class="rounded-2xl drop-shadow-md">
        </a>
        <p class="mt-4 text-xl md:text-3xl">Or click <a href="https://lin.ee/i5MkM6w" target="_blank" class="text-primary hover:underline">this</a> to add line</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nike: ''
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