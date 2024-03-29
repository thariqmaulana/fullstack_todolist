import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = express.Router();
publicRouter.post('/users', userController.register);
publicRouter.post('/users/login', userController.login);

export { publicRouter }