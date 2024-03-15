import LinkButton from '../Button/ButtonLinkComp';
import { usePrices } from '../PricesContext/PricesContext';
import { Price } from '../../../src/type/type';
import style from './style.module.scss';

/** 合計金額を算出 */
function calcTotal (prices: Price[]|null): number {
	return prices && prices.length > 0 ? prices.reduce((acc, item) => {
		return acc + Number(item.price);
	}, 0) : 0;
};

/** 価格表示に変更 */
function toPrice (price: number): string {
	return String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

export default function SummaryComp() {
	const prices = usePrices();
	const total = calcTotal(prices);

	return (
		<div className={style.wrapper}>
			<div className={style.inner}>
				<div className={style.total}>
					合計<span className={style.totalNum}>{toPrice(total)}</span>円
				</div>
				{/* <div className={style.text}>
					<span>ユーザー1</span>から<span>ユーザー2</span>へ<span>0000円</span>支払い
				</div> */}
				<div className={style.label}>
					<LinkButton href="/history">立て替え履歴を見る</LinkButton>
				</div>
			</div>
		</div>
	);
}
