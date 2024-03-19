import style from './style.module.scss';

type Props = {
	label: string;
	color?: 'gray' | 'red';
	marginTop: number;
	handleClick: () => void;
}

export default function ButtonComp(props: Props) {
	return (
		<input
			type="button"
			value={props.label}
			className={style.button}
			data-color={props.color}
			style={{marginTop: props.marginTop}}
			onClick={props.handleClick}
		/>
	);
}
