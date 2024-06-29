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

	const totalPages = 3;

	return (
		// <div className={styles.slider}>
		// 	<a href="#slide-1">1</a>
		// 	<a href="#slide-2">2</a>
		// 	<a href="#slide-3">3</a>

		// 	<div className={styles.slides}>
		// 		<div id="slide-1">1</div>
		// 		<div id="slide-2">2</div>
		// 		<div id="slide-3">3</div>
		// 	</div>
		// </div>
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
			<div className="ml-[21rem] w-32 relative font-vt323 flex items-center justify-center text-white text-xl md:text-2xl lg:text-3xl">
				{/* <button type="button" onClick={props.prev} className="mr-10">
					Prev
				</button>
				<button type="button" onClick={props.next}>
					Next
				</button> */}
				<button
					onClick={props.prev}
					disabled={props.currentLevel === 0}
					className="px-2 py-1 text-white bg-transparent rounded disabled:opacity-50 disabled:cursor-not-allowed absolute left-2 sm:left-4"
				>
					&lt;
				</button>
				<button
					onClick={props.next}
					disabled={props.currentLevel === 2}
					className="px-2 py-1 text-white bg-transparent rounded disabled:opacity-50 disabled:cursor-not-allowed"
				>
					&gt;
				</button>
			</div>
		</div>
	);
}

{
	/* <div className="relative font-vt323 flex items-center justify-center w-full text-white text-xl md:text-2xl lg:text-3xl">
	<button
		onClick={handlePrevious}
		disabled={currentPage === 1}
		className="px-2 py-1 text-white bg-transparent rounded disabled:opacity-50 disabled:cursor-not-allowed absolute left-2 sm:left-4"
	>
		&lt;
	</button>
	<h2>{title}</h2>
	<div className="flex items-center space-x-2 sm:space-x-2 absolute right-2 sm:right-4">
		<span>
			[{currentPage}/{totalPages}]
		</span>
		<button
			onClick={handleNext}
			disabled={currentPage === totalPages}
			className="px-2 py-1 text-white bg-transparent rounded disabled:opacity-50 disabled:cursor-not-allowed"
		>
			&gt;
		</button>
	</div>
</div>; */
}
