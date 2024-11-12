"use server";
import { WebsiteBlog } from "@/app/types";
import qs from "qs";

export const useBlogByPage = async (
	currentPage: number
): Promise<{
	blogsPerPage: WebsiteBlog[];
	totalPages: number;
}> => {
	try {
		const blogResponse = await fetch(
			`${process.env.NEXT_PUBLIC_URL}/api/website-blogs?${qs.stringify({
				sort: ["-publishedDate", "-createdAt"],
				page: currentPage,
				limit: 10,
				where: { _status: { equals: "published" } },
			})}`,
			{ cache: "no-store" }
		);

		if (!blogResponse.ok) {
			throw new Error(
				`Error: ${blogResponse.status} ${blogResponse.statusText}`
			);
		}

		const fetchedBlog = await blogResponse.json();

		if (!fetchedBlog || !Array.isArray(fetchedBlog.docs)) {
			throw new Error("Invalid blog data format.");
		}

		return {
			blogsPerPage: fetchedBlog.docs as WebsiteBlog[],
			totalPages: fetchedBlog.totalPages as number,
		};
	} catch (error) {
		console.error("Failed to fetch blog data:", error);
		return { blogsPerPage: [], totalPages: 0 };
	}
};
