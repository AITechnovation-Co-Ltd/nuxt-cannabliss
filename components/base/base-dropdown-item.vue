<template>
  <div
    class="text-sm bg-transparent cursor-pointer"
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
