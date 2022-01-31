import { createContext, useState } from 'react';

export const AdvancedContext = createContext<{
	isAdvanced: boolean;
	onShowKeyDown: (event: any) => void;
	onShowKeyUp: (event: any) => void;
}>({
	isAdvanced: false,
	onShowKeyDown: () => {},
	onShowKeyUp: () => {},
});
export function AdvancedContextProvider({ children }) {
	const [isAdvanced, setAdvanced] = useState(false);

	function onShowKeyDown(event) {
		if (event.code === 'Space') {
			setAdvanced(true);
		}
	}

	function onShowKeyUp(event) {
		if (event.code === 'Space') {
			setAdvanced(false);
		}
	}

	console.log(isAdvanced);
	return (
		<AdvancedContext.Provider
			value={{ isAdvanced, onShowKeyDown, onShowKeyUp }}
		>
			{children}
		</AdvancedContext.Provider>
	);
}
