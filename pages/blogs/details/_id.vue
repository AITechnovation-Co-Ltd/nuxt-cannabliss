<template>
  <div>
    <BlogsBanner class="bg-red-100"/>
    <BlogsDetail class="bg-red-200"/>
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