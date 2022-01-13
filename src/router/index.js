import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import SignIn from '../views/SignIn.vue'
import MorePages from '../views/MorePages.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/contactUs',
    name:'ContactUs',
    component:ContactUs
  },
  {
    path:'/signIn',
    name:'SignIn',
    component:SignIn
  },
  {
    path:'/morePages/:page',
    name:'MorePages',
    component:MorePages,
    props:true
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
