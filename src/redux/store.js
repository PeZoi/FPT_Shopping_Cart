import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension"; // Thêm dòng này
import productReducer from "./productReducer";
import middleWare from "./middleWare";
import cartReducer from "./cartReducer";

const sagaMiddleware = createSagaMiddleware();

const allReducer = combineReducers({
	productData: productReducer,
	cartData: cartReducer,
});

const store = createStore(
	allReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)) // Thay đổi dòng này
);

sagaMiddleware.run(middleWare);

export default store;
