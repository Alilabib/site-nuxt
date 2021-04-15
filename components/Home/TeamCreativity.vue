<template>
  <div class="team-creativity pad-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="all-title">
            <h3 v-html="$t('teamCreativity.title')">
              <!-- A Team With <span class="tit-color">Creativity</span> And An
              Advanced Imagination<span class="tit-color">.</span> -->
              <!-- {{ get_why[0].name }} -->
            </h3>
          </div>
          <div class="team-text">
            <p>
              <!-- {{ get_why[0].desc }} -->
              {{ $t('teamCreativity.desc1') }}
            </p>
            <p>{{ $t('teamCreativity.desc2') }}</p>
          </div>
          <div class="problem-shape">
            <img
              data-src="@/assets/images/team-creativity/shape.png"
              class="img-res"
              v-lazy-load
            />
          </div>
          <nuxt-link :to="localePath('/why-us')" class="link-style-small">
            <span>{{ $t('buttons.learnMore') }}</span>
          </nuxt-link>
        </div>
        <div class="col-lg-7">
          <div class="team-img">
            <img
              data-src="@/assets/images/team-creativity/group-img.png"
              v-lazy-load
            />
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
    get_why() {
      return this.$store.getters.getWhy
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getwhy')
  },
  components: {
    Loader,
  },
}
</script>
