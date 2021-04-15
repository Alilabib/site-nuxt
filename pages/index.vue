<template>
  <div>
    <main-slider></main-slider>
    <team-creativity></team-creativity>
    <Services></Services>
    <premium-products></premium-products>
    <our-features></our-features>
    <our-portfolio></our-portfolio>
    <client-opinion></client-opinion>
    <our-blog></our-blog>
    <our-partner></our-partner>
  </div>
</template>

<script>
import MainSlider from '@/components/Home/Slider'
import TeamCreativity from '@/components/Home/TeamCreativity'
import Services from '@/components/Home/Services'
import PremiumProducts from '@/components/Home/PremiumProducts'
import OurFeatures from '@/components/Home/OurFeatures'
import OurPortfolio from '@/components/Home/OurPortfolio'
import ClientOpinion from '@/components/Home/ClientOpinion'
import OurBlog from '@/components/Home/OurBlog'
import OurPartner from '@/components/Home/OurPartner'
export default {
  components: {
    MainSlider,
    TeamCreativity,
    Services,
    PremiumProducts,
    OurFeatures,
    OurPortfolio,
    ClientOpinion,
    OurBlog,
    OurPartner,
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    // })
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity transform;
  overflow: hidden;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate(5em, 0);
}

.page-enter-to,
.page-leave {
  opacity: 1;
  transform: translate(0em, 0);
}

.layout-enter-active,
.layout-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity transform;
  overflow: hidden;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
  transform: translate(5em, 0);
}

.layout-enter-to,
.layout-leave {
  opacity: 1;
  transform: translate(0em, 0);
}
</style>
