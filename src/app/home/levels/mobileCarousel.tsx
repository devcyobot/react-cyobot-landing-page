// Source used: https://www.hover.dev/components/carousels
"use client";
import { FC } from "react";
import { motion, useMotionValue } from "framer-motion";
import { imageCarousel } from "../../data/imageCarousel";
import ImageSlide from "../../components/ui/imageSlide";
import { useDifficultyContext } from "../../context/DifficultyContext";
import { ImageData } from "./desktopCarousel";

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
	type: "spring",
	mass: 3,
	stiffness: 400,
	damping: 50,
};

type MyData = {
	title: string;
	color: string;
	src: string;
	alt: string;
};

type MobileCarouselProps = {
	className: string;
	currentLevel: number;
	data: ImageData[];
	prev: () => void;
	next: () => void;
};

const MobileCarousel: FC<MobileCarouselProps> = (props) => {
	const { setDifficulty } = useDifficultyContext();

	const dragX = useMotionValue(0);

	const onDragEnd = () => {
		const x = dragX.get();

		if (x <= -DRAG_BUFFER && props.currentLevel < imageCarousel.length - 1) {
			props.next();
		} else if (x >= DRAG_BUFFER && props.currentLevel > 0) {
			props.prev();
		}
	};

	return (
		<div
			className={`${props.className} w-full max-w-[20rem] relative overflow-hidden bg-brand-dark-2 mx-auto`}
		>
			<motion.div
				drag="x"
				dragConstraints={{
					left: 0,
					right: 0,
				}}
				style={{
					x: dragX,
				}}
				animate={{
					translateX: `-${props.currentLevel * 100}%`,
				}}
				transition={SPRING_OPTIONS}
				onDragEnd={onDragEnd}
				className="flex cursor-grab items-center active:cursor-grabbing"
			>
				<Images imgIndex={props.currentLevel} images={imageCarousel} />
			</motion.div>
			<Dots imgIndex={props.currentLevel} setImgIndex={setDifficulty} />
		</div>
	);
};

type ImagesProps = {
	imgIndex: number;
	images: {
		title: string;
		src: string;
		alt: string;
		icon?: string;
		color: string;
	}[];
};

/**
 * Display an array of images as a carousel with dots navigation.
 */
const Images = ({ imgIndex, images }: ImagesProps): JSX.Element => {
	return (
		<>
			{images.map((img, idx) => (
				<motion.div
					key={idx}
					style={{
						flex: "0 0 100%", // Ensure each slide takes the full width
					}}
					animate={{
						scale: imgIndex === idx ? 0.95 : 0.85,
					}}
					transition={SPRING_OPTIONS}
					className="w-screen h-[35rem] shrink-0 flex justify-center items-center"
				>
					<ImageSlide
						active={true}
						src={img.src}
						alt={img.alt}
						title={img.title}
						color={img.color}
						imageFit={idx === 2 ? "contain" : "cover"}
					/>
				</motion.div>
			))}
		</>
	);
};

type DotsProps = {
	imgIndex: number;
	setImgIndex: (idx: number) => void;
};

/**
 * Display dots navigation for mobile carousel.
 */
export const Dots = ({ imgIndex, setImgIndex }: DotsProps): JSX.Element => {
	return (
		<div className="flex w-full justify-center gap-3">
			{imageCarousel.map((_, idx) => {
				return (
					<button
						key={idx}
						onClick={() => setImgIndex(idx)}
						className={`h-4 w-4 rounded-full transition-colors ${
							idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
						}`}
					/>
				);
			})}
		</div>
	);
};

export default MobileCarousel;
