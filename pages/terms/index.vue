<template>
  <div class="all-static">
    <div class="page-head">
      <div class="container">
        <div class="p-head">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>
                {{ $t('footer.subLinks.terms')
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
          <div class="all-text" v-else v-html="get_terms.terms"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../../components/MainComponents/Loader'
export default {
  computed: {
    get_terms() {
      return this.$store.getters.getTerms
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getterms')
  },
  components: {
    Loader,
  },
}
</script>
