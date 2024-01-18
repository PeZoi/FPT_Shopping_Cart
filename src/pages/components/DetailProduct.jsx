import { ShoppingCart } from "@mui/icons-material";
import QuantityInput from "../../utils/components/QuantityInput";

export default function DetailProduct() {
	return (
		<div className='w-full bg-white rounded-md p-7'>
			<img
				src='https://png.pngtree.com/png-clipart/20230511/original/pngtree-pink-square-perfume-bottle-perfume-png-image_9157532.png'
				alt=''
				style={{ width: "70%", margin: "auto" }}
			/>
			<hr />
			<h4 className='text-black font-bold text-2xl mt-5'>
				True Skin Vitamin C
			</h4>
			<p className='text-gray-400 mt-3'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
				ipsum voluptatibus error tempore? Quaerat, soluta voluptatem aut
				blanditiis corporis dolorem, magni tempore quod numquam explicabo,
				voluptas commodi consequatur natus! Voluptatum.
			</p>
			<div className='flex justify-between items-center mt-5'>
				<QuantityInput></QuantityInput>
				<div className='flex justify-center items-center'>
					<span className='text-black font-bold text-2xl'>$23.99</span>
					<button className='p-2 px-3 bg-primary text-white rounded-md ml-5 text-sm'>
						<ShoppingCart /> Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
