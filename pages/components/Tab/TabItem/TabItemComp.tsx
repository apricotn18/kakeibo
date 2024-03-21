import style from './style.module.scss';

type Props = {
	children: React.ReactNode;
	isCurrent: boolean;
}

export default function TabItemComp(props: Props) {
	return (
		<div className={props.isCurrent ? style.body : style.bodyHidden}>
			{props.children}
		</div>
	);
}
