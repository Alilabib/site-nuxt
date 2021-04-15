<template>
  <Loader v-if="show_loading"></Loader>
  <div class="owl-services" v-else>
    <div class="empty-data" v-if="get_services.length == 0">
      <div class="img">
        <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
        <h4>{{ $t('noData') }}</h4>
      </div>
    </div>
    <no-ssr v-else>
      <!-- important to add no-ssr-->
      <carousel
        :items="7"
        :nav="false"
        :dots="false"
        :loop="false"
        :margin="10"
        :autopaly="true"
        :responsive="{
          0: {
            items: 1,
            nav: false,
          },
          500: {
            items: 2,
            nav: false,
          },
          800: {
            items: 3,
            nav: false,
          },
          1000: {
            items: 7,
            nav: false,
          },
        }"
      >
        <div
          class="item service"
          v-for="service in get_services"
          :key="service.id"
        >
          <nuxt-link :to="localePath('/our-services/' + service.slug)">
            <div class="ser-tit">
              <h4>{{ service.name }}</h4>
            </div>
            <div class="ser-img">
              <img :data-src="service.main_icon" v-lazy-load />
            </div>
          </nuxt-link>
        </div>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
import Loader from '../MainComponents/Loader'
export default {
  computed: {
    get_services() {
      return this.$store.getters.getServices
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getAllServices')
  },
  components: {
    Loader,
  },
}
</script>
