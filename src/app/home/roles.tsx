import Hexagon from '../components/ui/hexagon';
import Link from 'next/link';

export default function Roles() {
	return (
		<section className="bg-brand-dark text-white py-12">
			<h2 className="h-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-12">
				UNLOCK ROLES IN ROBOTICS ENGINEERING
			</h2>
			<div className="h-[90%] flex justify-around items-center pb-20">
				<div className="flex flex-col self-start mt-5">
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
				<div className="relative top-10 w-1/2 lg:w-[42rem] h-[30rem] lg:h-[36rem] flex justify-center items-center border-dashed-green-bold rounded-lg">
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
