import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
// import Home from "../views/Home.vue";
import Money from "@/views/Money.vue";
import Bill from "@/views/Bill.vue";
import Statistics from "@/views/Statistics.vue";
import NotFond from "@/views/NotFond.vue";
import My from "@/views/My.vue";
import Detail from "@/views/Detail.vue";

Vue.use(VueRouter);


const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "./money"
  },
  {
    path: "/money",
    component: Money
  },
  {
    path: "/bill",
    component: Bill
  },
  {
    path: "/statistics",
    component: Statistics
  },
  {
    path: "/detail",
    component: Detail
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "*",
    component: NotFond
  }
];

const router = new VueRouter({
  routes
});

export default router;
