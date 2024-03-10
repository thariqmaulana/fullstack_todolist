import { prisma } from "../app/database.js";
import { createTodolist } from "../validation/todolist-validation.js"
import { validate } from "../validation/validation.js"


const create = async (user, todolist) => {
  console.info(todolist)
  todolist.todolist = validate(createTodolist, todolist.todolist);
  todolist.username = user.username;
  todolist.created_at = new Date("2020-10-10")
  console.info(todolist)

  return await prisma.todolist.create({
    data: todolist,
    select: {
      todolist: true
    }
  });
}

export default {
  create,
}