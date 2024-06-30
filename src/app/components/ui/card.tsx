'use client';
import Image from 'next/image';
import { useState } from 'react';
type CardProps = {
	image: {
		src: string;
		staticSrc: string;
		alt: string;
	};
	color: string;
	title?: string;
	text?: string;
	className?: string;
	background?: string;
};

export default function Card({
	image,
	color,
	title,
	text,
	className,
	background,
}: CardProps) {
	const [isHovered, setIsHovered] = useState(false);
	let textColor = '#fff';
	if (color === 'purple') textColor = '#3e2486';
	return (
		<div
			className={`bg-brand-${background} w-full h-full max-w-80 max-h-fit text-center rounded-md ${className} card-${color}`}
		>
			<figure
				className="relative w-full h-16 lg:h-[12rem] mt-3"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Image
					src={isHovered && image.staticSrc ? image.src : image.staticSrc}
					alt={image.alt}
					fill
					quality={100}
					sizes="100vw"
					style={{ objectFit: 'cover' }}
				/>
			</figure>
			<h5
				className={`w-[90%] mx-auto font-roboto font-bold text-sm lg:text-xl mt-3 mb-2`}
				style={{ color: textColor }}
			>
				{title}
			</h5>
			<p className="text-xs md:text-sm lg:text-lg font-nunito font-light pb-3 mx-2">
				{text}
			</p>
		</div>
	);
}
