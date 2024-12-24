<script setup>

const props = defineProps({
    name: String,
    require: true
});
</script>

<template>
    <div  class="w-full  border rounded-md ">
        <!-- Image -->
         <img class="w-full max-xs:max-h-72 rounded-t-md object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_f9HmhrvUmc9oWbi7A_FZhzCHlFrNwpsJQ&s" alt="Error">
         <!-- End Image -->

         <!-- information -->
          <div class=" px-4 py-2">
          <div class="flex flex-row justify-start items-center gap-2">
            <img class="rounded-full border border-blue-500 w-8 h-8 object-cover" src="../assets/images/profile.png" alt="">
           <div>
            <h1 class="text-sm font-semibold">{{ props.name? props.name : 'No found!' }}</h1>
            <p class="text-xs font-medium text-gray-500">ID: {{ "0012344" }}</p>
           </div>

          </div>
          </div>
    </div>
</template>