export const getAllProductsAction = () => {
	return { type: "GET_ALL_DATA" };
};

export const setAllProductsAction = (data) => {
	return { type: "SET_ALL_DATA", payload: data };
};

export const setStatusProductsListAction = (data) => {
	return { type: "SET_STATUS_PRODUCT_LIST", payload: data };
};

export const selectedProductAction = (data) => {
	return { type: "SELECT_PRODUCT", payload: data };
};