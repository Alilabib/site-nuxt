<template>
  <div class="all-static">
    <div class="page-head">
      <div class="container">
        <div class="p-head">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>
                {{ $t('footer.subLinks.policy')
                }}<span class="tit-color">.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <Loader v-if="show_loading"></Loader>
          <div class="all-text" v-else v-html="get_policy.policy"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../../components/MainComponents/Loader'
export default {
  computed: {
    get_policy() {
      return this.$store.getters.getPolicy
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  components: {
    Loader,
  },
  async fetch() {
    await this.$store.dispatch('getpolicy')
  },
}
</script>
