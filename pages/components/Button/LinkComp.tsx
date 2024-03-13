import Link from 'next/link';
import style from './style.module.scss';

type Props = {
	href: string;
	marginTop: number;
	children: React.ReactNode;
}

export default function ButtonLinkComp(props: Props) {
	return (
		<Link href={props.href} className={style.link} style={{marginTop: props.marginTop}}>
			{props.children}
		</Link>
	);
}
