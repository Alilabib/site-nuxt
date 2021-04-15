<template>
  <div class="our-blog pad-40">
    <div class="container">
      <div class="empty-data" v-if="get_all_jobs.length == 0">
        <div class="img">
          <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
          <h4>{{ $t('noData') }}</h4>
        </div>
      </div>
      <div class="row" v-else>
        <!-- Single Job -->
        <div class="col-lg-4" v-for="job in get_all_jobs" :key="job.id">
          <div class="blog mb-4">
            <nuxt-link :to="localePath('/jobs/' + job.slug)">
              <div class="blog-img">
                <img :data-src="job.image" v-lazy-load />
              </div>
              <div class="blog-des">
                <h4>{{ job.name }}</h4>
                <p>{{ job.name | str_limit(80) }}</p>
                <span>{{ job.published_at }}</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Start Pagination -->
      <!-- <div class="pagination pad-40">
        <ul class="d-flex justify-content-center">
          <li><span class="current">1</span></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">Next</a></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    get_all_jobs() {
      return this.$store.getters.getAllJobs
    },
  },
  async fetch() {
    await this.$store.dispatch('getalljobs')
  },
}
</script>

<style scoped>
</style>
