<template>
  <div>
    <IngredientsBanner />
    <IngredientsDetail class="mt-28 mb-20"/>
    <IngredientsKnowledge class="bg-red-300"/>
  </div>
</template>

<script>
import IngredientsBanner from '../../components/ingredients/ingredients-banner.vue';
import IngredientsDetail from '../../components/ingredients/ingredients-detail.vue';
import IngredientsKnowledge from '../../components/ingredients/ingredients-knowledge.vue';
export default {
    components: { IngredientsBanner, IngredientsDetail, IngredientsKnowledge }
}
</script>

<style>

</style>