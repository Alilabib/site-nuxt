<template>
  <div class="our-portfolio pad-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="all-title center">
            <h3>
              {{ $t('titles.portfolioTitle') }}<span class="tit-color">.</span>
            </h3>
          </div>
        </div>
      </div>

      <!-- <ul class="tabs-choose">
        <li
          v-for="type in get_portfolio_types"
          :key="type.id"
          @click="activeTab = '' + type.slug + ''"
          :class="[activeTab === '' + type.slug + '' ? 'active' : '']"
        >
          {{ type.name }}
        </li>
      </ul>
      <div class="tab-content">
        <div v-for="cont in get_portfolio_products" :key="cont.id">
          <div class="content-one" v-if="activeTab === '' + cont.slug + ''">
            <p>{{ cont }}</p>
            {{ get_portfolio_products }}
          </div>
        </div>
      </div> -->
      <div class="row">
        <div class="col-sm-12" v-if="get_portfolio_types.length == 0">
          <div class="empty-data">
            <div class="img">
              <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
              <h4>{{ $t('noData') }}</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-12" v-else>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <!-- <li class="nav-item">
              <button
                type="button"
                class="nav-link"
                :class="{ active: tabText === 'websites' }"
                @click="tabClick('websites')"
              >
                Websites
              </button>
            </li> -->
            <!-- <li class="nav-item">
              <button
                type="button"
                class="nav-link"
                :class="{ active: tabText === 'mobileapps' }"
                @click="tabClick('mobileapps')"
              >
                Mobile Apps
              </button>
            </li> -->
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
          <!-- {{ get_portfolio_products }} -->
          <div class="tab-content">
            <Loader v-if="show_loading"></Loader>
            <div
              class=""
              v-for="contt in get_portfolio_types"
              :key="contt.id"
              v-else
            >
              <div v-if="tabText === '' + contt.slug + ''" class="">
                <div class="owl-portfolio mb-5">
                  <no-ssr>
                    <!-- important to add no-ssr-->
                    <carousel
                      :items="3"
                      :nav="false"
                      :dots="false"
                      :loop="false"
                      :margin="10"
                      :autopaly="true"
                      :responsive="{
                        0: {
                          items: 1,
                          nav: false,
                        },
                        600: {
                          items: 2,
                          nav: false,
                        },
                        800: {
                          items: 3,
                          nav: false,
                        },
                      }"
                    >
                      <div
                        class="item"
                        v-for="tes in contt.products"
                        :key="tes.id"
                      >
                        <nuxt-link
                          :to="localePath('/our-portfolio/' + tes.slug)"
                        >
                          <div class="port-img">
                            <img :data-src="tes.image" v-lazy-load />
                          </div>
                        </nuxt-link>
                        <!-- <div class="port-card">
                          <div class="img-load">
                            <img :src="tes.image" />
                          </div>
                          <div class="port-content">
                            <h3 class="title">{{ tes.name }}</h3>
                            <ul class="icon">
                              <li>
                                <nuxt-link
                                  :to="localePath('/our-portfolio/' + tes.slug)"
                                  ><span class="icon"
                                    ><i class="fas fa-link"></i></span
                                ></nuxt-link>
                              </li>
                            </ul>
                          </div>
                        </div> -->
                      </div>
                    </carousel>
                  </no-ssr>
                </div>
              </div>
            </div>
          </div>
          <div class="center">
            <router-link
              :to="localePath('/our-portfolio')"
              class="link-style-small"
              ><span>See More</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../MainComponents/Loader'
export default {
  data() {
    return {
      tabText: '',
      activeTab: '',
      waiting: true,
    }
  },
  methods: {
    tabClick(val) {
      this.tabText = val
    },
  },

  computed: {
    get_portfolio_types() {
      return this.$store.getters.getPortfolioTypes
    },
    get_portfolio_products() {
      return this.$store.getters.getPortfolioProducts
    },
    show_loading() {
      return this.$store.getters.showLoading
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

<style scoped>
</style>
