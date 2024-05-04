import React from 'react';
import ImageSlide from '../../components/ui/imageSlide';
import styles from './carousel.module.css';

type MyData = {
	id: number;
	title: string;
	color: string;
	src: string;
	alt: string;
};

type MobileCarouselProps = {
	className: string;
	currentLevel: number;
	data: MyData[];
	prev: () => void;
	next: () => void;
};

export default function MobileCarousel(props: MobileCarouselProps) {
	function getSlide(index: number) {
		if (props.currentLevel === index)
			return {
				opacity: 1,
				transform: 'translateX(0px) translateZ(0px) rotateY(0deg)',
				zIndex: 10,
			};
		else if (props.currentLevel - 1 === index)
			return {
				opacity: 0,
				transform: 'translateX(-650px) translateZ(-400px) rotateY(0deg)',
				zIndex: 9,
			};
		else if (props.currentLevel + 1 === index)
			return {
				opacity: 0,
				transform: 'translateX(650px) translateZ(-400px) rotateY(0deg)',
				zIndex: 9,
			};
		else if (props.currentLevel - 2 === index)
			return {
				opacity: 0,
				transform: 'translateX(-850px) translateZ(-500px) rotateY(0deg)',
				zIndex: 8,
			};
		else if (props.currentLevel + 2 === index)
			return {
				opacity: 0,
				transform: 'translateX(850px) translateZ(-500px) rotateY(0deg)',
				zIndex: 8,
			};
	}
	return (
		<div className={`${props.className} overflow-hidden`}>
			<div className={styles.slideContainer}>
				{props.data.map((item, i) => (
					<React.Fragment key={item.id}>
						<div className={styles.slide} style={{ ...getSlide(i) }}>
							<ImageSlide
								active={props.currentLevel === item.id ? true : false}
								src={item.src}
								alt={item.alt}
								color={item.color}
								title={item.title}
								imageFit={item.id === 2 ? 'contain' : 'cover'}
							/>
						</div>
					</React.Fragment>
				))}
			</div>
			{/* Navigation Buttons */}
			<div className="flex w-full items-center justify-center">
				<button type="button" onClick={props.prev} className="mr-10">
					Prev
				</button>
				<button type="button" onClick={props.next}>
					Next
				</button>
			</div>
		</div>
	);
}
