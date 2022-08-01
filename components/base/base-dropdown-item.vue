<template>
  <div
    class="px-4 py-2 text-sm bg-transparent hover:bg-primary hover:bg-opacity-20 cursor-pointer"
    @click="clickEvent"
  >
    <slot />
  </div>
</template>

<script>
export default {
  inject: ['parent'],
  props: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    clickEvent(e) {
      this.parent.hide()
      this.$emit('click', e)
    },
  },
}
</script>
