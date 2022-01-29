import Image from 'next/image';
import { useEffect, useState } from 'react';
import Commands from '~component/commands/component';
import Constructions from '~component/constructions/component';
import Minimap from '~component/minimap/component';
import image from '~public/background.png';
import styles from '~styles/Home.module.css';

export default function Home() {
	const [isScrollable, setScrollable] = useState(false);

	useEffect(() => {
		if (isScrollable) {
			document.body.classList.toggle('scrollable');
		}
	}, [isScrollable]);

	return (
		<div className={styles.component}>
			<div className={styles.container}>
				<div className={styles['background-image']}>
					<Image src={image} alt="bar" />
				</div>

				<Minimap />
				<Constructions />
				<Commands />
			</div>
		</div>
	);
}
