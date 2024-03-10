<template>
  <div class="container-fluid bg-light vh-100">
    <NavBar></NavBar>
    <br /><br /><br />

    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Input from "./components/Input.vue";
</script>
