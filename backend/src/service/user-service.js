import { prisma } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { getUserValidation, loginUserValidation, registerUserValidation, updateUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prisma.user.count({
    where: {
      username: user.username
    }
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Username name is already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return await prisma.user.create({
    data: user,
    select: {
      username: true,
      name: true
    }
  });

  
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prisma.user.findUnique({
    where: {
      username: loginRequest.username
    },
    select: {
      username: true,
      password: true
    }
  });

  if (!user) {
    throw new ResponseError(401, "Invalid Username or Password");
  }

  const isValidPass = await bcrypt.compare(loginRequest.password, user.password);

  if (!isValidPass) {
    throw new ResponseError(401, "Invalid Username or Password");
  }

  const token = uuid().toString();
  const userData =  await prisma.user.update({
    data: {
      token: token
    },
    where: {
      username: user.username
    },
    select: {
      token: true,
      username: true
    }
  });

  const todolist = await prisma.todolist.findMany({
    where: {
      username:  user.username
    },
    select: {
      todolist: true
    }
  });

  return {
    userData,
    todolist
  }
};

const get = async (username) => {
  username = validate(getUserValidation, username);

  const user = await prisma.user.findUnique({
    where: {
      username: username
    },
    select: {
      username: true,
      name: true
    }
  });

  if (!user) {
    throw new ResponseError(404, "User is Not Found");
  }

  return user;
}

const update = async (request) => {
  request = validate(updateUserValidation, request);

  const totalUserInDatabase = await prisma.user.count({
    where: {
      username: request.username
    }
  });

  if (totalUserInDatabase !== 1) {
    throw new ResponseError(404, "User is Not Found")
  }

  const data = {};
  if (request.name) {
    data.name = request.name;
  }
  if (request.password) {
    data.password = await bcrypt.hash(request.password, 10);
  }

  return await prisma.user.update({
    where: {
      username: request.username
    },
    data: data,
    select: {
      username: true,
      name: true
    }
  });
}
 
const logout = async (username) => {
  username = validate(getUserValidation, username);

  const user = await prisma.user.findUnique({
    where: {
      username: username
    }
  });

  if (!user) {
    throw new ResponseError(404, "User is not found");
  }

  return await prisma.user.update({
    where: {
      username: username
    },
    data: {
      token: null
    },
    select: false
  });
}

export default { register, login, get, update, logout };