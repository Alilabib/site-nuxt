<template>
  <div class="loading-section">
    <div class="loader">
      <div class="inner one"></div>
      <div class="inner two"></div>
      <div class="inner three"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-section {
  position: relative;
  height: 300px;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
}

.load-form {
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  height: 100%;
}

.loader {
  position: relative;
  top: calc(50% - 32px);
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border-radius: 50%;
  perspective: 800px;
}

.inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  -webkit-animation: rotate-one 1s linear infinite;
  -moz-animation: rotate-one 1s linear infinite;
  -o-animation: rotate-one 1s linear infinite;
  -ms-animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid #2a398c;
}

.inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  -webkit-animation: rotate-two 1s linear infinite;
  -moz-animation: rotate-two 1s linear infinite;
  -o-animation: rotate-two 1s linear infinite;
  -ms-animation: rotate-two 1s linear infinite;
  border-right: 3px solid #2a398c;
}

.inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  -webkit-animation: rotate-three 1s linear infinite;
  -moz-animation: rotate-three 1s linear infinite;
  -o-animation: rotate-three 1s linear infinite;
  -ms-animation: rotate-three 1s linear infinite;
  border-top: 3px solid #2a398c;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotate(1turn);
  }
}

@-webkit-keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotate(1turn);
  }
}

@-moz-keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotate(1turn);
  }
}

@-o-keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotate(1turn);
  }
}

@-ms-keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotate(1turn);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotate(0);
  }
  to {
    transform: rotateX(50deg) rotateY(10deg) rotate(1turn);
  }
}

@-webkit-keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotate(0);
  }
  to {
    transform: rotateX(50deg) rotateY(10deg) rotate(1turn);
  }
}

@-moz-keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotate(0);
  }
  to {
    transform: rotateX(50deg) rotateY(10deg) rotate(1turn);
  }
}

@-o-keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotate(0);
  }
  to {
    transform: rotateX(50deg) rotateY(10deg) rotate(1turn);
  }
}

@-ms-keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotate(0);
  }
  to {
    transform: rotateX(50deg) rotateY(10deg) rotate(1turn);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(55deg) rotate(1turn);
  }
}

@-webkit-keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(55deg) rotate(1turn);
  }
}

@-moz-keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(55deg) rotate(1turn);
  }
}

@-o-keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(55deg) rotate(1turn);
  }
}

@-ms-keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotate(0);
  }
  to {
    transform: rotateX(35deg) rotateY(55deg) rotate(1turn);
  }
}
</style>
