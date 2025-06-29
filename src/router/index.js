import { createRouter, createWebHistory } from "vue-router";
import Category from "@/views/Category.vue";
import HomeView from "@/views/HomeView.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Cart from "@/views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  // {
  //   path: "/orders",
  //   name: "Orders",
  //   component: Orders,
  // },
  {
    path: "/:category",
    component: Category,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;