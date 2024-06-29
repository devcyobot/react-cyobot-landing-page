'use client';
import { levelsData } from '../../data/levelsData';
import Time from './time';
import Tasks from './rewards';
import Summary from './objectives';
import { useState } from 'react';
// --------TESTING--------------
import { imageCarousel } from '../../data/imageCarousel';
import DesktopCarousel from './desktopCarousel';
import MobileCarousel from './mobileCarousel';

import { useDifficultyContext } from '../../context/DifficultyContext';

export default function Levels() {
	const { currentDifficulty, setDifficulty } = useDifficultyContext();
	const [currentLevel, setCurrentLevel] = useState(1);

	function handleClickPrev() {
		setCurrentLevel((prevState) => {
			return prevState === 0 ? levelsArray.length - 1 : prevState - 1;
		});
	}

	function handleClickNext() {
		setCurrentLevel((prevState) => {
			return prevState === levelsArray.length - 1 ? 0 : prevState + 1;
		});
	}

	const levelsArray = levelsData.models;
	const levelSumm = levelsArray[currentDifficulty.index].level;
	const levelTimeImage = levelsArray[currentDifficulty.index].timeImage;
	const levelTimeDataArray = levelsArray[currentDifficulty.index].timeData;
	const levelRewardsArray = levelsArray[currentDifficulty.index].rewards;

	return (
		<section className="bg-brand-dark-2 text-white flex flex-col px-16 lg:px-20">
			<h2 className="font-vt323 text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl my-12">
				CHOOSE YOUR DIFFICULTY
			</h2>
			<div className="max-w-[1440px] flex flex-col justify-evenly mx-auto">
				<DesktopCarousel
					className="hidden lg:block"
					data={imageCarousel}
					currentLevel={currentDifficulty.index}
					navigate={setDifficulty}
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
			</div>
		</section>
	);
}
