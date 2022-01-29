import styles from './styles.module.css';

export default function Settings() {
	return (
		<div className={styles.component}>
			<div className={styles.tabs}>
				<div className={styles['settings-category-list']}>
					<div className={styles['settings-category-list-item']}>
						Game
					</div>
					<div className={styles['settings-category-list-item']}>
						Graphics
					</div>
					<div className={styles['settings-category-list-item']}>
						Audio
					</div>
					<div className={styles['settings-category-list-item']}>
						interface
					</div>
					<div className={styles['settings-category-list-item']}>
						Control
					</div>
					<div className={styles['settings-category-list-item']}>
						Notifications
					</div>
					<div className={styles['settings-category-list-item']}>
						Accessibility
					</div>
				</div>
				<div className={styles['settings-game-controls']}>
					<div className={styles['settings-game-controls-item']}>
						Open lobby
					</div>
				</div>
			</div>
			<div className={styles['tab-content']}></div>
		</div>
	);
}
