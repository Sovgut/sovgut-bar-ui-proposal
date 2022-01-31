import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import Alies from '~component/alies/component';
import Commands from '~component/commands/component';
import Constructions from '~component/constructions/component';
import Enemies from '~component/enemies/component';
import Minimap from '~component/minimap/component';
import Resources from '~component/resources/component';
import Settings from '~component/settings/component';
import { AdvancedContext } from '~context/AdvancedContext';
import image from '~public/background.png';
import styles from '~styles/Home.module.css';

export default function Home() {
	const [isScrollable, setScrollable] = useState(false);
	const [isVisibleSettings, setSettingsVisibility] = useState(false);
	const [isVisibleBackground, setBackgroundVisibility] = useState(true);
	const advancedContext = useContext(AdvancedContext);

	useEffect(() => {
		if (isScrollable) {
			document.body.classList.toggle('scrollable');
		}

		document.body.addEventListener('keypress', onOpenSettingsKeyPress);
		document.body.addEventListener(
			'keypress',
			onToggleBackgroundImageKeyPress,
		);

		document.body.addEventListener(
			'keydown',
			advancedContext.onShowKeyDown,
		);
		document.body.addEventListener('keyup', advancedContext.onShowKeyUp);

		return () => {
			document.body.removeEventListener(
				'keypress',
				onOpenSettingsKeyPress,
			);
			document.body.removeEventListener(
				'keypress',
				onToggleBackgroundImageKeyPress,
			);

			document.body.removeEventListener(
				'keydown',
				advancedContext.onShowKeyDown,
			);
			document.body.removeEventListener(
				'keyup',
				advancedContext.onShowKeyUp,
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

				<Alies />
				<Enemies />
				<Resources />
				<Minimap />
				<Constructions />
				<Commands />
				{isVisibleSettings && <Settings />}
			</div>
		</div>
	);
}
