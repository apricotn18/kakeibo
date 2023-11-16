import React from 'react';
import style from './summary.module.scss';

export default function Index() {
	return (
		<div className={style.summary}>
			<div className={style.summary_inner}>
				<p className={style.summary_total}>
					合計<span className={style.summary_totalNum}>10,000円</span>
				</p>
				<p className={style.summary_label}>
					<span>きょうこ</span>が<span>ゆうじ</span>へ<span>2,000円払う</span>
				</p>
			</div>
		</div>
	);
}
