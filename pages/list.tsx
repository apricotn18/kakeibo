import React from 'react';
import Header from './components/Header/HeaderComp';
import BuyList from './components/Buylist/BuylistComp';
import InputComp from './components/Input/InputComp';
import { BUYLIST } from '../src/firebase/buylist';

export default function Index() {
	return (
		<>
			<Header />
			<BuyList list={BUYLIST} />
			<InputComp />
		</>
	);
}
