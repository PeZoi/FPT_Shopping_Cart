const initCart = {
	cartList: [],
	size: 0,
};

const cartReducer = (state = initCart, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			if (state.size === 0) {
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
					return {
						...state,
						cartList: updatedCartList,
					};
				} else {
					return {
						...state,
						cartList: [...state.cartList, action.payload],
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
				return {
					...state,
					cartList: updatedCartList,
				};
			} else {
				return state;
			}
		}
		case "REMOVE_TO_CART": {
			return {
				...state,
				cartList: state.cartList.filter(
					(c) => c.product.productId !== action.payload.productId
				),
				size: state.size - 1,
			};
		}

		default:
			return state;
	}
};

export default cartReducer;
