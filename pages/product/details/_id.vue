<template>
  <div>
    <ProductBanner />
    <ProductDetail class="mt-20"/>
    <ProductOther />
    <ProductReview class="bg-red-400"/>
    <Subscribe />
  </div>
</template>

<script>
import ProductBanner from '../../../components/product/product-banner.vue';
import ProductDetail from '../../../components/product/product-detail.vue';
import ProductOther from '../../../components/product/product-other.vue';
import ProductReview from '../../../components/product/product-review.vue';
import Subscribe from '../../../components/layout/subscribe.vue';
export default {
    components: { ProductBanner, ProductDetail, ProductOther, ProductReview, Subscribe }
}
</script>

<style>

</style>