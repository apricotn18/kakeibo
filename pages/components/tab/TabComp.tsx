import style from './tab.module.scss';

export default function Tab() {
	/** タブclick */
	// const handleChange = (e: React.MouseEvent<HTMLLabelElement>) => {
	// };

	return (
		<div className={style.wrapper}>
			<div className={style.item}>
				<button type="button" className={style.bodyActive}>支払い入力</button>
			</div>
			<div className={style.item}>
				<button type="button" className={style.body}>買い物リスト入力</button>
			</div>
		</div>
	);
}
