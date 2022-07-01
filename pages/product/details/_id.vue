<template>
  <div>
    <Navbar />
    <ProductBanner class="bg-red-100"/>
    <ProductDetail class="bg-red-200"/>
    <ProductOther class="bg-red-300"/>
    <ProductReview class="bg-red-400"/>
    <Subscribe />
    <Foot />
  </div>
</template>

<script>
import ProductBanner from '../../../components/product/product-banner.vue';
import Navbar from '../../../components/layout/navbar.vue';
import ProductDetail from '../../../components/product/product-detail.vue';
import ProductOther from '../../../components/product/product-other.vue';
import ProductReview from '../../../components/product/product-review.vue';
import Subscribe from '../../../components/layout/subscribe.vue';
import Foot from '../../../components/layout/foot.vue';
export default {
    components: { ProductBanner, Navbar, ProductDetail, ProductOther, ProductReview, Subscribe, Foot }
}
</script>

<style>

</style>