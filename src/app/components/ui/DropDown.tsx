"use client";
import { FC, useState } from "react";
import Image from "next/image";

type DropDownProps = {
	label: string;
	src: string;
	src2?: string;
	caption: string;
};

const DropDown: FC<DropDownProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const summaryBorder = isOpen ? "border-dashed-purple-regular" : "";
	const detailsBorder = isOpen ? "" : "border-dashed-purple-regular";
	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<details
			className={`bg-brand-gray-light md:h-14 lg:h-16 xl:h-20 w-72 md:w-[14rem] lg:w-72 xl:w-80 ${detailsBorder}`}
		>
			<summary
				onClick={toggleOpen}
				className={`${summaryBorder} py-5 list-none cursor-pointer font-roboto font-bold text-brand-purple text-lg lg:text-xl flex flex-col justify-center items-center px-2 w-full h-full text-center`}
			>
				<span className="absolute right-2 text-xl xl:text-2xl transition-transform duration-300 transform">
					{/* {isOpen ? "-" : "+"} */}
					<svg
						className="fill-brand-purple shrink-0 ml-8"
						width="16"
						height="16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							y="7"
							width="16"
							height="2"
							rx="1"
							className={`transform origin-center transition duration-200 ease-out ${
								isOpen && "!rotate-180"
							}`}
						/>
						<rect
							y="7"
							width="16"
							height="2"
							rx="1"
							className={`transform origin-center rotate-90 transition duration-200 ease-out ${
								isOpen && "!rotate-180"
							}`}
						/>
					</svg>
				</span>
				<span className="w-[90%]">{props.label}</span>
			</summary>
			<div className="bg-brand-gray-light card-purple p-5 -top-1">
				<figure className="h-40 w-auto flex gap-x-3">
					<div className="relative w-full">
						<Image
							src={props.src}
							alt={props.label}
							fill
							sizes="50vw"
							style={{ objectFit: "cover", objectPosition: "center" }}
						/>
					</div>
					{props.src2 && (
						<div className="relative w-full">
							<Image
								src={props.src2}
								alt={props.label}
								fill
								sizes="50vw"
								style={{ objectFit: "cover" }}
							/>
						</div>
					)}
				</figure>
				<figcaption className="font-roboto font-medium [grid-area:image] text-base lg:text-lg text-black text-center">
					{props.caption}
				</figcaption>
			</div>
		</details>
	);
};

export default DropDown;
