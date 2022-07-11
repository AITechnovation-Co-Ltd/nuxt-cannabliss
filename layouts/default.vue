<template>
  <div class="w-screen bg-secondary scroll-smooth">
    <Navbar />
    <div class="w-full flex">
      <div class="w-full">
        <nuxt />
      </div>
    </div>
    <button class="to-top hide" id="totop" @click="toTop">
      <base-icon icon="angle-up" viewBox="0 0 30 41" size="30" class="text-white" />
    </button>
    <Foot class="mt-40" />
  </div>
</template>

<script>
import Navbar from '../components/layout/navbar.vue'
import Foot from '../components/layout/foot.vue'
export default {
  components: { Navbar, Foot },
  mounted() {
    const myID = document.getElementById("totop");

    var myScrollFunc = function () {
      var y = window.scrollY;
      if (y >= 100) {
        myID.className = "to-top show"
      } else {
        myID.className = "to-top hide"
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

.hide {
  opacity: 0;
  bottom: -100%;
}

.show {
  opacity: 1;
  bottom: 20px;
}
</style>