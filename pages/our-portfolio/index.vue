<template>
  <Loader v-if="show_loading"></Loader>
  <div class="our-portfolio-page" v-else>
    <!--page header-->
    <div class="page-head">
      <div class="container">
        <div class="p-head">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>
                {{ $t('titles.portfolioTitle')
                }}<span class="tit-color">.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--page header-->
    <!--portfolio-->
    <div class="our-portfolio">
      <div class="container">
        <div class="empty-data" v-if="get_portfolio_types.length == 0">
          <div class="img">
            <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
            <h4>{{ $t('noData') }}</h4>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-sm-12">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li
                class="nav-item"
                v-for="type in get_portfolio_types"
                :key="type.id"
              >
                <button
                  type="button"
                  class="nav-link"
                  :class="{ active: tabText === '' + type.slug + '' }"
                  @click="tabClick('' + type.slug + '')"
                >
                  {{ type.name }}
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div v-for="contt in get_portfolio_types" :key="contt.id">
                <div v-if="tabText === '' + contt.slug + ''" class="">
                  <div class="row">
                    <div
                      class="col-md-4"
                      v-for="tes in contt.products"
                      :key="tes.id"
                    >
                      <nuxt-link :to="localePath('/our-portfolio/' + tes.slug)">
                        <div class="port-img">
                          <img :data-src="tes.image" v-lazy-load />
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--portfolio-->
  </div>
</template>

<script>
import Loader from '../../components/MainComponents/Loader'
export default {
  data() {
    return {
      tabText: '',
      activeTab: '',
    }
  },
  methods: {
    tabClick(val) {
      this.tabText = val
    },
  },

  computed: {
    show_loading() {
      return this.$store.getters.showLoading
    },
    get_portfolio_types() {
      return this.$store.getters.getPortfolioTypes
    },
    get_portfolio_products() {
      return this.$store.getters.getPortfolioProducts
    },
    // activeContent() {
    //   return this.get_portfolio_products.filter(
    //     (x) => x.category === this.tabText
    //   )
    // },
  },
  async fetch() {
    await this.$store.dispatch('getportfoliotypes')
    this.tabText = this.get_portfolio_types[0].slug
    // await this.$store.dispatch('getportfolioproducts', this.tabText)
  },
  // mounted() {
  //   this.tabText = this.get_portfolio_types[0].slug
  //   // this.activeTab = this.get_portfolio_products[0].slug
  // },
  components: {
    Loader,
  },
}
</script>
