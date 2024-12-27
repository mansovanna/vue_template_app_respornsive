
<script setup>
import { userAuthStore } from "@/stores/auth";
import { ref, watch, } from "vue";

const data = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const showValidationMessage = ref({
  name: false,
  email: false,
  password: false,
  password_confirmation: false,
});

// Watchers to show validation messages
watch(
  () => data.value.name,
  (value) => (showValidationMessage.value.name = !value)
);
watch(
  () => data.value.email,
  (value) => (showValidationMessage.value.email = !value)
);
watch(
  () => data.value.password,
  (value) => (showValidationMessage.value.password = !value)
);
watch(
  () => data.value.password_confirmation,
  (value) => (showValidationMessage.value.password_confirmation = !value)
);

// Handle form submission

</script>


<template>
  <!-- Register Page -->
  <div class="max-md:w-10/12 max-lg:w-4/12 w-3/12 bg-white shadow-md p-4 rounded-md">
    <!-- Header of Page -->
    <div class="flex flex-col justify-start items-center">
      <p class="font-bold text-xl text-blue-700">Register Account</p>
      <!-- Welcome to -->
      <p class="font-normal text-gray-500 mt-2">Welcome to App Store</p>
    </div>

    <!-- Form -->
    <form @submit.prevent="userAuthStore().register(data)" class="mt-4">
      <!-- Block Username -->
      <div class="relative">
        <input
          type="text"
          v-model="data.name"
          class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 peer"
          placeholder=" "
        />
        <label
          :class="[
            'absolute left-3 transition-all duration-300',
            data.name
              ? '-top-1/4 text-blue-500 text-sm bg-white px-1 rounded-md'
              : 'top-2 text-gray-500',
          ]"
        >
          Name
        </label>
        <span
          v-if="showValidationMessage.name || userAuthStore().errors.name"
          class="text-red-400 text-sm mt-1 block"
          >{{ userAuthStore().errors.name }}</span
        >
      </div>

      <!-- Block Email -->
      <div class="relative mt-4">
        <input
          type="text"
          v-model="data.email"
          class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 peer"
          placeholder=" "
        />
        <label
          :class="[
            'absolute left-3 transition-all duration-300',
            data.email
              ? '-top-1/4 text-blue-500 text-sm bg-white px-1 rounded-md'
              : 'top-2 text-gray-500',
          ]"
        >
          Email
        </label>
        <span
          v-if="showValidationMessage.email ||  userAuthStore().errors.email "
          class="text-red-400 text-sm mt-1 block"
          >{{ userAuthStore().errors.email }}</span
        >
      </div>

      <!-- Block Password -->
      <div class="relative mt-4">
        <input
          type="password"
          v-model="data.password"
          class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 peer"
          placeholder=" "
        />
        <label
          :class="[
            'absolute left-3 transition-all duration-300',
            data.password
              ? '-top-1/4 text-blue-500 text-sm bg-white px-1 rounded-md'
              : 'top-2 text-gray-500',
          ]"
        >
          Password
        </label>
        <span
          v-if="showValidationMessage.password ||  userAuthStore().errors.password"
          class="text-red-400 text-sm mt-1 block"
          >{{ userAuthStore().errors.password }}</span
        >
      </div>

      <!-- Block Confirm Password -->
      <div class="relative mt-4">
        <input
          type="password"
          v-model="data.password_confirmation"
          class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 peer"
          placeholder=" "
        />
        <label
          :class="[
            'absolute left-3 transition-all duration-300',
            data.password_confirmation
              ? '-top-1/4 text-blue-500 text-sm bg-white px-1 rounded-md'
              : 'top-2 text-gray-500',
          ]"
        >
          Confirm Password
        </label>
        <span
          v-if="showValidationMessage.password_confirmation || userAuthStore().errors.password_confirmation"
          class="text-red-400 text-sm mt-1 block"
          >{{ userAuthStore().errors.password_confirmation }}</span
        >
      </div>

      <!-- Block Button -->
      <button
        class="uppercase bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 w-full"
      >
        Register
      </button>
    </form>

    <!-- Block Footer -->
    <p class="text-center mt-6 text-sm">
      Do you have an account?
      <router-link to="/login" class="text-blue-500">Login</router-link>
    </p>
  </div>
</template>
