<script setup>
import menuIcon from "@/assets/icons/menuIcon.vue";
import notifycation from "@/assets/icons/notifycation.vue";
import searchIcon from "@/assets/icons/searchIcon.vue";
import profileCard from "./profileCard.vue";
import cardHover from "./cardHover.vue";
import { useMenuSlot } from "@/stores/menuController";

import { useScreens } from "@/views/screen";

const screen = useScreens();

const menuSlot = useMenuSlot();
</script>

<template>
  <div class="flex flex-row justify-between items-center ">
    <!-- Block Menu -->
    <button v-on:click="menuSlot.controllerMenuIsOn()">
      <menu-icon class="w-7 h-7   active:text-slate-300" />
    </button>
    <!-- End Block Menu -->
    <p>Width: {{ screen.screenW }}px</p>
    <!-- Block Menu -->
    <div class="flex flex-row justify-center items-center gap-4">
      <!-- search -->
      <button
        class="relative group flex flex-row justify-center items-center border rounded-full p-1 border-transparent active:border-blue-500"
      >
        <search-icon class="w-7 h-7  active:text-slate-300" />

         <!-- Hover Menu -->
         <card-hover :title="'Seacrch View'" :duration="500" />
        <!-- End Hover Menu -->
      </button>
      <!-- End search -->
      <!-- notification -->
      <button
        class="relative group flex flex-row justify-center items-center border rounded-full p-1 border-transparent active:border-blue-500"
      >
        <notifycation class="w-7 h-7  active:text-slate-300" />
        <!-- message count -->
        <span
          class="absolute top-0 right-0 px-[4.5px] text-xs leading-tight text-white bg-red-500 rounded-full"
          >9</span
        >

        <!-- Hover Menu -->
        <card-hover :title="'Notification View'" :duration="500" />
        <!-- End Hover Menu -->
      </button>
      <!-- End notification -->

      <!-- profile persoanl -->
      <button class="relative group">
        <img
          src="../assets/images/profile.png"
          alt="Image"
          class="size-10 border rounded-full border-blue-500 active:border-red-300"
        />

        <!-- Hover Menu -->
        <card-hover :title="'Profile View'" :duration="500" />
        <!-- End Hover Menu -->

        <!-- Profile Card -->
        <profile-card
          class="absolute top-10 right-0 max-lg:max-w-72 p-4 bg-white shadow-sm hidden"
        />
        <!-- End Profile Card -->
      </button>
    </div>
  </div>
</template>
