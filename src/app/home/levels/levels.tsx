'use client';
import { levelsData } from '../../data/levelsData';
import Time from './time';
import Tasks from './rewards';
import Summary from './summary';
import { useState } from 'react';
// --------TESTING--------------
import { imageCarousel } from '../../data/imageCarousel';
import DesktopCarousel from './desktopCarousel';
import MobileCarousel from './mobileCarousel';

export default function Levels() {
	const [currentLevel, setCurrentLevel] = useState(1);

	function handleClickPrev() {
		setCurrentLevel((prevState) => {
			return prevState === 0 ? levelsArray.length - 1 : prevState - 1;
			// return prevState > 0 ? prevState - 1 : prevState;
		});
	}

	function handleClickNext() {
		setCurrentLevel((prevState) => {
			return prevState === levelsArray.length - 1 ? 0 : prevState + 1;
			// return prevState < levelsArray.length - 1 ? prevState + 1 : prevState;
		});
	}

	function handleClickImageCarousel(index: number) {
		setCurrentLevel(index);
	}

	const levelsArray = levelsData.models;
	const levelName = levelsArray[currentLevel].name;
	const levelSumm = levelsArray[currentLevel].level;
	const levelTimeImage = levelsArray[currentLevel].timeImage;
	const levelTimeDataArray = levelsArray[currentLevel].timeData;
	const levelRewardsArray = levelsArray[currentLevel].rewards;

	return (
		<section className="bg-brand-purple text-white flex flex-col px-16 lg:px-36">
			<h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-12">
				CHOOSE YOUR QUEST
			</h2>
			<DesktopCarousel
				className="hidden lg:block"
				data={imageCarousel}
				currentLevel={currentLevel}
				navigate={handleClickImageCarousel}
			/>
			<MobileCarousel
				className="lg:hidden"
				data={imageCarousel}
				currentLevel={currentLevel}
				prev={handleClickPrev}
				next={handleClickNext}
			/>
			<Summary text={levelSumm} />
			<Time image={levelTimeImage} atr={levelTimeDataArray} />
			<Tasks data={levelRewardsArray} />
		</section>
	);
}
