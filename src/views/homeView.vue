<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import cardPost from "@/components/cardPost.vue";
import cardDepartment from "@/components/cardDepartment.vue";
import arrowLeft from "@/assets/icons/arrowLeft.vue";
import arrowRight from "@/assets/icons/arrowRight.vue";
// =================================================
import { posts, classPost } from "@/server/server";

const sidebar = ref(null);

const router = useRouter();

// ---------------
const viewVideo = (id) => {
  router.push({ name: 'class', params: { id: id }, query: { class: "Hello World!"  } });
}


const scrollRight = () => {
  sidebar.value.scrollBy({
    left: 300,
    behavior: "smooth",
  });
};
const scrollLeft = () => {
  sidebar.value.scrollBy({
    left: -300,
    behavior: "smooth",
  });
};

</script>

<template>


      
  <div
    class="w-full flex max-md:flex-col-reverse justify-end gap-2 lg:flex-row"
  >
    <!-- Block Main -->
    <div class="w-full max-lg:w-8/12 max-md:w-full flex flex-col gap-2" >
      <!-- Block Card Post -->
     <div v-for="post in posts" :key="post.id" >
        <card-post 
        :user="post.user"
        :post="post"
      />
     </div>
      <!-- End Block Card Post -->
    </div>
    <!-- End Block Main -->

    <!-- Block Sidebar -->
    <div class="w-full max-md:w-full md:w-5/12 relative">
      <!-- add overflow-x-scroll    scrollbar-hide -->
      <div

        class="p-3 max-md:p-3 max-md:border-none border rounded-md bg-white dark:text-white dark:bg-opacity-10 flex sm:flex-row md:flex-col gap-4 snap-mandatory snap-x max-lg:justify-start max-lg:items-center max-md:overflow-x-auto relative"
        ref="sidebar"
      >
        <!-- Block Card Post -->
        <card-department
        v-on:click="viewVideo(post.id)"
          v-for="post in classPost" :key="post.id"
          class="min-w-full snap-center cursor-pointer group"
         :posts="post"
        />

        <!-- End Block Card  Post -->
      </div>

      <!-- Button Control Page -->

      <button
      v-on:click="scrollLeft()"
        class="rounded-full bg-white shadow-sm absolute top-[40%] left-4 p-1 md:hidden active:bg-gray-300 animate-bounce-x1"
      >
        <arrow-left class="text-black w-7 h-7" />
      </button>

      <button
      v-on:click="scrollRight()"
        class="rounded-full bg-white shadow-sm absolute top-[40%] right-4 p-1 md:hidden active:bg-gray-300 animate-bounce-x"
      >
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
