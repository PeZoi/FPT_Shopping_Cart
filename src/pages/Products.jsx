import DetailProduct from "./components/DetailProduct";
import ListProducts from "./components/ListProducts";

export default function Products() {
	return (
		<div className='w-full grid grid-cols-2 gap-4 my-5 px-10'>
			<DetailProduct></DetailProduct>
			<ListProducts></ListProducts>
		</div>
	);
}
