import Link from 'next/link';
import { Price } from '../../../../src/type/type';
import style from './style.module.scss';

type Props = {
	item: Price;
}

function toDate (nanoseconds: number): string {
	const d = new Date(nanoseconds * 1000);
	const minutes = ('00' + d.getMinutes()).slice(-2);
	const date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + minutes;
	return date;
}

/** 価格表示に変更 */
function toPrice (price: number): string {
	return String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

export default function HistoryCassetteComp(props: Props) {
	const item = props.item;

	return (
		<Link href={'/item?id='+item.id}>
			<span className={style.info}>
				<span>{item.subject}</span>
				<span className={style.price}>{toPrice(Number(item.price))}円</span>
			</span>
			<span className={style.date}>登録日：{toDate(item.timestamp.seconds)}&nbsp;&nbsp;&nbsp;立て替え対象：{item.allocation.length}人</span>
		</Link>
	);
}
