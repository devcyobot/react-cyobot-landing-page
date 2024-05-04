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
			className={`w-auto md:w-36 lg:w-56 h-full max-w-xs max-h-72 px-2 text-center rounded-md ${className} border-dashed-${color}-regular`}
		>
			<figure className="relative w-auto h-16 lg:h-36 mt-3">
				<Image
					src={image.src}
					alt={image.alt}
					fill
					quality={100}
					sizes="(max-width: 600px) 50vw, 100vw"
					style={{ objectFit: 'contain' }}
					className="max-h-32"
				/>
			</figure>
			<h5 style={{ color: customColor }} className="text-sm lg:text-lg">
				{title}
			</h5>
			<p className="text-xs lg:text-base pb-3">{text}</p>
		</div>
	);
}
