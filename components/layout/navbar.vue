<template>
  <div class="sticky top-0 z-50">
    <nav class="w-screen bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container h-16 flex flex-wrap justify-between items-center mx-auto">
        <nuxt-link to="/" class="flex items-center">
          <img class="h-16" src="~/static/logo/Logo-CANABLISS.png" alt="">
          <!-- <span class="self-center text-xl font-semibold whitespace-nowrap">Cannabliss</span> -->
        </nuxt-link>
        <div class="flex md:order-2">
          <div class="flex items-center">
            <div class="notification">
              <nuxt-link to="/favorite">
                <base-icon icon="heart" viewBox="0 0 30 41" size="40" class="text-primary mx-2" />
                <span class="badge bg-primary">0</span>
              </nuxt-link>
            </div>
            <base-icon icon="magnifying-glass" viewBox="0 0 30 41" size="40" class="text-primary mx-2" />
            <div class="vl mx-4 bg-primary"></div>
            <p id="dropdownDefault" data-dropdown-toggle="dropdown"
                class="text-primary text-lg ml-2 hover:cursor-pointer rounded-lg text-sm flex items-center"
                type="button">EN<svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg></p>
              <!-- Dropdown menu -->
              <div id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow px-2 "
                data-popper-placement="bottom"
                style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(592px, 735px);">
                <p class="text-center">ไทย</p>
              </div>

          </div>
          <button data-collapse-toggle="mobile-menu-4" type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-16 md:mt-0 text-base">
            <li>
              <!-- <nuxt-link to="/product" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">Product</nuxt-link> -->

              <!-- Dropdown menu -->
              <p id="dropdownDefault" data-dropdown-toggle="multilang"
                class="text-primary hover:cursor-pointer rounded-lg flex items-center"
                type="button">Product <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg></p>
              <div id="multilang"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 "
                data-popper-placement="bottom"
                style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(592px, 735px);">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <nuxt-link to="/product"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Products</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/product"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hair</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/product"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Face</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/product"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Body</nuxt-link>
                  </li>
                </ul>
              </div>

            </li>
            <li>
              <nuxt-link to="/ingredients" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">Ingredients</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">Blogs</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/review" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">Review</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">Contacts</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.vl {
  width: 1px;
  height: 30px;
}
.notification {
  text-decoration: none;
  padding: 0px;
  position: relative;
  display: inline-block;
}
.notification .badge {
  position: absolute;
  top: -4px;
  right: -2px;
  padding: 0px 7px;
  border-radius: 50%;
  color: white;
}
</style>