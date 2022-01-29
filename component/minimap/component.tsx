import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import background from '~public/minimap.png';
import styles from './styles.module.css';

export default function Minimap() {
	const [isVisible, setVisibility] = useState(true);
	const toggleVisibilityClasses = clsx({
		[styles['toggle-map-visibility']]: true,
		[styles['toggle-map-visibility-active']]: !isVisible,
	});

	function onToggleMinimapClick() {
		setVisibility((prevState) => !prevState);
	}

	useEffect(() => {
		document.body.addEventListener('keypress', onMapKeyPress);

		return () => {
			document.body.removeEventListener('keypress', onMapKeyPress);
		};
	}, []);

	function onMapKeyPress(event) {
		if (event.code === 'KeyM') {
			setVisibility((prevState) => !prevState);
		}
	}

	return (
		<div className={styles.component}>
			{isVisible && (
				<div className={styles.map}>
					<Image src={background} alt="bar minimap" />
				</div>
			)}
			{/* <button
				className={toggleVisibilityClasses}
				onClick={onToggleMinimapClick}
			>
				<div className={styles['toggle-map-visibility-inner']}>
					{isVisible ? 'hide minimap' : 'show minimap'}
					<span>[M]</span>
				</div>
			</button> */}
		</div>
	);
}
