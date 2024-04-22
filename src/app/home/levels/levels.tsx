'use client';
import { levelsData } from '../../data/levelsData';
import Carousel from './carousel';
import Time from './time';
import Tasks from './rewards';
import Summary from './summary';
import { useState } from 'react';

export default function Levels() {
	const [currentLevel, setCurrentLevel] = useState(1);

	function handleClickLeft() {
		setCurrentLevel((prevState) => {
			return prevState === 0 ? levelsArray.length - 1 : prevState - 1;
		});
	}

	function handleClickRight() {
		setCurrentLevel((prevState) => {
			return prevState === levelsArray.length - 1 ? 0 : prevState + 1;
		});
	}

	const levelsArray = levelsData.models;
	const levelName = levelsArray[currentLevel].name;
	const levelSumm = levelsArray[currentLevel].level;
	const levelTimeImage = levelsArray[currentLevel].timeImage;
	const levelTimeDataArray = levelsArray[currentLevel].timeData;
	const levelRewardsArray = levelsArray[currentLevel].rewards;

	return (
		<section className="bg-brand-purple text-white p-36 flex flex-col items-center">
			<h2 className="text-5xl text-center">CHOOSE YOUR QUEST</h2>
			<div className="w-[40%]">
				<Carousel
					current={currentLevel}
					left={handleClickLeft}
					right={handleClickRight}
				/>
			</div>
			<h3
				className={`bg-brand-dark bg-opacity-25 text-center w-80 border-4 mt-12 py-2 text-4xl border-brand-${levelRewardsArray[0].color} border-dashed rounded-lg`}
			>
				{levelName}
			</h3>
			<div>
				<Summary text={levelSumm} />
				<Time image={levelTimeImage} atr={levelTimeDataArray} />
				<Tasks data={levelRewardsArray} />
			</div>
		</section>
	);
}
