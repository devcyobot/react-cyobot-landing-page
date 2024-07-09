import { FC } from "react";
import Link from "next/link";
type NavigationSideBarProps = {
	data: {
		section: string;
		list: {
			question: string;
			answer: string;
		}[];
		id: string;
	}[];
};

const NavigationSideBar: FC<NavigationSideBarProps> = (props) => {
	return (
		<div className="fixed left-0 h-fit text-white w-64 hidden max-h-custom:hidden md:flex flex-col items-center space-y-4">
			<nav className="flex flex-col space-y-2">
				{props.data.map((section) => (
					<Link
						key={section.id}
						href={`#${section.id}`}
						className="text-lg font-roboto px-4 py-2 rounded hover:bg-brand-green transition"
					>
						{section.section}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default NavigationSideBar;
