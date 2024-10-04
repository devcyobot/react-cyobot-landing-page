import Hexagon from "../components/ui/hexagon";
import Link from "next/link";
import HexagonBadgeMatrix from "../components/ui/honeycomb";
import { hexagonData } from "../data/hexagonData";

export default function Roles() {
	return (
		<section className="h-screen max-h-[23rem] sm:max-h-[27rem] md:max-h-[35rem] lg:max-h-[46rem] bg-brand-dark text-white flex flex-col items-center justify-evenly">
			<div className="flex flex-col items-center">
				<h2 className="h-auto text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-5">
					UNLOCK TOP SKILLS IN ENGINEERING
				</h2>
				<h3 className="w-2/3 sm:w-full text-center font-roboto text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
					Discover which career roles would be best fit for you.{" "}
					<Link
						href="https://roboticsquest.com/"
						className="underline"
						passHref={true}
						target="_blank"
					>
						Take Quiz
					</Link>{" "}
					--&gt;
				</h3>
			</div>
			<HexagonBadgeMatrix data={hexagonData} />
		</section>
	);
}
