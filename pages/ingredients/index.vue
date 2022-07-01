<template>
  <div>
    <Navbar />
    <IngredientsBanner class="bg-red-100"/>
    <IngredientsDetail class="bg-red-200"/>
    <IngredientsKnowledge class="bg-red-300"/>
    <Foot />
  </div>
</template>

<script>
import Navbar from '../../components/layout/navbar.vue';
import IngredientsBanner from '../../components/ingredients/ingredients-banner.vue';
import IngredientsDetail from '../../components/ingredients/ingredients-detail.vue';
import IngredientsKnowledge from '../../components/ingredients/ingredients-knowledge.vue';
import Foot from '../../components/layout/foot.vue';
export default {
    components: { Navbar, IngredientsBanner, IngredientsDetail, IngredientsKnowledge, Foot }
}
</script>

<style>

</style>