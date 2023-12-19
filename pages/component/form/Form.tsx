import React, { useState, useCallback } from 'react';
import { User, Price } from '../../assets/js/type';
import style from './form.module.scss';

type Props = {
	users: User[];
	price: Price[]|undefined;
}

export default function Index(props: Props) {
	const users: User[] = props.users;
	const [user, setUser] = useState<User>(props.users[0]);
	const [price, setPrice] = useState<number>();
	const [subject, setSubject] = useState<string>('');

	const handleClickTab = useCallback((e: React.MouseEvent<HTMLLabelElement>) => {
		const targetUser = e.currentTarget.dataset.user;
		if (targetUser) {
			const userNum: number = Number.parseInt(targetUser);
			setUser(props.users[userNum]);
		}
	}, []);

	const handleChangePrice = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
		setPrice(Number.parseInt(e.currentTarget.value));
	}, []);

	const handleChangesetSubject = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
		setSubject(e.currentTarget.value);
	}, []);

	return (
		<div className={style.form}>
			<h2 className={style.form_title}>
				<span>立て替え情報を入力する</span>
			</h2>
			<form>
				<div>
					<fieldset className={style.form_tabList}>
					{users.map((item, index) =>
						<div key={index} className={style.form_tabItem}>
							<input type="radio" id={'user'+index} value={item.name} name="name" className={style.form_radio} defaultChecked={index === 0} />
							<label htmlFor={'user'+index} data-user={index} className={style.form_tabBody} onClick={handleClickTab}>{item.name}</label>
						</div>
					)}
					</fieldset>
				</div>
				<div className={style.formInput}>
					<p className={style.formInput_title}>{user.name}が立て替え</p>
					<fieldset className={style.formInput_priceWrapper}>
						<label className={style.formInput_label}>金額</label>
						<input type="number" name="price" value={price} className={style.formInput_textInput} onChange={handleChangePrice} />
						<span className={style.formInput_yen}>円</span>
					</fieldset>
					<fieldset className={style.formInput_subjectWrapper}>
						<label className={style.formInput_label}>件名</label>
						<input type="text" name="subject" value={subject} className={style.formInput_textInput} onChange={handleChangesetSubject} />
					</fieldset>
					<p className={style.formInput_subtitle}>立て替え対象メンバー</p>
					<fieldset className={style.formInput_targetWrapper}>
						{users.map((item, index) =>
							<div key={index}>
								<input type="checkbox" id={'target'+index} value={item.name} name="target[]" className={style.formInput_checkbox} defaultChecked />
								<label htmlFor={'target'+index} className={style.formInput_targetLabel}>{item.name}</label>
							</div>
						)}
					</fieldset>
					<fieldset>
						<input type="submit" value="登録" className={style.formInput_submit} />
					</fieldset>
				</div>
			</form>
		</div>
	);
}
