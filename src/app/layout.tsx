import type { Metadata } from 'next';
import { roboto, nunito, vt323 } from './styles/fonts';
import './styles/globals.css';

export const metadata: Metadata = {
	title: 'Title of the App',
	description: 'NEED to customize this',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${nunito.variable} ${vt323.variable} ${roboto.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
