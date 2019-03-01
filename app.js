require('./bootstrap');
window.Vue = require('vue');

//v-form
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.form = Form;

//vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//Vue.component('example-component', require('./components/ExampleCompnent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

import {routes} from './routes'


const router = new VueRouter({
    routes,
    //mode:'history'
});



new Vue({
    el: "#app",
    router
})