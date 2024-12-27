<script setup>
import { RouterView } from 'vue-router';
import { onMounted, onUnmounted } from "vue";

import { useScreens } from './views/screen';

import AlertTost from './components/AlertTost.vue';

const screens = useScreens();

const handleResize = () => {
  screens.updateScreens();
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  screens.updateScreens(); // Initialize on mount
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-100 dark:bg-blue-950 transition-all duration-1000 ease-in-out ">
    <alert-tost/>
    <RouterView />
  </div>
</template>


