import style from './style.module.scss';

type Props = {
	label: string;
	disabled: boolean;
	color?: 'red'; 
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
			disabled={props.disabled}
			style={{marginTop: props.marginTop}}
			onClick={props.handleClick}
		/>
	);
}
