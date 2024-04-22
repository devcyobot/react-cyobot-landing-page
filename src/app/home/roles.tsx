import Hexagon from '../components/ui/hexagon';

export default function Roles() {
	return (
		<section className="bg-brand-dark text-white pb-32">
			<h2 className="text-5xl text-center">
				UNLOCK ROLES IN ROBOTICS ENGINEERING
			</h2>
			<div className="flex justify-evenly">
				<div className="flex flex-col justify-around">
					<div className="flex justify-between">
						<Hexagon text="ROBOTICS ENGINEER" />
						<Hexagon text="NETWORK ENGINEER" />
					</div>
					<div className="self-center">
						<Hexagon text="MECHA-TRONICS ENGINEER" />
					</div>
					<div className="flex justify-between">
						<Hexagon text="EMBEDDED SYSTEM ENGINEER" />
						<Hexagon text="DESIGN ENGINEER" />
					</div>
					<div className="self-center">
						<Hexagon text="INTERN" />
					</div>
				</div>
				<div className="w-1/2 flex justify-center items-center border-dashed border-8 border-brand-green rounded-lg">
					<p className="bg-brand-green bg-opacity-40 h-4/5 w-full"></p>
				</div>
			</div>
		</section>
	);
}
