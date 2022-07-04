<template>
  <div class="w-full flex flex-col justify-center px-28 text-3xl">
    <div class="w-full">
      <!-- Breadcrumb -->
    <nav class="w-full my-8" aria-label="Breadcrumb">
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
    <div class="flex">
    <!-- Details Contract -->
    <div class="w-1/2 flex flex-col my-8">
      <a class="flex items-center " href="https://goo.gl/maps/ndXssawVBm4sNwf96" target="_blank">
        <base-icon viewBox="0 0 153 154" icon="location" class="w-20 h-20 mr-4" />
        <p class="text-2xl text-quaternary font-light">2922 / 209-214, Charn Issara Tower 2,12A <br />
          Floor, New Petchburi Road, Bang Kapi <br />
          Subdistrict,Huai Khwang Distric Bangkok</p>
      </a>

      <a class="flex items-center my-8 " href="tel:03525684593" target="_blank">
        <base-icon viewBox="0 0 153 178" icon="phone" class="w-20 h-20 ml-4" />
        <p class="text-primary border-b-2 border-primary">+391 (0)35 2568 4593</p>
      </a>

      <a class="flex items-center " href="www.morhello@domain.com" target="_blank">
        <base-icon viewBox="0 0 157 156" icon="email" class="w-20 h-20 mr-4" />
        <p class="text-primary border-b-2 border-primary">morhello@domain.com</p>
      </a>
    </div>
    

    <!-- Email Box -->
    <div class="w-1/2 ">
      <p class="my-8 text-5xl text-primary">Have some questions ?</p>
      <form class="flex flex-col">
        <base-input label="Name Lastname" class="mb-3 w-3/4" />
        <base-input label="E-mail" class="my-3 w-3/4" />
        <base-input label="Messages" class="mt-3 w-3/4 mb-8" type="textarea" />
        <base-button class="w-1/5 border-quaternary">Send</base-button>
      </form>
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