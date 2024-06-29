import { useDifficultyContext } from '../../context/DifficultyContext';
import Bar from '../../components/ui/bar';
import Image from 'next/image';

type TimeProps = {
	image: {
		src: string;
		alt: string;
	};
	atr: Attribute[];
};

type Attribute = {
	id: number;
	name: string;
	color: string;
	amount: string;
};

export default function Time({ image, atr }: TimeProps) {
	const { currentDifficulty } = useDifficultyContext();

	return (
		<>
			<h4
				className="mt-14 mb-3 text-4xl font-vt323"
				style={{ color: currentDifficulty.color }}
			>
				TIME ATTRIBUTE
			</h4>
			<div className="flex flex-col lg:flex-row items-center h-full">
				<figure className="relative w-[40%] h-[25rem]">
					<Image
						src={image.src}
						alt={image.alt}
						quality={100}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						style={{
							objectFit: 'cover',
							maxHeight: '461px',
							maxWidth: '473px',
						}}
					/>
				</figure>
				<div className="pl-16 pt-16 w-2/3">
					{atr.map((a) => {
						return (
							<Bar key={a.id} color={a.color} name={a.name} amount={a.amount} />
						);
					})}
				</div>
			</div>
		</>
	);
}
