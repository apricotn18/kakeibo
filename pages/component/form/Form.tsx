import React, { useState, useCallback } from 'react';
import { YUJI, KYOKO } from '../../assets/js/user'
import style from './form.module.scss';

export default function Index() {
	const [user, setUser] = useState<string|undefined>(YUJI);
	const [price, setPrice] = useState<number>();
	const [subject, setSubject] = useState<string>('');

	const handleClickTab = useCallback((e: React.MouseEvent<HTMLLabelElement>) => {
		const targetUser = e.currentTarget.dataset.user;
		if (targetUser) {
			setUser(targetUser);
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
						<input type="radio" id={YUJI} value={YUJI} name="user" className={style.form_radio} defaultChecked />
						<label htmlFor={YUJI} className={style.form_tabItem} data-user={YUJI} onClick={handleClickTab}>{YUJI}</label>
						<input type="radio" id={KYOKO} value={KYOKO} name="user" className={style.form_radio} />
						<label htmlFor={KYOKO} className={style.form_tabItem} data-user={KYOKO} onClick={handleClickTab}>{KYOKO}</label>
					</fieldset>
				</div>
				<div className={style.formInput}>
					<p className={style.formInput_title}>{user}が立て替え</p>
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
					<fieldset className={style.formInput_memberWrapper}>
						<input type="checkbox" id={'target' + YUJI} value="" name={'target' + YUJI} className={style.formInput_checkbox} defaultChecked />
						<label htmlFor={'target' + YUJI} className={style.formInput_memberLabel}>{YUJI}</label>
						<input type="checkbox" id={'target' + KYOKO} value="" name={'target' + KYOKO} className={style.formInput_checkbox} defaultChecked />
						<label htmlFor={'target' + KYOKO} className={style.formInput_memberLabel}>{KYOKO}</label>
					</fieldset>
					<fieldset>
						<input type="submit" value="登録" className={style.formInput_submit} />
					</fieldset>
				</div>
			</form>
		</div>
	);
}
