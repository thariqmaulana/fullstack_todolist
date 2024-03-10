<template>
  <div class="container-lg">
    <form class="form-inline" @submit.prevent="addTodo">
      <div class="form-group row">
        <label
          class="col-sm-2 text-center text-secondary text-dark fw-bold"
          for="todo"
        >
          TODOLIST
        </label>
        <div class="col-sm-6">
          <Input
            type="text"
            name="todolist"
            id="todolist"
            placeholder=" todolist"
            class="w-75 py-1"
            v-model="todolist"
          />
        </div>
        <div class="col-sm-4 sm:text-center">
          <button type="submit" class="btn btn-success px-5 fw-semibold">
            ADD
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import Input from "../components/Input.vue";
import { ref } from "vue";
import axios from "axios";
import { useTodolistStore } from "../stores/todolist.js";

const todolist = ref('');
const router = useRouter();
const route = useRoute();
const username = route.params.username;
const todolistStore = useTodolistStore();

async function addTodo() {
  console.info(typeof todolist.value)
  try {
    const response = await axios.post(
      `http://localhost:3000/users/${username}/create`,
      {
        todolist: todolist.value,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    );
    console.info(typeof todolistStore.todolist)
    console.info(response); 
    todolistStore.todolist.push(response.data.data);
    router.push(`/users/${username}`)
  } catch (error) {
    // console.info(error);
  }
}
</script>
