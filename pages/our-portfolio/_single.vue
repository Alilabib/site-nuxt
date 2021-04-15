<template>
  <Loader v-if="show_loading"></Loader>
  <div class="single-portfolio" v-else>
    <!--page header-->
    <div class="page-head">
      <div class="container">
        <div class="p-head">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>
                {{ get_single_portfolio.name }}<span class="tit-color">.</span>
              </h3>
              <h4>{{ get_single_portfolio.desc }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--page header-->
    <!--portfolio-details-->
    <div class="portfolio-details pad-40">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="portfolio-det">
              <div class="portfolio-title">
                <h4>{{ get_single_portfolio.name }}</h4>
                <p>
                  {{ get_single_portfolio.desc }}
                </p>
              </div>
              <div>
                <a
                  v-if="get_single_portfolio.prototype != null"
                  :href="get_single_portfolio.prototype"
                  class="link-style-small"
                  target="_blank"
                >
                  <span>See Prototype</span>
                </a>
              </div>
              <div
                class="links"
                v-for="link in get_single_portfolio.links"
                :key="link.id"
              >
                <a
                  :href="link.value"
                  class="link-style-small"
                  v-if="link.key == 'android' || link.value != null"
                  target="_blank"
                >
                  <!-- <span>{{ link.key }}</span> -->
                  <span><i class="fab fa-google-play my-i"></i>Download</span>
                </a>
                <a
                  :href="link.value"
                  class="link-style-small"
                  v-if="link.key == 'ios' || link.value != null"
                  target="_blank"
                >
                  <!-- <span>{{ link.key }}</span> -->
                  <span><i class="fab fa-app-store-ios"></i>Download</span>
                </a>
                <a
                  :href="link.value"
                  class="link-style-small"
                  v-if="link.key == 'website' || link.value != null"
                  target="_blank"
                >
                  <!-- <span>{{ link.key }}</span> -->
                  <span><i class="fas fa-globe my-i"></i>Go To Website</span>
                </a>
                <!-- <nuxt-link
                  :to="get_single_portfolio.prototype"
                  class="link-style-small"
                >
                  <span><i class="fab fa-google-play my-i"></i>Download</span>
                </nuxt-link>
                <nuxt-link
                  :to="get_single_portfolio.prototype"
                  class="link-style-small"
                >
                  <span><i class="fas fa-globe my-i"></i>Go To Website</span>
                </nuxt-link> -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="portfolio-det">
              <div class="portfolio-image">
                <img :src="get_single_portfolio.image" />
              </div>
            </div>
            <div class="offer-div" v-if="get_single_portfolio.is_in_offer">
              <div class="media">
                <img data-src="@/assets/images/icons/gift.png" v-lazy-load />
                <div class="media-body">
                  <h4 v-html="$t('gift')"></h4>
                </div>
                <a href="#con" class="design-link"
                  >{{ $t('order') }}
                  <span><i class="fas fa-long-arrow-alt-right"></i></span
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--portfolio-details-->

    <!--single-feature-->
    <div
      class="single-feature pad-40"
      v-if="get_single_portfolio.product_stackholders.length > 0"
    >
      <div class="container">
        <div class="empty-data">
          <!-- <div class="img">
            <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
            <h4>{{ $t('noData') }}</h4>
          </div> -->
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-6"
            v-for="stack in get_single_portfolio.product_stackholders"
            :key="stack.id"
          >
            <div class="sin-feat">
              <img :data-src="stack.image" v-lazy-load />
              <h4>{{ stack.name }}</h4>
              <p>
                {{ stack.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--single-feature-->

    <!--portfolio-details-->
    <div class="portfolio-details pad-40">
      <div class="container">
        <div
          class="empty-data"
          v-if="get_single_portfolio.product_details.length == 0"
        >
          <div class="img">
            <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
            <h4>{{ $t('noData') }}</h4>
          </div>
        </div>
        <div
          class="row"
          v-for="(detail, index) in get_single_portfolio.product_details"
          :key="detail.id"
          v-else
        >
          <div class="col-md-9">
            <div class="portfolio-det">
              <div class="portfolio-title">
                <h3><span class="yel-color">.</span>{{ index + 1 }}</h3>
                <h4>{{ detail.name }}</h4>
                <p>{{ detail.desc }}</p>
              </div>
              <div class="menu-flex">
                <ul class="list-unstyled">
                  <li v-for="feat in detail.features" :key="feat.id">
                    {{ feat }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="lang-img">
              <img :data-src="detail.image" class="img-res" v-lazy-load />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--portfolio-details-->

    <!--portfolio-details-->
    <div class="portfolio-details back-color pad-40">
      <div class="container">
        <div
          class="empty-data"
          v-if="get_single_portfolio.app_images.length == 0"
        >
          <div class="img">
            <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
            <h4>{{ $t('noData') }}</h4>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-md-12">
            <div class="portfolio-det">
              <div class="portfolio-title">
                <h4>{{ $t('titles.appScreens') }}</h4>
              </div>
            </div>
            <!--screenshots section start-->
            <div class="screenshots-section">
              <!--start app screen carousel-->
              <div class="screenshot-wrap">
                <!-- <div class="screenshot-frame"></div> -->
                <no-ssr>
                  <!-- important to add no-ssr-->
                  <carousel
                    :items="3"
                    :nav="false"
                    :dots="false"
                    :loop="true"
                    :margin="0"
                    :autopaly="true"
                    :center="true"
                    :responsive="{
                      0: { items: 1 },
                      768: { items: 3 },
                      991: { items: 4 },
                      1200: { items: 4 },
                      1920: { items: 4 },
                    }"
                    class="dot-indicator screen-carousel"
                  >
                    <div
                      class="item"
                      v-for="screen in get_single_portfolio.app_images"
                      :key="screen.id"
                    >
                      <img :data-src="screen" v-lazy-load />
                    </div>
                  </carousel>
                </no-ssr>
              </div>
              <!--end app screen carousel-->
            </div>
            <!--screenshots section end-->
          </div>
        </div>
      </div>
    </div>
    <!--portfolio details-->

    <!--request-product-->
    <div class="request-product">
      <Contact id="con"></Contact>
    </div>
    <!--request-product-->
  </div>
</template>

<script>
import Contact from '../..//components/OurPortfolio/RequestProduct'
import Loader from '../../components/MainComponents/Loader'
export default {
  data() {
    return {
      slug: this.$route.params.single,
    }
  },
  components: {
    Contact,
    Loader,
  },
  computed: {
    get_single_portfolio() {
      return this.$store.getters.getSinglePortfolio
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getsingleportfolio', this.slug)
  },
}
</script>


<style scoped>
/*sccreenshot css*/
/* line 2, src/assets/scss/components/sereenshots-section/_screenshots-1.scss */
.screenshot-wrap {
  position: relative;
}

/* line 4, src/assets/scss/components/sereenshots-section/_screenshots-1.scss */
.screenshot-wrap .screenshot-frame {
  background-image: url('@/assets/images/our-portfolio/single/iphone-mask.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: block;
  width: 290px;
  height: 513px;
  position: absolute;
  top: -10px;
  left: calc(50% + 0.5px);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 20px;
}

/* line 21, src/assets/scss/components/sereenshots-section/_screenshots-1.scss */
.screenshot-wrap .screen-carousel .owl-item img {
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 30px;
}

/* line 30, src/assets/scss/components/sereenshots-section/_screenshots-1.scss */
.screenshot-wrap .screen-carousel .owl-item.active.center img {
  -webkit-transform: scale(1);
  transform: scale(1);
}

@media (min-width: 320px) and (max-width: 1200px) {
  /* line 41, src/assets/scss/components/sereenshots-section/_screenshots-1.scss */
  .screenshot-wrap .screenshot-frame {
    display: none;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  /* line 51, src/assets/scss/components/sereenshots-section/_screenshots-1.scss */
  .screenshot-wrap .screen-carousel .owl-item img {
    width: 65%;
    margin: auto;
  }
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.owl-carousel .owl-item img {
  display: block;
  width: 100%;
}
</style>
