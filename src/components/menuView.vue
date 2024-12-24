<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
    title: String,
    path: String,
    icon: [Object, String],
})


</script>

<template>
    <div class="flex flex-col justify-center items-center  text-sm space-x-0" :class="[route.name == path ? 'text-blue-500' : 'text-gray-500']">
        <!--  -->
        <RouterLink :to="{name: path? path : 'home'}"  class="size-12 rounded-full border flex flex-row justify-center items-center " :class="[route.name == path ? 'bg-blue-600 text-white' : 'bg-transparent']" >
            <component :is="icon" class="w-7 h-7" />
        </RouterLink>
        <!-- title Menu -->
        <p>{{props.title ? props.title : 'require pages'}}</p>
    </div>
</template>