import { User, Price } from '../../../src/type/type';
import style from './style.module.scss';

type Props = {
	users: User[];
	handleSubmit: (data: Price) => void;
}


export default function Form(props: Props) {
	const users: User[] = props.users;

	/** 金額を更新 */
	const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newPrice = Number.parseInt(e.currentTarget.value);
		setInput({
			...input,
			price: newPrice,
		});
	};

	/** 件名を更新 */
	const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newPrice = Number.parseInt(e.currentTarget.value);
		setInput({
			...input,
			price: newPrice,
		});
	};

	/** データ送信 */
	const handleSubmit = () => {
		// props.handleSubmit(input);
	};

	return (
		<form className={style.wrapper}>
			{/* 立て替えた人 */}
			<p className={style.subtitle}>立て替えた人</p>
			<fieldset className={style.userWrapper}>
				{!users ? '' : users.map((user, index) =>
					<div key={index}>
						<input type="radio" id={'user'+index} value={user.name} name="user" className={style.userRadio} defaultChecked={index === 0} />
						<label htmlFor={'user'+index} className={style.userLabel}><span>{user.name}</span></label>
					</div>
				)}
			</fieldset>

			{/* 金額 */}
			<fieldset className={style.priceWrapper}>
				<label className={style.label}>金額</label>
				<input type="number" name="price" value={input.price} className={style.input} onChange={handleChangePrice} />
				<span className={style.yen}>円</span>
			</fieldset>

			{/* 件名 */}
			<fieldset className={style.subjectWrapper}>
				<label className={style.label}>件名</label>
				<input type="text" name="subject" value={input.subject} className={style.input} onChange={handleChangeSubject} />
			</fieldset>

			{/* 立て替え対象 */}
			<p className={style.subtitle}>立て替え対象</p>
			<fieldset className={style.allocationWrapper}>
				{!users ? '' : users.map((user, index) =>
					<div key={index}>
						<input type="checkbox" id={'allocation'+index} value={user.name} name="allocation" className={style.allocationCheckbox} defaultChecked />
						<label htmlFor={'allocation'+index} className={style.allocationLabel}><span>{user.name}</span></label>
					</div>
				)}
			</fieldset>

			{/* 送信ボタン */}
			<fieldset>
				<input type="button" value="登録" className={style.submit} onClick={handleSubmit} />
			</fieldset>
		</form>
	);
}
