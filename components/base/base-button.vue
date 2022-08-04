<template>
  <button class="h-10 text-sm font-light px-3 sm:px-8 flex justify-between items-center border rounded-full"
    v-on:mouseover="icon_first = icon_over" v-on:mouseout="icon_first = icon_out" :type="type"
    style="transition: all 0.15s ease 0s" :class="style" @click="$emit('click', $event)" :disabled="disabled">
    <slot />
    <base-icon v-show="show_icon" :color="icon_first ? icon_first : color_icon" class="ml-3" :class="class_icon"
      :icon="icon" viewBox="0 0 512 512" width="20" height="20" />
  </button>
</template>

<script>
import baseIcon from './base-icon.vue'
export default {
  components: { baseIcon },
  inheritAttrs: true,
  data() {
    return {
      icon_over: '',
      icon_out: '',
      icon_first: '',
    }
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    icon: {
      type: String,
      default: 'arrow-right-long',
    },
    show_icon: {
      type: Boolean,
      default: true,
    },
    class_icon: {
      type: String,
      default: '',
    },
    color_icon: {
      type: String,
      default: '',
    },
    color_icon_hover: {
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
        this.icon_first = this.color_icon
        this.icon_over = this.color_icon_hover
        this.icon_out = this.color_icon
      }
    },
  },
  computed: {
    style() {
      if (this.color == 'default') {
        this.icon_first = '#5E5F5F'
        this.icon_over = '#ffffff'
        this.icon_out = '#5E5F5F'
        return 'text-quaternary hover:text-white hover:bg-tertiary hover:border-tertiary border-quaternary'
      } else if (this.color == 'white') {
        this.icon_first = '#ffffff'
        this.icon_over = '#5E5F5F'
        this.icon_out = '#ffffff'
        return 'text-white hover:text-quaternary hover:border-quaternary border-white'
      } else if (this.color == 'custom') {
        return ''
      } else return
    },
  },
}
</script>
