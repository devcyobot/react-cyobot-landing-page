import type { Metadata } from "next";
import { roboto, nunito, vt323, robotoCondensed } from "./styles/fonts";
import "./styles/globals.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import DifficultyProvider from "./context/DifficultyContext";
import MobileFooter from "./components/footer/MobileFooter";

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
