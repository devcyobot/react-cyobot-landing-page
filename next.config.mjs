import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
				pathname: "/api/media/**",
			},
			{
				protocol: "https",
				hostname: "quest.cyobot.com",
				pathname: "/api/media/**",
			},
		],
	},
	videos: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
				pathname: "/api/media/**",
			},
			{
				protocol: "https",
				hostname: "quest.cyobot.com",
				pathname: "/api/media/**",
			},
		],
	},
};

export default withNextVideo(nextConfig);
