<template>
  <Loader v-if="show_loading"></Loader>
  <div class="main-slider" data-aos="fade-up" data-aos-delay="300" v-else>
    <div class="container">
      <div class="empty-data" v-if="get_sliders.length == 0">
        <div class="img">
          <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
          <h4>{{ $t('noData') }}</h4>
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-lg-3">
          <div class="top-details">
            <div>
              <h1 v-html="$t('mainSlider.title')"></h1>
              <p>
                <span class="diff-color">{{
                  $t('mainSlider.highlightDes')
                }}</span>
                {{ $t('mainSlider.description') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="owl-header">
            <no-ssr>
              <!-- important to add no-ssr-->
              <carousel :items="1" :loop="false" :autopaly="true">
                <div class="item" v-for="image in get_sliders" :key="image.id">
                  <div class="overlay"></div>
                  <img :data-src="image.image" v-lazy-load />
                </div>
              </carousel>
            </no-ssr>
            <nuxt-link :to="localePath('/contact')">
              <div class="slide-get-touch">
                <div>
                  <h4 v-html="$t('getTouch')"></h4>
                  <span
                    ><img
                      data-src="@/assets/images/icons/arrow-right.png"
                      v-lazy-load
                  /></span>
                  <div class="dot-img">
                    <img
                      data-src="@/assets/images/icons/dot-co.png"
                      v-lazy-load
                    />
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../MainComponents/Loader'
export default {
  computed: {
    get_sliders() {
      return this.$store.getters.getSliders
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getData')
  },
  components: {
    Loader,
  },
}
</script>
