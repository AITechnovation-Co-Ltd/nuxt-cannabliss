<template>
  <div class="bg-secondary relative">
    <!-- <img src="~/static/images/IMG_03blogs/Group1151@2x.png" class="widget1151"> -->
    <img src="~/static/images/IMG_03ingredients/CANABLISS_01@2x.png" class="widget01">
    <BlogsContent class="my-6" />
  </div>
</template>

<script>
import BlogsBanner from '../../components/blogs/blogs-banner.vue';
import BlogsContent from '../../components/blogs/blogs-content.vue';
export default {
  components: { BlogsBanner, BlogsContent }
}
</script>

<style scoped>
/* .widget1151 {
  height: 12rem;
  position: absolute;
  right: 6rem;
  transform: translateY(-6rem);
} */

.widget01 {
  height: 50rem;
  position: absolute;
  top: 45%;
  right: -4rem;
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