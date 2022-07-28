<template>
  <div class="sticky top-0 z-50">
    <nav class="w-screen bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container h-16 flex flex-wrap justify-between items-center mx-auto px-6">

        <!-- Logo -->
        <nuxt-link to="/" class="flex items-center">
          <img class="h-16" src="~/static/logo/Logo-CANABLISS.png" alt="">
        </nuxt-link>

        <div class="xl:hidden">
          <button @click="drawer">
            <base-icon icon="bars" viewBox="0 0 20 20" :size="35" class="text-primary" />
          </button>
        </div>

        <div class="hidden xl:flex md:order-2">
          <div class="flex items-center">
            <div class="notification">
              <nuxt-link to="/favorite">
                <base-icon icon="heart" viewBox="0 0 30 41" size="40" class="text-primary mx-2" />
                <span class="badge bg-primary">0</span>
              </nuxt-link>
            </div>

            <base-icon icon="magnifying-glass" viewBox="0 0 30 41" size="40" class="text-primary mx-2" />
            <div class="vl mx-4 bg-primary"></div>

            <div
              class="w-28 relative flex justify-evenly bg-secondary text-lg rounded-full cursor-pointer drop-shadow-md hidden"
              @click="chlang">
              <div class="w-1/2 absolute z-10 h-full bg-tertiary rounded-full" :class="isthai ? 'right-0' : 'left-0'">
              </div>
              <p class="px-4 py-1 z-20" :class="isthai ? 'text-primary' : 'text-white'">EN</p>
              <p class="px-4 py-1 z-20" :class="isthai ? 'text-white' : 'text-primary'">TH</p>
            </div>

            <div class="h-16 ml-2 flex items-center w-10 text-center">
              <base-dropdown-navbar :dropdownMaxWidthAuto="true" positionH="right"
                dropdownClass="mt-16 border border-gray-100 w-72" @opened="checkUserOpen">
                <div slot="toggle" class="flex justify-center">
                  <base-icon icon="user" viewBox="0 0 48 48" size="35" class="text-primary" />
                </div>
                <base-dropdown-item v-show="check_logined" class="p-3">
                  <div class="flex items-center space-x-3">
                    <div class="bg-primary rounded-full h-12 w-12 flex items-center justify-center">
                      <base-icon icon="user" viewBox="0 0 45 45" size="24" color="#fff" />
                    </div>
                    <div class="colums-1 items-center">
                      <p>{{ me.prefix + ' ' + me.first_name + ' ' + me.last_name }}</p>
                      <p>{{ me.email }}</p>
                    </div>
                  </div>
                </base-dropdown-item>
                <base-dropdown-item v-show="check_logined" class="p-3">
                  <div class="flex items-center space-x-3" @click="logoutClick()">
                    <div class="bg-primary rounded-full h-12 w-12 flex items-center justify-center">
                      <base-icon icon="logout" viewBox="0 0 45 45" size="24" color="#fff" />
                    </div>
                    <p class="text-primary text-base">Logout</p>
                  </div>
                </base-dropdown-item>
                <base-dropdown-item v-show="!check_logined" class="p-3">
                  <nuxt-link to="/login" class="flex items-center space-x-3">
                    <div class="bg-primary rounded-full h-12 w-12 flex items-center justify-center">
                      <base-icon icon="login" viewBox="0 0 45 45" size="24" color="#fff" />
                    </div>
                    <p class="text-primary text-base">Login</p>
                  </nuxt-link>
                </base-dropdown-item>
                <base-dropdown-item v-show="!check_logined" class="p-3">
                  <nuxt-link to="/register" class="flex items-center space-x-3">
                    <div class="bg-primary rounded-full h-12 w-12 flex items-center justify-center">
                      <base-icon icon="register" viewBox="0 0 45 45" size="24" color="#fff" />
                    </div>
                    <p class="text-primary text-base">Register</p>
                  </nuxt-link>
                </base-dropdown-item>
              </base-dropdown-navbar>
            </div>

          </div>
        </div>

        <div class="hidden justify-between items-center w-full xl:flex lg:w-auto lg:order-1" id="mobile-menu-4">
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
            <li>
              <nuxt-link to="/favorite" class="ml-2 w-full text-white text-lg font-medium my-4 inline-block">
                <p @click="isOpen = false" class="w-full">Favorites</p>
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
              <div class="py-3">
                <div to="/favorite"
                  class="flex items-center justify-center space-x-3 text-white text-lg font-medium my-4 hidden">
                  <div class="notification">
                    <nuxt-link to="/favorite">
                      <p @click="isOpen = false" class="w-full">Favorite</p>
                      <!-- <base-icon icon="heart" viewBox="0 0 30 41" size="40" class="text-white mx-2" /> -->
                    </nuxt-link>
                  </div>

                  <div class="vl mx-4 bg-white hidden"></div>
                  <div
                    class="w-28 relative flex justify-evenly bg-secondary text-lg rounded-full cursor-pointer drop-shadow-md hidden"
                    @click="chlang">
                    <div class="w-1/2 absolute z-10 h-full bg-tertiary rounded-full"
                      :class="isthai ? 'right-0' : 'left-0'"></div>
                    <p class="px-4 py-1 z-20" :class="isthai ? 'text-primary' : 'text-white'">EN</p>
                    <p class="px-4 py-1 z-20" :class="isthai ? 'text-white' : 'text-primary'">TH</p>
                  </div>
                </div>
                <div v-show="check_logined" class="flex items-center">
                  <div class="colums-1 items-center text-white">
                    <p>{{ me.prefix + ' ' + me.first_name + ' ' + me.last_name }}</p>
                    <p>{{ me.email }}</p>
                  </div>
                </div>
                <div v-show="check_logined" class="flex items-center space-x-3 text-white text-lg font-medium my-4"
                  @click="logoutClick()">
                  <div class="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                    <base-icon icon="logout" viewBox="0 0 45 45" size="24" class="text-primary" />
                  </div>
                  <p @click="isOpen = false">Logout</p>
                </div>
                <nuxt-link v-show="!check_logined" to="/login"
                  class="flex items-center space-x-3 text-white text-lg font-medium my-4 ">
                  <div class="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                    <base-icon icon="login" viewBox="0 0 45 45" size="24" class="text-primary" />
                  </div>
                  <p @click="isOpen = false" class="text-white">Login</p>
                </nuxt-link>
                <nuxt-link v-show="!check_logined" to="/register"
                  class="flex items-center space-x-3 text-white text-lg font-medium my-4 ">
                  <div class="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                    <base-icon icon="register" viewBox="0 0 45 45" size="24" class="text-primary" />
                  </div>
                  <p @click="isOpen = false" class="text-white">Register</p>
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
      me: {},
      menu_route: ["blogs", "blogs-details-id", "product", "ingredients", "review", "contact", "favorite"],
      isOpen: false,
      dropdowm_data: false,
      dropdowm_user: false,
      isthai: false,
    }
  },
  computed: {
    route_name() {
      return this.$route.name
    },
    check_logined() {
      let check = this.$store.getters['me/getToken']
      return check ? true : false
    },
  },
  created() {
    if (this.check_logined) this.me = this.$store.getters['me/getUser']
    // console.log(this.me)
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    checkDataOpen(p) {
      this.dropdowm_data = p
    },
    checkUserOpen(p) {
      this.dropdowm_user = p
    },
    chlang() {
      this.isthai = !this.isthai;
    },
    async logoutClick() {
      const self = this
      await self.$store.dispatch('loading/setLoading', true)

      const res = await self.$store.dispatch('me/logout')
      if (res instanceof Error) {
        self.$toast.open({
          message: res.response.data.message,
          type: 'error',
          duration: 5000,
        })
      } else {
        await setTimeout(async () => {
          await self.$router.push('/')
        }, 500)
      }

      await self.$store.dispatch('loading/setLoading', false)
      window.location.reload()
    }
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