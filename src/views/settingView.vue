<script setup>
import userAccountIcon from "@/assets/icons/userAccountIcon.vue";
import emailIcon from "@/assets/icons/emailIcon.vue";
import callIcon from "@/assets/icons/callIcon.vue";
import calenderIcon from "@/assets/icons/calenderIcon.vue";
import userCard from "@/components/userCard.vue";
import editIcon from "@/assets/icons/editIcon.vue";
import arrowRight from "@/assets/icons/arrowRight.vue";
import squarelock02 from "@/assets/icons/squarelock02.vue";
import earthIcon from "@/assets/icons/earthIcon.vue";
import moonIcon from "@/assets/icons/moonIcon.vue";
import sunIcon from "@/assets/icons/sunIcon.vue";
import { useDarkModeStore } from "@/stores/darkMode";
import { useAlertStore } from "@/stores/useAlertStore";

const alertStore = useAlertStore();

const storeDarkMode = useDarkModeStore();
</script>

<template>
  <div class="flex flex-row gap-2 max-md:flex-col max-md:gap-3 dark:text-white">
    <!-- Block Account -->
    <div class="w-4/5 max-md:w-full p-4 bg-white rounded-md  dark:bg-opacity-[0.15] shadow-lg dark:shadow-slate-600 transition-colors duration-1000 ease-in-out">
      <h1 class="font-medium">Account </h1>
      <!-- Profile Image -->
      <div class="flex flex-row justify-center items-center gap-2 mt-6">
        <img
          class="size-36 rounded-full outline outline-blue-500"
          src="../assets/images/profile.png"
          alt=""
        />
      </div>
      <!-- End Profile Image -->

      <!-- information -->
      <div class="mt-6 grid max-sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  gap-2 ">
        <user-card
            :icon="userAccountIcon"
            class="w-full border p-2 rounded-md"
            title="Jonh Smith"
            :color="'text-white  '"
            :bgColor="'bg-blue-400'"
            :padding="'p-1'"
            :size="'8'"
          />

          <user-card
            :icon="emailIcon"
            class="w-full border p-2 rounded-md"
            title="jonhsmith@gmail.com"
            :color="'text-white  '"
            :bgColor="'bg-red-400'"
            :padding="'p-1'"
              :size="'8'"
          />

          <user-card
            :icon="calenderIcon"
            class="w-full border p-2 rounded-md"
            title="30/10/2022"
            :color="'text-white  '"
            :bgColor="'bg-blue-400'"
            :padding="'p-1'"
              :size="'8'"
          />

          <user-card
            :icon="callIcon"
            class="w-full border p-2 rounded-md"
            title="0967574404"
            :color="'text-white  '"
            :bgColor="'bg-green-400'"
            :padding="'p-1'"
              :size="'8'"
          />
      </div>
      <!-- End Information -->
    </div>
    <!-- End Block Account -->

    <!-- Block Setting -->
    <div
      class="w-3/5 max-md:w-full px-4 pt-4 pb-2 bg-white rounded-md  dark:bg-opacity-[0.15] shadow-lg dark:shadow-slate-600 transition-colors duration-1000 ease-in-out"
    >
      <h1 class="font-medium">Setting</h1>
      <!-- Setting -->
      <div class="grid grid-cols-1 divide-y mt-4">
        <button
            v-on:click="alertStore.addAlert('warning', 'Sorry!, The feature Edit Profile page is not develop ready! ')"
          class="active:bg-gray-50 hover:bg-gray-100   dark:hover:text-black rounded-sm p-2"  >
          <user-card
            :icon="editIcon"
            class="w-full"
            title="Edit Profile"
            :color="'text-white  '"
            :bgColor="'bg-blue-400'"
            :padding="'p-1'"
            :learning="arrowRight"
            :size="'8'"
          />
        </button>

        <button
         v-on:click="alertStore.addAlert('warning', 'Sorry!, The feature Change Password page is not develop ready! ', 9000)"
        class="active:bg-gray-50 hover:bg-gray-100 dark:hover:text-black rounded-sm p-2">
          <user-card
            :icon="squarelock02"
            class="w-full"
            title="Change Password"
            :color="'text-white'"
            :bgColor="'bg-red-400'"
            :padding="'p-1'"
            :learning="arrowRight"
            :size="'8'"
          />
        </button>

        <!-- ------------------ -->
          <!-- Dark Mode Buttons -->
        <label v-on:click="storeDarkMode.toggleDarkMode()"
          class="active:bg-gray-50 hover:bg-gray-100 dark:hover:text-black rounded-sm p-2 flex flex-row justify-between items-center cursor-pointer"
        >
          <!-- unchecked -->

          <user-card
            :icon="storeDarkMode.isDarkMode ? moonIcon : sunIcon"
            class="w-1/2 "
            title="Dark Mode"
            :color="'text-white'"
            :bgColor="'bg-yellow-500'"
            :padding="'p-1'"
            :size="'8'"
          />
          <!-- checked -->
          <input type="checkbox" class="sr-only peer"
          v-model="storeDarkMode.darkMode"
          @change="storeDarkMode.toggleDarkMode"
          />
          <div
            class="
            relative w-[3.72rem] h-8 bg-gray-200 
            rounded-full peer dark:bg-gray-700 
            peer-checked:after:translate-x-full 
            rtl:peer-checked:after:-translate-x-full 
            peer-checked:after:border-white after:content-[''] 
            after:absolute after:top-0.5 after:start-[2px]
            after:bg-white after:border-gray-300 after:border 
            after:rounded-full after:h-7 after:w-7 after:transition-all 
            dark:border-gray-600 peer-checked:bg-yellow-500
            "
          ></div>
        </label>
        <!-- End Dark Mode Buttons -->
        <!-- ------------------ -->

        <button
         v-on:click="alertStore.addAlert('warning', 'Sorry!, The feature Language page is not develop ready! ')"
        class="active:bg-gray-50 hover:bg-gray-100 dark:hover:text-black rounded-sm p-2">
          <user-card
            :icon="earthIcon"
            class="w-full"
            title="Language"
            :color="'text-white'"
            :bgColor="'bg-yellow-500'"
            :padding="'p-1'"
            :learning="arrowRight"
            :size="'8'"
          />
        </button>

       
      </div>
      <!-- End Setting -->

    </div>
    <!-- End Block Setting -->
  </div>
</template>
