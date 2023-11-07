import React from 'react';
import style from './summary.module.scss';

export default function Index() {
	return (
		<div className={style.summary}>
			合計：10000円<br />
			<span>きょうこ</span>から〇〇へ<span>〇〇円</span>払う
		</div>
	);
}
