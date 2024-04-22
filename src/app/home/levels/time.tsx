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
	return (
		<>
			<h4 className="pb-3 pt-12">Time Attribute</h4>
			<div className="flex items-center">
				<Image src={image.src} alt={image.alt} width={500} height={500} />
				<div className="ml-40 w-full">
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
