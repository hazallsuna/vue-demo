<template>
  <div class="flex">
 
    <div class="w-64 bg-gray-100 fixed h-full flex-shrink-0 py-8 border-r border-gray-300">
      <div class="mb-8 px-4">
        <div class="flex items-center mb-4">
          <img :src="this.$route.query.image" alt="user profile" class="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 class="text-lg font-semibold">{{ this.$route.query.name }}</h2>
            <p class="text-sm text-gray-500">{{ this.$route.query.email }}</p>
          </div>
        </div>
        <div class="border-b border-gray-200"></div>
      </div>

     
      <div class="flex flex-col">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="{ path: `/user/${this.$route.params.userId}/${item.name.toLowerCase()}`, query: this.$route.query }"
          class="relative flex items-center gap-3 w-full h-[50px] px-4 cursor-pointer"
          :class="{ 'bg-gray-100': isActive(item.name), 'hover:bg-gray-50': !isActive(item.name) }"
          @click="setActiveItem(item.name)"
        >
          <div v-if="isActive(item.name)" class="w-[6px] h-[50px] bg-customPurple rounded-r-lg absolute left-0"></div>
          <svg class="w-6 h-6" aria-hidden="true" fill="#4F359B">
            <use :xlink:href="`/symbol-defs.svg#${item.icon}`"></use>
          </svg>
          <p class="text-[16px] leading-[24px] font-normal" :class="{ 'text-customPurple': isActive(item.name), 'text-gray-700': !isActive(item.name) }">
            {{ item.name }}
          </p>
        </router-link>
      </div>
    </div>

   
    <div class="flex-1 ml-64 p-8">
    
      <div class="flex items-center space-x-2 cursor-pointer p-4" @click="goHome">
        <svg class="w-6 h-6 text-black" aria-hidden="true">
          <use xlink:href="/symbol-defs.svg#icon-arrow-left-circle"></use>
        </svg>
        <span class="text-lg font-medium text-black">Go Home</span>
      </div>

      
      <div v-for="(post, index) in posts" :key="index" class="w-full h-[176px] border-b border-gray-300 flex items-center justify-between py-4 px-6">
        <div class="flex flex-col">
          <h3 class="text-xl font-bold mb-2">Post Title</h3>
          <p class="text-gray-600">{{ post.text }}</p>
        </div>
        <div class="flex items-center justify-end gap-2 cursor-pointer" @click="openModal(post)">
          <div>See</div>
          <div>More</div>
          <svg class="w-6 h-6 text-customPurple" aria-hidden="true" fill="#4F359B">
            <use xlink:href="/symbol-defs.svg#icon-arrow-right-circle"></use>
          </svg>
        </div>
      </div>

    
      <PostModal v-if="selectedPost" :isVisible="isModalVisible" @close="closeModal">
        <template v-slot:header>
          <h2 class="text-xl font-bold">{{ selectedPostTitle }}</h2>
        </template>
        <template v-slot:body>
          <p>{{ selectedPostText }}</p>
        </template>
      </PostModal>
    </div>
  </div>
</template>

<script>
import PostModal from './PostModal.vue';


export default {
  components: {
    PostModal,
  },
  data() {
    return {
      activeItem: 'Posts',
      menuItems: [
        { name: 'Todos', icon: 'icon-clipboard-list' },
        { name: 'Posts', icon: 'icon-notebook' },
        { name: 'Albums', icon: 'icon-photo' }
      ],
      posts: [
        { text: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George' },
        { text: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George' },
        { text: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George' },
        { text: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George' },
        { text: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George' }
      ],
      isModalVisible: false,
      selectedPost: null
    };
  },
  computed: {
    selectedPostTitle() {
      return 'Post Title'; 
    },
    selectedPostText() {
      return this.selectedPost ? this.selectedPost.text : '';
    }
  },
  methods: {
    openModal(post) {
      this.selectedPost = post;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedPost = null;
    },
    goHome() {
      this.$router.push({ path: '/', query: this.$route.query });
    },
    isActive(itemName) {
      return this.activeItem === itemName;
    },
    setActiveItem(itemName) {
      this.activeItem = itemName;
    },
  }
};
</script>


