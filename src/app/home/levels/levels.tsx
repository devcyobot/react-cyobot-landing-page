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

	let border = levelRewardsArray[0].color;

	return (
		<section className="bg-brand-purple text-white flex flex-col items-center">
			<h2 className="text-center" style={{ fontSize: '4rem' }}>
				CHOOSE YOUR QUEST
			</h2>
			<div className="w-[40%]">
				<Carousel
					current={currentLevel}
					left={handleClickLeft}
					right={handleClickRight}
				/>
			</div>
			<h3
				className={`bg-brand-dark bg-opacity-25 pt-5 text-center w-[30.063rem] h-[5.813rem] mt-12 text-4xl rounded-lg border-dashed-${border}`}
				style={{ fontSize: '4rem' }}
			>
				{levelName}
			</h3>
			<div className="grid gap-20">
				<Summary text={levelSumm} />
				<Time image={levelTimeImage} atr={levelTimeDataArray} />
				<Tasks data={levelRewardsArray} />
			</div>
		</section>
	);
}
