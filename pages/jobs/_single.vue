<template>
  <Loader v-if="show_loading"></Loader>
  <div class="single-blog-page" v-else>
    <div class="blog-head">
      <div class="image-blog">
        <img :data-src="get_single_job.image" v-lazy-load />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="pad-40">
            <div class="title-blog-page d-flex justify-content-between">
              <div>
                <h1>{{ get_single_job.name }}</h1>
                <span class="d-block mb-5 mt-3">03 March 2019</span>
              </div>
              <div
                class="icons-share float-right"
                v-if="get_single_job.is_shareable"
              >
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
                            :title="get_single_job.name"
                            :description="get_single_job.desc"
                            :quote="get_single_job.desc"
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
                            :title="get_single_job.name"
                            :description="get_single_job.desc"
                            :quote="get_single_job.desc"
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
                            :title="get_single_job.name"
                            :description="get_single_job.desc"
                            :quote="get_single_job.desc"
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
              <p>{{ get_single_job.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Form -->
    <div class="contact-form pad-40">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="main-title-contact text-center mt-5 mb-5">
              <h3 v-html="$t('applayForm.title')"></h3>
              <p class="mt-5">
                {{ $t('applayForm.des') }}
              </p>
            </div>
          </div>

          <div class="col-md-8">
            <div class="form-contact">
              <div class="form-group">
                <input
                  type="text"
                  name="fullname"
                  class="form-control"
                  :placeholder="$t('applayForm.fullname')"
                  v-model="fullname"
                  v-on:keydown.enter.prevent="sendMessage"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="phone"
                  class="form-control"
                  :placeholder="$t('applayForm.yourPhone')"
                  v-model="phone"
                  v-on:keydown.enter.prevent="sendMessage"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  :placeholder="$t('applayForm.yourEmail')"
                  v-model="email"
                  v-on:keydown.enter.prevent="sendMessage"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="job"
                  class="form-control"
                  :placeholder="$t('applayForm.jobTitle')"
                  v-model="jobTitle"
                  v-on:keydown.enter.prevent="sendMessage"
                />
              </div>
              <div class="form-group">
                <div class="file-upload">
                  <div class="file-select">
                    <div
                      class="file-select-name"
                      id="noFile"
                      v-if="beforeUpload"
                    >
                      {{ $t('applayForm.uploadCv') }}
                    </div>
                    <div
                      class="file-select-name"
                      id="noFile"
                      v-if="afterUpload"
                    >
                      {{ cv.name }}
                    </div>
                    <input type="file" name="chooseFile" @change="uploadFile" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  type="text"
                  class="form-control"
                  name="content"
                  :placeholder="$t('applayForm.yourMessage')"
                  v-model="content"
                  v-on:keydown.enter.prevent="sendMessage"
                ></textarea>
              </div>
              <div class="center">
                <!-- <button class="custom-btn btn-14" v-if="waiting">
                  Waiting <span> <i class="fas fa-spinner fa-spin"></i> </span>
                </button> -->
                <button class="link-style-small" @click="sendMessage">
                  <span>{{ $t('contacts.sendMes') }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- error alert -->
      <transition name="slide-fade">
        <div class="error-alert" v-if="error.static.error || show_error">
          <small
            @click="
              ;(error.static.error = false),
                ($store.state.error.static.error = false)
            "
          >
            <i class="fas fa-times"></i>
          </small>
          <div class="d-flex justify-content-between">
            <span><i class="fas fa-times"></i></span>
            <p v-if="error.static.error">{{ error.static.text }}</p>
            <p v-else>{{ err_mes }}</p>
          </div>
        </div>
      </transition>
      <!-- success alert -->
      <transition name="slide-fade">
        <div class="success-alert" v-if="show_success">
          <small @click="$store.state.success = false">
            <i class="fas fa-times"></i>
          </small>
          <div class="d-flex justify-content-between">
            <span><i class="fas fa-check"></i></span>
            <p>{{ $t('successMes') }}</p>
          </div>
        </div>
      </transition>
    </div>
    <!-- Form -->
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
      jobTitle: '',
      content: '',
      email: '',
      phone: '',
      fullname: '',
      cv: '',
      beforeUpload: true,
      afterUpload: false,
      pageLocation: window.location.href,

      slug: this.$route.params.single,

      error: {
        static: {
          error: false,
          text: '',
        },
      },
      success: false,
      waiting: false,
      // static text
      mainText: [],
    }
  },
  methods: {
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    sendMessage() {
      this.waiting = true
      if (this.fullname === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('applayForm.errors.name') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (this.phone === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('applayForm.errors.phone') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (this.email === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('applayForm.errors.email') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (!this.validEmail(this.email)) {
        this.error.static.error = true
        this.error.static.text =
          '' + this.$t('applayForm.errors.validMail') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (this.jobTitle === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('applayForm.errors.jobTitle') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (this.content === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('applayForm.errors.message') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else {
        // const data = {
        //   fullname: this.fullname,
        //   phone: this.phone,
        //   email: this.email,
        //   job_title: this.jobTitle,
        //   content: this.content,
        //   cv_file: this.cv.name,
        // }
        const data = new FormData()
        data.append('fullname', this.fullname)
        data.append('phone', this.phone)
        data.append('email', this.email)
        data.append('job_title', this.job_title)
        data.append('content', this.content)
        data.append('cv_file', this.cv)
        this.$store.dispatch('applayjob', data)
        // this.error.static.error = true
        // setTimeout(() => {
        //   this.error.static.error = false
        //   this.waiting = false
        //   this.success = true
        // }, 5000)
      }
    },
    shareClick() {
      this.shareIcons = this.shareIcons == true ? false : true
    },
    uploadFile(e) {
      this.cv = e.target.files[0]
      console.log(this.cv), (this.beforeUpload = false)
      this.afterUpload = true
    },
  },
  computed: {
    get_single_job() {
      return this.$store.getters.getsingleJob
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
    show_wait() {
      return this.$store.getters.showWait
    },
    show_success() {
      return this.$store.getters.showSuccess
    },
    show_error() {
      return this.$store.getters.errorStatus
    },
    err_mes() {
      return this.$store.getters.errorText
    },
  },
  async fetch() {
    await this.$store.dispatch('getsinglejob', this.slug)
    console.log(this.$route.params)
  },
  components: {
    Loader,
  },
}
</script>

<style scoped>
.file-upload {
  display: flex;
  text-align: center;
  font-size: 12px;
  margin-top: 30px;
}

.file-upload span {
  display: block;
  width: 10%;
  line-height: 50px;
  text-align: right;
}

.file-upload .file-select {
  display: flex;
  border: 0;
  color: #000;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  background: #f2f4fb;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.file-upload .file-select .file-select-button {
  background: #ebebeb;
  padding: 0 10px;
  margin: 13px 10px;
  height: 25px;
  line-height: 25px;
}

.file-upload .file-select .file-select-name {
  line-height: 50px;
  padding: 0 10px;
  color: #666666;
}

.file-upload.active .file-select {
  border-color: #ebebeb;
  transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}

.file-upload.active .file-select .file-select-button {
  background: #ebebeb;
  color: #000;
  transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}

.file-upload .file-select input[type='file'] {
  z-index: 100;
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  filter: alpha(opacity=0);
}

.file-upload .file-select.file-select-disabled {
  opacity: 0.65;
}

.file-upload .file-select.file-select-disabled:hover {
  cursor: default;
  display: block;
  border: 2px solid #dce4ec;
  color: #34495e;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  text-align: left;
  background: #ffffff;
  overflow: hidden;
  position: relative;
}

.file-upload .file-select.file-select-disabled:hover .file-select-button {
  background: #dce4ec;
  color: #666666;
  padding: 0 10px;
  display: inline-block;
  height: 40px;
  line-height: 40px;
}

.file-upload .file-select.file-select-disabled:hover .file-select-name {
  line-height: 40px;
  display: inline-block;
  padding: 0 10px;
}
</style>
