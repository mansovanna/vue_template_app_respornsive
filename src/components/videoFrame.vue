<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

defineProps({
  src: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  controls: {
    type: Boolean,
    default: true,
  },
  poster: {
    type: String,
    default: "",
  },
});

const videoPlayer = ref(null);

// Time tracking for double arrow key presses
let lastArrowRightTime = 0;
const doubleClickThreshold = 300;

onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = false; // Ensure the video is unmuted
    videoPlayer.value.play().catch((err) => {
      console.error("Autoplay with sound is blocked by the browser:", err);
    });
  }
});

const formattedTime = ref("00:00:00");
const captureTime = () => {
  if (videoPlayer.value) {
    const currentTime = videoPlayer.value.currentTime; // Current time in seconds

    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const seconds = Math.floor(currentTime % 60);

    // Format time as HH:MM:SS
    formattedTime.value = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
};

// Function to handle spacebar and right arrow keys
const handleKeydown = (event) => {
  // Check for Spacebar press (play/pause toggle)
  if (event.code === "Space") {
    event.preventDefault();
    if (videoPlayer.value) {
      if (videoPlayer.value.paused) {
        videoPlayer.value.play();
      } else {
        videoPlayer.value.pause();
      }
    }
  }

  // Check for right arrow key press (double-click to skip 10 seconds)
  if (event.code === "ArrowRight") {
    event.preventDefault();
    const currentTime = new Date().getTime();
    if (currentTime - lastArrowRightTime <= doubleClickThreshold) {
      // Double click detected, skip 10 seconds
      if (videoPlayer.value) {
        videoPlayer.value.currentTime += 10; // Skip 10 seconds ahead
      }
    }
    lastArrowRightTime = currentTime;
  }

  // Check for left arrow key press (double-click to skip 10 seconds)
  if (event.code === "ArrowLeft") {
    event.preventDefault();
    const currentTime = new Date().getTime();
    if (currentTime - lastArrowRightTime <= doubleClickThreshold) {
      // Double click detected, skip 10 seconds
      if (videoPlayer.value) {
        videoPlayer.value.currentTime -= 10; // Skip 10 seconds back
      }
    }
    lastArrowRightTime = currentTime;
  }

  // Check for 'F' key press (toggle fullscreen)
  if (event.code === "KeyF") {
    event.preventDefault();
    toggleFullscreen();
  }
};

// Function to toggle fullscreen
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    // Request fullscreen
    if (videoPlayer.value.requestFullscreen) {
      videoPlayer.value.requestFullscreen();
    } else if (videoPlayer.value.mozRequestFullScreen) { // Firefox
      videoPlayer.value.mozRequestFullScreen();
    } else if (videoPlayer.value.webkitRequestFullscreen) { // Chrome, Safari and Opera
      videoPlayer.value.webkitRequestFullscreen();
    } else if (videoPlayer.value.msRequestFullscreen) { // IE/Edge
      videoPlayer.value.msRequestFullscreen();
    }
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
};

// Adding event listener for keydown on mount
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

// Removing the event listener on component unmount
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div class="w-10/12 max-md:w-full dark:bg-slate-800 bg-white rounded-lg p-4 flex flex-col justify-center items-start gap-4 relative">
    <!-- Block Profile Name Manage Video with blurred background -->
    <div class="flex flex-row justify-start items-center gap-2 absolute top-4 left-4 z-20 p-2 rounded-md  bg-black/20 bg-opacity-50 backdrop-blur-sm">
      <aside class="w-10 h-10 rounded-full bg-gray-300"></aside> <!-- Fixed size for profile image -->
      
      <div class="flex flex-col justify-center items-start">
        <h1 class="font-semibold text-white">Jon Doe</h1> <!-- Change text color to white for visibility -->
        <p class="text-sm font-medium text-gray-200">Student: 10K</p> <!-- Lighter text for contrast -->
        
      </div>
    </div>
    <!-- End Block Profile Name Manage Video -->

    <!-- Video Section -->
    <video @timeupdate="captureTime" ref="videoPlayer" :src="src" :controls="controls" :poster="poster" class="w-full max-h-[70vh] object-cover rounded-md border ring-4">
    </video>

    <p>{{ formattedTime }}</p>
    <div class="">
      <p class="font-semibold text-lg">{{ caption }}</p>
      <!-- Description -->
      <h1 class="font-semibold text-md">Description</h1>
     
      
    </div>
  </div>
</template>
