import React from 'react';
import Header from './components/Header/HeaderComp';
import BuyList from './components/Buylist/BuylistComp';
import InputComp from './components/Input/InputComp';
import { BUYLIST } from './components/BuylistContext';

export default function Index() {
	return (
		<>
			<Header />
			<BuyList list={BUYLIST} />
			<InputComp />
		</>
	);
}
