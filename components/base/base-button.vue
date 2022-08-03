<template>
  <button class="h-10 text-sm font-light px-3 sm:px-8 flex justify-between items-center border rounded-full"
    v-on:mouseover="arrow_first = arrow_over" v-on:mouseout="arrow_first = arrow_out" :type="type"
    style="transition: all 0.15s ease 0s" :class="style" @click="$emit('click', $event)" :disabled="disabled">
    <slot />
    <base-icon v-show="arrow" :color="arrow_first ? arrow_first : color_arrow" class="ml-3" icon="arrow-right-long"
      viewBox="0 0 512 512" width="20" height="20" />
  </button>
</template>

<script>
import baseIcon from './base-icon.vue'
export default {
  components: { baseIcon },
  inheritAttrs: true,
  data() {
    return {
      arrow_over: '',
      arrow_out: '',
      arrow_first: '',
    }
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    arrow: {
      type: Boolean,
      default: true,
    },
    color_arrow: {
      type: String,
      default: '',
    },
    color_arrow_hover: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'white',
          'custom',
        ].includes(value)
      },
    },
  },
  mounted() {
    this.arrow_style()
  },
  methods: {
    arrow_style() {
      if (this.color == 'custom') {
        this.arrow_first = this.color_arrow
        this.arrow_over = this.color_arrow_hover
        this.arrow_out = this.color_arrow
      }
    },
  },
  computed: {
    style() {
      if (this.color == 'default') {
        this.arrow_first = '#5E5F5F'
        this.arrow_over = '#ffffff'
        this.arrow_out = '#5E5F5F'
        return 'text-quaternary hover:text-white hover:bg-tertiary hover:border-tertiary border-quaternary'
      } else if (this.color == 'white') {
        this.arrow_first = '#ffffff'
        this.arrow_over = '#5E5F5F'
        this.arrow_out = '#ffffff'
        return 'text-white hover:text-quaternary hover:border-quaternary border-white'
      } else if (this.color == 'custom') {
        return ''
      } else return
    },
  },
}
</script>
