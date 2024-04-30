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

type DesktopCarouselProps = {
	className: string;
	currentLevel: number;
	data: MyData[];
	navigate: (i: number) => void;
};

export default function DesktopCarousel(props: DesktopCarouselProps) {
	function getSlide(index: number) {
		if (props.currentLevel === index)
			return {
				opacity: 1,
				transform: 'translateX(0px) translateZ(0px) rotateY(0deg)',
				zIndex: 10,
			};
		else if (props.currentLevel - 1 === index)
			return {
				opacity: 1,
				transform: 'translateX(-600px) translateZ(-400px) rotateY(0deg)',
				zIndex: 9,
			};
		else if (props.currentLevel + 1 === index)
			return {
				opacity: 1,
				transform: 'translateX(600px) translateZ(-400px) rotateY(0deg)',
				zIndex: 9,
			};
		else if (props.currentLevel - 2 === index)
			return {
				opacity: 1,
				transform: 'translateX(-900px) translateZ(-500px) rotateY(0deg)',
				zIndex: 8,
			};
		else if (props.currentLevel + 2 === index)
			return {
				opacity: 1,
				transform: 'translateX(900px) translateZ(-500px) rotateY(0deg)',
				zIndex: 8,
			};
	}
	return (
		<div className={`${props.className}`}>
			<div className={styles.slideContainer}>
				{props.data.map((item, i) => (
					<React.Fragment key={item.id}>
						<div
							className={styles.slide}
							style={{ ...getSlide(i) }}
							onClick={() => props.navigate(i)}
						>
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
		</div>
	);
}
