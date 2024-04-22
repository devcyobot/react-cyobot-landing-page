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
};

export default function Screen({
	image,
	language,
	caption,
	width,
	height,
}: ScreenProps) {
	return (
		<div className="flex flex-col justify-center items-center bg-gray-900 shadow-lg rounded-2xl m-10 h-96">
			<figure>
				<Image src={image.src} alt={image.alt} width={width} height={height} />
				<figcaption className="relative vt323-regular bg-brand-green rounded-tl-3xl rounded-r-md shadow-lg top-8 left-5 pl-5 w-full">
					<span className="text-white">[</span>
					{language}
					<span className="text-white">] </span>
					{caption}
				</figcaption>
			</figure>
		</div>
	);
}
