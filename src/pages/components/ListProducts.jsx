import { useEffect } from "react";
import ItemProduct from "./ItemProduct";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../../redux/actions";

export default function ListProducts() {
	const dispatch = useDispatch();
	const { productsList, statusProductsList } = useSelector(
		(state) => state.productData
	);

	useEffect(() => {
		dispatch(getAllProductsAction());
	}, [dispatch]);

	if (!statusProductsList) {
		return (
			<div className='m-auto'>
				<Box sx={{ display: "flex" }}>
					<CircularProgress />
				</Box>
			</div>
		);
	}

	return (
		<div className='grid gap-4 overflow-y-auto' style={{ height: "649px" }}>
			{productsList.map((product) => (
				<ItemProduct
					key={product.productId}
					product={product}
				></ItemProduct>
			))}
		</div>
	);
}
