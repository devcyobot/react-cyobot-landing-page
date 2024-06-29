'use client';
import { FC, useState, createContext, useContext } from 'react';

export type CurrentDifficulty = {
	label: string;
	color: string;
	index: number;
};

export type DifficultyContextType = {
	currentDifficulty: CurrentDifficulty;
	setDifficulty: (index: number) => void;
};

export const DifficultyContext = createContext<DifficultyContextType>(
	{} as DifficultyContextType
);

export const useDifficultyContext = () => useContext(DifficultyContext);

const DifficultyProvider: FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [currentDifficulty, setCurrentDifficulty] = useState<CurrentDifficulty>(
		{
			label: 'ADVENTURER',
			color: '#f3c449',
			index: 1,
		}
	);

	const setDifficulty = (index: number) => {
		let currentColor = '';
		if (index === 0) currentColor = '#1ad69c';
		else if (index === 1) currentColor = '#f3c449';
		else if (index === 2) currentColor = '#e00303';

		let currentLabel = '';
		if (index === 0) currentLabel = 'EXPLORER';
		else if (index === 1) currentLabel = 'ADVENTURER';
		else currentLabel = 'PIONEER';

		setCurrentDifficulty({
			label: currentLabel,
			color: currentColor,
			index,
		});
	};

	return (
		<DifficultyContext.Provider value={{ currentDifficulty, setDifficulty }}>
			{children}
		</DifficultyContext.Provider>
	);
};

export default DifficultyProvider;
