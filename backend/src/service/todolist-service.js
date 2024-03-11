import { prisma } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { createTodolistValidation, getTodolistValidation } from "../validation/todolist-validation.js"
import { validate } from "../validation/validation.js"


const create = async (user, todolist) => {
  console.info(todolist)
  todolist.todolist = validate(createTodolistValidation, todolist.todolist);
  todolist.username = user.username;
  todolist.created_at = new Date("2020-10-10")
  console.info(todolist)

  return await prisma.todolist.create({
    data: todolist,
    select: {
      todolist: true,
      id: true
    }
  });
}

const remove = async (user, request) => {
  console.info(request)
  console.info(request.todoId)
  request.todoId = validate(getTodolistValidation, request.todoId)

  const totalTodolistInDatabase = await prisma.todolist.count({
    where: {
      id: request.todoId,
      username: user.username
    }
  });

  if (totalTodolistInDatabase !== 1) {
    throw new ResponseError(404, "Todolist is not found");
  }

  return await prisma.todolist.delete({
    where: {
      id: request.todoId
    }
  });
}

export default {
  create,
  remove,
}