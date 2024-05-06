import Image from 'next/image';

type ScreenProps = {
	image: {
		src: string;
		alt: string;
	};
	width: number;
	height: number;
	language: string;
	caption: string;
	className?: string;
};

export default function Screen({
	image,
	language,
	caption,
	width,
	height,
	className,
}: ScreenProps) {
	return (
		<div
			className={`flex flex-col justify-center items-center bg-gray-900 shadow-lg rounded-2xl w-[17rem] md:w-[21rem] lg:w-[25rem] h-48 sm:h-52 md:h-64 lg:h-72 px-1 ${className}`}
		>
			<figure className="relative h-full w-full flex items-end">
				<Image
					src={image.src}
					alt={image.alt}
					quality={100}
					fill
					sizes="(max-width: 500px) 50vw, 100vw"
					style={{
						objectFit: 'contain',
						maxWidth: `${width}px`,
					}}
					className="justify-self-center"
				/>
				<figcaption className="relative vt323-regular bg-brand-green rounded-tl-3xl rounded-r-md shadow-lg top-2 left-10 md:left-12 lg:left-20 pl-5 w-[90%] text-xs sm:text-sm md:text-lg lg:text-xl">
					<span className="text-white">[</span>
					{language}
					<span className="text-white">] </span>
					{caption}
				</figcaption>
			</figure>
		</div>
	);
}
