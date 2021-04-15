<template>
  <div class="our-partner">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="all-title center">
            <h3>
              {{ $t('titles.partnerTitle') }}<span class="tit-color">.</span>
            </h3>
          </div>
        </div>
        <div class="col-sm-12" v-if="get_partners.length == 0">
          <div class="empty-data">
            <div class="img">
              <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
              <h4>{{ $t('noData') }}</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-12" v-else>
          <div class="row justify-content-center">
            <!-- <div class="col-lg-3 col-md-4">
              <div class="partner">
                <div class="par-img">
                  <img src="@/assets/images/partner/wired.png" />
                </div>
              </div>
            </div> -->
            <div
              class="col-lg-3 col-md-4"
              v-for="partner in get_partners"
              :key="partner.id"
            >
              <div class="partner">
                <div class="par-img">
                  <img :data-src="partner.image" v-lazy-load />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="par-bg">
            <img data-src="@/assets/images/partner/par-bg.png" v-lazy-load />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    get_partners() {
      return this.$store.getters.getPartners
    },
  },
  async fetch() {
    await this.$store.dispatch('getpartners')
  },
}
</script>
