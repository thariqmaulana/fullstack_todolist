import Joi from "joi";

export const createTodolist = Joi.string().min(3).max(100).required();

