<template>
  <div class="relative bg w-screen">
    <img class="w-full" src="~/static/images/IMG_01home/pages_01home/Group1134@2x.png">
    <div class="centered flex flex-col">
      <p class="text-quaternary text-5xl">Subscribe to receive grape News & Promotion</p>
      <div class="form-control">
        <input type="value" required="">
        <label>
          <span style="transition-delay:0ms">Y</span>
          <span style="transition-delay:50ms">o</span>
          <span style="transition-delay:100ms">u</span>
          <span style="transition-delay:150ms">r</span>
          <span style="transition-delay:200ms"> </span>
          <span style="transition-delay:250ms">E</span>
          <span style="transition-delay:300ms">-</span>
          <span style="transition-delay:350ms">m</span>
          <span style="transition-delay:400ms">a</span>
          <span style="transition-delay:450ms">i</span>
          <span style="transition-delay:500ms">l</span>

        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
  height: auto;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
}

/* From uiverse.io by @liyaxu123 */
.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 928.16px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 1px #5E5F5F solid;
  display: block;
  width: 100%;
  padding: 10px 0 5px;
  font-size: 18px;
  color: #5E5F5F;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: #5E5F5F;
}

.form-control label {
  position: absolute;
  top: 5px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: #5E5F5F;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus+label span,
.form-control input:valid+label span {
  color: #5E5F5F;
  transform: translateY(-20px);
}
</style>