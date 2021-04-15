<template>
  <div class="contact-form pad-40">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="main-title-contact text-center mt-5 mb-5">
            <h3 class="mb-3" v-html="$t('requestProduct.title')"></h3>
            <p>
              {{ $t('requestProduct.desc') }}
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
                :placeholder="$t('contacts.yourName')"
                v-model="fullname"
                v-on:keydown.enter.prevent="sendMessage"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                class="form-control"
                :placeholder="$t('contacts.yourEmail')"
                v-model="email"
                v-on:keydown.enter.prevent="sendMessage"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="phone"
                class="form-control"
                :placeholder="$t('contacts.yourPhone')"
                v-model="phone"
                v-on:keydown.enter.prevent="sendMessage"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="subject"
                class="form-control"
                :placeholder="$t('contacts.subject')"
                v-model="subject"
                v-on:keydown.enter.prevent="sendMessage"
              />
            </div>
            <div class="form-group">
              <textarea
                type="text"
                class="form-control"
                :placeholder="$t('contacts.yourMessage')"
                v-model="message"
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
</template>
<script>
export default {
  data() {
    return {
      fullname: '',
      email: '',
      subject: '',
      message: '',
      phone: '',

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
  computed: {
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
  methods: {
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    sendMessage() {
      this.waiting = true
      if (this.fullname === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('contacts.errors.name') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (this.email === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('contacts.errors.email') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (!this.validEmail(this.email)) {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('contacts.errors.validMail') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (this.subject === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('contacts.errors.subject') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (this.phone === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('contacts.errors.phone') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else if (this.content === '') {
        this.error.static.error = true
        this.error.static.text = '' + this.$t('contacts.errors.message') + ''
        setTimeout(() => {
          this.error.static.error = false
          this.waiting = false
          this.success = false
        }, 5000)
      } else {
        const data = {
          subject: this.subject,
          content: this.content,
          email: this.email,
          phone: this.phone,
          fullname: this.fullname,
        }

        this.$store.dispatch('requestproduct', data)
        // this.error.static.error = true
        // setTimeout(() => {
        //   this.error.static.error = false
        //   this.waiting = false
        //   this.success = true
        // }, 5000)
      }
    },
  },
}
</script>
