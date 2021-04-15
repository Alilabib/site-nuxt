<template>
  <header class="header">
    <nav
      class="navbar navbar-expand-lg"
      :class="{ is_sticky: scrollPosition > 50 }"
    >
      <div class="container">
        <nuxt-link :to="localePath('/')" class="navbar-brand"
          ><img data-src="@/assets/images/logo/logo.png" v-lazy-load
        /></nuxt-link>
        <nuxt-link class="navbar-toggler" to="/our-services">
          <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
        </nuxt-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav"
            :class="[
              { 'mr-auto': $i18n.locale == 'ar' },
              { 'ml-auto': $i18n.locale == 'en' },
            ]"
          >
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="localePath('/')">{{
                $t('nav.home')
              }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="localePath('/why-us')">{{
                $t('nav.whyus')
              }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="localePath('/our-services')">{{
                $t('nav.services')
              }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="localePath('/our-portfolio')">{{
                $t('nav.portfolio')
              }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="localePath('/jobs')">{{
                $t('nav.jobs')
              }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="localePath('/blog')">{{
                $t('nav.blog')
              }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="localePath('/contact')">{{
                $t('nav.contact')
              }}</nuxt-link>
            </li>
            <li class="nav-item lang">
              <nuxt-link
                v-for="(locale, i) in showLocales"
                :key="i"
                :to="switchLocalePath(locale.code)"
              >
                <span class="icon"
                  >{{ locale.name }}<i class="fas fa-globe"></i
                ></span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mobile-menu">
      <ul class="list-unstyled">
        <li>
          <nuxt-link :to="localePath('/')"
            ><span class="icon"><i class="fas fa-home"></i></span
          ></nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/why-us')"
            ><span class="icon"><i class="fas fa-users"></i></span
          ></nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/our-portfolio')"
            ><span class="icon"><i class="fas fa-folder"></i></span
          ></nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/blog')"
            ><span class="icon"><i class="fas fa-comment-alt"></i></span
          ></nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/contact')"
            ><span class="icon"><i class="fas fa-phone"></i></span
          ></nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/jobs')"
            ><span class="icon"><i class="fas fa-cog"></i></span
          ></nuxt-link>
        </li>
        <!-- <li>
          <button type="button" class="btn" @click="showRest">
            <span class="icon"><i class="fas fa-cog"></i></span>
          </button>
        </li> -->
      </ul>
    </div>
    <div class="rest-menu" :class="{ mobile_menu_visible: visable }">
      <ul class="list-unstyled">
        <li>Jobs</li>
        <li>Jobs</li>
        <li>Jobs</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      visable: false,
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    showRest() {
      // this.visable = !this.visable
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  computed: {
    locales() {
      return this.$i18n.locales.filter((i) => i.code)
    },
    showLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style scoped>
.rest-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 155;
  background: rgba(0, 0, 0, 0.9);
  -webkit-transform: translateX(-101%);
  -ms-transform: translateX(-101%);
  transform: translateX(-101%);
}

.mobile_menu_visible.rest-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.7s ease;
  -moz-transition: all 0.7s ease;
  -ms-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  transition: all 0.7s ease;
  -webkit-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
}
</style>
