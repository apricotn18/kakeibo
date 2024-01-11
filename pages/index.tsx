import React, { useState, useEffect, useCallback } from 'react';
import HeaderComp from './components/Header/HeaderComp';
import SummaryComp from './components/Summary/SummaryComp';
import InputComp from './components/Input/InputComp';
import { PRICES } from './firebase/prices';
import { Price } from './type/type';

/** 合計金額を算出 */
const calcTotal = (prices: Price[]): number => {
	return prices && prices.length > 0 ? prices.reduce((acc: number, item: Price) => {
		return acc + item.price;
	}, 0) : 0;
};

export default function Index() {
	const [total, setTotal] = useState(calcTotal(PRICES));

	return (
		<>
			<HeaderComp />
			<SummaryComp total={total} />
			<InputComp />
		</>
	);
}
