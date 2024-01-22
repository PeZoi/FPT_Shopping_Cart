import { getCartLocalstorage, saveCartLocalstorage } from "../utils/funtion";

const initCart = {
	cartList: [],
	size: 0,
};

const getInstanceCart = (cartList, size) => {
	return {
		cartList,
		size,
	};
};

const cartReducer = (state = initCart, action) => {
	switch (action.type) {
		case "GET_CART": {
			const cart = getCartLocalstorage();
			return cart === null ? initCart : cart;
		}
		case "ADD_TO_CART":
			if (state.size === 0) {
				saveCartLocalstorage(
					getInstanceCart(action.payload, state.size + 1)
				);
				return {
					...state,
					cartList: [action.payload],
					size: state.size + 1,
				};
			} else {
				const existingProductIndex = state.cartList.findIndex(
					(c) => c.product.productId === action.payload.product.productId
				);
				if (existingProductIndex !== -1) {
					const updatedCartList = [...state.cartList];
					updatedCartList[existingProductIndex].quantity +=
						action.payload.quantity;
					saveCartLocalstorage(
						getInstanceCart(updatedCartList, state.size)
					);
					return {
						...state,
						cartList: updatedCartList,
					};
				} else {
					const updatedCartList = [...state.cartList, action.payload];
					saveCartLocalstorage(
						getInstanceCart(updatedCartList, state.size + 1)
					);
					return {
						...state,
						cartList: updatedCartList,
						size: state.size + 1,
					};
				}
			}
		case "CHANGE_QUANTITY": {
			const existingProductIndex = state.cartList.findIndex(
				(c) => c.product.productId === action.payload.productId
			);
			if (existingProductIndex !== -1) {
				const updatedCartList = [...state.cartList];
				updatedCartList[existingProductIndex].quantity =
					action.payload.quantity;
				saveCartLocalstorage(getInstanceCart(updatedCartList, state.size));
				return {
					...state,
					cartList: updatedCartList,
				};
			} else {
				return state;
			}
		}
		case "REMOVE_TO_CART": {
			const updatedCartList = state.cartList.filter(
				(c) => c.product.productId !== action.payload.productId
			);
			saveCartLocalstorage(getInstanceCart(updatedCartList, state.size - 1));
			return {
				...state,
				cartList: updatedCartList,
				size: state.size - 1,
			};
		}

		default:
			return state;
	}
};

export default cartReducer;
