<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" v-if="isVisible" @click.self="closeModal">
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-[1024px] h-[609px] relative flex">
      <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" @click="closeModal">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L12 12M12 8L8 12M10 1C17.2 1 19 2.8 19 10C19 17.2 17.2 19 10 19C2.8 19 1 17.2 1 10C1 2.8 2.8 1 10 1Z" stroke="#26303E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <div class="flex flex-col px-8 py-4 w-full max-w-[600px]">
        <div class="w-full mb-4 flex justify-between items-center">
          <slot name="header"></slot>
        </div>
        
        <div class="w-full h-[503px] overflow-y-auto">
          <slot name="body"></slot>
        </div>
      </div>
      
      <div class="border-l border-gray-300 px-6 py-6 w-[418px] h-full">
        <h2 class="text-xl font-bold mb-4">{{ commentTitle }}</h2>
        <div class="h-full overflow-y-auto flex flex-col gap-4">
          <p>{{ commentText }}</p>
          <slot name="comments"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    commentTitle: {
      type: String,
      default: 'Comments'
    },
    commentText: {
      type: String,
      default: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vest'
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>