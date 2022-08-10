<template>
  <div class="relative overflow-x-hidden">
    <img src="~/static/images/IMG_03ingredients/CANABLISS_01@2x.png" class="widget01">
    <AllProduct />
  </div>
</template>

<script>
import ProductBanner from '../../components/product/product-banner.vue';
import AllProduct from '../../components/product/allproduct.vue';
export default {
  components: { ProductBanner, AllProduct }
}
</script>

<style scoped>
.widget01 {
  height: 50rem;
  position: absolute;
  top: 25%;
  right: -4rem;
}

@media (max-width:1441px) {
  .widget01 {
    height: 32rem;
    position: absolute;
    top: 25%;
    right: -2.4rem;
  }
}
</style>