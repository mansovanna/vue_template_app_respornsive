<script setup>
const calculateFinalPrice = (price, discount) => {
  return discount > 0 ? price - (price * discount) / 100 : price;
};

const props = defineProps({
  posts: Object,
  require: true,
});
</script>

<template>
  <div class="w-full border rounded-md relative">
    <!-- Discount -->
    <p
      class="text-xs font-medium text-white bg-red-500 absolute -top-2 -left-1 border border-red-300 px-4 py-1 rounded-sm"
    >
      {{ calculateFinalPrice(props.posts.price, props.posts.discount) }} %
    </p>
    <!-- End Discount -->

    <!-- Check Status user Payment Ready -->
    <div
      class="p-1 rounded-full bg-white shadow-md absolute bottom-8 border right-1 z-10"
    >
      <!-- <lock-hide-icon class="w-7 h-7"/> -->
      <svg
        class="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
      >
        <path
          fill="#424242"
          d="M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"
        ></path>
        <path
          fill="#FB8C00"
          d="M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"
        ></path>
        <path fill="#C76E00" d="M24 28A3 3 0 1 0 24 34A3 3 0 1 0 24 28Z"></path>
      </svg>
    </div>
    <!-- End Check -->

    <!-- Image -->
    <img
      class="w-full max-xs:max-h-72 rounded-t-md object-cover"
      :src="props.posts.image_path"
      alt="Error"
    />
    <!-- End Image -->

    <!-- information -->
    <div class="px-4 py-2">
      <div class="flex flex-row justify-start items-center gap-2">
        <img
          class="rounded-full border border-blue-500 w-8 h-8 object-cover"
          src="../assets/images/profile.png"
          alt=""
        />
        <div>
          <h1 class="text-sm font-semibold">
            {{ props.posts.admin.name ? props.posts.admin.name : "No found!" }}
          </h1>
          <p class="text-xs font-medium text-gray-500">ID: {{ "0012344" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
