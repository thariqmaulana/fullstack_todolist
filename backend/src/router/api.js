import express from "express"
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";
import todolistController from "../controller/todolist-controller.js";

const userRouter = express.Router();
userRouter.use(authMiddleware);

// User API
userRouter.delete('/users/logout', userController.logout);

// Todolist API
userRouter.post('/users/:username/create', todolistController.create);
userRouter.delete('/users/:username', todolistController.remove);

export {userRouter}