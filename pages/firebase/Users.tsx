import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './base';
import { User } from '../type/type';

const list: User[] = [];
const docs = await getDocs(query(collection(db, 'users')));

docs.forEach((doc) => {
	const data = doc.data();
	if (data) {
		list.push({
			name: data.name,
		});
	}
});

export const USERS = list;