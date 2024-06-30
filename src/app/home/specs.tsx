'use client';
import Image from 'next/image';
import { specsDetailsData } from '../data/imageSpecs';
import DropDown from '../components/ui/DropDown';
import Link from 'next/link';
import './specs.css';
import { useState } from 'react';

export default function Specs() {
	const [current, setCurrent] = useState<number>(0);
	const currentData = specsDetailsData[current];
	const handlePrev = () => {
		setCurrent((curr) => (curr === 0 ? specsDetailsData.length - 1 : curr - 1));
	};

	const handleNext = () => {
		setCurrent((curr) => (curr === specsDetailsData.length - 1 ? 0 : curr + 1));
	};

	return (
		<section className="h-auto flex flex-col items-center bg-brand-gray-light pb-20 md:pb-56">
			<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center w-1/2 lg:w-full my-10">
				TAKE YOU THROUGH 1,000 LEVELS <br />
				WITH OUR SUPPORTED HARDWARE
			</h2>
			<Link
				href="/stats"
				passHref={true}
				target="_blank"
				className="font-vt323 underline text-base md:text-lg lg:text-3xl underline-offset-4 mb-10 sm:mb-24"
			>
				&lt;&lt; Stats for nerds &gt;&gt;
			</Link>
			<div
				style={{ backgroundSize: '75%' }}
				className="hidden md:flex items-center justify-center relative h-[45rem] max-w-[1440px] bg-[url('/specs-background.png')] bg-no-repeat bg-center w-full"
			>
				<figure className="relative w-1/3 xl:w-1/4 h-full">
					<Image
						src="/specs-main.png"
						alt="benefits robot"
						quality={100}
						fill
						sizes="(max-width: 1440px) 100vw"
						style={{
							objectFit: 'contain',
						}}
						className="self-center justify-self-center"
					/>
				</figure>
				{specsDetailsData.map((detail, index) => (
					<div
						key={`specs-details-dropdown-${index}`}
						className={`absolute detail-item item-${index + 1}`}
					>
						<DropDown
							label={detail.label}
							src={detail.src}
							src2={detail.src2}
							caption={detail.caption}
							index={index + 1}
						/>
					</div>
				))}
			</div>
			{/* MOBILE */}
			<div className="md:hidden h-full relative font-vt323 flex flex-col items-center justify-evenly w-full text-white text-lg md:text-2xl lg:text-3xl">
				<div className="w-4/5 max-w-[15rem] bg-brand-gray-light card-purple p-5 relative -top-1">
					<h5 className="font-roboto font-bold text-brand-purple text-lg flex flex-col justify-center items-center px-2 w-full h-full text-center">
						{currentData.label}
					</h5>
					<figure className="h-40 w-auto flex gap-x-3">
						<div className="relative w-full">
							<Image
								src={currentData.src}
								alt="Snap fit 3D printed design"
								fill
								quality={100}
								sizes="50vw"
								style={{ objectFit: 'cover', objectPosition: 'center' }}
							/>
						</div>
						{currentData.src2 && (
							<div className="relative w-full">
								<Image
									src={currentData.src2}
									alt="Snap fit 3D printed design"
									fill
									quality={100}
									sizes="50vw"
									style={{ objectFit: 'cover' }}
								/>
							</div>
						)}
					</figure>
					<figcaption className="font-roboto font-medium [grid-area:image] text-xs md:text-sm lg:text-lg text-black text-center">
						{currentData.caption}
					</figcaption>
				</div>
				<div className="w-[34%] absolute flex items-center justify-between">
					<svg
						className="cursor-pointer relative right-[5.5rem]"
						onClick={handlePrev}
						width="35%"
						height="55"
						viewBox="-28 -28 55 55"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M -14 -6 L -12.57 -7.393 L -18.15 -13 H -6 V -15 H -18.15 L -12.57 -20.573 L -14 -22 L -22 -14 L -14 -6 Z"
							fill="black"
						/>
						<path
							d="M -14 -28 C -11.2311 -28 -8.5243 -27.1789 -6.222 -25.6406 C -3.9197 -24.1022 -2.1253 -21.9157 -1.0657 -19.3576 C -0.0061 -16.7994 0.2712 -13.9845 -0.269 -11.2687 C -0.8092 -8.553 -2.1426 -6.0584 -4.1005 -4.1005 C -6.0584 -2.1426 -8.553 -0.8092 -11.2687 -0.269 C -13.9845 0.2712 -16.7994 -0.0061 -19.3576 -1.0657 C -21.9157 -2.1253 -24.1022 -3.9197 -25.6406 -6.222 C -27.1789 -8.5243 -28 -11.2311 -28 -14 C -27.9958 -17.7117 -26.5194 -21.2702 -23.8948 -23.8948 C -21.2702 -26.5194 -17.7117 -27.9958 -14 -28 Z M -14 -2 C -11.6266 -2 -9.3065 -2.7038 -7.3332 -4.0224 C -5.3598 -5.3409 -3.8217 -7.2151 -2.9135 -9.4078 C -2.0052 -11.6005 -1.7676 -14.0133 -2.2306 -16.3411 C -2.6936 -18.6689 -3.8365 -20.8071 -5.5147 -22.4853 C -7.193 -24.1635 -9.3312 -25.3064 -11.6589 -25.7694 C -13.9867 -26.2325 -16.3995 -25.9948 -18.5922 -25.0866 C -20.7849 -24.1783 -22.6591 -22.6402 -23.9776 -20.6668 C -25.2962 -18.6935 -26 -16.3734 -26 -14 C -25.9963 -10.8185 -24.7308 -7.7684 -22.4812 -5.5188 C -20.2316 -3.2692 -17.1815 -2.0037 -14 -2 Z"
							fill="black"
						/>
					</svg>
					<svg
						className="cursor-pointer relative left-[6.6rem] bottom-1"
						onClick={handleNext}
						width="35%"
						height="55"
						viewBox="0 0 55 55"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M 14 6 L 12.57 7.393 L 18.15 13 H 6 V 15 H 18.15 L 12.57 20.573 L 14 22 L 22 14 L 14 6 Z"
							fill="black"
						/>
						<path
							d="M 14 28 C 11.2311 28 8.5243 27.1789 6.222 25.6406 C 3.9197 24.1022 2.1253 21.9157 1.0657 19.3576 C 0.0061 16.7994 -0.2712 13.9845 0.269 11.2687 C 0.8092 8.553 2.1426 6.0584 4.1005 4.1005 C 6.0584 2.1426 8.553 0.8092 11.2687 0.269 C 13.9845 -0.2712 16.7994 0.0061 19.3576 1.0657 C 21.9157 2.1253 24.1022 3.9197 25.6406 6.222 C 27.1789 8.5243 28 11.2311 28 14 C 27.9958 17.7117 26.5194 21.2702 23.8948 23.8948 C 21.2702 26.5194 17.7117 27.9958 14 28 Z M 14 2 C 11.6266 2 9.3065 2.7038 7.3332 4.0224 C 5.3598 5.3409 3.8217 7.2151 2.9135 9.4078 C 2.0052 11.6005 1.7676 14.0133 2.2306 16.3411 C 2.6936 18.6689 3.8365 20.8071 5.5147 22.4853 C 7.193 24.1635 9.3312 25.3064 11.6589 25.7694 C 13.9867 26.2325 16.3995 25.9948 18.5922 25.0866 C 20.7849 24.1783 22.6591 22.6402 23.9776 20.6668 C 25.2962 18.6935 26 16.3734 26 14 C 25.9963 10.8185 24.7308 7.7684 22.4812 5.5188 C 20.2316 3.2692 17.1815 2.0037 14 2 Z"
							fill="black"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
