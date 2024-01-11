import React, { useState, useEffect, useCallback } from 'react';
import { BUYLIST } from './firebase/buylist';
import Header from './components/Header/HeaderComp';

export default function Index() {
	const [buylist, setBuylist] = useState(BUYLIST);

	return (
		<>
			<Header />
			<BuylistComp list={BUYLIST} />
		</>
	);
}
