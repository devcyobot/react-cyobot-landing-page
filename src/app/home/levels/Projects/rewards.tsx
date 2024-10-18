import Card from "@/app/components/ui/card/card";
import { useDifficultyContext } from "@/app/context/DifficultyContext";
import MobileProjects from "@/app/home/levels/Projects/MobileProjects";

type ProjectsProps = {
	data: Project[];
};

export type Project = {
	color: string;
	image: {
		src: string;
		staticSrc: string;
		alt: string;
	};
	name: string;
	job: string;
};

export default function Projects({ data }: ProjectsProps) {
	const { currentDifficulty } = useDifficultyContext();

	return (
		<div className="flex flex-col justify-evenly items-center">
			<h4
				className="mt-14 text-4xl font-vt323 self-start"
				style={{ color: currentDifficulty.color }}
			>
				PROJECTS
			</h4>
			<div className="hidden my-10 sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 xl:gap-24">
				{data.map((d, i) => {
					return (
						<Card
							key={i}
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
			<MobileProjects data={data} />
		</div>
	);
}
