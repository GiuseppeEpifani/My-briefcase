import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Proyects from "../views/Proyects.vue";
import Contact from "../views/Contact.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "about",
    component: About
  },
  {
    path: "/services",
    name: "services",
    component: Services
  }, {
    path: "/proyects",
    name: "proyects",
    component: Proyects
  }, {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  routes
});

export default router;
