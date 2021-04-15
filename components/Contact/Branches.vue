<template>
  <Loader v-if="show_loading"></Loader>
  <div class="branches pad-40" v-else>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <ul
            class="nav nav-pills d-flex justify-content-between mb-5"
            id="pills-tab"
            role="tablist"
          >
            <li
              class="nav-item"
              v-for="branch in get_branches"
              :key="branch.id"
            >
              <button
                type="button"
                class="nav-link"
                :class="{ active: tabText === '' + branch.slug + '' }"
                @click="tabClick('' + branch.slug + '')"
              >
                {{ branch.name }}
              </button>
            </li>
          </ul>
        </div>
        <div class="col-sm-6"></div>
      </div>
      <div class="tab-content mt-3">
        <div v-for="cont in get_branches" :key="cont.id">
          <div
            v-if="tabText === '' + cont.slug + ''"
            class="tabcontent fadedIn"
          >
            <div class="single-branch">
              <div class="row">
                <div class="col-sm-6">
                  <ul class="list-info">
                    <li>
                      <a href="#" target="_blank">
                        <img
                          data-src="@/assets/images/icons/marker.png"
                          class="icon"
                          v-lazy-load
                        />
                        <p>{{ cont.name }}</p>
                      </a>
                    </li>
                    <li v-for="email in cont.emails" :key="email">
                      <a
                        href="mailto:Sales-UAE@alalmiyalhura.com"
                        target="_blank"
                      >
                        <img
                          data-src="@/assets/images/icons/mail.png"
                          class="icon"
                          v-lazy-load
                        />
                        <p>{{ email }}</p>
                      </a>
                    </li>
                    <li v-for="phone in cont.phones" :key="phone">
                      <a :href="'tel:' + phone" target="_blank">
                        <img
                          data-src="@/assets/images/icons/phone.png"
                          class="icon"
                          v-lazy-load
                        />
                        <p>{{ phone }}</p>
                      </a>
                    </li>
                  </ul>
                  <h3 class="title-content mt-5 mb-5">Branch Photos</h3>
                  <ul
                    class="gallery-branch images-wrapper d-flex justify-content-between"
                  >
                    <li
                      class="image"
                      v-for="(image, imageIndex) in cont.images"
                      :key="imageIndex"
                      @click="index = imageIndex"
                    >
                      <img :data-src="image" v-lazy-load />
                    </li>
                  </ul>
                  <CoolLightBox
                    :items="cont.images"
                    :index="index"
                    @close="index = null"
                  >
                  </CoolLightBox>
                </div>
                <div class="col-sm-6">
                  <GMap
                    ref="gMap"
                    language="en"
                    :cluster="{ options: { styles: clusterStyle } }"
                    :center="{
                      lat: cont.lat,
                      lng: cont.lng,
                    }"
                    :options="{
                      fullscreenControl: false,
                      styles: mapStyle,
                    }"
                    :zoom="13"
                  >
                    <GMapMarker
                      v-for="location in locations"
                      :key="location.id"
                      :position="{
                        lat: cont.lat,
                        lng: cont.lng,
                      }"
                      :options="{
                        icon:
                          location === currentLocation
                            ? pins.selected
                            : pins.notSelected,
                      }"
                      @click="currentLocation = location"
                    >
                      <GMapInfoWindow :options="{ maxWidth: 200 }">
                        <code>
                          lat: {{ cont.lat }}, lng:
                          {{ cont.lng }}
                        </code>
                      </GMapInfoWindow>
                    </GMapMarker>
                    <GMapCircle :options="circleOptions" />
                  </GMap>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../MainComponents/Loader'
import marker from '../../assets/images/icons/marker-map.png'
// use the component
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
// =================
export default {
  data() {
    return {
      items: [
        'https://alalmiyalhura.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-11-08-at-6.08.17-AM-1.jpeg.webp',
        'https://alalmiyalhura.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-11-08-at-6.08.18-AM-1.jpeg.webp',
        'https://alalmiyalhura.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-11-08-at-6.08.17-AM-1.jpeg.webp',
        'https://alalmiyalhura.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-11-08-at-6.08.18-AM-1.jpeg.webp',
      ],
      index: null,
      tabText: '',
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 31.04072,
          lng: 31.382469,
        },
      ],
      pins: {
        selected: marker,
        notSelected: marker,
      },
      mapStyle: [],
      clusterStyle: [
        {
          url:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
  methods: {
    tabClick(val) {
      this.tabText = val
    },
    open(e) {
      fancyBox(e.target, this.imageList)
    },
  },
  components: {
    CoolLightBox,
  },
  computed: {
    get_branches() {
      return this.$store.getters.getBranches
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getbranches')
    this.tabText = this.get_branches[0].slug
  },
  // mounted() {
  //   this.tabText = this.get_branches[0].slug
  // },
  components: {
    Loader,
  },
}
</script>
