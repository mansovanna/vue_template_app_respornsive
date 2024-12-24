<template>
  <!-- Login Page -->
  <div class="w-full max-w-96 bg-white shadow-md p-4 rounded-md">
    <!-- Header of Page -->
    <div class="flex flex-col justify-start items-center">
      <p class="font-bold text-xl text-blue-700">Login Account</p>
      <!-- Welcome to -->
      <p class="font-normal text-gray-500 mt-2">Welcome to App Store</p>
    </div>

    <!-- Form -->
    <form class="mt-4">
      <!-- Block Email -->
      <div class="relative">
        <!-- Input Field -->
        <input
          type="text"
          v-model="data.email"
          class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 peer"
          placeholder=" "
        />
        <!-- Floating Label -->
        <label
          :class="[
            'absolute left-3 transition-all duration-300',
            data.email
              ? '-top-1/4 text-blue-500 text-sm bg-white px-1 rounded-md'
              : 'top-2 text-gray-500'
          ]"
        >
          Email
        </label>
        <!-- Validation Message -->
        <span
          v-if="showValidationMessage.email"
          class="text-red-400 text-start text-sm mt-1 block"
        >
          Email is not found
        </span>
      </div>

      <!-- End Block Email -->

      <!-- Block Password -->

      <div class="relative mt-4">
        <!-- Input Field -->
        <input
          type="text"
          v-model="data.password"
          class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 peer"
          placeholder=" "
        />
        <!-- Floating Label -->
        <label
          :class="[
            'absolute left-3 transition-all duration-300',
            data.password
              ? '-top-1/4 text-blue-500 text-sm bg-white px-1 rounded-md'
              : 'top-2 text-gray-500'
          ]"
        >
          Password
        </label>
        <!-- Validation Message -->
        <span
          v-if="showValidationMessage.password"
          class="text-red-400 text-start text-sm mt-1 block"
        >
        Password is not found
        </span>
      </div>

      <!-- End Block Password -->

      <!-- Block Button -->
       <button class=" uppercase bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 w-full">Login</button>
       <!-- End Block Button -->

       <!-- Block Footer -->
        <p class=" text-center mt-6 text-sm">Don't have an account? <router-link to="/register" class="text-blue-500">Register</router-link></p>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const data = ref({
  email: "",
  password: "",
});

const showValidationMessage = ref({
  email: false,
  password: false,
});

watch(
  () => data.value.email,
  (value) => {
    // Show validation message if email is empty
    showValidationMessage.value.email = !value;
  }
);

watch(
  () => data.value.password,
  (value) => {
    // Show validation message if password is empty
    showValidationMessage.value.password = !value;
  }
);
</script>

