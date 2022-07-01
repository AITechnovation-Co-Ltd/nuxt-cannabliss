<template>
  <div>
    <Navbar />
    <FavoriteBanner />
    <FavoriteContent />
    <Foot />
  </div>
</template>

<script>
import Navbar from '../../components/layout/navbar.vue';
import FavoriteBanner from '../../components/favorite/favorite-banner.vue';
import FavoriteContent from '../../components/favorite/favorite-content.vue';
import Foot from '../../components/layout/foot.vue';
export default {
    components: { Navbar, FavoriteBanner, FavoriteContent, Foot }
}
</script>

<style>

</style>