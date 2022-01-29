import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

enum IConstructionType {
	Land,
	Air,
	Amphibious,
	Sea,
}

enum ICategoryIndex {
	Production,
	Defence,
	Intel,
	Energy,
	Metal,
}

interface IConstruction {
	icon: string;
	cost: {
		metal: number;
		energy: number;
	};
	type: IConstructionType;
}

interface ICategory {
	name: string;
	hotkey: string;
	list: IConstruction[];
}

const categories: ICategory[] = [
	{
		name: 'Production',
		hotkey: 'Z',
		list: [
			{
				icon: 'armnanotc.png',
				cost: { metal: 210, energy: 3200 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armlab.png',
				cost: { metal: 650, energy: 1200 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armalab.png',
				cost: { metal: 2900, energy: 15000 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armvp.png',
				cost: { metal: 740, energy: 1800 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armap.png',
				cost: { metal: 860, energy: 1350 },
				type: IConstructionType.Air,
			},
			{
				icon: 'armsy.png',
				cost: { metal: 600, energy: 1200 },
				type: IConstructionType.Sea,
			},
			{
				icon: 'armhp.png',
				cost: { metal: 1020, energy: 4200 },
				type: IConstructionType.Amphibious,
			},
		],
	},
	{
		name: 'Defence',
		hotkey: 'X',
		list: [
			{
				icon: 'armdrag.png',
				cost: { metal: 8, energy: 0 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armllt.png',
				cost: { metal: 85, energy: 680 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armbeamer.png',
				cost: { metal: 190, energy: 1500 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armhlt.png',
				cost: { metal: 440, energy: 4700 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armclaw.png',
				cost: { metal: 340, energy: 1600 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armrl.png',
				cost: { metal: 80, energy: 900 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armpacko.png',
				cost: { metal: 360, energy: 5700 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armcir.png',
				cost: { metal: 750, energy: 7300 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armdl.png',
				cost: { metal: 240, energy: 2200 },
				type: IConstructionType.Sea,
			},
		],
	},
	{
		name: 'Intel',
		hotkey: 'C',
		list: [
			{
				icon: 'armjuno.png',
				cost: { metal: 640, energy: 17000 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armjamt.png',
				cost: { metal: 240, energy: 8500 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armrad.png',
				cost: { metal: 60, energy: 630 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armeyes.png',
				cost: { metal: 32, energy: 850 },
				type: IConstructionType.Land,
			},
		],
	},
	{
		name: 'Energy',
		hotkey: 'V',
		list: [
			{
				icon: 'armestor.png',
				cost: { metal: 170, energy: 1700 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armgeo.png',
				cost: { metal: 560, energy: 13000 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armadvsol.png',
				cost: { metal: 370, energy: 5000 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armsolar.png',
				cost: { metal: 155, energy: 0 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armwind.png',
				cost: { metal: 37, energy: 175 },
				type: IConstructionType.Land,
			},
		],
	},
	{
		name: 'Metal',
		hotkey: 'B',
		list: [
			{
				icon: 'armmstor.png',
				cost: { metal: 330, energy: 570 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armmakr.png',
				cost: { metal: 1, energy: 1150 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armamex.png',
				cost: { metal: 200, energy: 1500 },
				type: IConstructionType.Land,
			},
			{
				icon: 'armmex.png',
				cost: { metal: 50, energy: 500 },
				type: IConstructionType.Land,
			},
		],
	},
];

export default function Constructions() {
	const [activeCategory, setActiveCategory] = useState<ICategory>(null);

	useEffect(() => {
		document.body.addEventListener('keypress', onKeyPress);

		return () => {
			document.body.removeEventListener('keypress', onKeyPress);
		};
	}, []);

	function onKeyPress(event) {
		let categoryIndex: ICategoryIndex = null;

		switch (event.code) {
			case 'KeyZ':
				categoryIndex = ICategoryIndex.Production;
				break;
			case 'KeyX':
				categoryIndex = ICategoryIndex.Defence;
				break;
			case 'KeyC':
				categoryIndex = ICategoryIndex.Intel;
				break;
			case 'KeyV':
				categoryIndex = ICategoryIndex.Energy;
				break;
			case 'KeyB':
				categoryIndex = ICategoryIndex.Metal;
				break;
		}

		if (categoryIndex !== null) {
			setActiveCategory((prevState) => {
				if (prevState?.name === categories[categoryIndex].name)
					return null;
				return categories[categoryIndex];
			});
		}
	}

	function onCategoryClick(category: ICategory) {
		setActiveCategory((prevState) => {
			if (prevState?.name === category.name) return null;
			return category;
		});
	}

	return (
		<div className={styles.component}>
			{activeCategory && (
				<div className={styles['construction-container']}>
					{activeCategory.list
						.sort((a, b) => a.cost.metal - b.cost.metal)
						.sort((a, b) => a.type - b.type)
						.map((item, index) => (
							<div
								className={styles['construction-button']}
								key={index}
							>
								<Image
									src={`/${item.icon}`}
									width="64"
									height="64"
									alt={item.icon}
									title={item.icon}
								/>
							</div>
						))}
				</div>
			)}

			<div className={styles['category-container']}>
				{categories.map((category, index) => {
					const buttonActiveClasses = clsx({
						[styles['category-button-inner']]: true,
						[styles['active']]:
							category.name === activeCategory?.name,
					});

					return (
						<button
							key={index}
							className={styles['category-button']}
							onClick={() => onCategoryClick(category)}
						>
							<div className={buttonActiveClasses}>
								{category.name}
								<span>[{category.hotkey}]</span>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
}
