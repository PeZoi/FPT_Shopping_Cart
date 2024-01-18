import { Link } from "react-router-dom";
import ItemProductsCheckout from "./components/ItemProductsCheckout";
import Button from "@mui/material/Button";

export default function Checkout() {
	return (
		<div className='container w-9/12 h-screen m-auto mt-4 mb-10'>
			<div className='bg-white rounded-lg py-3 font-bold text-center'>
				My Shopping Cart
			</div>
			<div className='grid grid-cols-3 grid-flow-col gap-4 mt-4'>
				{/* List item products checkout */}
				<div className='col-span-2 grid gap-3'>
					<ItemProductsCheckout />
					<ItemProductsCheckout />
					<ItemProductsCheckout />
				</div>
				{/* Order info */}
				<div>
					<div className='bg-white rounded-lg p-5 h-fit'>
						<h1 className='font-bold uppercase text-center'>
							Order info
						</h1>
						<hr className='my-3' />
						<div className='flex items-center justify-between '>
							<span className='text-gray-500 font-semibold'>
								Subtotal:
							</span>
							<strong>$123</strong>
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
							<span>$172.93</span>
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
