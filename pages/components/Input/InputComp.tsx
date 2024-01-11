import React, { useState, useCallback } from 'react';
import TabComp from '../Tab/TabComp';
import FormComp from '../Form/FormComp';
import { USERS } from '../../firebase/users';
import { PRICES } from '../../firebase/prices';
import { Price } from '../../type/type';

export default function Index() {
	const [prices, setPrices] = useState(PRICES);

	/** データ登録 */
	const handleSubmit = useCallback((data: Price) => {
		const newPrices = [
			...prices,
			data,
		];
		console.log(data);
		setPrices(newPrices);
		// setTotal(calcTotal(newPrices));
		// submitPrices(data);
	}, [prices]);

	return (
		<>
			{USERS && USERS.length > 0
				? (
					<>
						<TabComp />
						<FormComp users={USERS} handleSubmit={handleSubmit} />
					</>
				)
				: <div>ユーザー登録をお願いします</div>
			}
		</>
	);
}
