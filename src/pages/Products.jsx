import DetailProduct from "./components/DetailProduct";
import ListProducts from "./components/ListProducts";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { getAllProductsAction } from "../redux/actions";

export default function Products() {
	const dispatch = useDispatch();
	const { statusProductsList } = useSelector((state) => state.productData);
	useEffect(() => {
		dispatch(getAllProductsAction());
	}, [dispatch]);

	if (!statusProductsList) {
		return (
			<div className='flex justify-center items-center w-full mt-10'>
				<Box sx={{ display: "flex" }}>
					<CircularProgress />
				</Box>
			</div>
		);
	} else {
		return (
			<div className='w-full grid grid-cols-2 gap-4 my-5 px-10'>
				<DetailProduct></DetailProduct>
				<ListProducts></ListProducts>
			</div>
		);
	}
}
