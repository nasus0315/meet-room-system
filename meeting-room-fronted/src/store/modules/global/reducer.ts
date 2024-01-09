import { AnyAction } from "redux";
import { GlobalState } from "@/store/interface";
import { produce } from "immer";
import * as types from "@/store/action-types";

const globalState: GlobalState = {
	token: "",
};

const global = (state: GlobalState = globalState, action: AnyAction) =>
	produce(state, (draftState) => {
		switch (action.type) {
			case types.SET_TOKEN:
				draftState.token = action.token;
				break;
			default:
				return draftState;
		}
	});

export default global;
