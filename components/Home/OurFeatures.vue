<template>
  <div class="our-features pad-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="all-title center">
            <h3>
              {{ $t('titles.featuresTitle') }}<span class="tit-color">.</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12" v-if="get_features.length == 0">
          <div class="empty-data">
            <div class="img">
              <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
              <h4>{{ $t('noData') }}</h4>
            </div>
          </div>
        </div>
        <div
          class="col-md-4"
          v-else
          v-for="feat in get_features"
          :key="feat.id"
        >
          <div class="feature">
            <div class="feat-icon">
              <img :data-src="feat.image" v-lazy-load />
            </div>
            <div class="feat-des">
              <h4>{{ feat.name }}</h4>
              <p>
                {{ feat.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    get_features() {
      return this.$store.getters.getFeatures
    },
  },
  async fetch() {
    await this.$store.dispatch('getfeatures')
  },
}
</script>

