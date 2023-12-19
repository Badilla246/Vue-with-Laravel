import { createRouter, createWebHistory } from 'vue-router';
import UsersList from '../components/UsersList.vue';
import CustomerList from '../components/CustomerList.vue';
import SuppliersList from '../components/SupplierList.vue';  
import MerchandiseList from '../components/MerchandiseList.vue';

const routes = [
  {
    path: '/users',
    name: 'UsersList',
    component: UsersList,
  },
  {
    path: '/customers',
    name: 'CustomerList',
    component: CustomerList,
  },
  {
    path: '/merchandises',
    name: 'MerchandiseList',
    component: MerchandiseList,
  },
  {
    path: '/suppliers',
    name: 'SuppliersList',
    component: SuppliersList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
