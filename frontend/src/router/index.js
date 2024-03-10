import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue"
import registerPage from "../views/RegisterPage.vue"
import HomePage from "../views/HomePage.vue"
import ErrorPage from "../views/ErrorPage.vue"
import MainPage from "../views/MainPage.vue"
import createTodoPage from "../views/CreateTodoPage.vue"

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/users',
    name: 'registerPage',
    component: registerPage,
  },
  {
    path: '/users/:username',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/users/:username/create',
    name: 'createTodoPage',
    component: createTodoPage
  },
  {
    path: '/users/login',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
