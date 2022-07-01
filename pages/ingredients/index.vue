<template>
  <div>
    <IngredientsBanner class="bg-red-100"/>
    <IngredientsDetail class="bg-red-200"/>
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