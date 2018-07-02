import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/page-home";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home
		},
		{
			path: "*",
			redirect: "/"
		}
	]
});

router.beforeEach((to, from, next) => {
	document.title = to.name;

	next();
});

export default router;
