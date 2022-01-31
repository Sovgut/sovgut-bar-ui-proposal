import clsx from 'clsx';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { AdvancedContext } from '~context/AdvancedContext';
import styles from './styles.module.css';

interface IPlayer {
	color: string;
	hasCommander: boolean;
	name: string;
}

const players: IPlayer[] = [
	{ color: '#FF1005', hasCommander: true, name: 'Player name' },
	{ color: '#FFD70D', hasCommander: true, name: 'Player name' },
	{ color: '#FF00DB', hasCommander: true, name: 'Player name' },
	{ color: '#FF6B00', hasCommander: true, name: 'Player name' },
	{ color: '#F6BB56', hasCommander: false, name: 'Player name' },
	{ color: '#FF6058', hasCommander: true, name: 'Player name' },
	{ color: '#FFF2AE', hasCommander: false, name: 'Player name' },
	{ color: '#FFAAF3', hasCommander: true, name: 'Player name' },
];

export default function Enemies() {
	const advancedContext = useContext(AdvancedContext);

	useEffect(() => {}, [advancedContext.isAdvanced]);

	const playersRender = players.map((player, index) => {
		const playerIconClasses = clsx({
			[styles['player-icon']]: true,
			[styles['player-icon-destroyed']]: !player.hasCommander,
		});

		return (
			<div key={index} className={styles.player}>
				<div
					className={styles['player-color']}
					style={{ background: player.color }}
				>
					<div className={playerIconClasses}>
						<Image
							src="/comm.png"
							alt="comm bar"
							width="16"
							height="16"
						/>
					</div>
				</div>
				{advancedContext.isAdvanced && (
					<div className={styles['player-name']}>{player.name}</div>
				)}
			</div>
		);
	});

	return (
		<div className={styles.component}>
			<div className={styles.container}>{playersRender}</div>
		</div>
	);
}
