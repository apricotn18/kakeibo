import React from 'react';
import style from './tab.module.scss';

export default function Index() {
	return (
		<div className={style.tab}>
			<h2 className={style.tab_title}>
				<span>立て替え情報を入力する</span>
			</h2>
			<form>
				<div className={style.tab_list}>
					<input type="radio" id="yuji" value="yuji" name="input" className={style.tab_checkbox} checked />
					<label for="yuji" className={style.tab_item}>ゆうじ</label>
					<input type="radio" id="kyoko" value="kyoko" name="input" className={style.tab_checkbox} />
					<label for="kyoko" className={style.tab_item}>きょうこ</label>
				</div>
				<div className={style.tab_input}>
					ああああああ
				</div>
			</form>
		</div>
	);
}
