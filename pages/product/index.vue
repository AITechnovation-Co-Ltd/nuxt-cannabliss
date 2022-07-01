<template>
  <div>
    <!-- Banner -->
    <ProductBanner />

    <!-- All Products -->
    <AllProduct class="my-32"/>
  </div>
</template>

<script>
import ProductBanner from '../../components/product/product-banner.vue';
import AllProduct from '../../components/product/allproduct.vue';
export default {
    components: { ProductBanner, AllProduct }
}
</script>

<style>
</style>