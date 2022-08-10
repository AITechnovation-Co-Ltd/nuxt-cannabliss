<template>
  <div class="bg-secondary relative overflow-hidden">
    <img src="~/static/images/IMG_03ingredients/CANABLISS_01@2x.png" class="widget01">
    <BlogsDetail class="my-6" :params="$route.params.id" />
  </div>
</template>

<script>
import BlogsBanner from '../../../components/blogs/blogs-banner.vue';
import BlogsDetail from '../../../components/blogs/blogs-detail.vue';
export default {
  components: { BlogsBanner, BlogsDetail }
}

</script>

<style scoped>
.widget01 {
  height: 50rem;
  position: absolute;
  right: -4rem;
  top: 38%;
}

@media (max-width:1441px) {
  .widget01 {
    height: 32rem;
    position: absolute;
    right: -2.4rem;
    top: 40%;
  }

}
</style>>
