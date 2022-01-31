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
	{ color: '#004DFF', hasCommander: true, name: 'Player name' },
	{ color: '#0CE818', hasCommander: true, name: 'Player name' },
	{ color: '#0CC4E8', hasCommander: true, name: 'Player name' },
	{ color: '#86FFD1', hasCommander: true, name: 'Player name' },
	{ color: '#68B900', hasCommander: false, name: 'Player name' },
	{ color: '#6697FF', hasCommander: true, name: 'Player name' },
	{ color: '#8DF492', hasCommander: false, name: 'Player name' },
	{ color: '#90E5F5', hasCommander: true, name: 'Player name' },
];

export default function Alies() {
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
