import Image from 'next/image';
import { useEffect, useState } from 'react';
import background from '~public/minimap.png';
import styles from './styles.module.css';

export default function Minimap() {
	const [isVisible, setVisibility] = useState(true);

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
		</div>
	);
}
