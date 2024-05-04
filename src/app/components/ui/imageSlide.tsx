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

	// Image fit
	let objectFit = {
		objectFit: imageFit,
	};

	return (
		<div className="relative flex flex-col items-center w-full h-full">
			{active ? (
				// When image is selected/active
				<div
					className={`h-full w-full border-dashed-${color}-bold rounded-[10px] px-10 py-11`}
				>
					{/* Colored background begind the Image */}
					<div
						className="relative w-full h-full rounded-[30px] flex flex-col items-center justify-center"
						style={{
							backgroundColor: bg,
							boxShadow: `4px 4px 10px 2px ${shadowColor}`,
						}}
					>
						<Image
							src={src}
							alt={alt}
							fill
							quality={100}
							sizes="(max-width: 600px) 50vw, 100vw"
							className="overflow-visible"
							style={objectFit}
						/>
					</div>
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
					<div
						className="relative w-[90%] h-[75%] rounded-[30px] birghtness-50 bg-brand-gray-dark px-12 py-14"
						style={{
							boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)',
						}}
					>
						<Image
							src={src}
							alt={alt}
							fill
							quality={100}
							sizes="(max-width: 600px) 50vw, 100vw"
							className="brightness-[25%] overflow-visible"
							style={objectFit}
						/>
					</div>
				</div>
			)}
			<p
				className={
					active
						? `text-5xl border-dashed-${color}-regular vt323-regular bg-brand-dark bg-opacity-25 text-center pt-2 pb-auto w-full h-[15%] mt-12 text-4xl rounded-lg`
						: 'w-[30.063rem]'
				}
			>
				{active ? title : ''}
			</p>
		</div>
	);
}
