<template>
  <TableTodo>
    <tr v-if="todolistStore.todolist.length" v-for="(todo, index) in todolistStore.todolist" :key="index">
      <th>{{ index + 1 }}</th>
      <td>{{ todo.todolist }}</td>
      <td><button type="button" class="btn btn-success">
        Done
      </button></td>
    </tr>
  </TableTodo>
</template>

<script setup>
import TableTodo from "../components/TableTodo.vue";
import { useTodolistStore } from "../stores/todolist.js";

const todolistStore = useTodolistStore();
console.info(todolistStore.todolist);
</script>
