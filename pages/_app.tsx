import 'normalize.css/normalize.css';
import { AdvancedContextProvider } from '~context/AdvancedContext';
import '~styles/fonts.css';
import '~styles/globals.css';

export default function Application({ Component, pageProps }) {
	return (
		<AdvancedContextProvider>
			<Component {...pageProps} />
		</AdvancedContextProvider>
	);
}
