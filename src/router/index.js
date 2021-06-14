import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import InvoiceView from "../views/InvoiceView.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
    meta: {
      title: "Invoice"
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach(async (to, from, next) => {

  document.title = `${to.meta.title} | Invoice App`

  next()
})

export default router;