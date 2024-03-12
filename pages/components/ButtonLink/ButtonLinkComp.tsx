import Link from 'next/link';
import style from './style.module.scss';

type Props = {
	href: string;
	children: React.ReactNode;
}

export default function ButtonLinkComp(props: Props) {
	return (
		<Link href={props.href} className={style.body}>
			<span>{props.children}</span>
		</Link>
	);
}
