<script setup>
import { useTostAlert } from "@/stores/alertTost";

const useTost = useTostAlert();
</script>

<template>
  <div
    class="min-w-48 max-md:w-[96%] p-4 bg-white fixed bottom-5 right-4 z-50 rounded-xl shadow-lg transition-all ease-in-out duration-500 border"
    :class="[useTost.isIcon == false ? 'right-2 max-md:left-2' : ' -right-full']"
  >
    <!-- close -->
    <div class="absolute top-2 right-2">
      <button
        v-on:click="useTost.removeTost()"
        class="p-1 flex flex-row justify-center items-center rounded-full bg-red-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-5 h-5 text-white"
          fill="none"
        >
          <path
            d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <!-- End Close -->
    <div class="flex flex-row justify-start items-center gap-3">
      <!-- Icon -->
      <div
        class="p-2 rounded-full flex flex-row justify-center items-center"
        :class="[
          `${useTost.message == 'success' ? 'bg-green-500' : ''}`,
          `${useTost.message == 'warning' ? 'bg-yellow-500' : ''}`,
          `${useTost.message == 'error' ? 'bg-red-500' : ''}`,
        ]"
      >
        <!-- Icon Warning -->
        <svg
          v-if="useTost.message == 'warning'"
          class="w-7 h-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M12.2422 17V13C12.2422 12.5286 12.2422 12.2929 12.0957 12.1464C11.9493 12 11.7136 12 11.2422 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.992 8.99997H12.001"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <!-- End Icon Warning -->

        <!-- Icon Error -->
        <svg
          v-if="useTost.message == 'error'"
          class="w-7 h-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M12.2422 17V13C12.2422 12.5286 12.2422 12.2929 12.0957 12.1464C11.9493 12 11.7136 12 11.2422 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.992 8.99997H12.001"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <!-- End Icon Error -->

        <!-- Icon Success -->
        <svg
          v-if="useTost.message == 'success'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-7 h-7 text-white"
          fill="none"
        >
          <path
            d="M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94849 20.0083 9.79043 19.1075 11.4743 17.3058Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
        <!-- End Icon Success -->
      </div>
      <!-- End Icon -->
      <div class="flex flex-col justify-start items-start">
        <!-- Name -->
        <p>{{ "Warning" }}</p>
        <!-- End Name -->

        <!-- Title -->
        <p class="text-sm">
          {{ useTost.titles ? useTost.titles : "No required!" }}
        </p>
        <!-- End Title -->
      </div>
    </div>
  </div>
</template>
