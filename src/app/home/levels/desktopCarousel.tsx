import React, { useEffect, useState } from "react";
import ImageSlide from "../../components/ui/imageSlide";
import styles from "./carousel.module.css";

export type ImageData = {
	title: string;
	color: string;
	src: string;
	alt: string;
};

type DesktopCarouselProps = {
	className: string;
	currentLevel: number;
	data: ImageData[];
	navigate: (i: number) => void;
};

export default function DesktopCarousel(props: DesktopCarouselProps) {
	const [dimensions, setDimensions] = useState<{ d1: number; d2: number }>({
		d1: 0,
		d2: 0,
	});

	function getSlide(index: number) {
		if (props.currentLevel === index)
			return {
				opacity: 1,
				transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
				zIndex: 10,
			};
		else if (props.currentLevel - 1 === index)
			return {
				opacity: 1,
				transform: `translateX(-${dimensions.d1}px) translateZ(-400px) rotateY(0deg)`,
				zIndex: 9,
			};
		else if (props.currentLevel + 1 === index)
			return {
				opacity: 1,
				transform: `translateX(${dimensions.d1}px) translateZ(-400px) rotateY(0deg)`,
				zIndex: 9,
			};
		else if (props.currentLevel - 2 === index)
			return {
				opacity: 1,
				transform: `translateX(-${dimensions.d2}px) translateZ(-500px) rotateY(0deg)`,
				zIndex: 8,
			};
		else if (props.currentLevel + 2 === index)
			return {
				opacity: 1,
				transform: `translateX(${dimensions.d2}px) translateZ(-500px) rotateY(0deg)`,
				zIndex: 8,
			};
	}

	useEffect(() => {
		// Trigger the transition effect when the component mounts
		const updateDimensions = () => {
			// 2xl
			if (window.matchMedia("(min-width: 1536px)").matches) {
				setDimensions({ d1: 500, d2: 700 });
			}
			// xl
			else if (window.matchMedia("(min-width: 1280px)").matches) {
				setDimensions({ d1: 500, d2: 700 });
			}
			// lg
			else if (window.matchMedia("(min-width: 1024px)").matches) {
				setDimensions({ d1: 400, d2: 600 });
			}
			// md
			else if (window.matchMedia("(min-width: 768px)").matches) {
				setDimensions({ d1: 300, d2: 100 });
			}
			// sm: set both d1 nd d2 0 because we will different carousel to display the ImageSlide
			else if (window.matchMedia("(min-width: 640px)").matches) {
				setDimensions({ d1: 0, d2: 0 });
			}
			// mobile: set both d1 nd d2 0 because we will different carousel to display the ImageSlide
			else {
				setDimensions({ d1: 0, d2: 0 }); // Default dimensions for mobile
			}
		};

		updateDimensions(); // Set initial dimensions on mount
		window.addEventListener("resize", updateDimensions);

		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);

	return (
		<div className={`${props.className}`}>
			<div className={styles.slideContainer}>
				{props.data.map((item, i) => (
					<React.Fragment key={i}>
						<div
							className={styles.slide}
							style={{ ...getSlide(i) }}
							onClick={() => props.navigate(i)}
						>
							<ImageSlide
								active={props.currentLevel === i ? true : false}
								src={item.src}
								alt={item.alt}
								color={item.color}
								title={item.title}
								imageFit={i === 2 ? "contain" : "cover"}
							/>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
