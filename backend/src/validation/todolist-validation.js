import Joi from "joi";

const createTodolistValidation = Joi.string().min(3).max(100).required();

const getTodolistValidation = Joi.number().positive().required();

export {
  createTodolistValidation, 
  getTodolistValidation,
}



