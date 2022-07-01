<template>
  <div>
    <Navbar />

    <!-- Banner -->
    <ProductBanner class="bg-red-100"/>

    <!-- All Products -->
    <AllProduct class="bg-red-200"/>

    <!-- Footer -->
    <Foot />
  </div>
</template>

<script>
import Foot from '../../components/layout/foot.vue';
import Navbar from '../../components/layout/navbar.vue';
import ProductBanner from '../../components/product/product-banner.vue';
import AllProduct from '../../components/product/allproduct.vue';
export default {
    components: { Navbar, Foot, ProductBanner, AllProduct }
}
</script>

<style>
</style>