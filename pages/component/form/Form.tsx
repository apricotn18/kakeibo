import React, { useState, useCallback } from 'react';
import { User, Price } from '../../assets/js/type';
import style from './form.module.scss';

type Props = {
	users: User[];
	handleSubmit: (data: Price) => void;
}

type Input = {
	name?: string;
	price?: number;
	subject?: string;
	allocation?: string[];
}

export default function Index(props: Props) {
	const users: User[] = props.users;
	const [targetUser, setTargetUser] = useState<User>(props.users[0]);
	const [input, setInput] = useState<Input>({});

	/** ユーザーを更新 */
	const handleChangeUser = (e: React.MouseEvent<HTMLLabelElement>) => {
		const selectedUser = e.currentTarget.dataset.user;
		if (selectedUser) {
			const userNum: number = Number.parseInt(selectedUser);
			const newUser = props.users[userNum];
			setTargetUser(newUser);
			setInput({
				...input,
				name: newUser.name,
			});
		}
	};

	/** 金額を更新 */
	const handleChangePrice = (e: React.MouseEvent<HTMLInputElement>) => {
		const newPrice = Number.parseInt(e.currentTarget.value);
		setInput({
			...input,
			price: newPrice,
		});
	};

	/** 件名を更新 */
	const handleChangeSubject = (e: React.MouseEvent<HTMLInputElement>) => {
		const newPrice = Number.parseInt(e.currentTarget.value);
		setInput({
			...input,
			price: newPrice,
		});
	};

	/** 立て替え対象を更新 */
	const handleChangeAllocation = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
	}, []);

	/** データ送信 */
	const handleSubmit = () => {
		props.handleSubmit(input);
	};

	return (
		<form className={style.form}>
			<div>
				<fieldset className={style.form_tabList}>
				{users.map((user, index) =>
					<div key={index} className={style.form_tabItem}>
						<input type="radio" id={'user'+index} value={user.name} name="name" className={style.form_radio} defaultChecked={index === 0} />
						<label htmlFor={'user'+index} data-user={index} className={style.form_tabBody} onClick={handleChangeUser}>{user.name}</label>
					</div>
				)}
				</fieldset>
			</div>
			<div className={style.formInput}>
				<p className={style.formInput_title}>{targetUser.name}が立て替え</p>
				<fieldset className={style.formInput_priceWrapper}>
					<label className={style.formInput_label}>金額</label>
					<input type="number" name="price" value={input.price} className={style.formInput_textInput} onChange={handleChangePrice} />
					<span className={style.formInput_yen}>円</span>
				</fieldset>
				<fieldset className={style.formInput_subjectWrapper}>
					<label className={style.formInput_label}>件名</label>
					<input type="text" name="subject" value={input.subject} className={style.formInput_textInput} onChange={handleChangeSubject} />
				</fieldset>
				<p className={style.formInput_subtitle}>立て替え対象</p>
				<fieldset className={style.formInput_allocationWrapper}>
					{users.map((user, index) =>
						<div key={index}>
							<input type="checkbox" id={'allocation'+index} value={user.name} name="allocation" className={style.formInput_checkbox} defaultChecked />
							<label htmlFor={'allocation'+index} className={style.formInput_allocationLabel}><span>{user.name}</span></label>
						</div>
					)}
				</fieldset>
				<fieldset>
					<input type="button" value="登録" className={style.formInput_submit} onClick={handleSubmit} />
				</fieldset>
			</div>
		</form>
	);
}
