/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { selectedProductAction } from "../../redux/actions";

export default function ItemProduct({ product }) {
	const dispatch = useDispatch();

	const handleSelectProduct = () => {
		dispatch(selectedProductAction(product.productId));
	};

	return (
		<div className='w-full bg-white rounded-md p-5 flex items-center justify-center shadow-lg'>
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

				<div className='flex justify-between items-center mt-10'>
					<span className='text-primary bg-bgPrimary font-bold text-xl p-1 px-3 rounded-lg'>
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
