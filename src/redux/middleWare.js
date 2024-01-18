import axios from "axios";
import { takeLatest, call, put, delay } from "redux-saga/effects";
import { setAllProductsAction, setStatusProductsListAction } from "./actions";

// Call API
export const getAllProducts = async () => {
	try {
		const response = await axios.get("http://localhost:4000/api/products");
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
	yield delay(1000);
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
