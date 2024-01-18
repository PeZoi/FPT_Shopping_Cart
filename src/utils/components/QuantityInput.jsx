import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function QuantityInput() {
	return (
		<div className='relative flex items-center max-w-[8rem]'>
			<button
				type='button'
				id='decrement-button'
				data-input-counter-decrement='quantity-input'
				className='bg-primary rounded-lg p-1 hover:opacity-80 flex items-center justify-center'
			>
				<RemoveIcon fontSize='small' style={{ color: "white" }} />
			</button>
			<input
				type='text'
				id='quantity-input'
				data-input-counter
				aria-describedby='helper-text-explanation'
				className=' border-x-0 border-gray-300 h-11 text-center text-black font-bold text-sm block w-full py-2.5 focus:outline-none '
				defaultValue={1}
				required
			/>
			<button
				type='button'
				id='increment-button'
				data-input-counter-increment='quantity-input'
				className='bg-primary rounded-lg p-1 hover:opacity-80 flex items-center justify-center'
			>
				<AddIcon fontSize='small' style={{ color: "white" }} />
			</button>
		</div>
	);
}
