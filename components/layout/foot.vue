<template>
  <div>
    <footer class="px-8 text-primary relative">
      <div class="flex flex-col lg:flex-row lg:justify-around">
        <!-- logo -->
        <div @click="gotoHome()"
          class="w-full lg:w-1/4 flex justify-center sm:justify-start lg:justify-center mb-6 md:mb-0 hover:cursor-pointer z-10">
          <img class="h-32" src="~/static/logo/LOGO_PANACEE_COSMETIC-02.png" alt="">
        </div>
        <div class="w-full lg:w-3/4 px-4 sm:px-0 grid text-sm grid-cols-2 sm:flex justify-around content">
          <!-- product -->
          <div class="font-light relative z-10">
            <ul>
              <li class="mb-4 mt-8">
                <p @click="filter('All Products')" class="hover:underline hover:cursor-pointer">Product</p>
              </li>
              <li class="mb-4">
                <p @click="filter('Hair')" class="hover:underline hover:cursor-pointer">Hair</p>
              </li>
              <li class="mb-4">
                <p @click="filter('Face')" class="hover:underline hover:cursor-pointer">Face</p>
              </li>
              <li>
                <p @click="filter('Body')" class="hover:underline hover:cursor-pointer">Body</p>
              </li>
            </ul>
          </div>

          <!-- home -->
          <div class="z-10">
            <ul>
              <li class="mb-4 mt-8">
                <div @click="gotoHome()" class="hover:underline hover:cursor-pointer">Home</div>
              </li>
              <li class="mb-4">
                <nuxt-link to="/ingredients" class="hover:underline ">Ingredients</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="/blogs" class="hover:underline ">Blogs</nuxt-link>
              </li>
              <li class="mb-4">
                <nuxt-link to="/review" class="hover:underline ">Review</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact" class="hover:underline">Contacts</nuxt-link>
              </li>
            </ul>
          </div>

          <!-- contacts -->
          <div class="contact col-span-2 sm:col-span-1 z-10">
            <h2 class="mb-3 mt-6 text-lg font-normal">Let's talk</h2>
            <ul>
              <li class="mb-4">
                <p>T: 1608 ต่อ 8</p>
              </li>
              <li class="mb-4">
                <p>E: info@panacee.com</p>
              </li>
              <li class="flex flex-row">
                <a href="https://www.facebook.com/CanablissCosmetic" target="_blank"
                  class=" mr-1 hover dark:hover:text-white">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-facebook(1)@2x.png" alt="">
                </a>
                <a href="https://www.instagram.com/canablisscosmetic/" target="_blank"
                  class=" mx-1 hover dark:hover:text-white">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-instagram@2x.png" alt="">
                </a>
                <a href="https://lin.ee/i5MkM6w" target="_blank" class=" mx-1 hover dark:hover:text-white">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-line(1)@2x.png" alt="">
                </a>
                <a href="https://www.youtube.com/channel/UCdKSDogq_7bUzWwY_U8zerA" target="_blank"
                  class=" mx-1 hover dark:hover:text-white">
                  <img class="mt-px h-5" src="~/static/images/IMG_footer/play-video(1).png" alt="">
                </a>
                <a href="#" class=" ml-1 hover dark:hover:text-white hidden">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-pinterest@2x.png" alt="">
                </a>
                <a href="https://twitter.com/CanablissC" target="_blank" class="mx-1">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-twitter(1)@2x.png"
                    alt="">
                </a>
                <a href="https://www.tiktok.com/@canablisscosmetic?_t=8VL26drxAa9&_r=1" target="_blank" class="mx-1">
                  <img class="h-5"
                    src="~/static/images/IMG_footer/logo-tiktok-svgrepo-com_0.png" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <hr class="mt-6 border-primary sm:mx-auto">
      <div class="py-5 flex items-center justify-center">
        <span class="text-xs font-extralight sm:text-center">Copyright © 2022 <a href="#"
            class="hover:underline">MorHello</a>. All
          rights reserved.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    route_name() {
      return this.$route.name
    },
  },
  mounted() {
    // console.log(this.route_name)
  },
  methods: {
    filter(product) {
      this.$store.dispatch('me/setType', product)
      if (this.route_name == 'product') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
      else {
        this.$router.push(`/product`)
      }
    },
    gotoHome() {
      if (this.route_name == 'index') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
      else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
</style>