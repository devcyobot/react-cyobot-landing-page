// app/hooks/use-blog-content-by-id.ts
import { WebsiteBlog } from "@/app/types";

export default async function useBlogContentByID(
	id: string
): Promise<WebsiteBlog | null> {
	"use server"; // Enables SSR for this function

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/website-blogs/${id}`,
			{
				cache: "no-store", // Ensures fresh content for each SSR render
			}
		);

		if (!response.ok) {
			throw new Error(
				`Failed to fetch blog content: ${response.status} ${response.statusText}`
			);
		}

		const blogContent = await response.json();

		// Validate and return fetched content as a WebsiteBlog type
		if (blogContent && blogContent.pageTitle) {
			return blogContent as WebsiteBlog;
		} else {
			console.warn("Fetched blog content format is invalid:", blogContent);
			return null;
		}
	} catch (error) {
		console.error("Failed to fetch blog data:", error);
		return null;
	}
}
