<template>
  <div class="album-card relative cursor-pointer w-[358.67px] h-[332px] bg-white border border-[#D8D9DD] rounded-xl p-5 flex flex-col items-start gap-4">
    <div v-if="isHover" class="album-card--cover absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-90 rounded-xl z-10">
      <h1 class="font-bold text-xl mb-2">{{ albumId }}</h1>
      <p>{{ title }}</p>
    </div>
      <div class="grid grid-cols-2 grid-rows-2 w-full h-[200px]">
      <img v-for="(photo, index) in photos.slice(0, 4)" :key="index" :src="photo" :alt="`Photo ${index + 1}`" class="w-full h-full object-cover" />
    </div>
    <p class="text-lg font-style mt-2">{{ title }}</p>
  </div>
</template>



<script>
export default {
  props: {
    albumId: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    photos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isHover: false
    }
  }
}
</script>
