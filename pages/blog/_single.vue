<template>
  <Loader v-if="show_loading"></Loader>
  <div class="single-blog-page" v-else>
    <div class="blog-head">
      <div class="image-blog">
        <img :data-src="get_single_blog.image" v-lazy-load />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="pad-40">
            <div class="title-blog-page d-flex justify-content-between">
              <div>
                <h1>{{ get_single_blog.name }}</h1>
                <span class="d-block mb-5 mt-3">{{
                  get_single_blog.published_at
                }}</span>
              </div>
              <div class="icons-share float-right">
                <div class="share-button">
                  <small @click="shareClick" class="custom-btn btn-14">
                    <i class="fas fa-share-alt"></i>
                    Share
                  </small>
                  <transition name="slide-fade">
                    <div class="share-social" v-if="shareIcons">
                      <ul class="list-unstyled">
                        <li>
                          <ShareNetwork
                            network="facebook"
                            :url="pageLocation"
                            :title="get_single_blog.name"
                            :description="get_single_blog.desc"
                            :quote="get_single_blog.desc"
                            hashtags="العالمية الحرة"
                          >
                            <span class="icon"
                              ><i class="fab fa-facebook-f"></i
                            ></span>
                          </ShareNetwork>
                        </li>
                        <li>
                          <ShareNetwork
                            network="twitter"
                            :url="pageLocation"
                            :title="get_single_blog.name"
                            :description="get_single_blog.desc"
                            :quote="get_single_blog.desc"
                            hashtags="العالمية الحرة"
                          >
                            <span class="icon"
                              ><i class="fab fa-twitter"></i
                            ></span>
                          </ShareNetwork>
                        </li>
                        <li>
                          <ShareNetwork
                            network="LinkedIn"
                            :url="pageLocation"
                            :title="get_single_blog.name"
                            :description="get_single_blog.desc"
                            :quote="get_single_blog.desc"
                            hashtags="العالمية الحرة"
                          >
                            <span class="icon"
                              ><i class="fab fa-linkedin-in"></i
                            ></span>
                          </ShareNetwork>
                        </li>
                      </ul>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            <div class="content-blog-page">
              <p>
                {{ get_single_blog.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="our-blog pad-40">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="all-title text-left">
              <h3>Other Importent Topics<span class="tit-color">.</span></h3>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="owl-blog">
              <no-ssr>
                <carousel
                  :items="3"
                  :nav="false"
                  :dots="true"
                  :loop="false"
                  :margin="10"
                  :autopaly="true"
                >
                  <div class="item">
                    <div class="blog">
                      <div class="blog-img">
                        <img src="@/assets/images/blogs/blog1.png" />
                      </div>
                      <div class="blog-des">
                        <h4>Increasing Prosperity With Positive Thinking</h4>
                        <span>03 March 2019</span>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="blog">
                      <div class="blog-img">
                        <img src="@/assets/images/blogs/blog2.png" />
                      </div>
                      <div class="blog-des">
                        <h4>Increasing Prosperity With Positive Thinking</h4>
                        <span>03 March 2019</span>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="blog">
                      <div class="blog-img">
                        <img src="@/assets/images/blogs/blog3.png" />
                      </div>
                      <div class="blog-des">
                        <h4>Increasing Prosperity With Positive Thinking</h4>
                        <span>03 March 2019</span>
                      </div>
                    </div>
                  </div>
                </carousel>
              </no-ssr>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import Loader from '../../components/MainComponents/Loader'
export default {
  data() {
    return {
      shareIcons: false,
      slug: this.$route.params.single,
      pageLocation: window.location.href,
    }
  },
  methods: {
    shareClick() {
      this.shareIcons = this.shareIcons == true ? false : true
    },
  },
  computed: {
    get_single_blog() {
      return this.$store.getters.getsingleBlog
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getsingleblog', this.slug)
    console.log(this.$route.params)
  },
  components: {
    Loader,
  },
}
</script>
