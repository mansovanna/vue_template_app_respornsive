<script setup>
import { RouterView } from 'vue-router';
import { onMounted, onUnmounted } from "vue";

import { useScreens } from './stores/screen';

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
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <alert-tost />
    <transition name="slide" mode="out-in">
      <RouterView />
    </transition>
  </div>
</template>

<style>
/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
