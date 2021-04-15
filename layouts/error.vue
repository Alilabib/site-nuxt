<template>
  <div>
    <!-- <div class="my-error pad-40">
      <div class="flex-div">
        <span class="num">4</span>
        <div class="planet">
          <div class="wrap">
            <div class="background"></div>
            <div class="clouds"></div>
          </div>
          <div class="mask"></div>
        </div>
        <span class="num">4</span>
      </div>

      <div class="error-tit center">
        <h2>Ooops .. Page Not Found</h2>
      </div>

      <div class="button-more">
        <span class="mas">Back To Home</span>
        <nuxt-link to="/">Back To Home</nuxt-link>
      </div>

      <div class="planet2">
        <div class="wrap2">
          <div class="background2"></div>
          <div class="clouds2"></div>
        </div>
        <div class="mask2"></div>
      </div>

      <div class="planet3">
        <div class="wrap3">
          <div class="background3"></div>
          <div class="clouds3"></div>
        </div>
        <div class="mask3"></div>
      </div>

      <div class="planet4">
        <div class="wrap4">
          <div class="background4"></div>
          <div class="clouds4"></div>
        </div>
        <div class="mask4"></div>
      </div>

      <div class="planet5">
        <div class="wrap5">
          <div class="background5"></div>
          <div class="clouds5"></div>
        </div>
        <div class="mask5"></div>
      </div>
    </div> -->

    <div class="error-design pad-100">
      <div class="row">
        <div class="col-sm-12">
          <div class="first-planet">
            <img
              data-src="@/assets/images/error/planet2.png"
              class="img-res"
              v-lazy-load
            />
          </div>
          <div class="second-planet">
            <img
              data-src="@/assets/images/error/planet3.png"
              class="img-res"
              v-lazy-load
            />
          </div>
          <div class="third-planet">
            <img
              data-src="@/assets/images/error/planet1.png"
              class="img-res"
              v-lazy-load
            />
          </div>
          <div class="forth-planet">
            <img
              data-src="@/assets/images/error/planet4.png"
              class="img-res"
              v-lazy-load
            />
          </div>
          <div class="error-logo">
            <span>4</span>
            <span
              ><img data-src="@/assets/images/error/earth.png" v-lazy-load
            /></span>
            <span>4</span>
          </div>
          <div class="error-title">
            <h2 v-if="error.statusCode == 404">Ooops .. Page Not Found</h2>
            <h2 v-else>Server Error</h2>
          </div>
          <div class="button-more">
            <span class="mas">Back To Home</span>
            <nuxt-link :to="localePath('/')">{{ $t('backHome') }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error-layout',
  props: ['error'],
  mounted() {
    console.log(this.error)
  },
}
</script>

<style scoped>
.my-error {
  height: 100%;
  position: relative;
}

.my-error .flex-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.my-error span.num {
  font-size: 240px;
  color: #fff;
}

.my-error .error-tit h2 {
  font-size: 28px;
  font-weight: bold;
  color: yellow;
}

.planet {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 60px -20px rgba(255, 189, 3, 0.72),
    -14px -15px 40px -10px rgba(255, 238, 191, 0.23);
  left: 50%;
  top: 50%;
}
.planet .mask {
  width: 100%;
  height: 100%;
  box-shadow: inset -10px -10px 40px #251303,
    inset 10px 10px 30px -10px rgba(255, 204, 159, 0.6);
  border-radius: 50%;
}
.planet .background {
  animation: translateBackground 40s infinite linear;
  background: url(http://artem.anmedio.ru/dev/planet/mars.jpg) repeat-x;
  width: 300px;
  height: 300px;
  position: absolute;
  border-radius: 50%;
}
.planet .clouds {
  background: url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width: 300px;
  height: 300px;
  position: absolute;
  border-radius: 50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}
.planet .wrap {
  width: 300px;
  height: 300px;
  position: absolute;
  border-radius: 50%;
  animation: rotatePlanet 150s infinite linear;
}

/*planet2*/
.planet2 {
  width: 180px;
  height: 180px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 70px -20px rgb(31 113 205),
    -14px -15px 40px -10px rgb(255 238 191 / 23%);
  left: -50px;
  top: 20px;
}
.planet2 .mask2 {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 70px -20px rgb(31 113 205),
    -14px -15px 40px -10px rgb(255 238 191 / 23%);
  border-radius: 50%;
}
.planet2 .background2 {
  animation: translateBackground 40s infinite linear;
  background: #000e47;
  width: 180px;
  height: 180px;
  position: absolute;
  border-radius: 50%;
}
.planet2 .clouds2 {
  background: url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width: 180px;
  height: 180px;
  position: absolute;
  border-radius: 50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}
.planet2 .wrap2 {
  width: 180px;
  height: 180px;
  position: absolute;
  border-radius: 50%;
  animation: rotatePlanet 150s infinite linear;
}

/*planet3*/
.planet3 {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 70px -20px rgb(225 98 163),
    -14px -15px 40px -10px rgb(255 238 191 / 23%);
  left: 70px;
  bottom: -70px;
}
.planet3 .mask3 {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 70px -20px rgb(105 174 223),
    -14px -15px 40px -10px rgb(255 238 191 / 23%);
  border-radius: 50%;
}
.planet3 .background3 {
  animation: translateBackground 40s infinite linear;
  background: #470024;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
}
.planet3 .clouds3 {
  background: url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}
.planet3 .wrap3 {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  animation: rotatePlanet 150s infinite linear;
}

/*planet4*/
.planet4 {
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 70px -20px rgb(171 65 192),
    -14px -15px 40px -10px rgb(255 238 191 / 23%);
  right: -60px;
  bottom: -110px;
}
.planet4 .mask4 {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 70px -20px rgb(171 65 192),
    -14px -15px 40px -10px rgb(255 238 191 / 23%);
  border-radius: 50%;
}
.planet4 .background4 {
  animation: translateBackground 40s infinite linear;
  background: #7a5c80;
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
}
.planet4 .clouds4 {
  background: url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}
.planet4 .wrap4 {
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  animation: rotatePlanet 150s infinite linear;
}

/*planet5*/
.planet5 {
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 70px -20px rgb(174 31 50),
    -14px -15px 40px -10px rgb(255 238 191 / 23%);
  right: -60px;
  top: 60px;
}
.planet5 .mask5 {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 70px -20px rgb(174 31 50),
    -14px -15px 40px -10px rgb(255 238 191 / 23%);
  border-radius: 50%;
}
.planet5 .background5 {
  animation: translateBackground 40s infinite linear;
  background: #b11e32;
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
}
.planet5 .clouds5 {
  background: url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}
.planet5 .wrap5 {
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  animation: rotatePlanet 150s infinite linear;
}

@keyframes translateBackground {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -600px;
  }
}
@keyframes rotatePlanet {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}
</style>
