/* eslint-disable react/prop-types */
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function QuantityInput({
	quantity,
	handleIncreaseQuantity,
	handleDecreaseQuantity,
}) {
	return (
		<div className='relative flex items-center max-w-[8rem]'>
			<button
				type='button'
				id='decrement-button'
				data-input-counter-decrement='quantity-input'
				className={`bg-primary rounded-lg p-1 flex items-center justify-center ${
					quantity === 1 ? "opacity-40 hover:" : "hover:opacity-80"
				}`}
				onClick={handleDecreaseQuantity}
			>
				<RemoveIcon fontSize='small' style={{ color: "white" }} />
			</button>
			<input
				type='text'
				id='quantity-input'
				data-input-counter
				aria-describedby='helper-text-explanation'
				className='h-6 text-center text-black font-bold text-sm block w-full py-2.5  '
				value={quantity}
				onChange={() => {}}
				max={99}
				min={1}
			/>
			<button
				type='button'
				id='increment-button'
				data-input-counter-increment='quantity-input'
				className='bg-primary rounded-lg p-1 hover:opacity-80 flex items-center justify-center'
				onClick={handleIncreaseQuantity}
			>
				<AddIcon fontSize='small' style={{ color: "white" }} />
			</button>
		</div>
	);
}
