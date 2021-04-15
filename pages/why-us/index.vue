<template>
  <div class="why-us">
    <page-head></page-head>
    <team-creativity></team-creativity>
    <why-features></why-features>
    <our-team></our-team>
    <innovate-business></innovate-business>
  </div>
</template>

<script>
import PageHead from '../../components/WhyUs/PageHeader'
import TeamCreativity from '../../components/WhyUs/TeamCreativity'
import WhyFeatures from '../../components/WhyUs/WhyFeatures'
import OurTeam from '../../components/WhyUs/OurTeam'
import InnovateBusiness from '../../components/WhyUs/InnovateBusiness'
export default {
  components: {
    PageHead,
    TeamCreativity,
    WhyFeatures,
    OurTeam,
    InnovateBusiness,
  },
}
</script>
