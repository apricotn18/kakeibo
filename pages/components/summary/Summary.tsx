import React from 'react';
import style from './summary.module.scss';

type Props = {
	total: number;
}

export default function Index(props: Props) {
	return (
		<div className={style.summary}>
			<div className={style.summary_inner}>
				<div className={style.summary_total}>
					合計<span className={style.summary_totalNum}>{props.total.toLocaleString()}</span>円
				</div>
				<div className={style.summary_label}>
					<a href="" className={style.summary_labelLink}><span>立て替え履歴を見る</span></a>
				</div>
			</div>
		</div>
	);
}
