<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4">
              <div class="foot-menu">
                <h4>{{ $t('footer.footTit1') }}</h4>
                <ul class="list-unstyled">
                  <li>
                    <nuxt-link :to="localePath('/')">{{
                      $t('nav.home')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/why-us')">{{
                      $t('nav.whyus')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/our-services')">{{
                      $t('nav.services')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/our-portfolio')">{{
                      $t('nav.portfolio')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/jobs')">{{
                      $t('nav.jobs')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/blog')">{{
                      $t('nav.blog')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/contact')">{{
                      $t('nav.contact')
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="foot-menu">
                <h4>{{ $t('footer.footTit2') }}</h4>
                <ul class="list-unstyled">
                  <li>
                    <nuxt-link to="">{{
                      $t('footer.subLinks.operatingSystem')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('')">{{
                      $t('footer.subLinks.siteUsage')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/policy')">{{
                      $t('footer.subLinks.policy')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/terms')">{{
                      $t('footer.subLinks.terms')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">{{
                      $t('footer.subLinks.android')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">{{ $t('footer.subLinks.ios') }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">{{
                      $t('footer.subLinks.mobileType')
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="foot-menu">
                <h4>{{ $t('footer.footTit2') }}</h4>
                <ul class="list-unstyled">
                  <li>
                    <nuxt-link to="">{{
                      $t('footer.subLinks.hosting')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">{{
                      $t('footer.subLinks.wordpressProgramming')
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">{{
                      $t('footer.subLinks.electronicMarketing')
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="foot-des">
            <div class="foot-logo">
              <img data-src="@/assets/images/logo/foot-logo.png" v-lazy-load />
            </div>
            <div class="foot-breif">
              <p>
                <!-- {{ $t('footerPar') }} -->
                {{ get_foot_links.about }}
              </p>
            </div>
            <div class="lang-social">
              <div class="foot-social">
                <ul class="list-unstyled">
                  <li>
                    <a :href="get_foot_links.social.facebook" target="_blank"
                      ><span class="icon"
                        ><i class="fab fa-facebook-f"></i></span
                    ></a>
                  </li>
                  <li>
                    <a :href="get_foot_links.social.twitter" target="_blank"
                      ><span class="icon"><i class="fab fa-twitter"></i></span
                    ></a>
                  </li>
                  <li>
                    <a :href="get_foot_links.social.linkedin" target="_blank"
                      ><span class="icon"
                        ><i class="fab fa-linkedin-in"></i></span
                    ></a>
                  </li>
                  <li>
                    <a :href="get_foot_links.social.gmail" target="_blank"
                      ><span class="icon"><i class="fab fa-google"></i></span
                    ></a>
                  </li>
                  <li>
                    <a :href="get_foot_links.social.youtube" target="_blank"
                      ><span class="icon"><i class="fab fa-youtube"></i></span
                    ></a>
                  </li>
                  <li>
                    <a :href="get_foot_links.social.instagram" target="_blank"
                      ><span class="icon"><i class="fab fa-instagram"></i></span
                    ></a>
                  </li>
                  <li>
                    <a :href="get_foot_links.social.whatsapp" target="_blank"
                      ><span class="icon"><i class="fab fa-whatsapp"></i></span
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="lang">
                <nuxt-link
                  v-for="(locale, i) in showLocales"
                  :key="i"
                  :to="switchLocalePath(locale.code)"
                >
                  <span class="icon"
                    ><i class="fas fa-globe"></i>{{ locale.name }}</span
                  >
                </nuxt-link>
                <!-- <select
                  v-model="activeLang"
                  @change="changeLang"
                  name="lang"
                  id=""
                >
                  <option
                    :selected="locale === activeLang"
                    v-for="locale in locales"
                    :key="locale.code"
                    :value="locale.code"
                  >
                    {{ locale.name }}
                  </option>
                </select> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="line" />
    <div class="container">
      <div class="copyright">
        <p>
          All rights reserved by
          <span class="foot-color">Al Alamiya Al Hura</span> © 2020
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      activeLang: '',
    }
  },
  mounted() {
    this.activeLang = this.$i18n.locale
  },
  methods: {
    changeLang(event) {
      this.$i18n.setLocale(event.target.value)
    },
  },
  computed: {
    locales() {
      return this.$i18n.locales.filter((i) => i.code)
    },
    showLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    get_foot_links() {
      return this.$store.getters.getFootLinks
    },
  },

  async fetch() {
    await this.$store.dispatch('getfootlinks')
  },
}
</script>
