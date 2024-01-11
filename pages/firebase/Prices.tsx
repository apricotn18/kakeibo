import { collection, query, getDocs, addDoc } from 'firebase/firestore';
import { db } from './base';
import { Price } from '../type/type';

const list: Price[] = [];
const docs = await getDocs(query(collection(db, 'prices')));

docs.forEach((doc) => {
	const data = doc.data();
	if (data) {
		list.push({
			name: data.name,
			price: data.price,
			subject: data.subject,
			allocation: data.allocation,
		});
	}
});

export const PRICES = list;

/** firebaseのコレクションにデータを追加 */
export const submitPrices = async (data: Price) => {
	await addDoc(collection(db, 'prices'), data);
}
