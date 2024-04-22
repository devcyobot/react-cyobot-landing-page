import Card from '../../components/ui/card';
import { imageCarousel } from '../../data/imageCarousel';
import { useState } from 'react';
import Image from 'next/image';

type CarouselProps = {
	current: number;
	left: () => void;
	right: () => void;
};

export default function Carousel({ current, left, right }: CarouselProps) {
	return (
		<div className="bg-black w-[45%] overflow-hidden relative">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{imageCarousel.map((i) => {
					return (
						// <Card
						// 	key={i.id}
						// 	image={{
						// 		src: `${i.src}`,
						// 		alt: `${i.alt}`,
						// 	}}
						// 	color="yellow"
						// />
						<Image
							key={i.id}
							src={i.src}
							alt={i.alt}
							width={500}
							height={500}
							className={`bg-brand-${i.color}`}
						/>
					);
				})}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button
					type="button"
					className="bg-brand-yellow p-1 rounded-full shadow text-black hover:bg-brand-green"
					onClick={left}
				>
					Left
				</button>
				<button
					type="button"
					className="bg-brand-yellow p-1 rounded-full shadow text-black hover:bg-brand-green"
					onClick={right}
				>
					Right
				</button>
			</div>
		</div>
	);
}
