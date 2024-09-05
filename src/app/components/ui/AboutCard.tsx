import { FC } from 'react';
import Image from 'next/image';

type AboutCardProps = {
	src: string;
	label: string;
	description: string;
	description2?: string;
	color: string;
};
const AboutCard: FC<AboutCardProps> = (props) => {
	let shadowColor = '';
	if (props.color === 'red') shadowColor = 'rgba(224, 3, 3, 0.7)';
	else if (props.color === 'yellow') shadowColor = 'rgba(242, 190, 53, 0.9)';
	else if (props.color === 'green') shadowColor = '#1ad69c';
	else if (props.color === 'purple') shadowColor = '#6B49C9';

	return (
		<div
			style={{
				filter: `drop-shadow(20px 20px 0px ${shadowColor})`,
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			}}
			className="flex flex-col items-center text-center rounded-xl w-full h-auto min-h-80 bg-white"
		>
			<div className="w-[1/2%] grid grid-cols-[1fr_2fr] items-center">
				<figure className="w-10 h-10 md:w-12 md:h-12 relative">
					<Image
						src={props.src}
						alt={props.label}
						fill
						sizes={'33vw'}
						style={{ objectFit: 'contain' }}
					/>
				</figure>
				<h3 className="py-10 w-full text-3xl sm:text-4xl lg:text-5xl font-vt323 text-brand-purple">
					{props.label}
				</h3>
			</div>
			<div className="mb-10">
				<p className="px-5 sm:px-10 xl:px-20 font-roboto font-medium text-lg sm:text-xl lg:text-2xl">
					{props.description}
				</p>
				{props.description2 && (
					<p className="px-5 sm:px-10 xl:px-20 mt-10 font-roboto font-medium text-lg sm:text-xl lg:text-2xl">
						{props.description}
					</p>
				)}
			</div>
		</div>
	);
};

export default AboutCard;
