import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTodolistStore = defineStore('todolist', () => {
  const todolist = reactive([]);

  function $reset() {
    todolist.value = [];
  }

  return {todolist, $reset}
});