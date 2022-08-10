<template>
  <div class="bg-secondary">
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

<style>
</style>