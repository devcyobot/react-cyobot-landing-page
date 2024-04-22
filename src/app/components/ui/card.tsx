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
	return (
		<div
			className={`m-10 flex flex-col items-center w-80 h-96 text-center p-4 border-8 border-dashed rounded-lg border-brand-${color} ${className}`}
		>
			<Image src={image.src} alt={image.alt} width={200} height={200} />
			<h5 className="py-2">{title}</h5>
			<p>{text}</p>
		</div>
	);
}
