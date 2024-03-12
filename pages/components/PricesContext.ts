import { createContext } from 'react';
import { collection, query, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../src/firebase/base';
import { Price } from '../../src/type/type';

const docs = await getDocs(query(collection(db, 'prices')));

export function getPrices () {
	const list: Price[] = [];
	docs.forEach((doc) => {
		const data = doc.data();
		if (data) {
			list.push({
				id: data.id,
				name: data.name,
				price: data.price,
				subject: data.subject,
				allocation: data.allocation,
				timestamp: data.timestamp,
			});
		}
	});
	return list;
};

export const PricesContext = createContext<Price[]>([]);

/** firebaseのコレクションにデータを追加 */
// export const submitPrices = async (data: Price) => {
// 	await addDoc(collection(db, 'prices'), data);
// }
