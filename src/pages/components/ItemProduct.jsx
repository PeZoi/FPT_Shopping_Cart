export default function ItemProduct() {
	return (
		<div className='w-full bg-white rounded-md p-5 flex items-center justify-center'>
			<img
				src='https://png.pngtree.com/png-clipart/20230511/original/pngtree-pink-square-perfume-bottle-perfume-png-image_9157532.png'
				alt=''
				style={{ width: "150px" }}
				className='pr-5'
			/>
			<div>
				<h4 className='text-black font-bold text-lg'>
					True Skin Vitamin C
				</h4>
				<p className='text-gray-400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Excepturi ipsum voluptatibus error tempore? Quaerat, soluta
					voluptatem aut blanditiis corporis dolorem, magni tempore quod
					numquam explicabo, voluptas commodi consequatur natus!
					Voluptatum.
				</p>
				<div className='flex justify-between mt-3'>
					<span className='text-black font-bold text-xl'>$23.99</span>
					<span className='text-primary font-bold cursor-pointer hover:opacity-80'>
						Details
					</span>
				</div>
			</div>
		</div>
	);
}
