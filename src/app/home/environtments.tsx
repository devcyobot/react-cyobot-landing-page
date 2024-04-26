import Screen from '../components/ui/screen';

export default function Environments() {
	return (
		<section className="bg-brand-gray-light flex flex-col items-center justify-evenly pb-40">
			<h2 className="text-6xl">SELECT YOUR BEST ENVIRONMENTS</h2>
			<div className="grid grid-cols-2 gap-32 justify-items-center items-end [grid-template-areas:'screen-1_screen-2''screen-3_screen-3']">
				<Screen
					image={{ src: '/env-python.png', alt: 'Python Screen' }}
					language="PYTHON"
					caption="SUITABLE FOR ..."
					width={532}
					height={311}
					className="[grid-area:screen-1]"
				/>
				<Screen
					image={{ src: '/env-block.png', alt: 'Block Screen' }}
					language="BLOCK"
					caption="SUITABLE FOR K-12/BEGINNER"
					width={532}
					height={311}
					className="[grid-area:screen-2]"
				/>
				<Screen
					image={{ src: '/env-c++.png', alt: 'C/C++ Screen' }}
					language="C/C++"
					caption="SUITABLE FOR ..."
					width={335}
					height={403}
					className="[grid-area:screen-3]"
				/>
			</div>
		</section>
	);
}
