import Hexagon from '../components/ui/hexagon';
import Link from 'next/link';

export default function Roles() {
	return (
		<section className="bg-brand-dark text-white px-24">
			<h2 className="text-center text-6xl py-6">
				UNLOCK ROLES IN ROBOTICS ENGINEERING
			</h2>
			<div className="flex flex-col lg:flex-row items-center justify-center">
				<div className="flex flex-col items-center lg:mr-[8rem] mb-20 lg:mb-0">
					<div className="flex justify-between">
						<Hexagon text="ROBOTICS ENGINEER" />
						<Hexagon text="NETWORK ENGINEER" />
					</div>
					<div className="self-center">
						<Hexagon text="MECHA-TRONICS ENGINEER" />
					</div>
					<div className="flex justify-between">
						<Hexagon text="EMBEDDED SYSTEM ENGINEER" />
						<Hexagon text="MACHINE LEARNING ENGINEER" />
					</div>
					<div className="self-center">
						<Hexagon text="INTERN" />
					</div>
				</div>
				<div className="w-1/2 lg:w-[41.5rem] h-[30rem] lg:h-[35rem] flex justify-center items-center border-dashed-green-bold rounded-lg">
					<div className="bg-brand-green bg-opacity-40 h-4/5 w-full flex items-center justify-center">
						<Link
							href="/stats"
							className="cursor-pointer mt-12 vt323-regular underline text-2xl underline-offset-4"
						>
							&lt;&lt; SOME LINK &gt;&gt;
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
