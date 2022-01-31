import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { AdvancedContext } from '~context/AdvancedContext';
import background from '~public/minimap.png';
import styles from './styles.module.css';

export default function Minimap() {
	const [isVisible, setVisibility] = useState(true);
	const advancedContext = useContext(AdvancedContext);

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
			{advancedContext.isAdvanced && (
				<div className={styles['toggle-map-button']}>
					Toggle map
					<span className={styles.hotkey}> [M]</span>
				</div>
			)}
		</div>
	);
}
