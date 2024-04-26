import Hexagon from '../components/ui/hexagon';

export default function Roles() {
	return (
		<section className="bg-brand-dark text-white pb-32">
			<h2 className="text-6xl text-center">
				UNLOCK ROLES IN ROBOTICS ENGINEERING
			</h2>
			<div className="flex flex-col lg:flex-row items-center justify-center">
				<div className="flex flex-col items-center lg:mr-[5.248rem] mb-20 lg:mb-0">
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
				<div className="w-1/2 lg:w-[45.563rem] h-[30rem] lg:h-[43.063rem] flex justify-center items-center border-dashed-green rounded-lg">
					<p className="bg-brand-green bg-opacity-40 h-4/5 w-full"></p>
				</div>
			</div>
		</section>
	);
}
