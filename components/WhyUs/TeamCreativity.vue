<template>
  <div class="team-creativity pad-40">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="all-title">
            <h3 v-html="$t('teamCreativity.title')">
              <!-- {{ get_why[0].name }} -->
            </h3>
          </div>
          <div class="team-text">
            <p>
              <!-- {{ get_why[0].desc }} -->
              {{ $t('teamCreativity.desc1') }}
            </p>
            <p>
              {{ $t('teamCreativity.desc2') }}
            </p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="team-img">
            <!-- <img :src="get_why[0].image" /> -->
            <img
              data-src="@/assets/images/team-creativity/group-img.png"
              v-lazy-load
            />
          </div>
        </div>
        <div class="col-sm-12">
          <div class="problem-shape">
            <img
              src="@/assets/images/team-creativity/shape.png"
              class="img-res"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    get_why() {
      return this.$store.getters.getWhy
    },
  },
  async fetch() {
    await this.$store.dispatch('getwhy')
  },
}
</script>
