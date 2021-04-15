<template>
  <Loader v-if="show_loading"></Loader>
  <div class="client-opinion pad-40" v-else>
    <div class="container">
      <div class="row">
        <!-- <div class="col-sm-12">
          <div class="all-title center">
            <h3>
              {{ $t('titles.clientTitle') }}<span class="tit-color">.</span>
            </h3>
          </div>
        </div> -->
        <div class="col-sm-12" v-if="get_client_opinion.length == 0">
          <div class="empty-data">
            <div class="img">
              <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
              <h4>{{ $t('noData') }}</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-12" v-else>
          <div class="owl-clients">
            <no-ssr>
              <!-- important to add no-ssr-->
              <carousel
                :items="1"
                :nav="true"
                :dots="true"
                :loop="false"
                :autopaly="true"
              >
                <div
                  class="item"
                  v-for="client in get_client_opinion"
                  :key="client.id"
                >
                  <div class="row">
                    <div class="col-md-4">
                      <div class="client-img">
                        <img :data-src="client.image" v-lazy-load />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="all-title center">
                        <h3>
                          {{ $t('titles.clientTitle')
                          }}<span class="tit-color">.</span>
                        </h3>
                      </div>
                      <div class="client-text">
                        <div>
                          <p>
                            {{ client.feedback }}
                          </p>
                          <div class="client-info">
                            <h5>{{ client.fullname }}</h5>
                            <span>{{ client.job_title }}</span>
                          </div>
                        </div>
                      </div>
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
import Loader from '../../components/MainComponents/Loader'
export default {
  computed: {
    get_client_opinion() {
      return this.$store.getters.getClientOpinion
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getclientopinion')
  },
  components: {
    Loader,
  },
}
</script>
