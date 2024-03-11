<template>
  <TableTodo>
    <tr
      v-if="todolistStore.todolist.length"
      v-for="(todo, index) in todolistStore.todolist"
      :key="index"
    >
      <th>{{ index + 1 }}</th>
      <td>{{ todo.todolist }}</td>
      <td>
        <button @click="done(index)" type="button" class="btn btn-success">
          Done
        </button>
      </td>
    </tr>
  </TableTodo>
</template>

<script setup>
import TableTodo from "../components/TableTodo.vue";
import { useTodolistStore } from "../stores/todolist.js";
import { useAuthStore } from "../stores/auth.js";
import axios from "axios";
import { useRoute } from "vue-router";

const todolistStore = useTodolistStore();
const authStore = useAuthStore();
const route = useRoute();
const username = route.params.username;
console.info(username)

console.info(todolistStore.todolist);




async function done(index) {
  try {
    const response = await axios({
      method: 'delete',
      url: `http://localhost:3000/users/${username}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: {
        data: {
          todoId: todolistStore.todolist[index].id,
          adasdas: "adadasda"
        }
      }
    });
    console.info(response)
    todolistStore.todolist.splice(index, 1);
  } catch (error) {
    authStore.message = error.response.data.errors;
  }
}
</script>
