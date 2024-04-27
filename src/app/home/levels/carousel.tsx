import Card from '../../components/ui/card';
import { imageCarousel } from '../../data/imageCarousel';
import { useState } from 'react';
import Image from 'next/image';
import ImageSlide from '../../components/ui/imageSlide';

type CarouselProps = {
	current: number;
	left: () => void;
	right: () => void;
};

export default function Carousel({ current, left, right }: CarouselProps) {
	let bg = '';
	if (current === 1) bg = '#f3c449';
	else if (current === 0) bg = '#1ad69c';
	else bg = '#e00303';

	return (
		<div className="flex">
			{imageCarousel.map((i) => {
				return (
					<ImageSlide
						key={i.id}
						src={i.src}
						alt={i.alt}
						color={i.color}
						title={i.title}
					/>
				);
			})}
			{/* Navigation buttons */}
			{/* <div className="absolute inset-0 flex items-center justify-between p-4">
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
			</div> */}
		</div>
	);
}
