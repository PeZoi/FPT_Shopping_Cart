/* eslint-disable no-unused-vars */
const initProductState = {
	statusProductsList: false,
	productsList: [
		{
			productId: "",
			productName: "",
			description: "",
			imageUrl: "",
			price: 0,
		},
	],
	selectProduct: {},
};

const productReducer = (state = initProductState, action) => {
	switch (action.type) {
		case "SET_ALL_DATA":
			return {
				...state,
				productsList: action.payload,
			};
		case "SET_STATUS_PRODUCT_LIST":
			return {
				...state,
				statusProductsList: action.payload,
			};
		case "SELECT_PRODUCT":
			return {
				...state,
				selectProduct: state.productsList.find(
					(product) => product.productId === action.payload + ""
				),
			};
		default:
			return state;
	}
};

export default productReducer;
