import Hexagon from '../components/ui/hexagon';
import Link from 'next/link';
import HexagonBadgeMatrix from '../components/ui/honeycomb';
import { hexagonData } from '../data/hexagonData';

export default function Roles() {
	return (
		<section className="h-screen max-h-[830px] bg-brand-dark text-white flex flex-col items-center justify-evenly">
			<div>
				<h2 className="h-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl pb-5">
					UNLOCK TOP SKILLS IN ENGINEERING
				</h2>
				<h3 className="text-center font-roboto text-2xl font-medium">
					Discover which career roles would be best fit for you.{' '}
					<Link
						href="https://roboticsquest.com/"
						className="underline"
						passHref={true}
						target="_blank"
					>
						Take Quiz
					</Link>{' '}
					--&gt;
				</h3>
			</div>
			<HexagonBadgeMatrix data={hexagonData} />
		</section>
	);
}
