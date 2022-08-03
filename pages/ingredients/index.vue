<template>
  <div>
    <IngredientsDetail class="mt-10 xl:my-12"/>
    <IngredientsKnowledge />
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