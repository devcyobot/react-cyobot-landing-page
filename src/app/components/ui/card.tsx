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
			className={`relative flex flex-col items-center justify-end h-1/2 w-auto max-w-xs max-h-sm text-center rounded-md ${className} border-dashed-${color}-regular`}
		>
			<Image
				src={image.src}
				alt={image.alt}
				fill
				quality={100}
				sizes="(max-width: 600px) 50vw, 100vw"
				style={{ objectFit: 'contain' }}
				className="max-h-32 mt-3"
			/>
			<div className="h-1/2">
				<h5 style={{ color: customColor }} className="text-lg lg:text-2xl">
					{title}
				</h5>
				<p className="text-sm lg:text-lg mb-3 px-5">{text}</p>
			</div>
		</div>
	);
}
