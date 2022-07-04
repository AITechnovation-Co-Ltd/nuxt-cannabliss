<template>
  <div class="bg-secondary">
    <ContactBanner />
    <ContactContent class="my-16"/>
    <Map class="mb-8" />
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