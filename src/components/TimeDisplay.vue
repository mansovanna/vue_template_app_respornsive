<template>
    <div>
      <p>{{ time }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const time = ref('');
  
  // Function to update the time every second
  const updateTime = () => {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');  // Ensure 2 digits
    const seconds = String(now.getSeconds()).padStart(2, '0');  // Ensure 2 digits
    
    // Determine AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? String(hours).padStart(2, '0') : '12';  // Ensure 2 digits, 12 for 0 hours
  
    // Combine the time into a single string with AM/PM
    time.value = `${hours}:${minutes}:${seconds} ${period}`;
  };
  
  // Update the time when the component is mounted
  onMounted(() => {
    updateTime();
    setInterval(updateTime, 1000); // Update the time every 1000ms (1 second)
  });
  </script>
  
