import Screen from '../components/ui/screen';

export default function Environments() {
	return (
		<section className="bg-brand-gray-light flex flex-col items-center">
			<h2 className="text-5xl text-center">SELECT YOUR BEST ENVIRONMENTS</h2>
			<div className="flex w-4/5">
				<Screen
					image={{ src: '/env-python.png', alt: 'Python Screen' }}
					language="PYTHON"
					caption="SUITABLE FOR ..."
					width={500}
					height={250}
				/>
				<Screen
					image={{ src: '/env-block.png', alt: 'Block Screen' }}
					language="BLOCK"
					caption="SUITABLE FOR K-12/BEGINNER"
					width={500}
					height={250}
				/>
			</div>
			<div className="w-2/5">
				<Screen
					image={{ src: '/env-c++.png', alt: 'C/C++ Screen' }}
					language="C/C++"
					caption="SUITABLE FOR ..."
					width={290}
					height={0}
				/>
			</div>
		</section>
	);
}
