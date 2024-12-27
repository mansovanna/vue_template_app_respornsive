<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import videoFrame from "@/components/videoFrame.vue";

import { videos } from "../server/server.js";

const route = useRoute();
const router = useRouter();

// Track the current video
const currentVideo = ref({
  src: videos[0].src,
  poster: videos[0].poster,
  caption: videos[0].title,
});

// Select a video when a user clicks on a list item
const selectVideo = (video) => {
  currentVideo.value.src = video.src;
  currentVideo.value.poster = video.poster;
  currentVideo.value.caption = video.title;
};

const backPage = () => {
  if (router) {
    router.back();
  }
};
</script>


<template>
  <div
    class="w-full   flex max-md:flex-col flex-row justify-start items-start gap-4 dark:text-white"
  >
    <!-- Video with frame -->
    <video-frame
      :src="currentVideo.src"
      :poster="currentVideo.poster"
      :caption="currentVideo.caption"
      :showCaption="true"
    />
    <!-- End Video with frame -->

    <!-- Sidebar with Video List -->
    <div
      class="p-4 dark:bg-slate-800 bg-white rounded-md max-md:w-full w-4/12"
    >
      <!-- Title Video -->
      <p class="font-semibold text-lg">
        Video Page View Class {{ route.params.id }}
      </p>
      <!-- End Title Video -->

      <hr class="border-gray-600  my-2" />

      <!-- List of Videos -->
    <div class="w-full max-md:min-h-80 flex flex-col gap-2 overflow-auto">
      <div
        v-for="video in videos" 
        :key="video.id"
        class=" group p-2 dark:bg-slate-700 rounded-md dark:hover:bg-slate-600 border shadow-lg hover:bg-slate-300  duration-200 ease-in-out cursor-pointer flex items-center gap-4"
        :class="{ 'bg-slate-600 dark:bg-blue-800 text-white': video.src === currentVideo.src }"
        @click="selectVideo(video)"
      >
        <img
          v-if="video.poster"
          :src="video.poster"
          alt="Poster"
          class="w-16 h-16 object-cover rounded-md group-hover:outline group-hover:outline-pink-500 duration-300 ease-in-out"
        />
        <span>{{ video.title }}</span>
      </div>
    </div>
      <!-- End List of Videos -->
    </div>
    <!-- End Sidebar -->
  </div>
</template>
