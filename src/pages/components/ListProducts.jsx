import ItemProduct from "./ItemProduct";

export default function ListProducts() {
	return (
		<div className='grid gap-4'>
			<ItemProduct></ItemProduct>
			<ItemProduct></ItemProduct>
			<ItemProduct></ItemProduct>
			<ItemProduct></ItemProduct>
		</div>
	);
}
