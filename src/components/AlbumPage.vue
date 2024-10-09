<template>
  <div class="flex">

    <div class="w-64 bg-gray-100 fixed h-full flex-shrink-0 py-8 border-r border-gray-300">
      <div class="mb-8 px-4">
        <div class="flex items-center mb-4">
         
          <img :src="this.$route.query.image" alt="user profile" class="w-12 h-12 rounded-full mr-4">
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
          :to="{ path: `/user/${$route.params.userId}/${item.name.toLowerCase()}`, query: $route.query }"
          class="relative flex items-center gap-3 w-full h-[50px] px-4 cursor-pointer"
          :class="{ 'bg-gray-100': $route.path.includes(item.name.toLowerCase()), 'hover:bg-gray-50': !$route.path.includes(item.name.toLowerCase()) }"
        >
     
          <div v-if="$route.path.includes(item.name.toLowerCase())" class="w-[6px] h-[50px] bg-customPurple rounded-r-lg absolute left-0"></div>
          
     
          <svg class="w-6 h-6" aria-hidden="true" fill="#4F359B">
           
            <use :xlink:href="`/symbol-defs.svg#${item.icon}`"></use>
          </svg>

          <p class="text-[16px] leading-[24px] font-normal" :class="{ 'text-customPurple': $route.path.includes(item.name.toLowerCase()), 'text-gray-700': !$route.path.includes(item.name.toLowerCase()) }">
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

      
  <div class="absolute w-[1124px] h-[896px] left-72 top-25 flex flex-col items-start p-0 gap-8">
    <div class="flex flex-wrap gap-8">
      <AlbumCard
        v-for="album in albums"
        :key="album.id"
        :albumId="album.id"
        :title="album.title"
        :photos="album.photos"
      />
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import AlbumCard from './AlbumCard.vue';

export default {
  components:{
  AlbumCard,
  },
  data() {
    return { 
      activeItem :'Albums',
      menuItems: 
      [
        { name: 'Todos', icon: 'icon-clipboard-list' },
        { name: 'Posts', icon: 'icon-notebook' },
        { name: 'Albums', icon: 'icon-photo' },
      ],
       albums: [
        { 
          id: 1, 
          title: 'Non esse culpa molestiae omnis sed ol', 
          photos: [
            'https://images.unsplash.com/photo-1542397284385-6010376c5337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1542370285-b8eb8317691c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1542372712-fc07597133cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D',
            'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D'
          ]
        }
       ],
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: '/', query: this.$route.query });
    },
    setActiveItem(itemName) {
      this.activeItem = itemName;
    },
  },
};
</script>
