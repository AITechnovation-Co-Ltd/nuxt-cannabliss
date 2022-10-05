<template>
  <base-modal v-model="isShow">
    <div class="px-2 py-12 bg-secondary rounded-3xl flex flex-col items-center relative overflow-hidden z-30">
      <img src="~/static/images/IMG_03blogs_details/Group803@2x.png" class="widget803 z-10">
      <img src="~/static/images/IMG_04review_popup/Group1161@2x.png" class="widget1161 z-10">
      <!-- Title -->
      <div class="w-full text-4xl xl:text-6xl font-extralight text-primary text-center mb-4">
        Write a review
      </div>
      <!-- Star -->
      <div class="w-full flex mt-3 items-center justify-center z-20">
        <svg @click="test(1)" class="w-12 h-12 text-gray-300 cursor-pointer" :class="{ 'text-blue-400': s1 }" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <svg @click="test(2)" class="w-12 h-12 text-gray-300 cursor-pointer" :class="{ 'text-blue-400': s2 }" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <svg @click="test(3)" class="w-12 h-12 text-gray-300 cursor-pointer" :class="{ 'text-blue-400': s3 }" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <svg @click="test(4)" class="w-12 h-12 text-gray-300 cursor-pointer" :class="{ 'text-blue-400': s4 }" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <svg @click="test(5)" class="w-12 h-12 text-gray-300 cursor-pointer" :class="{ 'text-blue-400': s5 }" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
      </div>

      <!-- Form Review -->
      <div class="w-full xl:w-2/3 mt-4 px-8 sm:px-24 flex flex-col text-gray-300 z-20">
        <select v-if="product_name" disabled
          class="block py-2.5 pl-0 pr-8 w-full text-sm text-primary font-light bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <option selected>{{ product_name }}</option>
        </select>
        <select v-else v-model="product_no" :class="{ 'text-primary': product_no != '' }"
          class="block py-2.5 pl-0 pr-8 w-full text-sm font-light bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <option value="" disabled selected hidden>Please select products</option>
          <option v-for="(item, i) in products" :key="`product-${i}`" :value="item.no">{{ item.name }}</option>
        </select>
        <base-input-review label='Name Lastname' class="text-quaternary my-2" />
        <base-input-review label='E-mail' class="text-quaternary my-2" />
        <base-input-review label='Please write your comment' class="text-quaternary my-2" />
      </div>
      <div class="mt-10 flex justify-center space-x-4 ">
        <base-button @click="isShow = false" class="border-quaternary z-20">Write a review</base-button>
      </div>
    </div>
  </base-modal>
</template>

<script>
import products from "@/static/json/products.json"
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "confirm",
    },
    center: {
      type: Boolean,
      default: false,
    },
    product_name: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      products,
      product_no: '',
      s1: false,
      s2: false,
      s3: false,
      s4: false,
      s5: false,
      isShow: false,
      callback: undefined,
    };
  },
  mounted() {
    // console.log(this.product_name)
  },
  methods: {
    show(title, callback) {
      this.title = title;
      this.callback = callback;
      this.isShow = true;
    },
    onClick() {
      this.isShow = false;
      this.callback();
    },
    // Junk Code
    test(p) {
      if (p == 1) {
        if (this.s1 & !this.s2) {
          this.s1 = false
          this.s2 = false
          this.s3 = false
          this.s4 = false
          this.s5 = false
          return undefined
        }
        this.s1 = true
        this.s2 = false
        this.s3 = false
        this.s4 = false
        this.s5 = false
      }
      else if (p == 2) {
        this.s1 = true
        this.s2 = true
        this.s3 = false
        this.s4 = false
        this.s5 = false
      }
      else if (p == 3) {
        this.s1 = true
        this.s2 = true
        this.s3 = true
        this.s4 = false
        this.s5 = false
      }
      else if (p == 4) {
        this.s1 = true
        this.s2 = true
        this.s3 = true
        this.s4 = true
        this.s5 = false
      }
      else if (p == 5) {
        this.s1 = true
        this.s2 = true
        this.s3 = true
        this.s4 = true
        this.s5 = true
      }
    }
  },
};
</script>
<style scoped>
.widget803 {
  height: 50rem;
  position: absolute;
  right: -10rem;
  top: -2rem;
}

.widget1161 {
  height: 15rem;
  position: absolute;
  left: 5rem;
  top: 3rem;
}
</style>
