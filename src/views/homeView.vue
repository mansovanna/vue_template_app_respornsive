<script setup>
import cardPost from "@/components/cardPost.vue";
import cardDepartment from "@/components/cardDepartment.vue";
import arrowLeft from "@/assets/icons/arrowLeft.vue";
import arrowRight from "@/assets/icons/arrowRight.vue";
// =================================================
import { useScreens } from "@/stores/screen";
import { ref } from "vue";
const sidebar = ref(null);

const screens = useScreens();

// ---------------
const postImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0c4tEJnFkLl96ezTJaarhF9SOObARZ5PBg&s";
</script>

<template>
  <div
    class="w-full  flex max-md:flex-col-reverse justify-end gap-2 lg:flex-row "
  >
    <!-- Block Main -->
    <div class="w-full max-lg:w-8/12 max-md:w-full flex flex-col gap-2">
      <card-post
        :name="'Jone Doe'"
        :title="'Hello World this is app. welcome to app'"
        :path-post-image="'https://img.freepik.com/free-psd/world-bicycle-day-vertical-poster-template-with-biker_23-2149400264.jpg?semt=ais_hybrid'"
        :likes="100"
        :unlike="10"
        :comment="100"
      />
      <card-post
        :name="'Jone Doe'"
        :title="'Hello World this is app. welcome to app'"
        :path-post-image="'https://m.media-amazon.com/images/I/61bSKe21IlL._AC_UF894,1000_QL80_.jpg'"
        :likes="100"
        :unlike="10"
        :comment="100"
      />
      <card-post
        :name="'Jone Doe'"
        :title="'Hello World this is app. welcome to app'"
        :path-post-image="'https://fixapa.com/wp-content/uploads/2019/06/Banner-Design-1024x1024.png'"
        :likes="100"
        :unlike="10"
        :comment="100"
      />
    

<div v-for="count in 100" :key="count">
  <card-post
        :name="'Jone Doe'"
        :title="'Hello World this is app. welcome to app'"
        :path-post-image="'https://coreldrawdesign.com/resources/previews/preview-vector-illustration-banner-design-with-ai-file-for-free-1704697146.jpg'"
        :likes="100"
        :unlike="10"
        :comment="100"
      />
</div>
      
    </div>
    <!-- End Block Main -->

    <!-- Block Sidebar -->
    <div class="w-full max-md:w-full md:w-5/12 relative">
      <!-- add overflow-x-scroll    scrollbar-hide -->
      <div
        class="p-3 border rounded-md bg-white dark:text-white dark:bg-opacity-10 flex sm:flex-row md:flex-col gap-4 snap-mandatory snap-x max-lg:justify-start max-lg:items-center max-md:overflow-x-auto relative"
        ref="sidebar"
      >
        <!-- Block Card Post -->
        <card-department class="min-w-full snap-center" :name="'Computer Science 1'" />
        <card-department class="min-w-full snap-center" :name="'Computer Science 2'" />
        <card-department class="min-w-full snap-center" :name="'Computer Science 3'" />
        <card-department class="min-w-full snap-center" :name="'Computer Science 4'" />
        <card-department class="min-w-full snap-center" :name="'Computer Science 5'" />
        <!-- End Block Card  Post -->
      </div>

        <!-- Button Control Page -->

        <button class="rounded-full bg-white shadow-sm absolute top-[40%]  left-4 p-1 md:hidden  active:bg-gray-300 animate-bounce-x1 ">
        <arrow-left class="text-black w-7 h-7" />
      </button>

      <button class="rounded-full bg-white shadow-sm absolute top-[40%]  right-4 p-1 md:hidden active:bg-gray-300 animate-bounce-x">
        <arrow-right class="text-black w-7 h-7" />
      </button>
    <!-- End Button Control Page -->
    </div>
    <!-- End Block Sidebar -->
  </div>
</template>

<style scoped>
/* Add any scoped styles here if necessary */
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
</style>
