<script setup>
import { RouterView } from 'vue-router';
import { onMounted, onUnmounted } from "vue";

import { useScreens } from './stores/screen';

import tostAlert from './components/tostAlert.vue';

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
    <tost-alert/>
    <RouterView />
  </div>
</template>


