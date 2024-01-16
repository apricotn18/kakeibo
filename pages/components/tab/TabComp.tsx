import React, { useState, useCallback } from 'react';
import style from './tab.module.scss';

export default function Tab() {

	/** タブclick */
	const handleChange = (e: React.MouseEvent<HTMLLabelElement>) => {
	};

	return (
		<div className={style.wrapper}>
			<div className={style.item}>
				<input type="radio" id="tabpay" name="tab" className={style.radio} defaultChecked />
				<label htmlFor="tabpay" className={style.body} onClick={handleChange}>支払い入力</label>
			</div>
			<div className={style.item}>
				<input type="radio" id="tablist" name="tab" className={style.radio} />
				<label htmlFor="tablist" className={style.body} onClick={handleChange}>買い物リスト入力</label>
			</div>
		</div>
	);
}
