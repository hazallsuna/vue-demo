<template>
  <div class="flex min-h-screen bg-gray-100">
  
    <div class="w-64 bg-customGray fixed h-full flex-shrink-0 py-8 border-r border-gray-300">
    
      <a href="/" class="relative flex items-center gap-3 w-full h-[40px] px-4 bg-white">
        <div class="w-[6px] h-[40px] bg-customPurple rounded-r-lg absolute left-0"></div>
        <svg class="w-6 h-6 text-customPurple" fill="#4F359B">
          
          <use xlink:href="/symbol-defs.svg#icon-users"></use>
        </svg>
        <p class="text-[18px] leading-[27px] text-customPurple font-normal">Users</p>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SidebarPage',
};
</script>


