<template>
  <div class="container-lg table-responsive-lg">
    <button class="btn btn-primary">
      <router-link
        :to="to"
        class="text-white fw-semibold px-3"
        style="text-decoration: none"
        >Create</router-link
      >
    </button>
    <table class="table table-striped caption-top">
      <caption>
        List of todolist
      </caption>
      <thead class="table-light">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Todo</th>
          <th scope="col">Done</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <th>1</th>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.info(route);
const username = route.params.username;
const to = `/users/${username}/create`;
</script>
