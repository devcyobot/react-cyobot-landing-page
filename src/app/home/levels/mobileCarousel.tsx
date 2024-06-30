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
		<div
			className={`${props.className} overflow-hidden w-full h-full relative`}
		>
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
			<div className="w-full absolute inset-y-0 flex items-center justify-between">
				<svg
					className="relative right-[2.7rem]"
					onClick={props.prev}
					width="100%"
					height="55"
					viewBox="-28 -28 55 55"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M -14 -6 L -12.57 -7.393 L -18.15 -13 H -6 V -15 H -18.15 L -12.57 -20.573 L -14 -22 L -22 -14 L -14 -6 Z"
						fill="white"
					/>
					<path
						d="M -14 -28 C -11.2311 -28 -8.5243 -27.1789 -6.222 -25.6406 C -3.9197 -24.1022 -2.1253 -21.9157 -1.0657 -19.3576 C -0.0061 -16.7994 0.2712 -13.9845 -0.269 -11.2687 C -0.8092 -8.553 -2.1426 -6.0584 -4.1005 -4.1005 C -6.0584 -2.1426 -8.553 -0.8092 -11.2687 -0.269 C -13.9845 0.2712 -16.7994 -0.0061 -19.3576 -1.0657 C -21.9157 -2.1253 -24.1022 -3.9197 -25.6406 -6.222 C -27.1789 -8.5243 -28 -11.2311 -28 -14 C -27.9958 -17.7117 -26.5194 -21.2702 -23.8948 -23.8948 C -21.2702 -26.5194 -17.7117 -27.9958 -14 -28 Z M -14 -2 C -11.6266 -2 -9.3065 -2.7038 -7.3332 -4.0224 C -5.3598 -5.3409 -3.8217 -7.2151 -2.9135 -9.4078 C -2.0052 -11.6005 -1.7676 -14.0133 -2.2306 -16.3411 C -2.6936 -18.6689 -3.8365 -20.8071 -5.5147 -22.4853 C -7.193 -24.1635 -9.3312 -25.3064 -11.6589 -25.7694 C -13.9867 -26.2325 -16.3995 -25.9948 -18.5922 -25.0866 C -20.7849 -24.1783 -22.6591 -22.6402 -23.9776 -20.6668 C -25.2962 -18.6935 -26 -16.3734 -26 -14 C -25.9963 -10.8185 -24.7308 -7.7684 -22.4812 -5.5188 C -20.2316 -3.2692 -17.1815 -2.0037 -14 -2 Z"
						fill="white"
					/>
				</svg>
				<svg
					className="relative left-16 bottom-2 sm:bottom-1"
					onClick={props.next}
					width="100%"
					height="55"
					viewBox="0 0 55 55"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M 14 6 L 12.57 7.393 L 18.15 13 H 6 V 15 H 18.15 L 12.57 20.573 L 14 22 L 22 14 L 14 6 Z"
						fill="white"
					/>
					<path
						d="M 14 28 C 11.2311 28 8.5243 27.1789 6.222 25.6406 C 3.9197 24.1022 2.1253 21.9157 1.0657 19.3576 C 0.0061 16.7994 -0.2712 13.9845 0.269 11.2687 C 0.8092 8.553 2.1426 6.0584 4.1005 4.1005 C 6.0584 2.1426 8.553 0.8092 11.2687 0.269 C 13.9845 -0.2712 16.7994 0.0061 19.3576 1.0657 C 21.9157 2.1253 24.1022 3.9197 25.6406 6.222 C 27.1789 8.5243 28 11.2311 28 14 C 27.9958 17.7117 26.5194 21.2702 23.8948 23.8948 C 21.2702 26.5194 17.7117 27.9958 14 28 Z M 14 2 C 11.6266 2 9.3065 2.7038 7.3332 4.0224 C 5.3598 5.3409 3.8217 7.2151 2.9135 9.4078 C 2.0052 11.6005 1.7676 14.0133 2.2306 16.3411 C 2.6936 18.6689 3.8365 20.8071 5.5147 22.4853 C 7.193 24.1635 9.3312 25.3064 11.6589 25.7694 C 13.9867 26.2325 16.3995 25.9948 18.5922 25.0866 C 20.7849 24.1783 22.6591 22.6402 23.9776 20.6668 C 25.2962 18.6935 26 16.3734 26 14 C 25.9963 10.8185 24.7308 7.7684 22.4812 5.5188 C 20.2316 3.2692 17.1815 2.0037 14 2 Z"
						fill="white"
					/>
				</svg>
			</div>
		</div>
	);
}
