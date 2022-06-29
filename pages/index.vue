<template>
   <div class="bg-secondary">
    <navbar class="sticky top-0"/>

    <!-- Carousel -->
    <div class="maincrs w-screen bg-red-100 flex justify-center items-center">
      <h1 class="text-5xl">Carousel</h1>
    </div>

    <!-- Products -->
    <div class="maincrs w-screen bg-red-200 flex justify-center items-center">
      <h1 class="text-5xl">Products</h1>
    </div>
    
    <!-- Ingredients -->
    <div class="maincrs w-screen bg-red-300 flex justify-center items-center">
      <h1 class="text-5xl">Ingredients</h1>
    </div>
    <!-- Face -->
    <div class="maincrs w-screen bg-red-400 flex justify-center items-center">
      <h1 class="text-5xl">Face</h1>
    </div>
    <!-- Video Review -->
    <div class="maincrs w-screen bg-red-500 flex justify-center items-center">
      <h1 class="text-5xl">Video Review</h1>
    </div>
    <!-- Blogs -->
    <div class="maincrs w-screen bg-red-600 flex justify-center items-center">
      <h1 class="text-5xl">Blogs</h1>
    </div>
    <!-- Review -->
    <div class="maincrs w-screen bg-red-700 flex justify-center items-center">
      <h1 class="text-5xl">Review</h1>
    </div>
    <!-- FAQ -->
    <div class="maincrs w-screen bg-red-800 flex justify-center items-center">
      <h1 class="text-5xl">FAQ</h1>
    </div>
    <subscribe />
    <!-- Partner -->
    <div class="maincrs w-screen bg-red-900 flex justify-center items-center">
      <h1 class="text-5xl">Partner</h1>
    </div>

    <foot />
  </div>
</template>

<script>
import foot from '~~/components/layout/foot.vue'
import navbar from '~~/components/layout/navbar.vue'
import Subscribe from '~~/components/layout/subscribe.vue'
export default {
  components: { navbar, foot, Subscribe },

}
</script>

<style scoped>
.maincrs {
  min-height: calc(100vh - 84px);
}
</style>