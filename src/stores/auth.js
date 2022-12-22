import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
	const user = ref(null);
	const authKey = "community@key-auth";

	function login(userData) {
		user.value = userData;
		localStorage.setItem(authKey, JSON.stringify(userData));
	}

	function logout() {
		localStorage.removeItem(authKey);
		window.location.href = "/";
	}

	function getUser() {
		if (user.value !== null) {
			return user.value.user;
		}

		const userStr = localStorage.getItem(authKey);

		if (userStr === null || userStr === undefined) {
			return false;
		}

		user.value = JSON.parse(userStr);
		return user.value.user;
	}

	return { getUser, login, logout, getUser };
});
