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

	function handleClickPrev() {
		if (currentDifficulty.index > 0) setDifficulty(currentDifficulty.index - 1);
	}

	function handleClickNext() {
		if (currentDifficulty.index < 2) setDifficulty(currentDifficulty.index + 1);
	}

	const levelsArray = levelsData.models;
	const levelSumm = levelsArray[currentDifficulty.index].level;
	const levelTimeImage = levelsArray[currentDifficulty.index].timeImage;
	const levelTimeDataArray = levelsArray[currentDifficulty.index].timeData;
	const levelRewardsArray = levelsArray[currentDifficulty.index].rewards;

	return (
		<section className="bg-brand-dark-2 text-white flex flex-col px-5 sm:px-16 lg:px-20">
			<h2 className="font-vt323 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 sm:my-12">
				CHOOSE YOUR DIFFICULTY
			</h2>
			<div className="mx-auto max-w-[1440px] flex flex-col justify-evenly w-full">
				<DesktopCarousel
					className="hidden md:block"
					data={imageCarousel}
					currentLevel={currentDifficulty.index}
					navigate={setDifficulty}
				/>
				<MobileCarousel
					className="md:hidden"
					data={imageCarousel}
					currentLevel={currentDifficulty.index}
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
