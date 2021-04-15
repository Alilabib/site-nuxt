<template>
  <div class="jobs-page">
    <!--page header-->
    <div class="page-head">
      <div class="container">
        <div class="p-head">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>{{ $t('titles.jobs') }}<span class="tit-color">.</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--page header-->

    <Jobs></Jobs>

    <Services></Services>
  </div>
</template>

<script>
import Services from '@/components/Home/Services'
import Jobs from '@/components/Jobs/AllJobs'
export default {
  components: {
    Services,
    Jobs,
  },
}
</script>

<style></style>
