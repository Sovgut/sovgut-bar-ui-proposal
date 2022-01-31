import styles from './styles.module.css';

export default function Resources() {
	return (
		<div className={styles.component}>
			<div className={styles.container}>
				<div className={styles.metal}></div>
				<div className={styles.time}>123:45</div>
				<div className={styles.energy}></div>
			</div>
		</div>
	);
}
