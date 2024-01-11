import React, { useState, useEffect, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, addDoc } from 'firebase/firestore';
import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import Form from './components/form/Form';
import { User, Price } from './type/type';

// firebase ↓
const firebaseConfig = {
	apiKey: 'AIzaSyArlq6WbXEPcDINt-SWqf4wRjGc-TM85Js',
	authDomain: 'kakeibo-fb1ed.firebaseapp.com',
	projectId: 'kakeibo-fb1ed',
	storageBucket: 'kakeibo-fb1ed.appspot.com',
	messagingSenderId: '798220104610',
	appId: '1:798220104610:web:f1211f4d46d05fedef78fb'
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersQueries = await getDocs(query(collection(db, 'users')));
const pricesQueries = await getDocs(query(collection(db, 'prices')));

/** firebaseのコレクションにデータを追加 */
const submitPrices = async (data: Price) => {
	await addDoc(collection(db, 'prices'), data);
}

/** 合計金額を算出 */
const calcTotal = (prices: Price[]): number => {
	return prices && prices.length > 0 ? prices.reduce((acc: number, item: Price) => {
		return acc + item.price;
	}, 0) : 0;
};

export default function Index() {
	const [users, setUsers] = useState<User[]>([]);
	const [prices, setPrices] = useState<Price[]>([]);
	const [total, setTotal] = useState<number>(0);

	useEffect(() => {
		const initUsers: User[] = [];
		const initPrices: Price[] = [];

		usersQueries.forEach((doc) => {
			const data = doc.data();
			if (data) {
				initUsers.push({
					name: data.name,
				});
			}
		});
		pricesQueries.forEach((doc) => {
			const data = doc.data();
			if (data) {
				initPrices.push({
					name: data.name,
					price: data.price,
					subject: data.subject,
					allocation: data.allocation,
				});
			}
		});
		setUsers(initUsers);
		setPrices(initPrices);
		setTotal(calcTotal(initPrices));
	}, []);

	/** データ登録 */
	const handleSubmit = useCallback((data: Price) => {
		const newPrices = [
			...prices,
			data,
		];
		console.log(data);
		setPrices(newPrices);
		setTotal(calcTotal(newPrices));
		// submitPrices(data);
	}, [prices]);

	return (
		<>
			<Header />
			{users && users.length > 0
				? (
					<>
						<Summary total={total} />
						<Form users={users} handleSubmit={handleSubmit} />
					</>
				)
				: <div>ユーザー登録をお願いします</div>
			}
		</>
	);
}
