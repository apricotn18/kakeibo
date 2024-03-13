import style from './style.module.scss';

type Props = {
	label: string;
	isDisable: boolean;
	handleClick: () => void;
}

export default function ButtonComp(props: Props) {
	return (
		<input
			type="button"
			value={props.label}
			className={props.isDisable ? style.button : style.buttonDisabled}
			onClick={props.handleClick}
		/>
	);
}
