<template>
  <div class="flex h-screen">
   
    <SidebarPage />

   
    <MainPage />
  </div>
</template>

<script>
import SidebarPage from './SidebarPage.vue';
import MainPage from './MainPage.vue';

export default {
  components: {
    SidebarPage,
    MainPage,
  },
};
</script>


