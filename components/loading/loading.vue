<template>
  <div v-if="isLoading" class="loading-page flex justify-center items-center">
    <div class="loadingio-spinner-spinner-977el9wwy2v">
      <div class="ldio-4j5ay0xf86g" :class="{ 'ldio-4j5ay0xf86h': routes_admin.includes(route_name) }">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/loading/loading.css"
export default {
  computed: {
    isLoading() {
      return this.$store.getters['loading/getLoading']
    },
    route_name() {
      return this.$route.name
    },
  },
  data(){
    return{
      routes_admin:[
        'admin-login',
        'admin-dashboard',
        'admin-patient-admin',
        'admin-patient-admin-id',
        'admin-banner',
        'admin-banner-id',
        'admin-banner-add',
        'admin-knowledge',
        'admin-knowledge-id-demo',
        'admin-knowledge-add',
        'admin-knowledge-id',
        'admin-user',
        'admin-doctor',
        'admin-doctor-add',
        'admin-doctor-id',
        'admin-setting',
        'admin-setting-hospital',
        'admin-setting-hospital-id',
        'admin-setting-hospital-add',
        'admin-setting-career',
        'admin-setting-career-id',
        'admin-setting-career-add',
        'admin-setting-agencies-under',
        'admin-setting-agencies-under-id',
        'admin-setting-agencies-under-add',
        'admin-setting-database',
        'admin-patient',
        'admin-patient-id',
        'admin-patient-id-date',
        'admin-patient-id-history',
        'admin-patient-id-evaluation',
        'admin-telemedicine',
        'admin-telemedicine-accept',
        'admin-telemedicine-history',
      ]
    }
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgb(255, 255, 255);
  text-align: center;
  font-size: 30px;
}
</style>