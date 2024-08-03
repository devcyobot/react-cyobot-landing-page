import Link from "next/link";
import { FC } from "react";

type GreenButtonProps = {
	link?: string;
	description: string;
};

export const GreenButton: FC<GreenButtonProps> = (props) => {
	return (
		<>
			{props.link ? (
				<Link
					href={props.link}
					passHref={true}
					target="_blank"
					className="rounded-lg bg-brand-green text-white md:text-xl xl:text-2xl font-normal p-3 w-full"
				>
					{props.description}
				</Link>
			) : (
				<button
					type="button"
					className="rounded-lg bg-brand-green text-white md:text-xl xl:text-2xl font-normal p-3 w-full"
				>
					{props.description}
				</button>
			)}
		</>
	);
};
