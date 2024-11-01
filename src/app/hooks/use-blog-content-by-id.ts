"use server";
import { WebsiteBlog } from "@/app/types";

export default async function useBlogContentById(
	id: string
): Promise<WebsiteBlog | null> {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/website-blogs/${id}`,
			{ cache: "no-store" }
		);

		if (!response.ok) throw new Error("Failed to fetch current blog");

		const blog = (await response.json()) as WebsiteBlog;
		return blog;
	} catch (error) {
		console.error("Failed to fetch blog by ID:", error);
		return null;
	}
}
