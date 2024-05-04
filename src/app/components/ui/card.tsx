import Image from 'next/image';
type CardProps = {
	image: {
		src: string;
		alt: string;
	};
	color: string;
	title?: string;
	text?: string;
	className?: string;
};

export default function Card({
	image,
	color,
	title,
	text,
	className,
}: CardProps) {
	let customColor = '';
	if (color === 'yellow') customColor = '#f3c449';
	else if (color === 'green') customColor = '#1ad69c';
	else if (color === 'red') customColor = '#e00303';
	else customColor = '#3e2486';

	return (
		<div
			className={`flex flex-col w-auto lg:w-1/2 h-[70%] lg:h-[90%] max-w-xs max-h-sm text-center rounded-md ${className} border-dashed-${color}-regular`}
		>
			<figure className="relative h-56 sm:h-72 md:h-36 lg:h-40">
				<Image
					src={image.src}
					alt={image.alt}
					fill
					quality={100}
					sizes="(max-width: 600px) 50vw, 100vw"
					style={{ objectFit: 'contain' }}
					className="max-h-32 mt-3"
				/>
			</figure>
			<h5 style={{ color: customColor }} className="md:text-base lg:text-lg">
				{title}
			</h5>
			<p className="text-xs md:text-sm lg:text-base">{text}</p>
		</div>
	);
}
