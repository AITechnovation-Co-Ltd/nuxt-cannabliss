<template>
  <div>
    <BlogsBanner class="bg-red-100"/>
    <BlogsContent class="bg-red-200"/>
  </div>
</template>

<script>
import BlogsBanner from '../../components/blogs/blogs-banner.vue';
import BlogsContent from '../../components/blogs/blogs-content.vue';
export default {
    components: { BlogsBanner, BlogsContent }
}
</script>

<style>

</style>