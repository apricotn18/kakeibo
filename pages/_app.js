import '../src/css/reset.scss';
import '../src/css/common.scss';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
