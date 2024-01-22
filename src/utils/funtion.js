export const saveCartLocalstorage = (data) => {
	localStorage.setItem("cartList", JSON.stringify(data));
};

export const getCartLocalstorage = () => {
	return JSON.parse(localStorage.getItem("cartList"));
};
