import ItemProduct from "./ItemProduct";

import { useSelector } from "react-redux";

export default function ListProducts() {
	const { productsList } = useSelector((state) => state.productData);

	return (
		<div
			className='grid gap-4 overflow-y-auto rounded-lg pr-3'
			style={{ height: "606px" }}
		>
			{productsList.map((product) => (
				<ItemProduct
					key={product.productId}
					product={product}
				></ItemProduct>
			))}
		</div>
	);
}
