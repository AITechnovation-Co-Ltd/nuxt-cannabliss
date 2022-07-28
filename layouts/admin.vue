<template>
  <div class="w-screen bg-secondary scroll-smooth">
    <NavbarAdmin />
    <div class="w-full">
      <div class="w-full bg flex justify-center items-center">
        <nuxt class="w-full h-full"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from '../components/layout/navbar-admin.vue'
export default {
  components: { NavbarAdmin},

}
</script>

<style scoped>
.bg{
    min-height: calc(100vh - 84px);
}
</style>