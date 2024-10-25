"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/app/components/ui/Select";
import { FC, useState } from "react";

type FilterSearchBarProps = { data: string[] };

const FilterSearchBar: FC<FilterSearchBarProps> = ({ data }) => {
	const [category, setCategory] = useState<string>("all");

	return (
		<div className="h-1/2 flex flex-col gap-3">
			<h2 className="font-roboto text-2xl text-white">Categories</h2>
			<Select onValueChange={setCategory} value={category}>
				<SelectTrigger>
					<SelectValue
						// placeholder={
						// 	config.activitiesLibrary.topicDropdown.triggerPlaceholder
						// }
						placeholder="Select category"
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={"all"}>All</SelectItem>
					{data.map((opt) => (
						<SelectItem key={opt} value={opt}>
							{opt}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default FilterSearchBar;
