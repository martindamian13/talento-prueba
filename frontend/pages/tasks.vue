<template>
    <div>
      <h1>Your Tasks</h1>
      <TaskList />
    </div>
</template>
  
<script setup>
import TaskList from '@/components/TaskList.vue';
</script>

<script>
export default {
  middleware: 'auth',
};
</script>
  