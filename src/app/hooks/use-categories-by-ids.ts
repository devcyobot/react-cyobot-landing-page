"use server"
import { Category } from "@/app/types"
import qs from "qs"

export const useCategoryByIds = async (ids: string[]): 
    Promise<{ 
        categoryList: Category[] 
    }> => {
        try {
            const categoryResponse = await fetch(
                `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/categories?${qs.stringify({
                    where: { id: { in: ids } }
                })}`
            );
            if (!categoryResponse.ok) {
                throw new Error(
                    `${categoryResponse.status} ${categoryResponse.statusText}`
                );
            }
            const fetchedCategories = await categoryResponse.json();
            if (!fetchedCategories || !Array.isArray(fetchedCategories.docs)) {
                throw new Error("Invalid category data format.");
            }
            return { categoryList: fetchedCategories.docs as Category[] };
        }
        catch (error) {
            console.error("Failed to fetch category data:", error);
            return { categoryList: [] };
        }
}