<template>
  <div class="innovate">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="all-title center">
            <h3>
              {{ $t('titles.invBusiness') }}<span class="tit-color">.</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="inn-img">
      <img
        data-src="@/assets/images/why-us/innvoate.png"
        class="img-res"
        v-lazy-load
      />
    </div>
  </div>
</template>
