"use server";
import { Media } from "@/app/types";
export const useMedia = async (media: string | Media | null | undefined) => {
	try {
		if (media === null || media === undefined) return null;
		if (typeof media === "string") {
			const mediaResponse = await fetch(
				`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/media/${media}`
			);
			if (!mediaResponse.ok) {
				throw new Error(
					`Error: ${mediaResponse.status} ${mediaResponse.statusText}`
				);
			}
			const _media = (await mediaResponse.json()) as Media;
			return _media;
		}
		return media;
	} catch (error) {
		console.error("Failed to fetch media data:", error);
		return null;
	}
};
