<template>
  <div class="blog-page">
    <!--page header-->
    <div class="page-head">
      <div class="container">
        <div class="p-head">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>
                {{ $t('titles.blogTitle') }}<span class="tit-color">.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--page header-->
    <Loader v-if="show_loading"></Loader>
    <div class="our-blog pad-40" v-else>
      <div class="container">
        <div class="empty-data" v-if="get_all_blogs.length == 0">
          <div class="img">
            <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
            <h4>{{ $t('noData') }}</h4>
          </div>
        </div>
        <div class="row" v-else>
          <!-- Single Blog -->
          <div class="col-lg-4" v-for="blog in get_all_blogs" :key="blog.id">
            <div class="blog mb-4">
              <nuxt-link :to="localePath('/blog/' + blog.slug)">
                <div class="blog-img">
                  <img :data-src="blog.image" v-lazy-load />
                </div>
                <div class="blog-des">
                  <h4>{{ blog.name }}</h4>
                  <p>{{ blog.desc | str_limit(80) }}</p>
                  <span>{{ blog.published_at }}</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
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
    <Services></Services>
  </div>
</template>

<script>
import Loader from '../../components/MainComponents/Loader'
import Services from '@/components/Home/Services'
export default {
  components: {
    Services,
    Loader,
  },
  computed: {
    get_all_blogs() {
      return this.$store.getters.getAllBlogs
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getallblogs')
  },
}
</script>
