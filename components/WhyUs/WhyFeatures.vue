<template>
  <Loader v-if="show_loading"></Loader>
  <div class="why-features pad-40" v-else>
    <div class="container">
      <div class="empty-data" v-if="get_why.why_us.length == 0">
        <div class="img">
          <img data-src="@/assets/images/icons/empty.png" v-lazy-load />
          <h4>{{ $t('noData') }}</h4>
        </div>
      </div>
      <div
        class="why-feat"
        v-for="(why, index) in get_why.why_us"
        :key="why.id"
        v-else
      >
        <div class="why-feat-img">
          <img :data-src="why.image" class="img-res" v-lazy-load />
          <div class="box-content">
            <h3 class="title">{{ why.name }}</h3>
            <span class="post">{{ why.slug }}</span>
          </div>
        </div>
        <div class="why-feat-des">
          <h3><span class="feat-color">.</span>{{ index + 1 }}</h3>
          <h4>{{ why.name }}</h4>
          <p>
            {{ why.desc }}
          </p>
        </div>
      </div>
      <!-- <div class="why-feat">
        <div class="why-feat-img">
          <img src="@/assets/images/why-us/why-us2.png" class="img-res" />
          <div class="box-content">
            <h3 class="title">Title</h3>
            <span class="post">Tag</span>
          </div>
        </div>
        <div class="why-feat-des">
          <h3><span class="feat-color">.</span>2</h3>
          <h4>Know-How</h4>
          <p>
            Our Team are our strongest asset. Over the years we have built a
            team of experienced, highly qualified, and regionally recognized
            technical support staff, that provides 24/7 support to our
            customers. And we did not just stop there! In line with our goal to
            spread our knowledge, and build a base of highly qualified software
            development professionals
          </p>
        </div>
      </div>
      <div class="why-feat">
        <div class="why-feat-img">
          <img src="@/assets/images/why-us/why-us3.png" class="img-res" />
          <div class="box-content">
            <h3 class="title">Title</h3>
            <span class="post">Tag</span>
          </div>
        </div>
        <div class="why-feat-des">
          <h3><span class="feat-color">.</span>3</h3>
          <h4>Wide Spectrum Of Technology Stacks</h4>
          <p>
            out of our concern to be always up to date and encouraging the
            learning and development, our team had the ability to have a
            diversity of professional skills, in all ICT industry aspects, the
            knowledge and skills diversity are allow us to always provide the
            fit solutions to our customers business
          </p>
        </div>
      </div>
      <div class="why-feat">
        <div class="why-feat-img">
          <img src="@/assets/images/why-us/why-us4.png" class="img-res" />
          <div class="box-content">
            <h3 class="title">Title</h3>
            <span class="post">Tag</span>
          </div>
        </div>
        <div class="why-feat-des">
          <h3><span class="feat-color">.</span>4</h3>
          <h4>Rapid Products Delivery</h4>
          <p>
            Time to market is a key success factor to any innovative business,
            AAIT value our client’s passion and motive to invest in a solution
            or products, and we understand how Time is valuable asset.
          </p>
          <p>
            We employ the culture of reusable components to deliver to our
            clients a puzzle like solutions, that robust and solid with high
            performance. Also, our team had been built-up with experienced
            professionals, who always get things Done
          </p>
        </div>
      </div>
      <div class="why-feat">
        <div class="why-feat-img">
          <img src="@/assets/images/why-us/why-us1.png" class="img-res" />
          <div class="box-content">
            <h3 class="title">Title</h3>
            <span class="post">Tag</span>
          </div>
        </div>
        <div class="why-feat-des">
          <h3><span class="feat-color">.</span>5</h3>
          <h4>Cost For Value</h4>
          <p>
            AAIT always make sure to deliver a world-class services , products
            with a reasonable cost, as we follow value-costing approach. That
            guarantee our client to receive much than expected value as per the
            given cost, we believe that your innovative business solution would
            not cost you a lot, that make us ICT enabler.
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Loader from '../MainComponents/Loader'
export default {
  computed: {
    get_why() {
      return this.$store.getters.getWhy
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getwhy')
  },
  components: {
    Loader,
  },
}
</script>
