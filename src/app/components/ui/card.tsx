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
	let border = '';
	if (color === 'yellow') border = '#f3c449';
	else if (color === 'green') border = '#1ad69c';
	else if (color === 'red') border = '#e00303';
	else border = '#3e2486';

	return (
		<div
			className={`m-10 flex flex-col items-center w-80 h-96 text-center p-4 border-8 border-dashed rounded-lg ${className}`}
			style={{ borderColor: border }}
		>
			<Image src={image.src} alt={image.alt} width={200} height={200} />
			<h5 className="py-2">{title}</h5>
			<p>{text}</p>
		</div>
	);
}
