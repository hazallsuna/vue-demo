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
          :to="{ path: `/user/${this.$route.params.userId}/${item.name.toLowerCase()}`, query: this.$route.query }"
          class="relative flex items-center gap-3 w-full h-[50px] px-4 cursor-pointer"
          :class="{ 'bg-gray-100': activeItem === item.name, 'hover:bg-gray-50': activeItem !== item.name }"
          @click="setActiveItem(item.name)"
        >
          
          <div v-if="activeItem === item.name" class="w-[6px] h-[50px] bg-customPurple rounded-r-lg absolute left-0"></div>
          
        
          <svg class="w-6 h-6" aria-hidden="true" fill="#4F359B">
          
            <use :xlink:href="`/symbol-defs.svg#${item.icon}`"></use>
          </svg>

       
          <p class="text-[16px] leading-[24px] font-normal" :class="{ 'text-customPurple': activeItem === item.name, 'text-gray-700': activeItem !== item.name }">
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
      
     
      <div class="form-container">
      
        <form class="flex flex-col space-y-4" style="top: 20px; position: relative;">
          <div
            v-for="(todo, index) in todos"
            :key="index"
            class="flex items-center space-x-4"
            style="width: 653px; height: 48px;"
          >
          
            <div class="flex-none cursor-pointer" @click="toggleTodo(index)">
              <svg v-if="todo.completed" class="icon icon-check_box" style="width: 48px; height: 48px;">
                <rect x="15" y="15" width="18" height="18" rx="2" fill="#6750A4" />
                <path
                  d="M22 28.4L18 24.4L19.4 23L22 25.6L28.6 19L30 20.4L22 28.4Z"
                  fill="white"
                />
              </svg>
              <svg v-else class="icon icon-check_box_outline_blank" style="width: 48px; height: 48px;">
                <rect x="15" y="15" width="18" height="18" rx="2" fill="#E0E0E0" />
              </svg>
            </div>

            
            <p
              class="text-gray-600"
              style="font-family: 'Roboto'; font-size: 14px; line-height: 20px;"
            >
              {{ todo.text }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 'Todos',
      menuItems: [
        { name: 'Todos', icon: 'icon-clipboard-list' }, 
        { name: 'Posts', icon: 'icon-notebook' },        
        { name: 'Albums', icon: 'icon-photo' },          
      ],
      todos: [
        { text: 'Curabitur tempor quis eros tempus lacinia.', completed: true },
        { text: 'Nam bibendum pellentesque quam.', completed: false },
        { text: 'Curabitur tempor quis eros tempus.', completed: false },
        { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum.', completed: true },
        { text: 'Curabitur tempor quis eros tempus lacinia.', completed: true },
        { text: 'Nam bibendum pellentesque quam.', completed: false },
        { text: 'Curabitur tempor quis eros tempus.', completed: false },
        { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum.', completed: true },
      ],
    };
  },
  methods: {
    setActiveItem(itemName) {
      this.activeItem = itemName;
    },
    goHome() {
        this.$router.push({ path: '/', query: this.$route.query });
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
  },
};
</script>
