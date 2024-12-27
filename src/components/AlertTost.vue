<script setup>
import { useAlertStore } from '@/stores/useAlertStore';
import { useScreens } from '@/views/screen';
import closeIcon from '@/assets/icons/closeIcon.vue';
import infoIcon from '@/assets/icons/infoIcon.vue';
import tickIcon from '@/assets/icons/tickIcon.vue';



const screenStore = useScreens();
const alertStore = useAlertStore();

// Map alert types to icons with a fallback
const iconComponent = type => ({
  success: tickIcon,
  error: closeIcon,
  warning: infoIcon,
  info: infoIcon,
}[type] || infoIcon);
</script>

<template>
  <transition-group
    name="slide"
    tag="div"
    :class="[screenStore.screenStates.width > 800 ? 'bottom-2  w-auto' : ' top-2  w-full px-4']"
    class="fixed  right-0 z-50 flex flex-col gap-2 "
    enter-active-class="transition-transform duration-500 ease-in-out"
    leave-active-class="transition-transform duration-500 ease-in-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-for="alert in alertStore.alerts"
      :key="alert.id"
      class="max-md:w-full max-lg:w-72 px-4 py-3 flex justify-between items-center border rounded-lg shadow-lg bg-white dark:bg-blue-950 dark:text-white"
      :class="[`border-${alert.type === 'success' ? 'green' : alert.type === 'error' ? 'red' : 'yellow'}-500`]"
    >
  
      <!-- Icon -->
      <div
        class="p-2 rounded-full flex items-center justify-center text-white"
        :class="[`bg-${alert.type === 'success' ? 'green' : alert.type === 'error' ? 'red' : 'yellow'}-500`]"
      >
        <!-- Dynamic Icons -->
        <component
          :is="iconComponent(alert.type)"
          class="w-6 h-6 shrink-0 text-current"
        />
      </div>

      <!-- Alert Content -->
      <div class="ml-4">
        <p
          class="font-bold"
          :class="`text-${alert.type === 'success' ? 'green' : alert.type === 'error' ? 'red' : 'yellow'}-500`"
        >
          {{ alert.type === 'success' ? 'Success!' : alert.type === 'error' ? 'Error!' : 'Warning!' }}
        </p>
        <p class="text-sm">{{ alert.message ?? "Something went wrong!" }}</p>
      </div>

      <!-- Close Button -->
     <div class="ml-auto  flex flex-row justify-end items-start  translate-x-2 -translate-y-2 ">
      <button
        @click="alertStore.removeAlert(alert.id)"
        class="p-1 text-white rounded-full  bg-red-500 hover:scale-110 ease-in-out duration-200 active:scale-95 "
        aria-label="Close alert"
      >
        <component :is="closeIcon" class="w-6 h-6" />
      </button>
     </div>
    </div>
  </transition-group>
</template>
