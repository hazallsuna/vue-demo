<template>
   <div class="flex-1 ml-64 p-8">
      <h1 class="text-2xl font-poppins mb-6 text-black">All users</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
         <div v-for="user in users" :key="user.id" class="w-[358.67px] h-[370px] bg-white border border-customGray rounded-xl shadow-sm" @click="goTodoPage(user)">
        
          <UserCard :user="user" />
         </div>
      </div>
    </div>
</template>

<script>
import UserCard from './UserCard.vue';

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [], 
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      const localData = localStorage.getItem('users');
      
      if (localData) {
        this.users = JSON.parse(localData);
      } else {
        await this.fetchFromAPI();
      }
    },
    async fetchFromAPI() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        this.users = data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          location: `${user.address.city}, ${user.address.street}`,
          company: user.company.name,
          website: user.website,
          image: this.getRandomImage(), 
        }));
        
        this.saveToLocalStorage();
      } catch (error) {
        console.error("apiden veri yüklerken hata ");
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    getRandomImage() {
      const images = [
        'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg',
        'https://www.kastipmerkezi.com.tr/wp-content/uploads/2021/03/sac-ekimi-2.jpg',
        'http://gorsel.podkobi.com/muratatila-com-4295-iwjzenqxgpuqe5s.jpg'
      ];

    
      return images[Math.floor(Math.random() * images.length)];
    },
    goTodoPage(user) {
      
      this.$router.push({ path: `/user/${user.id}/todos`, query: { name: user.name, email: user.email, image: user.image } });
    }
  },
};
</script>
