<script setup>

const props = defineProps({
    title: String,
    duration: Number,
    animation: String
})

</script>

<template>
  <div v-if="title"
    class="absolute top-16 rounded right-0 px-4 py-2 font-normal bg-white dark:bg-slate-600 shadow-sm text-nowrap group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all  ease-in-out pointer-events-none"
    :class="['duration-'+duration]"
  >
    {{title ? title : 'require title'}}
  </div>
</template>
