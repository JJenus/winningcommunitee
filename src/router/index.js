import { createRouter, createWebHistory } from "vue-router";

import UserVue from "@/views/User.vue";
import SubscriptionsVue from "@/views/account/Subscriptions.vue";
import Profile from "@/views/account/Profile.vue";
import Security from "@/views/account/Security.vue";
import Plans from "@/views/account/Plans.vue";
import Games from "@/views/account/Games.vue";


// Main views
import MainVue from "@/views/Main.vue";
import Home from "../views/main/Home.vue";
import ContactUs from "../views/main/ContactUs.vue";
import NotFound from "../views/main/NotFound.vue";
import Telegram from "@/views/main/Telegram.vue";
import LiveScores from "@/views/main/LiveScores.vue";
import About from "@/views/main/About.vue";
import { user } from "@/stores/user";

const AppName = import.meta.env.VITE_APP_NAME;;

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/account",
			name: "account",
			redirect: "/account/subscriptions",
			component: UserVue,
			beforeEnter: (to, from, next) => {
				console.log(user.getUser())
				if (!user.getUser()) {
					next({ name: "home" });
				} else {
					next();
				}
			},
			children: [
				{
					path: "subscriptions",
					component: SubscriptionsVue,
					name: "subscriptions"
				},
				{
					path: "profile",
					component: Profile,
					name: "profile"
				},
				{
					path: "security",
					component: Security,
					name: "security"
				},
				{
					path: "plans",
					component: Plans,
					name: "plans"
				},
				{
					path: "games",
					component: Games,
					name: "games"
				},
			],
		},
		{
			path: "/",
			redirect: "/home",
		},
		{
			path: "/",
			component: MainVue,
			children: [
				{
					path: "/home",
					name: "home",
					component: Home,
					meta: {
						title: `Home - ${AppName}`,
						metaTags: [
							{
								name: "description",
								content:
									"Free football (soccer) mathematical based predictions.",
							},
							{
								property: "og:description",
								content:
									"Free football (soccer) mathematical based predictions.",
							},
						],
					},
				},
				{
					path: "/About",
					name: "about",
					component: About,
					meta: {
						title: `About - ${AppName}`,
						metaTags: [
							{
								name: "description",
								content:
									"More accurate handpicked football (soccer) mathematical based predictions, with a very high win probability.",
							},
							{
								property: "og:description",
								content:
									"More accurate handpicked football (soccer) mathematical based predictions, with a very high win probability.",
							},
						],
					},
				},
				{
					path: "/contact-us",
					name: "contactus",
					component: ContactUs,
					meta: {
						title: `Contact us - ${AppName}`,
						metaTags: [
							{
								name: "description",
								content: `Get support or leave feed back with ${AppName}, with and amazing feedback.`,
							},
							{
								property: "og:description",
								content: `Get support or leave feed back with ${AppName}, with and amazing feedback.`,
							},
						],
					},
				},
				{
					path: "/telegram",
					name: "telegram",
					component: Telegram,
					meta: {
						title: `Join us on telegram - ${AppName}`,
						metaTags: [
							{
								name: "description",
								content: `Link to the ${AppName} on telegram.`,
							},
							{
								property: "og:description",
								content: `Link to the ${AppName} on telegram.`,
							},
						],
					},
				},
				{
					path: "/livescores",
					name: "livescores",
					component: LiveScores,
					meta: {
						title: `Livescores - ${AppName}`,
						metaTags: [
							{
								name: "description",
								content: `Upto date live scores and statistics powered by NowGoal.`,
							},
							{
								property: "og:description",
								content: `Upto date live scores and statistics powered by NowGoal.`,
							},
						],
					},
				},
				{
					path: "/:pathMatch(.*)*",
					name: "NotFound",
					component: NotFound,
				},
			],
		},
	],
});

// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
		(el) => el.parentNode.removeChild(el)
	);

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement("meta");

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute("data-vue-router-controlled", "");

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});

export default router;
