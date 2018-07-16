/* eslint-disable */
/*import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* eslint-disable no-new *//*
new Vue({
	el: "#app",
	router,
	store,
	template: "<App/>",
	components: { App }
});
*/
import Vue from 'nativescript-vue';
import Counter from './components/Counter';
import store from './store';
import './styles.tns.scss';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

  render: h => h(Counter),

  store,

}).$start();
