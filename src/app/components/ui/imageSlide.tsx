import Image from "next/image";

type ImageSlideProps = {
	active: boolean;
	src: string;
	alt: string;
	title?: string;
	color: string;
	imageFit: "cover" | "contain" | "none" | "scale-down";
};

export default function ImageSlide({
	active,
	src,
	alt,
	title,
	color,
	imageFit,
}: ImageSlideProps) {
	// Border color
	let bg = "";
	if (color === "yellow") bg = "#f3c449";
	else if (color === "green") bg = "#1ad69c";
	else if (color === "red") bg = "#e00303";
	else bg = "#3e2486";

	// Shadow color
	let shadowColor = "";
	if (color === "yellow" || color === "red") shadowColor = "#1ad69c";
	else shadowColor = "#f3c449";

	return (
		<div className="cursor-pointer flex flex-col items-center justify-between w-full h-[85%] sm:h-full">
			{active ? (
				// When image is selected/active
				<div className="relative w-3/4 md:w-full h-full">
					<div
						className={`h-full w-full border-dashed-${color}-bold rounded-[10px] px-5 py-11`}
					>
						{/* Colored background begind the Image */}
						<div
							className="shadow-[20px_20px_15px_black] w-full h-[98%] rounded-3xl flex flex-col items-center justify-center"
							style={{
								backgroundColor: bg,
							}}
						></div>
					</div>
					<figure className="absolute max-w-375px:-left-9 -left-10 sm:-left-[3.3rem] md:-left-16 max-w-375px:top-4 -top-10 sm:-top-12 md:-top-11 max-w-375px:h-4/5 max-w-375px:w-[19rem] w-[22rem] sm:w-[29rem] h-full">
						<Image
							src={src}
							alt={alt}
							fill
							quality={80}
							sizes="(max-width: 768px) 50vw, 33vw"
							style={{
								objectFit: imageFit,
							}}
						/>
					</figure>
				</div>
			) : (
				// When image is not selected
				<div className="relative h-full w-full flex flex-col items-center justify-center">
					{/* Dark shadow */}
					<div
						className="left-20 top-24 absolute w-4/5 h-[75%] rounded-[30px]"
						style={{
							backgroundColor: "rgba(0, 0, 0, 0.5)",
							boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.25)",
						}}
					></div>
					{/* Background color */}
					<div className="relative w-[89%] h-[71%] lg:h-[74%] rounded-[30px] birghtness-50 bg-brand-gray-dark px-12 py-14">
						<figure className="-left-[5.3rem] top-0 absolute w-[29rem] h-full">
							<Image
								src={src}
								alt={alt}
								fill
								quality={80}
								sizes="(max-width: 768px) 50vw, 33vw"
								className="brightness-[20%]"
								style={{
									objectFit: imageFit,
								}}
							/>
						</figure>
					</div>
				</div>
			)}
			<p
				className={
					active
						? `text-white border-dashed-${color}-regular font-vt323 bg-brand-dark bg-opacity-25 text-center py-3 w-3/4 md:w-full mt-12 text-[2.7rem] lg:text-5xl`
						: "w-[30.063rem]"
				}
			>
				{active ? title : ""}
			</p>
		</div>
	);
}
