import style from './style.module.scss';

type Props = {
	children: React.ReactNode;
}

export default function ButtonComp(props: Props) {
	return (
		<div className={style.body}>
			{props.children}
		</div>
	);
}
