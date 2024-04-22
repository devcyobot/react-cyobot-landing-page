import Link from 'next/link';
import styles from './link.module.css';

type MyLinkProps = {
	href: string;
	title: string;
};

export default function NavLink({ href, title }: MyLinkProps) {
	return (
		<>
			<li className={styles.navLink}>
				<Link href={href}>{title}</Link>
			</li>
		</>
	);
}
