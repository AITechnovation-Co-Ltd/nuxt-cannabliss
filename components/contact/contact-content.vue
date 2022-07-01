<template>
  <div class="w-full flex justify-center px-20">
    <!-- Details Contract -->
    <div class="w-1/2 flex flex-col my-8">
      <a class="flex items-center " href="https://goo.gl/maps/ndXssawVBm4sNwf96" target="_blank">
        <base-icon viewBox="0 0 153 154" icon="location" class="w-12 h-12 mr-4" />
        <p class="text-primary">2922 / 209-214, Charn Issara Tower 2,12A <br />
          Floor, New Petchburi Road, Bang Kapi <br />
          Subdistrict,Huai Khwang Distric Bangkok</p>
      </a>

      <a class="flex items-center my-8 " href="tel:03525684593" target="_blank">
        <base-icon viewBox="0 0 153 178" icon="phone" class="w-12 h-12 ml-4" />
        <p class="text-primary border-b-2 border-primary">+391 (0)35 2568 4593</p>
      </a>

      <a class="flex items-center " href="www.morhello@domain.com" target="_blank">
        <base-icon viewBox="0 0 157 156" icon="email" class="w-12 h-12 mr-4" />
        <p class="text-primary border-b-2 border-primary">morhello@domain.com</p>
      </a>
    </div>
    <!-- Email Box -->
    <div class="w-1/2 ">
      <p class="my-8 text-2xl text-primary">Have some questions ?</p>
      <form class="flex flex-col">
        <base-input label="Name Lastname" class="mb-2" />
        <base-input label="E-mail" class="my-2" />
        <base-input label="Messages" class="mt-2 mb-8" type="textarea" />
        <base-button class="w-1/5 border-quaternary">Send</base-button>
      </form>
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
