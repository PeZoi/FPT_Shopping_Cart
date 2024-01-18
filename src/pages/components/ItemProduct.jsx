/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { selectedProductAction } from "../../redux/actions";

export default function ItemProduct({ product }) {
	const dispatch = useDispatch();

	const handleSelectProduct = () => {
		dispatch(selectedProductAction(product.productId));
	};

	return (
		<div className='w-full bg-white rounded-md p-5 flex items-center justify-center'>
			<img
				src={product.imageUrl}
				alt=''
				style={{ width: "150px", height: "150px" }}
				className='pr-5 object-cover'
			/>
			<div>
				<h4 className='text-black font-bold text-lg'>
					{product.productName}
				</h4>
				<p className='text-gray-400'>{product.description}</p>

				<div className='flex justify-between items-center mt-3'>
					<span className='text-black font-bold text-xl'>
						${product.price}
					</span>
					<span
						className='text-primary font-bold cursor-pointer hover:opacity-80'
						onClick={handleSelectProduct}
					>
						Details
					</span>
				</div>
			</div>
		</div>
	);
}
