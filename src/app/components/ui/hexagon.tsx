import styles from './hexagon.module.css';

interface HexagonProps {
	text: string;
}

export default function Hexagon({ text }: HexagonProps) {
	return (
		<div className={styles.hex}>
			<p className={styles.hexText}>{text}</p>
		</div>
	);
}
