<script setup>
import { RouterView } from "vue-router";
import sidebarView from "./sidebarView.vue";
import navbarView from "./navbarView.vue";
import arrowUp02 from "@/assets/icons/arrowUp02.vue";
import { useMenuSlot } from "@/stores/menuController";
import { onMounted, onUnmounted, ref } from "vue";


const isVisible = ref(false);
const mainRef = ref(null); // Reference to the main element
const slotMenu = useMenuSlot();

// Function to scroll to the top of the main element
const scrollToTop = () => {
  mainRef.value?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Function to handle scroll event within the main element
const handleScroll = () => {
  if (mainRef.value) {
    isVisible.value = mainRef.value.scrollTop > 900;
  }
};

onMounted(() => {
  if (mainRef.value) {
    mainRef.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (mainRef.value) {
    mainRef.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <div class="w-full h-screen box-content flex flex-row relative">
    <!-- Block Sidebar -->
    <div
      class="h-screen w-72 max-lg:w-full bg-black bg-opacity-20 z-50 transition-all ease-in-out duration-1000 fixed top-0"
      :class="
        slotMenu.isOnOff == false
          ? 'max-lg:left-0 max-xl:left-0 max-2xl:left-0'
          : 'max-lg:-left-full max-xl:-left-72 max-2xl:-left-72'
      "
    >
      <sidebar-view class="w-full max-w-72 h-screen border-r bg-white dark:bg-blue-950 dark:text-white" />
    </div>
    <!-- End Block Sidebar -->

    <!-- Block Main -->
    <main
      ref="mainRef"
      :class="slotMenu.isOnOff==false ? 'lg:ml-72' : ''"
      class="w-full h-screen overflow-y-scroll sm:ml-0 transition-all duration-1000 ease-in-out relative"
    >
    <!-- Alert Form -->

    <!-- End Alert Form -->

      <!-- Nav-bar -->
      <div class="sticky top-0 right-0 w-full z-40">
    <navbar-view
      class="w-full min-h-16 z-50 border-b px-4 py-2 flex flex-row justify-between items-center bg-white bg-opacity-100 dark:bg-opacity-10 backdrop-blur-md dark:text-white"
    />
  </div>
      <!-- End Nav-bar -->

      <!-- View Pages -->
      <div class="relative">
        <transition name="zoom" mode="out-in" appear>
          <RouterView class="px-2 py-2" />
        </transition>
      </div>
      <!-- End View Pages -->

      <!-- Scroll to Top -->
      <button
        v-if="isVisible"
        @click="scrollToTop"
        class="p-2 rounded-full bg-white shadow-md fixed bottom-5 right-5 animate-bounce"
        aria-label="Scroll to Top"
        title="Scroll to Top"
      >
        <arrow-up-02 class="w-7 h-7 text-black" />
      </button>
    </main>
  </div>
</template>

<style scoped>
/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  will-change: transform, opacity;
}
.zoom-enter-from {
  transform: scale(0.8);
  opacity: 0;
}
.zoom-leave-to {
  transform: scale(1.2);
  opacity: 0;
}
.zoom-enter-to,
.zoom-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
