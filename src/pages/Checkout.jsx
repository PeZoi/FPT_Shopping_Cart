/* eslint-disable no-mixed-spaces-and-tabs */
import { Link } from "react-router-dom";
import ItemProductsCheckout from "./components/ItemProductsCheckout";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Checkout() {
	const { cartList } = useSelector((state) => state.cartData);

	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const totalPrice = cartList.reduce((preValue, c) => {
			return preValue + c.product.price * c.quantity;
		}, 0);
		setTotalPrice(totalPrice.toFixed(2));
	}, [cartList]);

	if (cartList.length === 0) {
		return (
			<div className='w-full'>
				<img
					src='https://newnet.vn/themes/newnet/assets/img/empty-cart.png'
					alt=''
					className='m-auto'
				/>
			</div>
		);
	}

	return (
		<div className='container w-9/12 h-screen m-auto mt-4 mb-10'>
			<div className='bg-white rounded-lg py-3 font-bold text-center shadow-lg'>
				{"My Shopping Cart".toUpperCase()}
			</div>
			<div className='grid grid-cols-3 gap-4 mt-4'>
				{/* List item products checkout */}
				<div className='col-span-2 grid gap-3 h-fit mb-10'>
					{cartList.map((c) => (
						<ItemProductsCheckout item={c} key={c.product.productId} />
					))}
				</div>
				{/* Order info */}
				<div>
					<div className='bg-white rounded-lg p-5 h-fit shadow-lg'>
						<h1 className='font-bold uppercase text-center'>
							Order info
						</h1>
						<hr className='my-3' />
						<div className='flex items-center justify-between '>
							<span className='text-gray-500 font-semibold'>
								Subtotal:
							</span>
							<strong>${totalPrice}</strong>
						</div>
						<div className='flex items-center justify-between'>
							<span className='text-gray-500 font-semibold'>
								Shipping Cost:
							</span>
							<strong>$10</strong>
						</div>
						<hr className='my-3' />

						<div className='flex items-center justify-between font-bold text-2xl'>
							<span>Total: </span>
							<span>${(totalPrice * 1 + 10).toFixed(2)}</span>
						</div>
					</div>
					<div className='grid gap-4 mt-4'>
						<Button variant='contained' className='w-full'>
							Checkout
						</Button>
						<Link to={"/products"}>
							<Button variant='outlined' className='w-full'>
								Continue shopping
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
