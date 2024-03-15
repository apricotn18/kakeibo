import { useContext } from 'react';
import HistoryCassetteComp from './HistoryCassette/HistoryCassetteComp';
import { UsersContext } from '../UsersContext';
import { usePrices } from '../PricesContext/PricesContext';
import { User, Price } from '../../../src/type/type';
import style from './style.module.scss';

type PriceItem = {
	name: User['name'],
	items: Price[],
}

export default function HistoryComp() {
	const users = useContext(UsersContext);
	const prices = usePrices();

	let priceList: PriceItem[] = [];
	users.forEach((user: User) => {
		const item = prices.filter((item: Price) => {
			return item.name === user.name;
		});
		priceList.push({
			name: user.name,
			items: item,
		});
	});

	return (
		<div className={style.wrapper}>
			{priceList.length > 0 && priceList.map((user, i) =>
				<div key={'list'+i}>
					<div className={style.title}>{user.name}</div>
					<ul className={style.list}>
						{user.items.map((item, index) =>
							<li key={'item'+index} className={style.item}>
								<HistoryCassetteComp item={item} />
							</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
}
