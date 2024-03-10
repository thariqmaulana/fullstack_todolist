<template>
  <div class="container">
    <form class="mx-auto bg-warning w-50 text-center border pb-4">
      <div class="bg-success pb-1 mb-4 py-2">
        <h1 class="text-center text-white">Register</h1>
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
          name="name"
          id="name"
          placeholder=" name"
          class="w-75 py-1"
          v-model="name"
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
        Already have an
        <router-link to="users/login" class="link-opacity-50-hover"
          >account?</router-link
        >
      </div>
      <div>
        <Button
          @click.prevent="register"
          type="submit"
          class="bg-success text-light fw-semibold py-2 px-4 rounded-pill border border-secondary mb-3"
        >
          Register
        </Button>
      </div>
      <div v-if="isLoading">
        <span class="loader"></span>
      </div>
      <div class="mt-2">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref('');
const name = ref('');
const password = ref('');
const message = ref('')
const isLoading = ref(false)

async function register() {
  try {
    const response = await axios.post("http://localhost:3000/users", {
      username: username.value,
      password: password.value,
      name: name.value,
    });
    isLoading.value = true
    setTimeout(() => {
      router.push('users/login');
    }, 1500)
    console.info(response)
  } catch (error) {
    console.info(error);
    message.value = error.response.data.errors;
  }
}
</script>

<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>
