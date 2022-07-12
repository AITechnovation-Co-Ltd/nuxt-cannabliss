<template>
  <div class="w-96 h-96 bg-red-500">
    <div class="flex items-center">
      <div @click="arrow_left">
        <base-icon icon='dropdown' viewBox="0 0 24 24" class="transform rotate-90" size="18" />
      </div>
      <img :src="images[current]" class="w-48 h-48" alt="product images">
      <div @click="arrow_right">
        <base-icon icon='dropdown' viewBox="0 0 24 24" class="transform -rotate-90" size="18" />
      </div>
    </div>
    <div class="flex w-full overflow-x-auto">
      <img v-for="(item, i) in images" :key="i" :src="images[i]" @click="current = i" class="w-20 h-20"
        alt="product images" :class="{ 'border-4 border-blue-500': i == current }">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      images: [
        'https://placekitten.com/801/800',
        'https://placekitten.com/802/800',
        'https://placekitten.com/803/800',
        'https://placekitten.com/804/800',
        'https://placekitten.com/805/800',
        'https://placekitten.com/806/800',
        'https://placekitten.com/807/800',
        'https://placekitten.com/808/800',
        'https://placekitten.com/809/800',
        'https://placekitten.com/810/800'
      ]
    }
  },
  methods: {
    arrow_right() {
      if (this.current >= this.images.length - 1) {
        this.current = this.images.length - 1
      }
      else if (this.current != this.images.length) {
        this.current++
      }
    },
    arrow_left() {
      if (this.current <= 0) { this.current = this.current = 0 }
      else if (this.current != 0) { this.current-- }
    },
  }
}


</script>

<style>
</style>