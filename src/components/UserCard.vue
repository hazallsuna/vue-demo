<template>
 <div v-if="user" class="p-8 h-full ">
    <div class="w-full h-[100px] flex-none order-0 self-stretch flex-grow-0 relative mb-12">
     
       <img class="w-28 h-28 rounded-full absolute left-0 top-0" :src="user.image" alt="user profile" />

     
      <div class="absolute left-[124px] top-[21px] flex flex-col items-start px-5 gap-2 w-[122px] h-[62px]">
        <h2 class="text-lg font-normal text-gray-700">{{ user.name }}</h2>
        <p class="text-sm text-gray-500">{{ user.email }}</p>
        <p class="text-sm text-gray-500 p-0">{{ user.phone }}</p>
      </div>
    </div>

    <div class="flex flex-col items-start p-0 gap-4 w-[259px] flex-none order-1 flex-grow-0">

     
      <div class="flex flex-col">
        <div class="flex items-center mb-1">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span class="font-medium">Location</span>
        </div>
        <p class="text-sm text-gray-600 ml-7">{{ user.location }}</p>
      </div>

      
      <div class="flex flex-col">
        <div class="flex items-center mb-1">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
          <span class="font-medium">Company</span>
        </div>
        <p class="text-sm text-gray-600 ml-7">{{ user.company }}</p>
      </div>

      
      <div class="flex flex-col">
        <div class="flex items-center mb-1">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
          </svg>
          <span class="font-medium">Website</span>
        </div>
        <a :href="user.website" class="text-sm text-blue-500 hover:underline ml-7">{{ user.website }}</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true, 
    },
  }
};
</script>

