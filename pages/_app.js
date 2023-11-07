import '../assets/css/reset.scss';
import '../assets/css/common.scss';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
