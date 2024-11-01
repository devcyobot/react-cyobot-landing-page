"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/app/components/ui/Select";
import { Category } from "@/app/types";
import { useParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Button } from "../components/ui/Button";


type FilterSearchBarProps = { data: Category[] };

const FilterSearchBar: FC<FilterSearchBarProps> = ({ data }) => {
	const params = useParams();
	const [category, setCategory] = useState<string | undefined>(
		params.categoryId !== undefined
			? `/blog/${params.page}/${params.categoryId}`
			: undefined
	);
	const router = useRouter();

	const handleSelectChange = (value: string) => {
		router.push(value);
	};

	return (
		<div className="h-1/2 flex flex-col gap-3">
			<h2 className="font-roboto text-2xl text-white">Categories</h2>
			<Select
				onValueChange={handleSelectChange}
				value={typeof category === "string" ? category : ""}
			>
				<SelectTrigger>
					<SelectValue placeholder="Select Category" />
				</SelectTrigger>
				<SelectContent>
					{data.map((cat) => (
						<SelectItem key={cat.id} value={`/blog/${params.page}/${cat.id}`}>
							{cat.displayName}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Button
				variant={"muted"}
				onClick={() => router.push(`/blog/1`)}
				className="text-brand-purple"
			>
				Clear
			</Button>
		</div>
	);
};

export default FilterSearchBar;
