import { FC } from "react";
import { FaqData } from "../data/FaqData";
import QuestionsList from "./list/QuestionsList";

import NavigationSideBar from "./navigation/NavigationSideBar";

const FAQ: FC = () => {
	const sections = FaqData.map((section, index) => ({
		id: `section-${index}`,
		...section,
	}));

	return (
		<main className="bg-brand-dark-2 w-full h-auto pt-16 xl:pt-24 mx-auto flex flex-col justify-evenly">
			<div className="w-full max-w-[1536px] mx-auto">
				<h1 className="my-10 text-center font-vt323 text-white text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl">
					FAQ
				</h1>
				<div className="w-full">
					<NavigationSideBar data={sections} />
					<div className="md:pl-64 w-[90%] mx-auto">
						<QuestionsList data={FaqData} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default FAQ;
