<template>
    <form @submit.prevent="register">
      <el-input v-model="username" placeholder="Username" required />
      <el-input type="password" v-model="password" placeholder="Password" required />
      <el-button type="primary" native-type="submit">Register</el-button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useNuxtApp } from '#app';
  
  const username = ref('');
  const password = ref('');
  
  const { $axios } = useNuxtApp();
  
  const register = async () => {
    try {
      await $axios.post('/auth/register', { username: username.value, password: password.value });
      // Redirecciona al inicio de sesión u otra acción
    } catch (error) {
      console.error('Error al registrar', error);
    }
  };
  </script>
  