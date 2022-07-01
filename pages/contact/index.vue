<template>
  <div>
    <Navbar />
    <ContactBanner class="bg-red-100"/>
    <ContactContent class="bg-red-200"/>
    <Map class="bg-red-300"/>
    <Foot />
  </div>
</template>

<script>
import Navbar from '../../components/layout/navbar.vue';
import ContactBanner from '../../components/contact/contact-banner.vue';
import ContactContent from '../../components/contact/contact-content.vue';
import Map from '../../components/contact/map.vue';
import Foot from '../../components/layout/foot.vue';
export default {
    components: { Navbar, ContactBanner, ContactContent, Map, Foot }
}
</script>

<style>

</style>