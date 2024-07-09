<template>
    <div>
      <el-table :data="tasks">
        <el-table-column prop="title" label="Title" />
        <el-table-column prop="description" label="Description" />
        <el-table-column prop="status" label="Status" />
      </el-table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useNuxtApp } from '#app';
  
  const tasks = ref([]);
  
  const { $axios } = useNuxtApp();
  
  const fetchTasks = async () => {
    try {
      const response = await $axios.get('/tasks', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      tasks.value = response.data;
    } catch (error) {
      console.error('Error al obtener las tareas', error);
    }
  };
  
  onMounted(fetchTasks);
  </script>
  