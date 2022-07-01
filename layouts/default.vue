<template>
  <div class="w-screen bg-secondary">
    <Navbar />
    <div class="w-full flex">
      <div class="w-full">
        <nuxt />
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import Navbar from '../components/layout/navbar.vue'
import Foot from '../components/layout/foot.vue'
export default {
  components: { Navbar, Foot },

}
</script>

<style scoped>
</style>