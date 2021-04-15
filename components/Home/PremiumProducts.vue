<template>
  <div class="premium-products pad-40 center">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="all-title">
            <h3>
              {{ $t('titles.premuimTitle') }}
            </h3>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="owl-premium mb-5">
            <no-ssr>
              <!-- important to add no-ssr-->
              <carousel
                :items="3"
                :nav="false"
                :dots="false"
                :loop="false"
                :margin="10"
                :autopaly="true"
              >
                <div class="item">
                  <img src="@/assets/images/prem/prem1.png" />
                </div>
                <div class="item">
                  <img src="@/assets/images/prem/prem2.png" />
                </div>
                <div class="item">
                  <img src="@/assets/images/prem/prem3.png" />
                </div>
                <div class="item">
                  <img src="@/assets/images/prem/prem4.png" />
                </div>
              </carousel>
            </no-ssr>
          </div>
          <div class="center">
            <nuxt-link to="/" class="link-style-small">
              <span>{{ $t('buttons.learnMore') }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.premium-products {
  display: none;
}
</style>
