/* eslint-disable no-unused-vars */
import axios from "axios";
import { takeLatest, call, put, delay } from "redux-saga/effects";
import { setAllProductsAction, setStatusProductsListAction } from "./actions";

// Call API
export const getAllProducts = async () => {
	try {
		const response = await axios.get(
			"https://6537a1a6bb226bb85dd38821.mockapi.io/api/v1/products"
		);
		if (response.status === 200) {
			return response.data;
		}
		return [];
	} catch (error) {
		console.error("Lỗi lấy tất cả sản phẩm: " + error);
	}
};

// Tạo Function GetData để lấy dữ liệu từ server
function* getAllData() {
	// yield delay(1000);
	const data = yield call(getAllProducts);
	yield put(setStatusProductsListAction(true));
	if (data) {
		yield put(setAllProductsAction(data));
	}
}

function* middleWare() {
	yield takeLatest("GET_ALL_DATA", getAllData);
}

export default middleWare;
