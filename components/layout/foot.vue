<template>
  <div>
    <footer class="px-8 text-primary">
      <div class="flex flex-col lg:flex-row lg:justify-around">

        <!-- logo -->
        <div class="w-full lg:w-1/4 flex justify-start lg:justify-center mb-6 md:mb-0">
          <nuxt-link to="/" class="flex items-center">
            <img class="h-32" src="~/static/logo/Logo-CANABLISS.png" alt="">
          </nuxt-link>
        </div>
        <div class="w-full lg:w-3/4 grid grid-cols-2 sm:flex justify-around content">
          <!-- product -->
          <div>
            <ul>
              <li class="mb-4 mt-8">
                <p @click="$router.push(`/product`)" class="hover:underline font-semibold">Product</p>
              </li>
              <li class="mb-4">
                <p @click="filter('Hair')" class="hover:underline">Hair</p>
              </li>
              <li class="mb-4">
                <p @click="filter('Face')" class="hover:underline">Face</p>
              </li>
              <li>
                <p @click="filter('Body')" class="hover:underline">Body</p>
              </li>
            </ul>
          </div>

          <!-- home -->
          <div>
            <ul>
              <li class="mb-4 mt-8">
                <nuxt-link to="/" class="hover:underline font-semibold">Home</nuxt-link>
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
          <div class="contact">
            <h2 class="mb-6 mt-6 text-lg font-semibold">Let's talk</h2>
            <ul>
              <li class="mb-4">
                <p>T: +391 (0)35 2568 4593</p>
              </li>
              <li class="mb-4">
                <p>E: hello@domain.com</p>
              </li>
              <li class="flex flex-row">
                <a href="#" class=" mr-1 hover dark:hover:text-white">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-facebook(1)@2x.png" alt="">
                </a>
                <a href="#" class=" mx-1 hover dark:hover:text-white">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-instagram@2x.png" alt="">
                </a>
                <a href="https://lin.ee/i5MkM6w" target="_blank" class=" mx-1 hover dark:hover:text-white">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-line(1)@2x.png" alt="">
                </a>
                <a href="#" class=" mx-1 hover dark:hover:text-white">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-twitter(1)@2x.png" alt="">
                </a>
                <a href="#" class=" ml-1 hover dark:hover:text-white hidden">
                  <img class="w-6" src="~/static/images/IMG_footer/icons8-pinterest@2x.png" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <hr class="mt-6 border-primary sm:mx-auto ">
      <div class="py-3 flex items-center justify-center">
        <span class="text-sm sm:text-center">Copyright © 2021 <a href="#" class="hover:underline">MorHello</a>. All
          rights reserved.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    filter(product) {
      this.$store.dispatch('me/setProduct', product)
      this.$router.push(`/product`)
    }
  }
}
</script>

<style scoped>
@media (max-width:400px) {
  .content {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
}
</style>