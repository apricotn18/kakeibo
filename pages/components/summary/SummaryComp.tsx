import React from 'react';
import style from './style.module.scss';

type Props = {
	total: number;
}

export default function Index(props: Props) {
	return (
		<div className={style.wrapper}>
			<div className={style.inner}>
				<div className={style.total}>
					合計<span className={style.totalNum}>{props.total.toLocaleString()}</span>円
				</div>
				<div className={style.label}>
					<a href="" className={style.labelLink}><span>立て替え履歴を見る</span></a>
				</div>
			</div>
		</div>
	);
}
