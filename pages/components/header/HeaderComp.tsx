import Link from 'next/link';
import style from './style.module.scss';

export default function HeaderComp() {
	return (
		<header className={style.wrapper}>
			<Link href="/">わりかん</Link>
		</header>
	);
}
