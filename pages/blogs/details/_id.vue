<template>
  <div>
    <Navbar />
    <BlogsBanner class="bg-red-100"/>
    <BlogsDetail class="bg-red-200"/>
    <Foot />
  </div>
</template>

<script>
import Navbar from '../../../components/layout/navbar.vue';
import BlogsBanner from '../../../components/blogs/blogs-banner.vue';
import BlogsDetail from '../../../components/blogs/blogs-detail.vue';
import Foot from '../../../components/layout/foot.vue';
export default {
    components: { Navbar, BlogsBanner, BlogsDetail, Foot }
}
</script>

<style>

</style>