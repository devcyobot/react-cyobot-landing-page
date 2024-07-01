import { FC } from 'react';
import Image from 'next/image';

type TeamImageProps = {
	src: string;
	alt: string;
	icon: string;
};

const TeamImageCard: FC<TeamImageProps> = (props) => {
	return (
		<div className="w-full h-full">
			<figure className="relative w-full h-full bg-brand-dark">
				<Image src={props.src} alt="" />
			</figure>
		</div>
	);
};

export default TeamImageCard;
