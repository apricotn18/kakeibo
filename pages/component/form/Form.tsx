import React, { useState } from 'react';
import { YUJI, KYOKO } from '../../assets/js/user'
import style from './form.module.scss';

const toggleUser = (user) => {
	if (user === YUJI) return KYOKO; 
	if (user === KYOKO) return YUJI; 
}

export default function Index() {
	const [user, setUser] = useState(YUJI);

	const handlerTabClick = () => {
		setUser(user => toggleUser(user));
	}

	return (
		<div className={style.form}>
			<h2 className={style.form_title}>
				<span>立て替え情報を入力する</span>
			</h2>
			<form>
				<div>
					<fieldset className={style.form_tabList}>
						<input type="radio" id="YUJI" value="YUJI" name="user" className={style.form_radio} defaultChecked />
						<label htmlFor="YUJI" className={style.form_tabItem} onClick={handlerTabClick}>{YUJI}</label>
						<input type="radio" id="KYOKO" value="KYOKO" name="user" className={style.form_radio} />
						<label htmlFor="KYOKO" className={style.form_tabItem} onClick={handlerTabClick}>{KYOKO}</label>
					</fieldset>
				</div>
				<div className={style.form_container}>
					<p>{user}が立て替え</p>
					<fieldset>
						<label>金額</label>
						<input type="number" name="price" />
					</fieldset>
					<fieldset>
						<label>件名</label>
						<input type="text" name="title" />
					</fieldset>
					<p>立て替え対象メンバー</p>
					<fieldset>
						<label className={style.form_label}><input type="checkbox" name="targetyuji" value="" className={style.form_checkbox} defaultChecked />{YUJI}</label>
						<label className={style.form_label}><input type="checkbox" name="targetkyoko" value="" className={style.form_checkbox} defaultChecked />{KYOKO}</label>
					</fieldset>
					<fieldset>
						<input type="submit" value="登録" />
					</fieldset>
				</div>
			</form>
		</div>
	);
}
