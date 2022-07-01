<template>
  <div>
    <ContactBanner class="bg-red-100"/>
    <ContactContent class="bg-red-200"/>
    <Map class="bg-red-300"/>
  </div>
</template>

<script>
import ContactBanner from '../../components/contact/contact-banner.vue';
import ContactContent from '../../components/contact/contact-content.vue';
import Map from '../../components/contact/map.vue';
export default {
    components: { ContactBanner, ContactContent, Map }
}
</script>

<style>

</style>