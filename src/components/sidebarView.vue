<script setup>
import MenuView from "./menuView.vue";
import dashboardIcon from "@/assets/icons/dashboardIcon.vue";
import infoIcon from "@/assets/icons/infoIcon.vue";
import arrowLeft from "@/assets/icons/arrowLeft.vue";
import settingIcon from "@/assets/icons/settingIcon.vue";
import courseIcon from "@/assets/icons/courseIcon.vue";
import { useMenuSlot } from "@/stores/menuController";

import TimeDisplay from "./TimeDisplay.vue";

const slotMenu = useMenuSlot();
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white relative">
    <!-- selected menu low -->
      <button v-on:click="slotMenu.controllerMenuIsOn()" class="p-1 rounded-full bg-red-400 active:bg-red-500 shadow-md absolute -right-5 top-3 lg:hidden">
        <arrow-left class="w-7 h-7 text-white"/>
      </button>
    <!-- End selected menu low -->
    <!-- Header Section -->
    <!-- bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-50% to-indigo-500 to-90% -->
    <div class="h-36 p-4 flex flex-col items-start justify-end gap-2 border-b">
      <!-- Header Placeholder -->
      <div class=" flex flex-row items-center gap-2">
        <!-- Logo Placeholder -->
        <img
          src="../assets/images/profile.png"
          alt="Profile"
          class="size-16 rounded-full border-2 border-blue-500 shadow-md"
        />
        <!-- End Logo Placeholder -->

        <div>
          <h1 class="font-semibold">Jone Doe</h1>
          <p class="text-sm text-gray-500">Admin</p>
        </div>
      </div>
      <!--  -->
      <div class="w-full  flex flex-grow border size-10 justify-center items-center text-lg font-semibold">
        <time-display/>
      </div>
    </div>

    <!-- Menu Section -->
    <p class="p-4 font-medium text-md">Menu Class</p>
    <div class="grid grid-cols-4 gap-3 px-4 flex-grow items-start">
      <menu-view :title="'Home'" :path="'home'" :icon="dashboardIcon"/>
      <menu-view :title="'Course'" :path="'course'" :icon="courseIcon"/>
      <menu-view :title="'Setting'" :path="'setting'" :icon="settingIcon"/>
      <menu-view :title="'About'" :path="'about'" :icon="infoIcon"/>
    </div>

    <!-- Footer Section -->
    <div class="w-full flex justify-center items-center border-t p-4 ">
      <p class="text-sm">
        ©
        {{
          new Date().getFullYear() + " " + new Date().toLocaleTimeString()
        }}
        All rights reserved.
      </p>
    </div>
  </div>
</template>
