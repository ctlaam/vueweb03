import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from 'vue-router'


// import các router
import Employee from './view/employee/EmployeeList.vue'
import General from './view/general/General.vue'
import BuyItem from './view/general/BuyItem.vue'
import Deposits from './view/general/Deposits.vue'
import ManageInvoices from './view/general/ManageInvoices.vue'
import SellItem from './view/general/SellItem.vue'
import WareHouse from './view/general/WareHouse.vue'



// định nghĩa các router
const abc = [
    { path: '/employee', name: 'Employee',component: Employee },
    { path: '/general', name: 'General',component: General },
    { path: '/buyitem', name: 'BuyItem',component: BuyItem },
    { path: '/deposits', name: 'Deposits',component: Deposits },
    { path: '/manageinvoices', name: 'ManageInvoices',component: ManageInvoices },
    { path: '/sellitem', name: 'SellItem',component: SellItem },
    { path: '/warehouse', name: 'WareHouse',component: WareHouse },
]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: abc,
})
let app = createApp(App)
app.use(router)
app.mount('#app')