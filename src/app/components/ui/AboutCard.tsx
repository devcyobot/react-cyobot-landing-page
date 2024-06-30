import { FC } from 'react';
import Image from 'next/image';

type AboutCard = {
	src: string;
	label: string;
	description: string;
	color: string;
};
const AboutCard: FC<AboutCard> = (props) => {
	return (
		<section>
			<div>
				<Image
					src={props.src}
					alt={props.label}
					fill
					sizes={'33vw'}
					style={{ objectFit: 'contain' }}
				/>
				<h3>{props.label}</h3>
			</div>
			<p>{props.description}</p>
		</section>
	);
};

export default AboutCard;
