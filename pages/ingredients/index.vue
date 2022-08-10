<template>
  <div class="relative overflow-x-hidden">
    <IngredientsDetail />
    <img src="~/static/images/IMG_03ingredients/CANABLISS_01@2x.png" class="widget01">
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

<style scoped>
.widget01 {
  height: 50rem;
  position: absolute;
  top: 35%;
  right: -4rem;
  /* transform: translate(-2.7rem, -13rem); */
}

@media (max-width:1441px) {
  .widget01 {
    height: 32rem;
    position: absolute;
    top: 25%;
    right: -2.4rem;
  }
}
</style>