"use server";
import { Category } from "@/app/types";

export const useCategories = async () => {
	try {
		const categoriesResponse = await fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/categories`
		);

		if (!categoriesResponse.ok) {
			throw new Error(
				`Error: ${categoriesResponse.status} ${categoriesResponse.statusText}`
			);
		}

		const fetchedCategories = await categoriesResponse.json();

		if (!fetchedCategories || !Array.isArray(fetchedCategories.docs)) {
			throw new Error("Invalid categories data format.");
		}

		return fetchedCategories.docs as Category[];
	} catch (error) {
		console.error("Failed to fetch categories data:", error);
		return [];
	}
};
