<template>
  <div>
    <ProductBanner />
    <ProductDetail class="mt-20" :params="$route.params.id" />
    <ProductReview :params="$route.params.id"/>
    <ProductOther />
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
    console.log(this.$route.params.id)
  }
}
</script>

<style>
</style>