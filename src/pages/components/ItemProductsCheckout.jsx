/* eslint-disable react/prop-types */
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import QuantityInput from "../../utils/components/QuantityInput";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeQuantityAction, removeToCartAction } from "../../redux/actions";
import toast from "react-hot-toast";

export default function ItemProductsCheckout({ item }) {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(item.quantity);

	const handleIncreaseQuantity = () => {
		setQuantity((quantity) => quantity + 1);
		handleChangeQuantity(quantity + 1);
	};
	const handleDecreaseQuantity = () => {
		if (quantity === 1) {
			handleRemoveToCart();
		} else {
			setQuantity((quantity) => quantity - 1);
			handleChangeQuantity(quantity - 1);
		}
	};

	const handleChangeQuantity = (quantity) => {
		dispatch(
			changeQuantityAction({
				quantity: quantity,
				productId: item.product.productId,
			})
		);
	};

	const handleRemoveToCart = () => {
		const check = confirm("Are you sure you want to remove ?");
		if (check) {
			dispatch(removeToCartAction({ productId: item.product.productId }));
			toast.success("Successfully removed to cart");
		}
	};

	return (
		<div className='w-full bg-white rounded-md p-5 flex items-center justify-center'>
			<img
				src={item.product.imageUrl}
				alt=''
				style={{ width: "150px", height: "150px" }}
				className='pr-5 object-contain'
			/>
			<div className='grow'>
				<h4 className='text-black font-bold text-lg'>
					{item.product.productName}
				</h4>
				<p className='text-gray-400'>{item.product.description}</p>
				<div className='flex justify-between items-center mt-10'>
					<QuantityInput
						quantity={quantity}
						handleIncreaseQuantity={handleIncreaseQuantity}
						handleDecreaseQuantity={handleDecreaseQuantity}
					></QuantityInput>
					<div className='flex justify-center items-center'>
						<span className='text-black font-bold text-xl mr-10'>
							${item.product.price}
						</span>
						<span
							className='text-red-600 font-bold cursor-pointer hover:opacity-80'
							onClick={handleRemoveToCart}
						>
							<DeleteOutlineRoundedIcon />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
