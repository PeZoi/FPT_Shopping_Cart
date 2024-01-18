import { ShoppingCart } from "@mui/icons-material";
import QuantityInput from "../../utils/components/QuantityInput";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function DetailProduct() {
	const { selectProduct } = useSelector((state) => state.productData);

	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		setQuantity(1);
	}, [selectProduct]);

	if (!Object.keys(selectProduct).length > 0) {
		return (
			<div className='font-bold uppercase text-center'>
				Please select product ...
			</div>
		);
	} else {
		return (
			<div className='w-full bg-white rounded-md p-7 h-fit'>
				<img
					src={selectProduct.imageUrl}
					alt=''
					style={{ width: "400px", height: "400px", margin: "auto" }}
					className='object-cover'
				/>
				<hr />
				<h4 className='text-black font-bold text-2xl mt-5'>
					{selectProduct.productName}
				</h4>
				<p className='text-gray-400 mt-3'>{selectProduct.description}</p>
				<div className='flex justify-between items-center mt-5'>
					<QuantityInput
						quantity={quantity}
						setQuantity={setQuantity}
					></QuantityInput>
					<div className='flex justify-center items-center'>
						<span className='text-black font-bold text-2xl'>
							${selectProduct.price}
						</span>
						<button className='p-2 px-3 bg-primary text-white rounded-md ml-5 text-sm'>
							<ShoppingCart /> Add to cart
						</button>
					</div>
				</div>
			</div>
		);
	}
}
