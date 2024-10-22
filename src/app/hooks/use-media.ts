import { Media } from "@/app/types";

export const useMedia = async (media: string | Media | null | undefined) => {
	if (media === null || media === undefined) return null;
	const mediaId = typeof media === "string" ? media : media.id;

	try {
		const mediaResponse = await fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/media/${mediaId}`
		);

		if (!mediaResponse.ok) {
			throw new Error(
				`Error: ${mediaResponse.status} ${mediaResponse.statusText}`
			);
		}

		const _media = await mediaResponse.json();

		if (!_media) {
			throw new Error("Invalid media data format.");
		}

		return _media as Media;
	} catch (error) {
		console.error("Failed to fetch media data:", error);
		return null;
	}
};
