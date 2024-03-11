<template>
  <nav class="navbar navbar-expand- bg-warning rounded" aria-current="page">
    <div class="text-white">
      <router-link to="/" class="ms-3 text-white navbar-brand"
        >Brand</router-link
      >
    </div>
    <div v-if="authStore.isAuth" class="d-flex">
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        class="form-control me-3"
      />
      <button
        type="button"
        class="text-white btn btn-secondary btn-outline-dark me-3"
      >
        Search
      </button>
      <button
        @click="logout"
        type="button"
        class="text-white btn btn-danger me-3"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../stores/auth.js';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useTodolistStore } from '../stores/todolist.js';

const authStore = useAuthStore();
const router = useRouter();
const todolistStore = useTodolistStore();

async function logout() {
  try {
    const response = await axios.delete("http://localhost:3000/users/logout", {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    todolistStore.$reset;
    authStore.isAuth = false;
    router.push('/');
    localStorage.clear()
    console.info(localStorage.getItem('token'))
    console.info(response);
  } catch (error) {
    authStore.message = error.response.data.errors;
    console.info(error);
  }
}
</script>
