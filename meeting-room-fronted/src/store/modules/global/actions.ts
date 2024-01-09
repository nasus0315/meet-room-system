import * as types from "@/store/action-types";

export const setToken = (token: string) => {
	return {
		type: types.SET_TOKEN,
		token,
	};
};
