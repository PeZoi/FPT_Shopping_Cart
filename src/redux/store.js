import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import productReducer from "./productReducer";
import middleWare from "./middleWare";

const sagaMiddleware = createSagaMiddleware();

const allReducer = combineReducers({
	productData: productReducer,
});

const store = createStore(allReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(middleWare);

export default store;
