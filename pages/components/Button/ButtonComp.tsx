import style from './style.module.scss';

type Props = {
	label: string;
	handleClick: () => void;
}

export default function ButtonComp(props: Props) {
	return (
		<input type="button" value={props.label} className={style.button} onClick={props.handleClick} />
	);
}
