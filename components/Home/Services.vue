<template>
  <div class="services home-services pad-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="all-title">
            <h3 v-html="$t('titles.serviceTitle')"></h3>
          </div>
          <div class="ser-des">
            <p>
              {{ $t('titles.serviceDes') }}
            </p>
          </div>
        </div>
        <div class="col-sm-12">
          <our-services></our-services>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OurServices from '../OurServices/OurServices'
export default {
  components: {
    OurServices,
  },
}
</script>
