<template>
  <div class="maincrs w-full flex flex-col justify-center items-center">
    <p class="my-4 text-7xl text-primary">Review</p>
    <div class="w-full flex my-6">
      <!-- -->
      <div class="w-1/3 relative py-10 px-20">
        <div class="w-full flex flex-col items-center">
          <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
          <p class="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus incidunt ratione
            hic vero
            omnis laboriosam cupiditate velit, odio alias suscipit ad repellat. Autem doloribus ipsam laboriosam
            molestiae, provident corrupti.</p>
          <div class="w-full flex justify-between">
            <div class="w-full flex justify-center relative ">
              <img src="@/static/images/IMG_01home/pages_01home/review03.png"
                class="absolute bottom-0 left-0 w-28 h-28">
              <p>Canabliss Oasiz :<br>Super Berry Hydrating Mask</p>
            </div>
            <p>Kimberly K.</p>
          </div>
        </div>
      </div>
      <!-- -->
      <div class="w-1/3 relative p-10 bg-tertiary rounded-xl">
        <img src="@/static/images/IMG_01home/pages_01home/review01.png" class="absolute -top-12 left-0 w-24 h-20">
        <div class="w-full flex flex-col items-center">
          <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
          <p class="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus incidunt ratione
            hic vero
            omnis laboriosam cupiditate velit, odio alias suscipit ad repellat. Autem doloribus ipsam laboriosam
            molestiae, provident corrupti.</p>
          <div class="w-full flex justify-between">
            <div class="w-full flex justify-center relative ">
              <img src="@/static/images/IMG_01home/pages_01home/review03.png"
                class="absolute bottom-0 left-0 w-28 h-28">
              <p>Canabliss Oasiz :<br>Super Berry Hydrating Mask</p>
            </div>
            <p>Kimberly K.</p>
          </div>
        </div>
        <img src="@/static/images/IMG_01home/pages_01home/review02.png" class="absolute -bottom-12 right-0 w-24 h-20">
      </div>
      <!-- -->
      <div class="w-1/3 relative py-10 px-20">
        <div class="w-full flex flex-col items-center">
          <base-icon icon="five-star" viewBox="0 0 980 166" width="100" class="text-primary" />
          <p class="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus incidunt ratione
            hic vero
            omnis laboriosam cupiditate velit, odio alias suscipit ad repellat. Autem doloribus ipsam laboriosam
            molestiae, provident corrupti.</p>
          <div class="w-full flex justify-between">
            <div class="w-full flex justify-center relative ">
              <img src="@/static/images/IMG_01home/pages_01home/review03.png"
                class="absolute bottom-0 left-0 w-28 h-28">
              <p>Canabliss Oasiz :<br>Super Berry Hydrating Mask</p>
            </div>
            <p>Kimberly K.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/5 my-6">
      <p class="text-4xl text-primary"><span class="font-bold">2</span>/4</p>
      <div class="progres mt-7 bg-primary rounded-full h-0.5 flex items-center">
        <div class="bg-primary h-1.5 rounded-full" style="width: 25%"></div>
      </div>
    </div>
    <base-button @click="$router.push(`/review`)" class="my-4 border-quaternary">View all</base-button>
  </div>
</template>

<script>
export default {
}
</script>

<style scope>
.maincrs {
  min-height: calc(100vh - 84px);
}
</style>