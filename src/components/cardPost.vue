<script setup>
import moreIcon from "@/assets/icons/moreIcon.vue";
import defaultProfile from "@/assets/images/profile.png";
import thumbsUpIcon from "@/assets/icons/thumbsUpIcon.vue";
import thumbsdown from "@/assets/icons/thumbsdown.vue";
import comment from "@/assets/icons/comment.vue";
const props = defineProps({
  name: String,
  title: String,
  pathImage: String,
  pathPostImage: String,
  likes: Number,
  unlike: Number,
  comment: Number,
});
</script>

<template>
  <div class="p-5 border bg-white dark:bg-opacity-10 dark:text-white rounded-md">
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
            {{ props.name ? props.name : "require name" }}
          </p>
          <p class="text-xs text-gray-500">30-12-2022 10:00 PM</p>
        </div>
        <!-- End post information -->
      </div>
      <!-- End post profile -->

      <!-- more -->
      <button class="relative flex flex-row justify-center items-center">
        <more-icon class="w-7 h-7 text-black dark:text-white active:text-slate-300" />
      </button>
      <!-- End more -->
    </div>
    <!-- End header -->

    <!-- Block title -->
    <p class="text-md mt-2">{{ props.title ? props.title : " " }}</p>

    <!-- End Block title -->

    <!-- Post Image -->
    <div class="w-full flex justify-center my-2">
      <img v-if="props.pathPostImage" :src="props.pathPostImage" class="rounded-md" alt="" />
    </div>
    <!-- End Post Image -->

    <!-- footer of post -->
    <div class="flex flex-row justify-between items-center pt-2 border-t">
      <div class="flex flex-row justify-start items-center gap-4">
        <!-- Block like -->
        <div class="flex flex-row justify-start items-center gap-1">
          <thumbs-up-icon class="w-6 h-6 text-blue-500 active:text-slate-300" />
          <p>Like {{ props.likes ? props.likes : "0" }} K</p>
        </div>
        <!-- End Block like -->

        <!-- Block unlike -->
        <div class="flex flex-row justify-start items-center gap-1">
          <thumbsdown class="w-6 h-6 text-blue-500 active:text-slate-300" />
          <p>Like {{ props.unlike ? props.unlike : "0" }} K</p>
        </div>
        <!-- End Block unlike -->
      </div>

      <!-- comment -->
       <div class=" flex flex-row justify-start items-center gap-1">
        <comment class="w-6 h-6 text-blue-500 active:text-slate-300" />
        <p>{{ props.comment? props.comment : "0" }} Comment</p>
       </div>
    </div>
  </div>
</template>
