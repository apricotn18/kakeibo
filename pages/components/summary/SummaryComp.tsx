import { useContext } from 'react';
import { Price } from '../../../src/type/type';
import { PricesContext } from '../PricesContext';
import style from './style.module.scss';

export default function SummaryComp() {
	const prices = useContext(PricesContext);
	const total = calcTotal(prices);

	return (
		<div className={style.wrapper}>
			<div className={style.inner}>
				<div className={style.total}>
					合計<span className={style.totalNum}>{toPrice(total)}</span>円
				</div>
				<div className={style.label}>
					<a href="" className={style.labelLink}><span>立て替え履歴を見る</span></a>
				</div>
			</div>
		</div>
	);
}

/** 合計金額を算出 */
function calcTotal (prices: Price[]): number {
	return prices && prices.length > 0 ? prices.reduce((acc: number, item: Price) => {
		return acc + item.price;
	}, 0) : 0;
};

/** 価格表示に変更 */
function toPrice (price: number): string {
	return String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}
