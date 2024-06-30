import Image from 'next/image';

type ImageSlideProps = {
	active: boolean;
	src: string;
	alt: string;
	title?: string;
	color: string;
	imageFit: 'cover' | 'contain' | 'none' | 'scale-down';
};

export default function ImageSlide({
	active,
	src,
	alt,
	title,
	color,
	imageFit,
}: ImageSlideProps) {
	// Border color
	let bg = '';
	if (color === 'yellow') bg = '#f3c449';
	else if (color === 'green') bg = '#1ad69c';
	else if (color === 'red') bg = '#e00303';
	else bg = '#3e2486';

	// Shadow color
	let shadowColor = '';
	if (color === 'yellow' || color === 'red') shadowColor = '#1ad69c';
	else shadowColor = '#f3c449';

	return (
		<div className="cursor-pointer flex flex-col items-center justify-between w-4/5 sm:w-full h-4/5 sm:h-full">
			{active ? (
				// When image is selected/active
				<div className="relative w-full h-full overflow-visible">
					<div
						className={`h-full w-full border-dashed-${color}-bold rounded-[10px] px-5 py-11 overflow-visible`}
					>
						{/* Colored background begind the Image */}
						<div
							className="shadow-[20px_20px_15px_black] w-full h-[98%] rounded-3xl flex flex-col items-center justify-center"
							style={{
								backgroundColor: bg,
							}}
						></div>
					</div>
					<Image
						src={src}
						alt={alt}
						fill
						quality={100}
						sizes="100vw"
						className="overflow-visible max-w-[23.75rem] max-h-[17rem] sm:max-h-[23rem] lg:max-h-[23.75rem]"
						style={{
							objectFit: imageFit,
						}}
					/>
				</div>
			) : (
				// When image is not selected
				<div className="relative h-full w-full flex flex-col items-center justify-center">
					{/* Dark shadow */}
					<div
						className="left-20 top-24 absolute w-4/5 h-[75%] rounded-[30px]"
						style={{
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)',
						}}
					></div>
					{/* Background color */}
					<div className="relative w-[90%] h-[71%] lg:h-[74%] rounded-[30px] birghtness-50 bg-brand-gray-dark px-12 py-14">
						<Image
							src={src}
							alt={alt}
							fill
							quality={100}
							sizes="100vw"
							className="brightness-[20%] overflow-visible max-w-[25rem] max-h-[26rem] xl:max-h-[34.375]"
							style={{
								objectFit: imageFit,
							}}
						/>
					</div>
				</div>
			)}
			<p
				className={
					active
						? `border-dashed-${color}-regular font-vt323 bg-brand-dark bg-opacity-25 text-center py-3 w-full mt-12 text-[2.7rem] lg:text-5xl`
						: 'w-[30.063rem]'
				}
			>
				{active ? title : ''}
			</p>
		</div>
	);
}
