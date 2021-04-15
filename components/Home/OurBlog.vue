<template>
  <Loader v-if="show_loading"></Loader>
  <div class="our-blog pad-40" v-else>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="all-title center">
            <h3>
              {{ $t('titles.blogTitle') }}<span class="tit-color">.</span>
            </h3>
          </div>
        </div>
        <div class="col-sm-12" v-if="get_all_blogs.length == 0">
          <div class="empty-data">
            <div class="img">
              <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
              <h4>{{ $t('noData') }}</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-12" v-else>
          <div class="owl-blog">
            <no-ssr>
              <!-- important to add no-ssr-->
              <carousel
                :items="3"
                :nav="false"
                :dots="true"
                :loop="false"
                :margin="10"
                :autopaly="true"
                :responsive="{
                  0: {
                    items: 1,
                    nav: false,
                  },
                  600: {
                    items: 2,
                    nav: false,
                  },
                  800: {
                    items: 3,
                    nav: false,
                  },
                }"
              >
                <div class="item" v-for="blog in get_all_blogs" :key="blog.id">
                  <nuxt-link :to="localePath('/blog/' + blog.slug)">
                    <div class="blog">
                      <div class="blog-img">
                        <img :data-src="blog.image" v-lazy-load />
                      </div>
                      <div class="blog-des">
                        <h4>{{ blog.name }}</h4>
                        <p>{{ blog.desc | str_limit(80) }}</p>
                        <span>{{ blog.published_at }}</span>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </carousel>
            </no-ssr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../MainComponents/Loader'
export default {
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
  components: {
    Loader,
  },
}
</script>
