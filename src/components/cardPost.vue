<script setup>
import moreIcon from "@/assets/icons/moreIcon.vue";
import defaultProfile from "@/assets/images/profile.png";
import thumbsUpIcon from "@/assets/icons/thumbsUpIcon.vue";
import thumbsdown from "@/assets/icons/thumbsdown.vue";
import comment from "@/assets/icons/comment.vue";
const props = defineProps({
  user: Object,
  post: Object,
});
</script>

<template>
  <div
    class="p-5 border bg-white dark:bg-opacity-10 dark:text-white rounded-md"
  >
    <!-- header -->
    <div class="flex flex-row justify-between items-center">
      <!-- post profile -->
      <div class="flex flex-row justify-start items-center gap-2">
        <!-- logo -->
        <img
          :src="props.pathImage ? props.pathImage : defaultProfile"
          alt="Image"
          class="size-12 border rounded-full border-blue-500 active:border-red-300"
        />
        <!-- End logo -->

        <!-- post information -->
        <div class="flex flex-col justify-center items-start">
          <p class="font-semibold">
            {{ props.user ? props.user.name : "require name" }}
          </p>
          <p class="text-xs text-gray-500">
            {{ props.post.create_at ? props.post.create_at : "require date" }}
          </p>
        </div>
        <!-- End post information -->
      </div>
      <!-- End post profile -->

      <!-- more -->
      <button class="relative flex flex-row justify-center items-center">
        <more-icon
          class="w-7 h-7 text-black dark:text-white active:text-slate-300"
        />
      </button>
      <!-- End more -->
    </div>
    <!-- End header -->

    <!-- Post Image -->
    <div class="w-full flex justify-center my-4">
      <img
        v-if="props.post.image_path"
        :src="props.post.image_path"
        class="rounded-md"
        alt=""
      />
    </div>
    <!-- End Post Image -->

    <!-- Block title -->
    <p v-if="props.post.title" class="text-lg font-semibold">
      {{ props.post.title }}
    </p>

    <!-- End Block title -->

    <!-- Block Body -->
    <p v-if="props.post.body" class="text-md">{{ props.post.body }}</p>
    <!-- End Block Body -->
  </div>
</template>
