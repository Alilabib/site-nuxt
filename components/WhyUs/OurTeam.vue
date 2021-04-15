<template>
  <Loader v-if="show_loading"></Loader>
  <div class="our-team pad-40" v-else>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="all-title center">
            <h3>{{ $t('titles.ourTeam') }}<span class="tit-color">.</span></h3>
          </div>
        </div>
        <div class="empty-data" v-if="get_why.our_team.length == 0">
          <div class="img">
            <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
            <h4>{{ $t('noData') }}</h4>
          </div>
        </div>
        <div class="col-sm-12" v-else>
          <div class="owl-team">
            <no-ssr>
              <!-- important to add no-ssr-->
              <carousel
                :items="4"
                :nav="false"
                :dots="true"
                :loop="false"
                :margin="20"
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
                    items: 4,
                    nav: false,
                  },
                }"
              >
                <div
                  class="item"
                  v-for="team in get_why.our_team"
                  :key="team.id"
                >
                  <div class="team-card">
                    <div class="team-pic">
                      <img :data-src="team.image" v-lazy-load />
                    </div>
                    <div class="team-des">
                      <h4>{{ team.name }}</h4>
                      <span>{{ team.job_title }}</span>
                    </div>
                  </div>
                </div>
              </carousel>
            </no-ssr>
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
