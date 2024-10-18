import Footer from "@/app/components/footer/footer";
import MobileFooter from "@/app/components/footer/MobileFooter";
import Navbar from "@/app/components/navbar/navbar";
import DifficultyProvider from "@/app/context/DifficultyContext";
import { nunito, roboto, robotoCondensed, vt323 } from "@/app/styles/fonts";
import "@/app/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CYOBot",
	description:
		"Best platform to master robotics! Engineering doesn’t have to be that hard. Advance your career in 6 months!",
	icons: {
		icon: "/favicon-cyobot.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-brand-dark-2 ${nunito.variable} ${vt323.variable} ${roboto.variable} ${robotoCondensed.variable}`}
			>
				<Navbar />
				<DifficultyProvider>{children}</DifficultyProvider>
				<Footer />
				<MobileFooter />
			</body>
		</html>
	);
}
