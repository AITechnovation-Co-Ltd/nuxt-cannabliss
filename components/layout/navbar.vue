<template>
  <div class="sticky top-0 z-50">
    <nav class="w-screen bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container h-16 flex flex-wrap justify-between items-center mx-auto px-6">

        <!-- Logo -->
        <nuxt-link to="/" class="flex items-center">
          <img class="h-16" src="~/static/logo/Logo-CANABLISS.png" alt="">
        </nuxt-link>

        <div class="lg:hidden">
          <button @click="drawer">
            <base-icon icon="bars" viewBox="0 0 20 20" :size="35" class="text-primary" />
          </button>
        </div>

        <div class="hidden lg:flex md:order-2">
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
              class="text-primary text-lg ml-2 hover:cursor-pointer rounded-lg text-sm flex items-center" type="button">
              EN<svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg></p>
            <!-- Dropdown menu -->
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow px-4 text-primary"
              data-popper-placement="bottom"
              style="position: absolute;  inset: 0px auto auto 0px; margin: 0px; transform: translate(592px, 735px);">
              <p class="text-center">TH</p>
            </div>

            <!-- User Auth -->
            <div>
              <base-icon icon="user" viewBox="0 0 30 41" size="40" class="text-primary mx-2" />
            </div>

          </div>
        </div>

        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-4">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-16 md:mt-0 text-base">
            <li class="flex flex-col justify-end items-center ">
              <img v-if="route_name == 'product'" src="@/static/images/flower.png">
              <nuxt-link to="/product" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">
                <p :class="{ 'font-bold': route_name == 'product' }">Product</p>
              </nuxt-link>
            </li>
            <li class="flex flex-col justify-end items-center ">
              <img v-if="route_name == 'ingredients'" src="@/static/images/flower.png">
              <nuxt-link to="/ingredients" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">
                <p :class="{ 'font-bold': route_name == 'ingredients' }">Ingredients</p>
              </nuxt-link>
            </li>
            <li class="flex flex-col justify-end items-center ">
              <img v-if="route_name == 'blogs' || route_name == 'blogs-details-id'" src="@/static/images/flower.png">
              <nuxt-link to="/blogs" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">
                <p :class="{ 'font-bold': route_name == 'blogs' || route_name == 'blogs-details-id' }">Blogs</p>
              </nuxt-link>
            </li>
            <li class="flex flex-col justify-end items-center">
              <img v-if="route_name == 'review'" src="@/static/images/flower.png">
              <nuxt-link to="/review" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">
                <p :class="{ 'font-bold': route_name == 'review' }">Review</p>
              </nuxt-link>
            </li>
            <li class="flex flex-col justify-end items-center">
              <img v-if="route_name == 'contact'" src="@/static/images/flower.png">
              <nuxt-link to="/contact" class="block py-2 pr-4 pl-3 text-primary md:border-0 md:p-0">
                <p :class="{ 'font-bold': route_name == 'contact' }">Contacts </p>
              </nuxt-link>
            </li>
          </ul>
        </div>

        <aside
          class="p-5 z-50 transform top-0 right-0 w-64 bg-primary fixed h-full overflow-auto ease-in-out transition-all duration-300"
          :class="isOpen ? 'translate-x-0' : 'translate-x-full'">

          <div class="close w-full flex justify-end">
            <button @click="isOpen = false" class="mt-1.5 mr-3">
              <base-icon icon="xmark" viewBox="0 0 20 20" :size="35" class="text-white" />
            </button>
          </div>
          <ul class="divide-y devide-white font-sans">
            <li>
              <nuxt-link to="/product" class="ml-2 w-full text-white text-lg font-medium my-4 inline-block">
                <p @click="isOpen = false" class="w-full">Product</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/ingredients" class="ml-2 w-full text-white text-lg font-medium my-4 inline-block">
                <p @click="isOpen = false" class="w-full">Ingredients</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs" class="ml-2 w-full text-white text-lg font-medium my-4 inline-block">
                <p @click="isOpen = false" class="w-full">Blog</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/review" class="ml-2 w-full text-white text-lg font-medium my-4 inline-block">
                <p @click="isOpen = false" class="w-full">Review</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="ml-2 w-full text-white text-lg font-medium my-4 inline-block">
                <p @click="isOpen = false" class="w-full">Contacts</p>
              </nuxt-link>
            </li>
            <!-- Checked login for V-show -->
            <!-- <div class="text-lg text-white px-2" v-for="(item, i) in $menus.menu_users"
            :key="`menu-user-${i}`">
            <li>
              <nuxt-link class="text-white text-lg w-full font-medium my-4 inline-block" :to="item.link"
                :class="{ 'text-secondary': item.routes.includes(route_name) }">
                <p @click="isOpen = false" class="w-full">{{ item.label
                }}</p>
              </nuxt-link>
            </li>
          </div> -->

            <li>
              <div class="p-3">
                <nuxt-link to="/favorite" class="flex items-center justify-center space-x-3 text-white text-lg font-medium my-4">
                  <div class="notification">
                    <nuxt-link to="/favorite">
                      <base-icon icon="heart" viewBox="0 0 30 41" size="40" class="text-white mx-2" />
                    </nuxt-link>
                  </div>

                  <div class="vl mx-4 bg-white"></div>
                  <p id="dropdownDefault" data-dropdown-toggle="dropdown"
                    class="text-white text-lg ml-2 hover:cursor-pointer rounded-lg text-sm flex items-center"
                    type="button">
                    EN<svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg></p>
                  <!-- Dropdown menu -->
                  <div id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow px-4 text-white"
                    data-popper-placement="bottom"
                    style="position: absolute;  inset: 0px auto auto 0px; margin: 0px; transform: translate(592px, 735px);">
                    <p class="text-center">TH</p>
                  </div>
                </nuxt-link>
                <nuxt-link to="/" class="flex items-center space-x-3 text-white text-lg font-medium my-4">
                  <p @click="isOpen = false" class="w-full">ออกจากระบบ</p>
                </nuxt-link>
                <nuxt-link to="/users/login" class="flex items-center space-x-3 text-white text-lg font-medium my-4 ">
                  <p class="text-white">เข้าสู่ระบบ</p>
                </nuxt-link>
                <nuxt-link to="/users/register"
                  class="flex items-center space-x-3 text-white text-lg font-medium my-4 ">
                  <p class="text-white">สมัครสมาชิก</p>
                </nuxt-link>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </nav>

  </div>
</template>

<script>
import baseIcon from '../base/base-icon.vue'
export default {
  components: { baseIcon },
  data() {
    return {
      menu_route: ["blogs", "blogs-details-id", "product", "ingredients", "review", "contact", "favorite"],
      isOpen: false,
    }
  },
  computed: {
    route_name() {
      return this.$route.name
    },
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
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