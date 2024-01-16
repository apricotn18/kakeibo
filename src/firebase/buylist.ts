import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './base';
import { Buylist } from '../type/type';

const list: Buylist[] = [];
const docs = await getDocs(query(collection(db, 'buylist')));

docs.forEach((doc) => {
	const data = doc.data();
	if (data) {
		list.push({
			name: data.name,
			date: data.date,
		});
	}
});

export const BUYLIST = list;