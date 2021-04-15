<template>
  <div :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]">
    <app-header></app-header>
    <Nuxt />
    <!-- <div class="animation-three"></div> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/MainComponents/AppHeader'
import AppFooter from '../components/MainComponents/AppFooter'
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  transition: {
    name: 'slither',
    mode: 'out-in',
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity transform;
  overflow: hidden;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate(5em, 0);
}

.page-enter-to,
.page-leave {
  opacity: 1;
  transform: translate(0em, 0);
}

.layout-enter-active,
.layout-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity transform;
  overflow: hidden;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
  transform: translate(5em, 0);
}

.layout-enter-to,
.layout-leave {
  opacity: 1;
  transform: translate(0em, 0);
}

/* .layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
} */

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

.animation-three {
  position: fixed;
  width: 300px;
  height: 300px;
  background: url('@/assets/images/logo/logoo.png') no-repeat;
  background-size: cover;
  opacity: 0.5;
  border-radius: 100%;
  left: 10;
  /* border: 160px solid #08249a; */
  top: 150px;
  filter: contrast(0.7);
  z-index: -1;
  -webkit-animation: topBottom ease 7s infinite;
  animation: topBottom ease 7s infinite;
}

@-webkit-keyframes topBottom {
  0% {
    top: 150px;
  }
  50% {
    top: 200px;
  }
  100% {
    top: 150px;
  }
}

@keyframes topBottom {
  0% {
    top: 150px;
  }
  50% {
    top: 200px;
  }
  100% {
    top: 150px;
  }
}
</style>
