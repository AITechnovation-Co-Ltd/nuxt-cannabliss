<template>
  <div class="w-full">
    <!-- Content -->
    <div
      class="w-full flex mt-8 px-8 lg:px-12 xl:px-20 2xl:px-32 flex-col lg:flex-row justify-between items-center xl:items-start"
      v-for="(products_id, i) in products_img" :key="i">

      <!-- Picture -->
      <div class="w-full overflow-hidden lg:w-1/2">
        <div class="flex items-center relative">
          <div @click="arrow_left" class="absolute left-0 top-1/2">
            <base-icon icon='dropdown' viewBox="0 0 24 24" class="transform rotate-90" size="32" />
          </div>
          <img :src="require(`~/static/images/products${products_id.imgUrl[current]}`)">
          <div @click="arrow_right" class="absolute right-0 top-1/2">
            <base-icon icon='dropdown' viewBox="0 0 24 24" class="transform -rotate-90" size="32" />
          </div>
        </div>
        <div class="grid grid-cols-4 w-full overflow-x-auto">
          <img v-for="(item, i) in picture " :key="i" :src="require(`~/static/images/products${picture[i]}`)"
            @click="current = i" class="" :class="{ 'border-4 border-primary': i == current }">
        </div>
      </div>

      <div class="w-full lg:w-1/2 mt-8 lg:mt-0 ml-8" v-for="(products_id, i) in products_detail" :key="i">
        <p class="capitalize">{{ products_id.type }}</p>
        <div class="flex justify-between items-end">
          <h1 class="text-2xl xl:text-3xl font-light">{{ products_id.name }}</h1>
          <p>{{ products_id.quantity }}</p>
        </div>
        <!-- <h2 class="text-4xl font-semibold text-primary">Tinted Hybrid Block SPF50 Pa+++</h2> -->
        <div class="flex my-4">
          <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-tertiary mr-4" />
          <p>(55)</p>
        </div>
        <p class="my-2 font-medium text-xl">{{ products_id.detail }}</p>
        <div class="w-full flex-col text-2xl text-primary">

          <!-- FAQ 1 -->
          <base-dropdown class="my-2" dropdownClass="mt-2" @opened="checkDataOpen">
            <div slot="toggle" class="w-full flex items-center justify-between">
              <p class="text-lg xl:text-2xl font-medium text-primary my-2">How to use</p>
              <p>{{ !dropdown_data ? '+' : '-' }}</p>
            </div>
            <!-- Details -->
            <base-dropdown-item>
              <p class="w-11/12 text-sm xl:text-xl text-quaternary ">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Harum sequi
                provident optio magnam, commodi
                corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
                reprehenderit? Officia.</p>
            </base-dropdown-item>
          </base-dropdown>
          <hr class="my-3">
          <!-- FAQ 2-->
          <base-dropdown class="my-2" dropdownClass="mt-2" @opened="checkDataOpen2">
            <div slot="toggle" class="w-full flex items-center justify-between">
              <p align="start" class="text-lg xl:text-2xl font-medium text-primary my-2">Ingredients</p>
              <p>{{ !dropdown_data2 ? '+' : '-' }}</p>
            </div>
            <!-- Details -->
            <base-dropdown-item>
              <p class="w-11/12 text-sm xl:text-xl text-quaternary ">Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Harum sequi
                provident optio magnam, commodi
                corporis, delectus ut praesentium ipsam quia soluta iusto obcaecati est voluptatum eaque ad vitae
                reprehenderit? Officia.</p>
            </base-dropdown-item>
          </base-dropdown>
          <div class="w-full mt-10 flex items-center text-quaternary">
            <div class="h-3 w-3 bg-primary rounded-full mr-2"></div>
            <p class="text-xl">Available</p>
          </div>
          <div class="w-full flex mt-6">
            <a :href="products_id.link"><button
                class="px-8 h-14 text-quaternary border border-quaternary rounded-full mr-4">Go to shopping</button></a>
            <div @click="fav = !fav"
              class="h-14 w-14 flex items-center justify-center border border-primary rounded-full"
              :class="{ 'bg-primary': fav }">
              <base-icon icon="heart" viewBox="0 0 30 41" size="35" class="text-primary"
                :class="{ 'text-white': fav }" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- More detail -->
    <div class="w-full mt-16 sm:mt-28 relative">
      <img class="bg w-full z-10" src="~/static/images/IMG_03ingredients/Group1149@2x.png" alt="">
      <div class="content w-full flex pb-4 lg:pb-0 z-20">
        <div class="w-full text-quaternary flex flex-col md:flex-row justify-evenly items-center z-20">
          <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group622@2x.png" class="h-24 xl:h-32 2xl:h-40" alt="">
            <h1 class="text-xl font-bold">Canabinoid (Cbd)</h1>
            <p class="mt-2 text-center">Anti inflammatory to make skin stronger</p>
          </div>
          <div class="w-0.5 h-60 xl:h-72 2xl:h-80 bg-primary hidden md:block"></div>
          <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
            <img src="~/static/images/IMG_03ingredients/Group623@2x.png" class="h-24 xl:h-32 2xl:h-40" alt="">
            <h1 class="text-xl text-center font-bold">Leucojum Aestivum Bulb Extract (Ibr - Snowflake®)</h1>
            <p class="mt-2 text-center">Anti Aging To Make Skin Younger And Brighter</p>
          </div>
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
import products from "@/static/json/products.json"
export default {
  data() {
    return {
      fav: false,
      current: 0,
      products,
      products_img: new Array(),
      products_detail: new Array(),
      products_name: new Array(),
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
      let products_test = await this.products.filter((e) => e.no == this.params)
      this.products_img = products_test
      this.products_name = products_test
      this.products_detail = products_test
      this.picture = this.products_img[0].imgUrl
      console.log(products_test)
    },
    checkDataOpen(toggle) {
      // console.log(toggle)
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
    arrow_left() {
      if (this.current <= 0) { this.current = this.current = 0 }
      else if (this.current != 0) { this.current-- }
    },
  },
  async mounted() {
    await this.fetch()
    this.$store.dispatch('me/setBreadcrumb', this.products_name[0].name)
    // console.log(this.products_name[0].name)
  }
}
</script>

<style scoped>
.vl {
  height: 15px;
  width: 1px;
}


hr {
  width: 100%;
  border-bottom: solid .5px #78A695;
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
  }
}
</style>