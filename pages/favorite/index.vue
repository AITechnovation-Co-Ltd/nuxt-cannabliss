<template>
  <div>
    <FavoriteBanner class="bg-red-100"/>
    <FavoriteContent class="bg-red-200"/>
  </div>
</template>

<script>
import FavoriteBanner from '../../components/favorite/favorite-banner.vue';
import FavoriteContent from '../../components/favorite/favorite-content.vue';
export default {
    components: { FavoriteBanner, FavoriteContent }
}
</script>

<style>

</style>