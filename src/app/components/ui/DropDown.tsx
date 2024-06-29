'use client';
import { FC, useState } from 'react';
import Image from 'next/image';

type DropDownProps = {
	label: string;
	src: string;
	src2?: string;
	caption: string;
	index: number;
};

const DropDown: FC<DropDownProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const summaryBorder = isOpen ? 'border-dashed-purple-regular' : '';
	const detailsBorder = isOpen ? '' : 'border-dashed-purple-regular';
	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<details className={`bg-brand-gray-light w-80 h-auto ${detailsBorder}`}>
			<summary
				onClick={toggleOpen}
				className={`${summaryBorder} list-none cursor-pointer font-roboto font-bold text-brand-purple text-xl flex flex-col justify-center items-center h-20 w-80`}
			>
				<span className="absolute right-2 text-2xl transition-transform duration-300 transform">
					{isOpen ? '-' : '+'}
				</span>
				{props.label}
			</summary>
			<div className="card-purple p-5 relative -top-1">
				<figure className="relative h-40 w-auto flex gap-x-3">
					<div className="relative w-full">
						<Image
							src={props.src}
							alt="Snap fit 3D printed design"
							fill
							quality={100}
							sizes="50vw"
							style={{ objectFit: 'cover', objectPosition: 'center' }}
						/>
					</div>
					{props.src2 && (
						<div className="relative w-full">
							<Image
								src={props.src2}
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
					{props.caption}
				</figcaption>
			</div>
		</details>
	);
};

export default DropDown;
