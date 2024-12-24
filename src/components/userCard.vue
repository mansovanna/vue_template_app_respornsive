<script setup>
const props = defineProps({
  icon: {
    type: [Object, String],
    required: true,
  },
  learning: {
      type: [Object, String],
      default: null,
    },
  title: {
    type: String,
    required: true,
  },
  padding: {
    type: String,
    default: '1',
  },
  color: {
    type: String,
    default: 'black',
  },
  bgColor: {
    type: String,
    default: 'white',
  },
  borderRadius: {
    type: String,
    default: 'md',
  },
  size: {
    type: String,
    default: '7',
  },
});
</script>

<template>
 <div class="flex flex-row justify-between items-center gap-2">
  <div class="flex flex-row items-center gap-2">
    <div
      class="rounded-md"
      :class="[
       
        `${color}`,
        `${bgColor}`,
        `${borderRadius}`,
        `${padding}`,
      ]"
    >
      <component
        :is="icon"
        :class="[`w-${size}`, `h-${size}`, 'text-lg']"
      />
    </div>
    <p>{{ title }}</p>
  </div>

  <!-- Learning -->
   <div>
    <component class="w-8 h-8" v-if="learning" :is="learning" />
   </div>
   <!-- End Learning -->
 </div>
</template>
