<template>
  <div class="relative w-full">
    <img class="w-full bg z-10" src="~/static/images/IMG_03blogs/Group1120@2x.png">
    <div class="content flex z-20">
      <h1 class="text-5xl 2xl:text-7xl text-primary">Blogs</h1>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width:1024px) {
  img.bg {
    object-fit: cover;
    width: auto;
    height: 220px;
  }
}
</style>