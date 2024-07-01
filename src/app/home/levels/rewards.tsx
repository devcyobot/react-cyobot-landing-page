import Card from '../../components/ui/card';
import { useDifficultyContext } from '../../context/DifficultyContext';

type RewardsProps = {
	data: Reward[];
};

type Reward = {
	id: number;
	color: string;
	image: {
		src: string;
		staticSrc: string;
		alt: string;
	};
	name: string;
	job: string;
};

export default function Rewards({ data }: RewardsProps) {
	let rowNum = 0;
	if (data.length === 3) rowNum = 1;
	else rowNum = 2;

	const { currentDifficulty } = useDifficultyContext();

	return (
		<div className="h-full max-h- flex flex-col justify-evenly">
			<h4
				className="mt-14 text-4xl font-vt323"
				style={{ color: currentDifficulty.color }}
			>
				PROJECTS
			</h4>
			{/* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-${
						3 * rowNum
					} sm:grid-rows-3 lg:grid-rows-${rowNum} */}
			<div
				className={`mx-auto my-10 max-w-[1440px] w-full sm:w-[75%] md:w-full h-auto
					grid md:grid-rows-${rowNum} grid-rows-${
					3 * rowNum
				} grid-cols-1 md:grid-cols-3 place-items-center justify-items-center 
					gap-y-10 sm:gap-5 md:gap-10 lg:gap-5 xl:gap-y-16 xl:gap-x-0`}
			>
				{data.map((d) => {
					return (
						<Card
							key={d.id}
							image={{
								src: d.image.src,
								staticSrc: d.image.staticSrc,
								alt: d.image.alt,
							}}
							color={d.color}
							title={d.name}
							text={d.job}
						/>
					);
				})}
			</div>
		</div>
	);
}
