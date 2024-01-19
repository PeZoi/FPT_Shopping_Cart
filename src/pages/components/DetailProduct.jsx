import { ShoppingCart } from "@mui/icons-material";
import QuantityInput from "../../utils/components/QuantityInput";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCartAction } from "../../redux/actions";
import toast from "react-hot-toast";

export default function DetailProduct() {
	const dispatch = useDispatch();
	const { selectProduct } = useSelector((state) => state.productData);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		setQuantity(1);
	}, [selectProduct]);

	const handleAddToCart = () => {
		const cartItem = {
			quantity,
			product: selectProduct,
		};
		dispatch(addToCartAction(cartItem));
		toast.success("Successfully added to cart");
	};

	const handleIncreaseQuantity = () => {
		setQuantity((quantity) => quantity + 1);
	};
	const handleDecreaseQuantity = () => {
		if (quantity !== 1) {
			setQuantity((quantity) => quantity - 1);
		}
	};

	if (!Object.keys(selectProduct).length > 0) {
		return (
			<div className='font-bold uppercase text-center mt-10'>
				<span className='py-2 px-5 bg-slate-300 rounded-lg cursor-default'>
					Please select product ...
				</span>
			</div>
		);
	} else {
		return (
			<div className='w-full bg-white rounded-md p-7 h-fit'>
				<img
					src={selectProduct.imageUrl}
					alt=''
					style={{ width: "400px", height: "400px", margin: "auto" }}
					className='object-contain'
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
						handleIncreaseQuantity={handleIncreaseQuantity}
						handleDecreaseQuantity={handleDecreaseQuantity}
					></QuantityInput>
					<div className='flex justify-center items-center'>
						<span className='text-black font-bold text-2xl'>
							${selectProduct.price}
						</span>
						<button
							className='p-2 px-3 bg-primary text-white rounded-md ml-5 text-sm'
							onClick={handleAddToCart}
						>
							<ShoppingCart /> Add to cart
						</button>
					</div>
				</div>
			</div>
		);
	}
}
