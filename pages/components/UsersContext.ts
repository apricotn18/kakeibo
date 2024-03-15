import { createContext } from 'react';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../src/firebase/base';
import { User } from '../../src/type/type';

const docs = await getDocs(collection(db, 'users'));

export function getUsers () {
	const list: User[] = [];
	docs.forEach((doc) => {
		const data = doc.data();
		if (data) {
			list.push({
				name: data.name,
			});
		}
	});
	return list;
}

export const UsersContext = createContext<User[]>([]);