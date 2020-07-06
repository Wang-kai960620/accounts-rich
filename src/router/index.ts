import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Bill from "@/views/Bill.vue";
import Statistics from "@/views/Statistics.vue";
import NotFond from "@/views/NotFond.vue";
import Tags from "@/views/Tags.vue";
import Detail from "@/views/Detail.vue";
import IconMap from "@/views/IconMap.vue";
import NumberMap from "@/views/NumberMap.vue";
import Setting from "@/views/Setting.vue";

Vue.use(VueRouter);


const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "./bill"
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
    component: Tags
  },
  {
    path:"/iconMap",
    component:IconMap
  },
  {
    path:"/numberMap",
    component:NumberMap
  },
  {
    path:"/setting",
    component:Setting
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
