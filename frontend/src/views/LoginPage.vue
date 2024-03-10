<template>
  <div class="container">
    <form class="mx-auto bg-warning w-50 text-center border pb-4">
      <div class="bg-success pb-1 mb-4">
        <h1 class="text-center text-white">Login</h1>
      </div>
      <div class="mb-3">
        <Input
          type="text"
          name="username"
          id="username"
          placeholder=" username"
          class="w-75 py-1"
          v-model="username"
        />
      </div>
      <div class="mb-3">
        <Input
          type="text"
          name="password"
          id="password"
          placeholder=" password"
          class="w-75 py-1"
          v-model="password"
        />
      </div>
      <div class="fs-5 mb-3">
        Dont have an
        <router-link to="/users" class="link-opacity-50-hover"
          >account?</router-link
        >
      </div>
      <div>
        <Button
          @click.prevent="login"
          type="submit"
          class=" bg-success text-light fw-semibold py-2 px-4 rounded-pill border border-secondary"
        >
          Login
        </Button>
      </div>
      <div>
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { ref } from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import {useAuthStore} from "../stores/auth.js"
import { useTodolistStore } from "../stores/todolist.js";

const username = ref('');
const password = ref('');
const message = ref('');
const router = useRouter();
const authStore = useAuthStore();
const todolistStore = useTodolistStore();

async function login() {
  try {
    const response = await axios.post("http://localhost:3000/users/login", {
      username: username.value,
      password: password.value,
    });
    localStorage.setItem('token', response.data.data.userData.token);
    authStore.isAuth = true;
    router.push(`/users/${response.data.data.userData.username}`);
    for (let i = 0; i < response.data.data.todolist.length; i++) {
      todolistStore.todolist.push(response.data.data.todolist[i])
    }
    console.info(response);
  } catch (error) {
    console.info(error);
    message.value = error.response.data.errors;
  }
}
</script>
