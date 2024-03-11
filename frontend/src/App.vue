<template>
  <div class="container-fluid bg-light vh-100">
    <NavBar></NavBar>
    <br /><br /><br />

    <div class="text-center fw-bold ">{{ AuthStore.message }}</div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import NavBar from "./components/NavBar.vue";
import { useAuthStore } from "./stores/auth.js";
import axios from "axios";

const AuthStore = useAuthStore()

computed(async () => {
  if (AuthStore.isAuth) {
    const response = await axios.get(sda)
  }
})

// mounted() {
//   if (AuthStore.isAuth) {
//     try {
//       // usertodolist.get
//     } catch (error) {
      
//     }
//   }
// }
</script>
