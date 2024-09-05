import { Roboto, Nunito, VT323, Roboto_Condensed } from 'next/font/google';

export const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--roboto-bold',
});

export const nunito = Nunito({
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--nunito-regular',
});

export const vt323 = VT323({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--vt323-regular',
});

export const robotoCondensed = Roboto_Condensed({
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--roboto-condensed',
});
