<template>
  <button
    class="h-10 text-quaternary text-sm font-light hover:text-white hover:bg-tertiary px-3 sm:px-8 flex justify-between items-center border hover:border-tertiary border-quaternary rounded-full"
    :type="type" style="transition: all 0.15s ease 0s" @click="$emit('click', $event)" :disabled="disabled">
    <slot />
    <base-icon v-show="arrow" class="ml-3" icon="arrow-right-long" viewBox="0 0 512 512" width="20" height="20"
       />
      <!-- :color="color_arrow" -->
  </button>
</template>

<script>
import baseIcon from './base-icon.vue'
export default {
  components: { baseIcon },
  inheritAttrs: true,
  props: {
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'primary',
    },
    color_arrow: {
      type: String,
      default: 'gray',
    },
    arrow: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false
    },

  },
  data() {
    return {}
  },
  // computed: {
  //   style() {
  //     if (this.color == 'transparent') {
  //       return 'bg-transparent text-primary border-transparent'
  //     } else if (this.color == 'primary') {
  //       return 'bg-primary text-white border-primary hover:bg-opacity-70'
  //     } else if (this.color == 'red') {
  //       return 'bg-rusty-red text-white border-rusty-red'
  //     } else if (this.color == 'border-primary') {
  //       return 'bg-white text-primary border-primary'
  //     } else if (this.color == 'gray') {
  //       return 'bg-pink-very-light text-slate border-pink-very-light'
  //     } else if (this.color == 'dark') {
  //       return 'bg-gray-900 text-white border-gray-900'
  //     } else if (this.color == 'border-red') {
  //       return 'bg-transparent text-rusty-red border-rusty-red'
  //     } else return
  //   },
  // },
}
</script>
