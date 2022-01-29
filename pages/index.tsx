import Image from 'next/image';
import { useEffect, useState } from 'react';
import Commands from '~component/commands/component';
import Constructions from '~component/constructions/component';
import Minimap from '~component/minimap/component';
import Settings from '~component/settings/component';
import image from '~public/background.png';
import styles from '~styles/Home.module.css';

export default function Home() {
	const [isScrollable, setScrollable] = useState(false);
	const [isVisibleSettings, setSettingsVisibility] = useState(false);
	const [isVisibleBackground, setBackgroundVisibility] = useState(true);

	useEffect(() => {
		if (isScrollable) {
			document.body.classList.toggle('scrollable');
		}

		document.body.addEventListener('keypress', onOpenSettingsKeyPress);
		document.body.addEventListener(
			'keypress',
			onToggleBackgroundImageKeyPress,
		);

		return () => {
			document.body.removeEventListener(
				'keypress',
				onOpenSettingsKeyPress,
			);
			document.body.removeEventListener(
				'keypress',
				onToggleBackgroundImageKeyPress,
			);
		};
	}, [isScrollable]);

	function onOpenSettingsKeyPress(event) {
		if (event.code === 'KeyO') {
			setSettingsVisibility((prevState) => !prevState);
		}
	}

	function onToggleBackgroundImageKeyPress(event) {
		if (event.code === 'KeyB' && event.ctrlKey) {
			setBackgroundVisibility((prevState) => !prevState);
		}
	}

	return (
		<div className={styles.component}>
			<div className={styles.container}>
				{isVisibleBackground && (
					<div className={styles['background-image']}>
						<Image src={image} alt="bar" />
					</div>
				)}

				<Minimap />
				<Constructions />
				<Commands />
				{isVisibleSettings && <Settings />}
			</div>
		</div>
	);
}
