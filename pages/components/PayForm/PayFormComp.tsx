import { useState, useContext } from 'react';
import { User } from '../../../src/type/type';
import { UsersContext } from '../UsersContext';
import style from './style.module.scss';

type Users = User & {
	checked: boolean;
}

export default function Form() {
	const initUsers = useContext(UsersContext);
	const users: Users[] = initUsers.map((user) => {
		return {
			...user,
			checked: true,
		}
	});

	const [selectedUserNum, setSelectedUserNum] = useState<number>(0);
	const [priceInput, setPriceInput] = useState<number>();
	const [subjectInput, setSubjectInput] = useState<string>();

	/** 立て替えた人を更新 */
	const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
		const targetId = e.currentTarget.id;
		const num = Number.parseInt(targetId.replace('user', ''));
		setSelectedUserNum(num);
	};

	/** 金額を更新 */
	const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newPrice = Number.parseInt(e.target.value);
		setPriceInput(newPrice);
	};

	/** 件名を更新 */
	const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSubjectInput(e.target.value);
	};

	/** 立て替え対象を更新 */
	const handleChangeAllocation = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newUsers = users;
		const targetId = e.currentTarget.id;
		const num = Number.parseInt(targetId.replace('allocation', ''));
		newUsers[num].checked = !!newUsers[num].checked;
		setUser(newUsers);
	};

	/** データ送信 */
	const handleSubmit = () => {
		if (priceInput && subjectInput) {
			const checkedUsers = users.filter(user => user.checked);
			handleSubmit();
		}
	};

	return (
		<form className={style.wrapper}>
			{/* 立て替えた人 */}
			<p className={style.subtitle}>立て替えた人</p>
			<fieldset className={style.userWrapper}>
				{!users ? '' : users.map((user, index) =>
					<div key={index}>
						<input type="radio" id={'user'+index} value={user.name} name="name" className={style.userRadio} defaultChecked={index === selectedUserNum} onChange={handleChangeUser} />
						<label htmlFor={'user'+index} className={style.userLabel}><span>{user.name}</span></label>
					</div>
				)}
			</fieldset>

			{/* 金額 */}
			<fieldset className={style.priceWrapper}>
				<label className={style.label}>金額</label>
				<input type="number" name="price" value={priceInput} className={style.input} onChange={handleChangePrice} />
				<span className={style.yen}>円</span>
			</fieldset>

			{/* 件名 */}
			<fieldset className={style.subjectWrapper}>
				<label className={style.label}>件名</label>
				<input type="text" name="subject" value={subjectInput} className={style.input} onChange={handleChangeSubject} />
			</fieldset>

			{/* 立て替え対象 */}
			<p className={style.subtitle}>立て替え対象</p>
			<fieldset className={style.allocationWrapper}>
				{!users ? '' : users.map((user, index) =>
					<div key={index}>
						<input type="checkbox" id={'allocation'+index} value={user.name} name="allocation" className={style.allocationCheckbox} defaultChecked={user.checked} onChange={handleChangeAllocation} />
						<label htmlFor={'allocation'+index} className={style.allocationLabel}><span>{user.name}</span></label>
					</div>
				)}
			</fieldset>

			{/* 送信ボタン */}
			<fieldset>
				<input type="button" value="登録する" className={style.submit} onClick={handleSubmit} />
			</fieldset>
		</form>
	);
}
