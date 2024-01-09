import {
	Store,
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore,
} from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import global from "./modules/global/reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducer = combineReducers({
	global,
});

const persistConfig = {
	key: "redux-state",
	storage: storage,
};

const persistReducerConfig = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = applyMiddleware(reduxThunk, reduxPromise);

const store: Store = createStore(
	persistReducerConfig,
	composeEnhancers(middleWares)
);

// 创建持久化 store
const persistor = persistStore(store);

export { store, persistor };
