<template>
  <div class="single-service">
    <!--page header-->
    <div class="page-head">
      <div class="container">
        <div class="p-head">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>
                {{ get_single_service.name }}<span class="tit-color">.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--page header-->
    <!--service-details-->
    <Loader v-if="show_loading"></Loader>
    <div class="service-details pad-40" v-else>
      <div class="container">
        <div
          class="row"
          v-for="(service, index) in get_single_service.service_details"
          :key="service.id"
        >
          <div
            :class="[
              { 'col-md-6': service.image !== null },
              {
                'col-md-12': service.image === null,
              },
            ]"
          >
            <div class="service-det">
              <div class="service-title">
                <h3><span class="yel-color">.</span>{{ index + 1 }}</h3>
                <h4>{{ service.name }}</h4>
                <div v-html="service.desc"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6" v-if="service.image !== null">
            <div class="service-det">
              <div class="service-image">
                <img :data-src="service.image" v-lazy-load />
              </div>
            </div>
          </div>
          <!-- <div class="col-sm-12">
            <div class="service-det">
              <div class="service-title">
                <h3><span class="yel-color">.</span>2</h3>
                <h4>What’s UI UX Web Design And Development?</h4>
                <p>
                  Technical evaluation of the project or technical study is the
                  first study that needs to be conducted after the project has
                  been identified. In large projects our team conducts the
                  technical study after determining the initial destination of
                  the project whether it is a site or an integrated application
                  or a special system, we have an integrated technical analysis
                  team with engineers specialized in analyzing sites and others
                  specialized in the analysis of applications and others for
                  integrated systems
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="service-det">
              <div class="service-title">
                <h3><span class="yel-color">.</span>3</h3>
                <h4>What’s UI UX Web Design And Development?</h4>
                <ul class="list-unstyled">
                  <li>
                    After the general idea of the project is determined and the
                    specialists are identified in the chosen destination, the
                    specialists begin to determine the needs of the project and
                    develop a study and a complete picture of the projects based
                    on some things and tools, including:
                  </li>
                  <li>
                    Identify the design idea for the general project and develop
                    a principled conception of the design form so that it is
                    compatible with the main idea of the project and so as to
                    facilitate the design team implementation with ease and
                    creativity
                  </li>
                  <li>
                    Project analysis is an integrated and accurate analysis that
                    identifies aspects of the project and the required software
                    characteristics and the optimal methods of implementing it
                    in order to achieve an easy and simple user experience
                  </li>
                  <li>
                    Develop the software mechanism used in the implementation of
                    the project so that the client is informed of all the
                    details of his project
                  </li>
                  <li>
                    Suggest useful characteristics of the project from
                    experience and advanced thinking help make the project
                    better
                  </li>
                  <li>Study the market’s view of your project idea</li>
                  <li>
                    Analysis of competitors for you and implementers of such a
                    project idea
                  </li>
                  <li>
                    Wireframing work for project screens and expected
                    configuration from the user’s point of view
                  </li>
                  <li>Included Flow charting, UML</li>
                  <li>Study of the project on the ux hand</li>
                  <li>Study of the project on the seo side</li>
                  <li>Making suggestions for future work</li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!--service-details-->
    <!--other-service-->
    <div class="services pad-40">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>{{ $t('titles.otherSer') }}</h3>
            </div>
            <div class="ser-des">
              <p>
                {{ $t('titles.serviceDes') }}
              </p>
            </div>
          </div>
          <div class="col-sm-12">
            <our-services></our-services>
          </div>
        </div>
      </div>
    </div>
    <!--other-service-->
  </div>
</template>

<script>
import OurServices from '../../components/OurServices/OurServices'
import Loader from '../../components/MainComponents/Loader'
export default {
  data() {
    return {
      slug: this.$route.params.single,
    }
  },
  computed: {
    get_single_service() {
      return this.$store.getters.getService
    },
    show_loading() {
      return this.$store.getters.showLoading
    },
  },
  async fetch() {
    await this.$store.dispatch('getservice', this.slug)
  },
  components: {
    OurServices,
    Loader,
  },
}
</script>
