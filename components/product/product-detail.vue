<template>
  <div class="w-full relative overflow-hidden">
    <img src="~/static/images/IMG_02products_detail/Group1141@2x.png" class="widget1141">
    <div v-if="no_product" class="w-full columns-1 mt-8 px-4 lg:px-12 xl:px-28 3xl:px-32">
      <div class="w-full py-12 mt-12 bg-white text-center text-4xl text-primary">No Product<br>
        <span class="text-red-500 text-xl">{{ productname }}</span>
      </div>
    </div>
    <div v-else class="w-full">
      <div
        class="w-full flex mt-8 px-4 lg:px-12 xl:px-28 3xl:px-32 flex-col lg:flex-row justify-between items-center xl:items-start">
        <!-- Picture -->
        <div class="w-full overflow-hidden lg:w-1/2 z-20">
          <div class="flex items-center relative">
            <div @click="arrow_left" class="absolute left-0 top-1/2">
              <base-icon icon='dropdown' viewBox="0 0 24 24" class="transform rotate-90" size="32" />
            </div>
            <img v-if="picture[current] && picture[current] !=''" class="maincentered"
              :src="require(`~/static/images/products${picture[current]}`)" />
            <div v-else class="h-96 w-full"></div>
            <div @click="arrow_right" class="absolute right-0 top-1/2">
              <base-icon icon='dropdown' viewBox="0 0 24 24" class="transform -rotate-90" size="32" />
            </div>
          </div>
          <div class="mt-4 grid grid-cols-4 gapx-4 w-full relative overflow-x-auto">
            <div v-for="(item, i) in picture " :key="i" class="relative w-full h-auto" @click="current = i">
              <div class="backgroundp mx-auto w-full h-auto rounded-xl sm:rounded-3xl"
                :class="{ 'border-4 border-primary': i == current }"></div>
              <img v-if="picture[1] != ''" :src="require(`~/static/images/products${picture[i]}`)" class="centered w-full">
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <p class="text-sm font-extralight capitalize">{{ products_detail.type }}</p>
          <div class="flex flex-col lg:flex-row justify-between items-start">
            <div class="columns-1">
              <p class="text-2xl xl:text-3xl font-light">{{ products_detail.genre }}</p>
              <p class="text-2xl text-primary xl:text-3xl font-light">{{ products_detail.name }}</p>
            </div>
            <p class="text-sm font-extralight mt-2">{{ products_detail.quantity }}</p>
          </div>
          <div class="flex my-4 items-center">
            <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-tertiary mr-4" />
            <p class="text-quaternary text-sm">(55)</p>
          </div>
          <div v-if="products_detail.subtitle == ''" class="w-full h-6"></div>
          <p v-else class="my-2 font-light text-quaternary text-md">{{ products_detail.subtitle_th }}</p>
          <p v-html="products_detail.detail_th" class="my-2 font-extralight text-quaternary text-sm"></p>
          <div class="w-full flex-col text-2xl text-primary">
            <!-- FAQ 1 -->
            <base-dropdown class="my-2 z-10" dropdownClass="mt-2" @opened="checkDataOpen">
              <div slot="toggle" class="w-full flex items-center justify-between">
                <p class="text-lg font-normal text-primary my-2">How to use</p>
                <p>{{ !dropdown_data ? '+' : '-' }}</p>
              </div>
              <!-- Details -->
              <base-dropdown-item>
                <p class="w-11/12 text-sm text-quaternary ">{{ products_detail.how2use }}</p>
              </base-dropdown-item>
            </base-dropdown>
            <div class="hrr bg-primary"></div>
            <!-- FAQ 2-->
            <base-dropdown class="my-2" dropdownClass="mt-2" @opened="checkDataOpen2">
              <div slot="toggle" class="w-full flex items-center justify-between">
                <p align="start" class="text-lg font-normal text-primary my-2">Ingredients</p>
                <p>{{ !dropdown_data2 ? '+' : '-' }}</p>
              </div>
              <!-- Details -->
              <base-dropdown-item>
                <p class="w-11/12 text-sm text-quaternary ">{{ products_detail.ingredients }}</p>
              </base-dropdown-item>
            </base-dropdown>
            <div class="w-full mt-10 flex items-center text-quaternary">
              <div class="h-2 w-2 bg-primary rounded-full mr-2"></div>
              <p class="text-lg">Available</p>
            </div>
            <div class="w-full flex mt-6">
              <a class="flex items-center justify-center" :href="products_detail.link"><button
                  class="px-4 h-10 text-lg  text-quaternary border border-quaternary rounded-full mr-4">Go
                  to
                  shopping</button></a>
              <div @click="liked()"
                class="h-10 w-10 flex items-center justify-center border border-primary rounded-full cursor-pointer"
                :class="{ 'bg-primary': products_detail.islike }">
                <base-icon icon="heart" viewBox="0 0 30 41" size="25" class="text-primary"
                  :color="products_detail.islike ? '#ffffff' : '#78A695'" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- More detail -->
      <div class="w-full mt-16 sm:mt-28 relative px-0 lg:px-4">
        <img class="bg absolute bottom-0 lg:relative w-full z-10"
          src="~/static/images/IMG_03ingredients/Group1149@2x.png" alt="">
        <div class="content w-full flex pb-4 lg:pb-0 z-20">
          <div
            class="w-full flex flex-col md:flex-row justify-evenly items-center z-20 px-4 lg:px-12 xl:px-28 3xl:px-32">
            <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
              <img src="~/static/images/IMG_03ingredients/Group622@2x.png" class="h-24 xl:h-32 2xl:h-40" alt="">
              <h1 class="text-lg 3xl:text-2xl font-normal">Canabinoid (Cbd)</h1>
              <p class="mt-2 text-center text-sm 3xl:text-lg font-extralight">Anti inflammatory to make skin stronger
              </p>
            </div>
            <div class="vl h-60 bg-primary hidden md:block"></div>
            <div class="w-full mt-4 sm:mt-0 md:w-2/5 flex flex-col items-center justify-center">
              <img src="~/static/images/IMG_03ingredients/Group623@2x.png" class="h-24 xl:h-32 2xl:h-40" alt="">
              <h1 class="text-lg sm:text-xl text-center font-normal">Leucojum Aestivum Bulb Extract <br
                  class="block sm:hidden"> (Ibr - Snowflake®)</h1>
              <p class="mt-2 text-center text-sm 3xl:text-lg font-extralight">Anti Aging To Make Skin Younger And
                Brighter</p>
            </div>
          </div>
        </div>
      </div>
      <!-- -->
    </div>
  </div>
</template>

<script>
import products from "@/static/json/products.json"
export default {
  data() {
    return {
      no_product: false,
      current: 0,
      products,
      productname: '',
      products_name: '',
      products_detail: [],
      picture: [],
      dropdown_data: false,
      dropdown_data2: false,
    }
  },
  props: {
    params: {
      type: String,
      required: false,
    }
  },
  methods: {
    async fetch() {
      const self = this
      await self.getProducts()
      if (self.productname !== '') {
        let products_test = await self.products.filter((e) => e.name == self.productname)
        if (products_test.length == 0) {
          self.no_product = true
        }
        else {
          self.picture = products_test[0].imgUrl
          self.products_name = products_test[0].name
          self.products_detail = products_test[0]
        }
      }
      else {
        let products_test = await self.products.filter((e) => e.no == self.params)
        if (products_test.length == 0) {
          let products_test = await self.products.filter((e) => e.name == self.params)
          if (products_test.length == 0) {
            self.no_product = true
          }
          else {
            self.picture = products_test[0].imgUrl
            self.products_name = products_test[0].name
            self.products_detail = products_test[0]
          }
        }
        else {
          self.picture = products_test[0].imgUrl
          self.products_name = products_test[0].name
          self.products_detail = products_test[0]
        }
      }
    },
    checkDataOpen(toggle) {
      this.dropdown_data = toggle
    },
    checkDataOpen2(toggle) {
      this.dropdown_data2 = toggle
    },
    arrow_right() {
      if (this.current >= this.picture.length - 1) {
        this.current = this.picture.length - 1
      }
      else if (this.current != this.picture.length) {
        this.current++
      }
    },
    async getProducts() {
      const self = this
      try {
        let products = await self.$store.getters['me/getProducts']
        if (products != []) {
          self.products = products
        }
      } catch (err) {
        console.log('error', err);
      }
    },
    arrow_left() {
      if (this.current <= 0) { this.current = this.current = 0 }
      else if (this.current != 0) { this.current-- }
    },
    async liked() {
      this.products_detail.islike = !this.products_detail.islike
      this.$store.dispatch('me/setProducts', this.products)
    },
    setBreadcrumb() {
      if (this.productname !== '' && this.no_product != true) {
        this.$store.dispatch('me/setBreadcrumb', this.productname)
      }
      else if (this.products_name != '') {
        this.$store.dispatch('me/setBreadcrumb', this.products_name)
      }
      else {
        this.$store.dispatch('me/setBreadcrumb', 'No Product')
      }
    }
  },
  async mounted() {
    this.productname = await this.$store.getters['me/getProductName']
    await this.fetch()
    await this.setBreadcrumb()
    this.$store.dispatch('me/setProductName', '')
  }
}
</script>

<style scoped>
.widget1141 {
  height: 20rem;
  position: absolute;
  left: 0;
  transform: translate(5rem, 15rem);
}

.vl {
  width: 1px;
}

/* .centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */

.maincentered {
  height: 30vw;
  width: auto;
  margin: auto;
}

.centered {
  height: 5vw;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* @media (max-width:1419px) {
    img.centered {
    height: 18vw;
}
} */
@media (max-width:1441px) {
  .widget1141 {
    height: 15rem;
    position: absolute;
    left: 0;
    transform: translate(5rem, 10rem);
  }
}

@media (max-width:1023px) {
  .maincentered {
    height: 40vw;
  }

  .centered {
    height: 12vw;
  }
}

@media (max-width:640px) {
  .maincentered {
    height: 50vw;
  }
}

.backgroundp {
  background: #f2f5e2;
  height: 9vw;
  width: 9vw;
}

@media (max-width:1023px) {
  .backgroundp {
    height: 20vw;
    width: 20vw;
  }
}

@media (min-width:1024px) {
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (max-width:1024px) {
  .bg {
    position: absolute;
    bottom: 0;
    object-fit: cover;
    width: auto;
    height: 360px;
  }
}
</style>