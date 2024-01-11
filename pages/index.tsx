import React, { useState, useEffect, useCallback } from 'react';
import { USERS } from './firebase/users';
import { PRICES } from './firebase/prices';
import HeaderComp from './components/Header/HeaderComp';
import SummaryComp from './components/Summary/SummaryComp';
import TabComp from './components/Tab/TabComp';
import FormComp from './components/Form/FormComp';
import { Price } from './type/type';

/** 合計金額を算出 */
const calcTotal = (prices: Price[]): number => {
	return prices && prices.length > 0 ? prices.reduce((acc: number, item: Price) => {
		return acc + item.price;
	}, 0) : 0;
};

export default function Index() {
	const [prices, setPrices] = useState(PRICES);
	const [total, setTotal] = useState(calcTotal(PRICES));

	/** データ登録 */
	const handleSubmit = useCallback((data: Price) => {
		const newPrices = [
			...prices,
			data,
		];
		console.log(data);
		setPrices(newPrices);
		setTotal(calcTotal(newPrices));
		// submitPrices(data);
	}, [prices]);

	return (
		<>
			<HeaderComp />
			{USERS && USERS.length > 0
				? (
					<>
						<SummaryComp total={total} />
						<TabComp />
						<FormComp users={USERS} handleSubmit={handleSubmit} />
					</>
				)
				: <div>ユーザー登録をお願いします</div>
			}
		</>
	);
}
