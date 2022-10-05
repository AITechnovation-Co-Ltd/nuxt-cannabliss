<template>
  <div class="w-full h-full">
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WB78TMS" height="0" width="0"
      style="display:none;visibility:hidden"></iframe>
    <Navbar />
    <div class="w-full bg-secondary scroll-smooth relative overflow-hidden">
      <div class="w-full flex">
        <div class="w-full">
          <nuxt />
        </div>
      </div>

      <div class="social-bar" id="gotop">
        <div class="flex flex-col space-y-6 sm:space-y-6 items-center">
          <a href="https://lin.ee/i5MkM6w" target="_blank">
            <img class="w-8 sm:w-6 lg:w-8" src="~/static/images/IMG_01home/pages_01home/icons8-line@2x.png" alt="">
          </a>
          <a href="https://www.facebook.com/CanablissCosmetic" target="_blank">
            <img class="w-8 sm:w-6 lg:w-8" src="~/static/images/IMG_01home/pages_01home/icons8-facebook@2x.png" alt="">
          </a>
          <a href="https://www.instagram.com/canablisscosmetic/" target="_blank">
            <img class="w-8 sm:w-6 lg:w-8" src="~/static/images/IMG_01home/pages_01home/icons8-instagram@2x.png" alt="">
          </a>
          <a href="https://twitter.com/CanablissC" target="_blank">
            <img class="h-8 sm:h-6 lg:h-8" src="~/static/images/IMG_01home/pages_01home/icons8-twitter@2x.png" alt="">
          </a>
          <a href="https://www.youtube.com/channel/UCdKSDogq_7bUzWwY_U8zerA" target="_blank">
            <img class="h-7 sm:h-5 lg:h-7" src="~/static/images/IMG_01home/pages_01home/play-video(1).png" alt="">
          </a>
          <a href="https://www.tiktok.com/@canablisscosmetic?_t=8VL26drxAa9&_r=1" target="_blank">
            <img class="h-8 sm:h-6 lg:h-8" src="~/static/images/IMG_01home/pages_01home/logo-tiktok-svgrepo-com.png"
              alt="">
          </a>
        </div>
      </div>
      <button class="to-top hide" id="totop" @click="toTop">
        <base-icon icon="angle-up" viewBox="0 0 30 41" size="30" class="text-white" />
      </button>
      <img src="~/static/images/IMG_01home/pages_01home/Group831@2x.png" class="footleft z-10">
      <img src="~/static/images/IMG_01home/pages_01home/Group388@2x.png" class="footright z-10">
      <Foot class="mt-20" />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/layout/navbar.vue'
import Foot from '../components/layout/foot.vue'
export default {
  components: { Navbar, Foot },
  mounted() {
    const myID = document.getElementById("totop");
    const myID2 = document.getElementById("gotop");

    var myScrollFunc = function () {
      var y = window.scrollY;
      if (y >= 100) {
        myID.className = "to-top show"
        myID2.className = "social-bar -translate-y-20"
      } else {
        myID.className = "to-top hide"
        myID2.className = "social-bar"
      }
    };

    window.addEventListener("scroll", myScrollFunc);
  },
  methods: {
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  }
}
</script>

<style scoped>
.to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #78A695;
  z-index: 50;
  transition: all 1s;
}

.social-bar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: auto;
  z-index: 50;
  transition: all 1s;
}

.hide {
  opacity: 0;
  bottom: -100%;
}

.show {
  opacity: 1;
  bottom: 20px;
}
</style>