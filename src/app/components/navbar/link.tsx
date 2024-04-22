'use client';
import Link from 'next/link';

type MyLinkProps = {
	href: string;
	title: string;
};

export default function MyLink({ href, title }: MyLinkProps) {
	return (
		<>
			<li className="relative mx-12">
				<Link href={href}>{title}</Link>
			</li>
			<style jsx>{`
				li:after {
					content: '';
					position: absolute;
					background-color: var(--brand-green);
					width: 0;
					height: 5px;
					border-radius: 10px;
					left: 0;
					bottom: -8px;
					transition: width 0.3s ease;
				}

				li:hover:after {
					width: 100%;
				}
			`}</style>
		</>
	);
}
