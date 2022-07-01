<template>
  <div>
    <Navbar />
    <BlogsBanner class="bg-red-100"/>
    <BlogsContent class="bg-red-200"/>
    <Foot />
  </div>
</template>

<script>
import Navbar from '../../components/layout/navbar.vue';
import BlogsBanner from '../../components/blogs/blogs-banner.vue';
import BlogsContent from '../../components/blogs/blogs-content.vue';
import Foot from '../../components/layout/foot.vue';
export default {
    components: { Navbar, BlogsBanner, BlogsContent, Foot }
}
</script>

<style>

</style>