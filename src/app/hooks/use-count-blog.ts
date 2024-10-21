export const useCountBlog = async (): Promise<number | null> => {
	try {
		const countResponse = await fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/website-blogs/count`,
			{ next: { revalidate: 5 } }
		);

		if (!countResponse.ok) {
			throw new Error(
				`Error: ${countResponse.status} ${countResponse.statusText}`
			);
		}
		const fetchedCount = (await countResponse.json()).totalDocs as number;
		return fetchedCount;
	} catch (error) {
		console.error("Failed to fetch blog data:", error);
		return null;
	}
};
