"use client";
import Image from "next/image";
import { specsDetailsData } from "../data/imageSpecs";
import DropDown from "../components/ui/DropDown";
import Link from "next/link";
import "./specs.css";
import { useState } from "react";

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
			<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center w-full my-10">
				TAKE YOU THROUGH 1,000 LEVELS <br />
				WITH OUR SUPPORTED HARDWARE
			</h2>
			<Link
				href="/stats"
				className="font-vt323 underline text-xl md:text-2xl lg:text-3xl underline-offset-4 mb-10 sm:mb-24"
			>
				&lt;&lt; Stats for nerds &gt;&gt;
			</Link>
			<div
				style={{ backgroundSize: "75%" }}
				className="hidden md:flex items-center justify-center relative h-[45rem] max-w-[1536px] bg-[url('/specs-background.jpg')] bg-no-repeat bg-center w-full"
			>
				<figure className="relative w-1/3 xl:w-1/4 h-full">
					<Image
						src="/specs-main.png"
						alt="benefits robot"
						quality={80}
						fill
						sizes="(max-width: 1440px) 100vw"
						className="object-contain self-center justify-self-center"
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
						/>
					</div>
				))}
			</div>
			<div className="z-10 md:hidden flex flex-col justify-evenly h-[80vh]">
				{specsDetailsData.map((detail, index) => (
					<div key={`specs-details-dropdown-${index}`} className={`sm:hidden}`}>
						<DropDown
							label={detail.label}
							src={detail.src}
							src2={detail.src2}
							caption={detail.caption}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
