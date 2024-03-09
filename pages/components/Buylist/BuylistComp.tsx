import { useState } from 'react';
import { Buylist } from '../../../src/type/type';
import style from './style.module.scss';

type Props = {
	list: Buylist[];
}

export default function BuylistComp(props: Props) {
	const [list, setList] = useState(props.list);

	return (
		<div className={style.wrapper}>
			<h1>買い物リスト</h1>
			<ul className={style.list}>
				{!list ? '' : list.map((item, index) =>
					<li key={index} className={style.item}>
						<div className={style.date}>{new Date(item.date).toLocaleDateString()}</div>
						<div className={style.name}>{item.name}</div>
					</li>
				)}
			</ul>
		</div>
	);
}
