<template>
  <div
    class="error-page"
    :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]"
  >
    <app-header></app-header>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/MainComponents/AppHeader'
export default {
  components: {
    AppHeader,
  },
}
</script>

<style scoped>
.error-page {
  background: url('@/assets/images/error/BG.png') no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
}
</style>
