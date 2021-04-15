<template>
  <div :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]">
    <app-header class="diff"></app-header>
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
