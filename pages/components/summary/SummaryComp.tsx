import React from 'react';
import style from './style.module.scss';

type Props = {
	total: number;
}

/** 価格表示に変更 */
const toPrice = (price: number): string => {
	return String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

export default function Summary(props: Props) {
	return (
		<div className={style.wrapper}>
			<div className={style.inner}>
				<div className={style.total}>
					合計<span className={style.totalNum}>{toPrice(props.total)}</span>円
				</div>
				<div className={style.label}>
					<a href="" className={style.labelLink}><span>立て替え履歴を見る</span></a>
				</div>
			</div>
		</div>
	);
}
