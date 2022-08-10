<template>
  <div class="overflow-hidden relative">
    <!-- <img src="~/static/images/IMG_02products_detail/Group1053@2x.png" class="widget1053"> -->
    <ProductDetail class="mt-12 sm:mt-20" :params="$route.params.id" />
    <img src="~/static/images/IMG_02products_detail/Group1143@2x.png" class="widget1143">
    <ProductOther :params="$route.params.id" />
    <img src="~/static/images/IMG_02products_detail/Group1143@2x.png" class="widget21143">
    <ProductReview :params="$route.params.id" />
    <Subscribe class="hidden" />
  </div>
</template>

<script>
import ProductBanner from '../../../components/product/product-banner.vue';
import ProductDetail from '../../../components/product/product-detail.vue';
import ProductOther from '../../../components/product/product-other.vue';
import ProductReview from '../../../components/product/product-review.vue';
import Subscribe from '../../../components/layout/subscribe.vue';
export default {
  components: { ProductBanner, ProductDetail, ProductOther, ProductReview, Subscribe },
  mounted() {
    // console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
.widget1053 {
  height: 40rem;
  position: absolute;
  right: 0;
  transform: translate(25rem, -15rem);
}

.widget1143 {
  height: 7rem;
  position: absolute;
  left: 0;
  transform: translate(10rem, 1rem);
}

.widget21143 {
  height: 10rem;
  position: absolute;
  right: 0;
  transform: translate(-10rem, 1rem);
}
</style>