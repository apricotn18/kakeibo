import './css/reset.scss';
import './css/common.scss';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
