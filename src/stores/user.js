import { ref } from "vue";

export const user = {
    user: ref(null),
	authKey: "community@key-auth",

    getUser() {
		if (this.user.value !== null) {
			return this.user.value.user;
		}

		const userStr = localStorage.getItem(this.authKey);

		if (userStr === null || userStr === undefined) {
			return false;
		}

		this.user.value = JSON.parse(userStr);
		return this.user.value.user;
	}
}