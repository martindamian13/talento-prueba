<template>
    <form @submit.prevent="login">
      <el-input v-model="username" placeholder="Username" required />
      <el-input type="password" v-model="password" placeholder="Password" required />
      <el-button type="primary" native-type="submit">Login</el-button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useNuxtApp } from '#app';
  
  const username = ref('');
  const password = ref('');
  
  const router = useRouter();
  const { $axios } = useNuxtApp();
  
  const login = async () => {
    try {
      const response = await $axios.post('/auth/login', { username: username.value, password: password.value });
      localStorage.setItem('token', response.data.accessToken);
      router.push('/tasks');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };
  </script>
  