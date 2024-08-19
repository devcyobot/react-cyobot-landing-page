import { useDifficultyContext } from "../../context/DifficultyContext";
import Bar from "../../components/ui/bar";
import Image from "next/image";

type TimeProps = {
	image: {
		src: string;
		alt: string;
	};
	atr: Attribute[];
};

type Attribute = {
	name: string;
	color: string;
	amount: string;
};

export default function Time({ image, atr }: TimeProps) {
	const { currentDifficulty } = useDifficultyContext();

	return (
		<>
			<h4
				className="mt-5 sm:mt-14 mb-3 text-3xl lg:text-4xl font-vt323"
				style={{ color: currentDifficulty.color }}
			>
				TIME ATTRIBUTE
			</h4>
			<div className="flex flex-col lg:flex-row items-center h-full w-full">
				<figure className="relative w-full lg:w-1/2 xl:w-[40%] h-[20rem] md:h-[28rem]">
					<Image
						src={image.src}
						alt={image.alt}
						quality={80}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="mx-auto"
						style={{
							objectFit: "contain",
							maxHeight: "461px",
							maxWidth: "473px",
						}}
					/>
				</figure>
				<div className="lg:pl-16 lg:pt-16 w-2/3">
					{atr.map((a, i) => {
						return (
							<Bar
								key={`bar-${i}`}
								color={a.color}
								name={a.name}
								amount={a.amount}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
