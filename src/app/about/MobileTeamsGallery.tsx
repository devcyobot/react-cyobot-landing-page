// // Source used: https://www.hover.dev/components/carousels
// 'use client';
// import TeamImageCard, { TeamImageProps } from '../components/ui/TeamImageCard';
// import { FC, useEffect, useState } from 'react';
// import { motion, useMotionValue } from 'framer-motion';

// const ONE_SECOND = 1000; // millisecond
// const AUTO_DELAY = ONE_SECOND * 5;
// const DRAG_BUFFER = 50;

// const SPRING_OPTIONS = {
// 	type: 'spring',
// 	mass: 3,
// 	stiffness: 400,
// 	damping: 50,
// };

// type MobileProjectsProps = {
// 	data: TeamImageProps[];
// };

// type DotsProps = {
// 	imgIndex: number;
// 	setCardIndex: (idx: number) => void;
// };

// const MobileProjects: FC<MobileProjectsProps> = (props) => {
// 	const [cardIndex, setCardIndex] = useState(0);
// 	const [autoScroll, setAutoScroll] = useState(true);
// 	const dragX = useMotionValue(0);

// 	const onDragEnd = () => {
// 		const x = dragX.get();

// 		if (x <= -DRAG_BUFFER && cardIndex < props.data.length - 1) {
// 			setCardIndex((pv) => pv + 1);
// 		} else if (x >= DRAG_BUFFER && cardIndex > 0) {
// 			setCardIndex((pv) => pv - 1);
// 		}

// 		setAutoScroll(false);
// 	};

// 	/**
// 	 * Display dots navigation for mobile carousel.
// 	 */
// 	const Dots = ({ imgIndex, setCardIndex }: DotsProps): JSX.Element => {
// 		return (
// 			<div className="flex w-full justify-center gap-3">
// 				{props.data.map((_, idx) => {
// 					return (
// 						<button
// 							key={idx}
// 							onClick={() => setCardIndex(idx)}
// 							className={`h-4 w-4 rounded-full transition-colors ${
// 								idx === imgIndex ? 'bg-neutral-50' : 'bg-neutral-500'
// 							}`}
// 						/>
// 					);
// 				})}
// 			</div>
// 		);
// 	};

// 	/**
// 	 * Handles the interaction by setting the autoScroll state to false, stops the autoScroll.
// 	 */
// 	const handleInteraction = () => {
// 		setAutoScroll(false);
// 	};

// 	useEffect(() => {
// 		let intervalRef: NodeJS.Timeout;
// 		if (autoScroll) {
// 			intervalRef = setInterval(() => {
// 				const x = dragX.get();

// 				if (x === 0) {
// 					setCardIndex((pv) => {
// 						if (pv === props.data.length - 1) {
// 							return 0;
// 						}
// 						return pv + 1;
// 					});
// 				}
// 			}, AUTO_DELAY);
// 		}

// 		return () => clearInterval(intervalRef);
// 	}, [dragX, autoScroll, props.data.length]);

// 	return (
// 		<div
// 			onClick={handleInteraction}
// 			onMouseOver={handleInteraction}
// 			onTouchStart={handleInteraction}
// 			className="py-10 sm:hidden w-full max-w-[20rem] relative overflow-hidden bg-brand-dark-2 mx-auto"
// 		>
// 			<motion.div
// 				drag="x"
// 				dragConstraints={{
// 					left: 0,
// 					right: 0,
// 				}}
// 				style={{
// 					x: dragX,
// 				}}
// 				animate={{
// 					translateX: `-${cardIndex * 100}%`,
// 				}}
// 				transition={SPRING_OPTIONS}
// 				onDragEnd={onDragEnd}
// 				className="flex cursor-grab items-center active:cursor-grabbing"
// 			>
// 				{props.data.map((d, idx) => (
// 					<motion.div
// 						key={idx}
// 						style={{
// 							flex: '0 0 100%', // Ensure each slide takes the full width
// 						}}
// 						animate={{
// 							scale: cardIndex === idx ? 0.95 : 0.85,
// 						}}
// 						transition={SPRING_OPTIONS}
// 						className="w-screen flex justify-center items-center"
// 					>
// 						{props.data.map((item, i) => {
// 							return (
// 								<TeamImageCard
// 									key={`team-image-card-${i}`}
// 									src={item.src}
// 									alt={item.alt}
// 									icon={item.icon}
// 								/>
// 								// <div key={i} className="w-10 h-20 bg-slate-600"></div>
// 							);
// 						})}
// 					</motion.div>
// 				))}
// 			</motion.div>
// 			<Dots imgIndex={cardIndex} setCardIndex={setCardIndex} />
// 		</div>
// 	);
// };

// export default MobileProjects;
